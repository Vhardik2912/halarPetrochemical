"use client"

import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from "react"
import * as d3 from "d3"

interface Connection {
    start: { lat: number; lng: number; label: string };
    end: { lat: number; lng: number; label: string };
}

interface WorldMapProps {
    connections?: Connection[];
    lineColor?: string;
}

const defaultConnections: Connection[] = [
    {
        start: { lat: 40, lng: -100, label: 'USA' },
        end: { lat: 52, lng: 0, label: 'UK' }
    },
    {
        start: { lat: 52, lng: 0, label: 'UK' },
        end: { lat: 35, lng: 51, label: 'UAE' }
    },
    {
        start: { lat: 35, lng: 51, label: 'UAE' },
        end: { lat: 35, lng: 104, label: 'China' }
    },
    {
        start: { lat: -25, lng: 133, label: 'Australia' },
        end: { lat: 35, lng: 104, label: 'China' }
    },
    {
        start: { lat: -15, lng: -55, label: 'Brazil' },
        end: { lat: 10, lng: -10, label: 'Nigeria' }
    },
    {
        start: { lat: 10, lng: -10, label: 'Nigeria' },
        end: { lat: 35, lng: 51, label: 'UAE' }
    },
    {
        start: { lat: 40, lng: -3, label: 'Spain' },
        end: { lat: -34, lng: -58, label: 'Argentina' }
    },
    {
        start: { lat: 20, lng: 78, label: 'India' },
        end: { lat: -1, lng: 37, label: 'Kenya' }
    }
];

interface ConnectionPoint {
    x: number;
    y: number;
    label: string;
    connections: number;
}

export default function WorldMap({
    connections = defaultConnections,
    lineColor = '#D55534'
}: WorldMapProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>(0);
    const [landData, setLandData] = useState<any>(null);
    const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
    });

    // Responsive dimensions
    const getDimensions = () => {
        const { width } = windowSize;

        if (width < 640) { // Mobile
            return {
                canvasHeight: 320,
                fontSize: {
                    countryLabel: 8,
                    connectionCount: 6,
                    hoverTitle: 14,
                    hoverText: 12
                },
                pointRadius: 3,
                lineWidth: 1.5
            };
        } else if (width < 768) { // Small tablet
            return {
                canvasHeight: 380,
                fontSize: {
                    countryLabel: 9,
                    connectionCount: 7,
                    hoverTitle: 15,
                    hoverText: 13
                },
                pointRadius: 4,
                lineWidth: 1.8
            };
        } else if (width < 1024) { // Tablet
            return {
                canvasHeight: 420,
                fontSize: {
                    countryLabel: 10,
                    connectionCount: 8,
                    hoverTitle: 16,
                    hoverText: 14
                },
                pointRadius: 4.5,
                lineWidth: 2
            };
        } else { // Desktop
            return {
                canvasHeight: 500,
                fontSize: {
                    countryLabel: 11,
                    connectionCount: 8,
                    hoverTitle: 18,
                    hoverText: 14
                },
                pointRadius: 5,
                lineWidth: 2.5
            };
        }
    };

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Load land data once
    useEffect(() => {
        const controller = new AbortController();
        fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/physical/ne_110m_land.json", { signal: controller.signal })
            .then(res => res.json())
            .then(data => setLandData(data))
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    console.log('Using fallback map data');
                    setLandData({ features: [] });
                }
            });
        return () => controller.abort();
    }, []);

    // Pre-calculate unique points and their connection counts
    const pointDataList = useMemo(() => {
        const pointMap = new Map<string, { lat: number, lng: number, label: string, connections: number }>();
        connections.forEach(conn => {
            [conn.start, conn.end].forEach(p => {
                const key = `${p.lat},${p.lng}`;
                const existing = pointMap.get(key) || { ...p, connections: 0 };
                existing.connections++;
                pointMap.set(key, existing);
            });
        });
        return Array.from(pointMap.values());
    }, [connections]);

    // Pre-calculate arc paths (longitude/latitude steps)
    const arcPaths = useMemo(() => {
        return connections.map(conn => {
            const interpolate = d3.geoInterpolate(
                [conn.start.lng, conn.start.lat],
                [conn.end.lng, conn.end.lat]
            );
            const steps = 50;
            const points = [];
            for (let i = 0; i <= steps; i++) {
                points.push(interpolate(i / steps));
            }
            return points;
        });
    }, [connections]);

    // Helper function to convert lat/lng to screen coordinates
    const latLngToCoords = (lat: number, lng: number, projection: d3.GeoProjection) => {
        const coords = projection([lng, lat]);
        return coords ? { x: coords[0], y: coords[1] } : null;
    };

    // Draw an arc between two points with animation
    const drawArc = (
        ctx: CanvasRenderingContext2D,
        pathPoints: [number, number][],
        projection: d3.GeoProjection,
        lineColor: string,
        animationProgress: number
    ) => {
        const { lineWidth } = getDimensions();
        const animOffset = (animationProgress * 2) % 1.2; // Slightly longer cycle for smoothness

        // Draw the base arc
        ctx.beginPath();
        let firstPoint = true;
        pathPoints.forEach(([lng, lat]) => {
            const point = projection([lng, lat]);
            if (point) {
                if (firstPoint) {
                    ctx.moveTo(point[0], point[1]);
                    firstPoint = false;
                } else {
                    ctx.lineTo(point[0], point[1]);
                }
            }
        });

        // Draw base line
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctx.globalAlpha = 0.3; // More subtle
        ctx.stroke();

        // Draw animated pulse segment
        const segmentLength = 0.15;
        const animStart = Math.max(0, animOffset - segmentLength);
        const animEnd = Math.min(1, animOffset);

        if (animEnd > animStart) {
            ctx.beginPath();
            const startIndex = Math.floor(animStart * (pathPoints.length - 1));
            const endIndex = Math.ceil(animEnd * (pathPoints.length - 1));
            
            let pulseFirstPoint = true;
            for (let i = startIndex; i <= endIndex; i++) {
                const [lng, lat] = pathPoints[i];
                const point = projection([lng, lat]);
                if (point) {
                    if (pulseFirstPoint) {
                        ctx.moveTo(point[0], point[1]);
                        pulseFirstPoint = false;
                    } else {
                        ctx.lineTo(point[0], point[1]);
                    }
                }
            }

            // Animated segment glow
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = lineWidth + 1;
            ctx.globalAlpha = 0.8;
            ctx.stroke();

            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth + 3;
            ctx.globalAlpha = 0.4;
            ctx.stroke();
        }

        ctx.globalAlpha = 1;
    };

    // Draw connection points with labels
    const drawConnectionPoints = (
        ctx: CanvasRenderingContext2D,
        projection: d3.GeoProjection,
        pointsData: any[]
    ) => {
        const { fontSize, pointRadius } = getDimensions();
        const screenPoints: ConnectionPoint[] = [];

        pointsData.forEach((point) => {
            const coords = projection([point.lng, point.lat]);
            if (!coords) return;

            const x = coords[0];
            const y = coords[1];

            // Check if point is on the visible side of the globe
            const distance = d3.geoDistance([point.lng, point.lat], projection.invert!([windowSize.width / 2, getDimensions().canvasHeight / 2]) as [number, number]);
            if (distance > Math.PI / 2) return;

            const isHovered = hoveredPoint === point.label;
            const pulse = Math.sin(Date.now() * 0.005) * 0.5 + 0.5;
            const scaleFactor = windowSize.width < 768 ? 0.8 : 1;

            // Draw connection halo
            ctx.beginPath();
            ctx.arc(x, y, (10 + point.connections * 2) * scaleFactor, 0, Math.PI * 2);
            ctx.fillStyle = isHovered ? `rgba(59, 130, 246, ${0.2 + pulse * 0.2})` : `rgba(59, 130, 246, ${0.05 + pulse * 0.05})`;
            ctx.fill();

            // Outer ring
            ctx.beginPath();
            ctx.arc(x, y, (6 + point.connections) * scaleFactor, 0, Math.PI * 2);
            ctx.fillStyle = isHovered ? '#1e40af' : lineColor;
            ctx.fill();

            // Inner dot
            ctx.beginPath();
            ctx.arc(x, y, pointRadius * scaleFactor, 0, Math.PI * 2);
            ctx.fillStyle = isHovered ? '#ffffff' : '#f8fafc';
            ctx.fill();

            // Connection count badge
            if (point.connections > 1) {
                const badgeSize = 6 * scaleFactor;
                ctx.beginPath();
                ctx.arc(x + badgeSize, y - badgeSize, badgeSize, 0, Math.PI * 2);
                ctx.fillStyle = '#ef4444';
                ctx.fill();

                ctx.fillStyle = '#ffffff';
                ctx.font = `bold ${fontSize.connectionCount}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(point.connections.toString(), x + badgeSize, y - badgeSize);
            }

            // Country label
            const shouldShowLabel = windowSize.width >= 768 || isHovered;
            if (shouldShowLabel) {
                ctx.fillStyle = isHovered ? '#ffffff' : '#d1d5db';
                ctx.font = isHovered ? `bold ${fontSize.countryLabel + 1}px Arial` : `${fontSize.countryLabel}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(point.label, x, y + 15 * scaleFactor);
            }

            screenPoints.push({
                x,
                y,
                label: point.label,
                connections: point.connections
            });
        });

        return screenPoints;
    };

    // Check if point is hovered
    const checkHover = (mouseX: number, mouseY: number, points: ConnectionPoint[]) => {
        const tolerance = windowSize.width < 768 ? 20 : 15; // Larger touch target on mobile
        for (const point of points) {
            const distance = Math.sqrt(
                Math.pow(mouseX - point.x, 2) + Math.pow(mouseY - point.y, 2)
            );
            if (distance < tolerance) {
                return point.label;
            }
        }
        return null;
    };

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas || !landData) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const width = canvas.offsetWidth
        const { canvasHeight } = getDimensions()
        const height = canvasHeight
        const radius = Math.min(width, height) / (windowSize.width < 768 ? 2 : 2.3)

        const dpr = window.devicePixelRatio || 1
        canvas.width = width * dpr
        canvas.height = height * dpr
        canvas.style.height = `${height}px`
        ctx.scale(dpr, dpr)

        const projection = d3
            .geoOrthographic()
            .scale(radius)
            .translate([width / 2, height / 2])
            .clipAngle(90)

        const path = d3.geoPath(projection).context(ctx)

        let rotation: [number, number, number] = [0, -15, 0]
        let isAutoRotating = true
        let rotationTimeout: any = null;
        const rotationSpeed = windowSize.width < 768 ? 0.04 : 0.08
        let animationProgress = 0
        let currentConnectionPoints: ConnectionPoint[] = [];

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height)

            // Ocean
            const gradient = ctx.createRadialGradient(
                width / 2, height / 2, radius * 0.3,
                width / 2, height / 2, radius
            );
            gradient.addColorStop(0, '#0f172a');
            gradient.addColorStop(1, '#020617');

            ctx.beginPath();
            ctx.arc(width / 2, height / 2, projection.scale(), 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Border
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, projection.scale(), 0, Math.PI * 2);
            ctx.strokeStyle = '#1e40af';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Grid
            if (windowSize.width >= 768) {
                ctx.globalAlpha = 0.1;
                ctx.beginPath();
                path(d3.geoGraticule10());
                ctx.strokeStyle = '#60a5fa';
                ctx.lineWidth = 0.5;
                ctx.stroke();
                ctx.globalAlpha = 1;
            }

            // Land
            ctx.beginPath();
            landData.features.forEach((f: any) => path(f));
            const landGradient = ctx.createLinearGradient(0, 0, width, height);
            landGradient.addColorStop(0, '#1e293b');
            landGradient.addColorStop(1, '#334155');
            ctx.fillStyle = landGradient;
            ctx.fill();
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = windowSize.width < 768 ? 0.5 : 0.8;
            ctx.stroke();

            // Connection lines
            arcPaths.forEach(pathPoints => {
                drawArc(ctx, pathPoints as [number, number][], projection, lineColor, animationProgress);
            });

            // Points
            currentConnectionPoints = drawConnectionPoints(ctx, projection, pointDataList);
            
            animationProgress += 0.005;
            if (animationProgress > 1) animationProgress = 0;
        }

        // Mouse handlers outside of continuous draw loop if possible, but we need currentConnectionPoints
        const handleInteraction = (x: number, y: number) => {
            const hovered = checkHover(x, y, currentConnectionPoints);
            setHoveredPoint(prev => {
                if (prev !== hovered) return hovered;
                return prev;
            });
        };

        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            handleInteraction(e.clientX - rect.left, e.clientY - rect.top);
        };

        canvas.onmouseleave = () => {
            setHoveredPoint(null);
        };

        canvas.ontouchstart = (e) => {
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            handleInteraction(touch.clientX - rect.left, touch.clientY - rect.top);
        };

        const animate = () => {
            if (isAutoRotating) {
                rotation[0] += rotationSpeed;
                projection.rotate(rotation);
            }
            draw();
            animationRef.current = requestAnimationFrame(animate);
        }

        animate();

        // Interaction
        const drag = d3.drag<HTMLCanvasElement, unknown>()
            .on("start", (event) => {
                isAutoRotating = false;
                if (rotationTimeout) clearTimeout(rotationTimeout);
                canvas.style.cursor = 'grabbing';
            })
            .on("drag", (event) => {
                const sensitivity = windowSize.width < 768 ? 0.4 : 0.3;
                rotation[0] += event.dx * sensitivity;
                rotation[1] -= event.dy * sensitivity;
                rotation[1] = Math.max(-90, Math.min(90, rotation[1]));
                projection.rotate(rotation);
            })
            .on("end", () => {
                canvas.style.cursor = 'grab';
                rotationTimeout = setTimeout(() => {
                    isAutoRotating = true;
                }, 3000);
            });

        d3.select(canvas).call(drag);

        // Mouse wheel for zoom
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.95 : 1.05;
            const minScale = windowSize.width < 768 ? radius * 0.7 : radius * 0.5;
            const maxScale = windowSize.width < 768 ? radius * 1.5 : radius * 3;
            projection.scale(Math.max(minScale, Math.min(maxScale, projection.scale() * delta)));
        };

        canvas.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            cancelAnimationFrame(animationRef.current);
            if (rotationTimeout) clearTimeout(rotationTimeout);
            canvas.removeEventListener('wheel', handleWheel);
        }
    }, [landData, connections, lineColor, windowSize, pointDataList])

    // Get unique countries from connections
    const getAllCountries = () => {
        const countries = new Set<string>();
        connections.forEach(conn => {
            countries.add(conn.start.label);
            countries.add(conn.end.label);
        });
        return Array.from(countries);
    };

    const countries = getAllCountries();
    const { fontSize } = getDimensions();

    return (
        <section className="py-8 md:py-12 lg:py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-accent font-bold mb-4"
                    >
                        <div className="w-8 h-[1px] bg-accent/30" />
                        <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase">Global Network Map</span>
                        <div className="w-8 h-[1px] bg-accent/30" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight"
                    >
                        Worldwide <span className="text-accent">Connections</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-foreground/70 text-sm md:text-lg max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        Interactive visualization of our global supply chain network connecting
                        major markets and distribution hubs worldwide.
                    </motion.p>
                </div>

                {/* Map Area - Clean, No Container Borders */}
                <div className="relative mb-16">
                    <div className="relative z-0">
                        <canvas
                            ref={canvasRef}
                            className="w-full cursor-grab active:cursor-grabbing touch-none"
                            style={{ minHeight: getDimensions().canvasHeight }}
                        />
                    </div>

                    {/* Hover Info Panel - Glassmorphism but White Based */}
                    {hoveredPoint && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`absolute ${windowSize.width < 768
                                ? 'inset-x-4 top-0 mx-auto'
                                : 'top-10 right-10'
                                } bg-background border border-secondary/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-5 max-w-xs z-10`}
                        >
                            <div className="flex items-center gap-3 mb-4 border-b border-secondary/10 pb-3">
                                <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                                <h3 className="text-foreground font-black text-sm uppercase tracking-wider">
                                    {hoveredPoint}
                                </h3>
                            </div>
                            <div className="space-y-3 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                                {connections
                                    .filter(conn => conn.start.label === hoveredPoint || conn.end.label === hoveredPoint)
                                    .map((conn, idx) => (
                                        <div key={idx} className="flex flex-col gap-0.5">
                                            <span className="text-[9px] font-bold text-foreground/40 uppercase tracking-tighter">
                                                {conn.start.label === hoveredPoint ? 'Outbound' : 'Inbound'}
                                            </span>
                                            <span className="text-[11px] font-bold text-foreground/80">
                                                {conn.start.label === hoveredPoint ? conn.end.label : conn.start.label}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Stats Cards - Gradient Removed, Solid Professional Theme */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { label: 'Active Routes', value: `${connections.length * 2}+`, sub: 'Direct global links', color: 'text-accent' },
                        { label: 'Countries Covered', value: countries.length, sub: 'Global footprint', color: 'text-foreground' },
                        { label: 'Max Connections', value: Math.max(...pointDataList.map(p => p.connections), 0), sub: 'Major hub capacity', color: 'text-foreground' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background border border-secondary/20 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-500 group relative"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-l-2xl" />
                            <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-3 tracking-tighter`}>
                                {stat.value}
                            </div>
                            <div className="text-xs font-black text-foreground uppercase tracking-[0.15em] mb-1">
                                {stat.label}
                            </div>
                            <div className="text-[10px] text-foreground/40 font-semibold uppercase tracking-tight">
                                {stat.sub}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}