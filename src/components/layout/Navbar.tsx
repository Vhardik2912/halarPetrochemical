import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Droplets, Fuel } from 'lucide-react';
import logo from '@/assets/logo.webp';
import fuelOilImg from '@/assets/products/fuel-oil.webp';
import naphthaImg from '@/assets/products/naphtha.webp';

// Define the navigation structure.
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Products',
    href: '/products',
    type: 'mega-menu',
    children: [
      {
        name: 'Oils',
        href: '/products/Oil',
        image: fuelOilImg,
        icon: <Fuel className="w-5 h-5" />,
        description: 'High-performance fuel oils, gas oils, and specialty lubricants for industrial power and marine applications.'
      },
      {
        name: 'Chemicals',
        href: '/products/Chemical',
        image: naphthaImg,
        icon: <Droplets className="w-5 h-5" />,
        description: 'Elite petrochemical feedstocks, industrial solvents, and essential chemical compounds for processing.'
      },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
    setIsVisible(true);
    setLastScrollY(0);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg py-1' : 'bg-background/80 backdrop-blur-sm py-3'}
      `}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Logo" className="h-12 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.children && location.pathname.startsWith('/products'));

              const isMegaMenu = item.type === 'mega-menu';

              return (
                <div
                  key={item.name}
                  className="static" // Static to allow absolute mega menu relative to header/nav
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1.5 font-semibold text-[15px] tracking-wide transition-all duration-300 relative py-2
                      ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}
                    `}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                    {/* Hover Underline Effect */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>

                  {/* Mega Menu / Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className={`absolute top-full left-0 right-0 mt-0 pt-4 cursor-default
                            ${isMegaMenu ? 'w-full px-4' : 'w-64 left-auto translate-x-[-50%]'}
                          `}
                        >
                          <div className={`mx-auto bg-card rounded-2xl shadow-2xl border border-border/60 overflow-hidden
                            ${isMegaMenu ? 'max-w-5xl' : 'w-full'}
                          `}>
                            {isMegaMenu ? (
                              <div className="grid grid-cols-2 gap-0">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    to={child.href}
                                    className="group flex flex-col p-8 border-r last:border-r-0 border-border/50 hover:bg-secondary/30 transition-all duration-500"
                                  >
                                    <div className="relative h-64 overflow-hidden rounded-xl mb-6 shadow-md">
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70" />
                                      <img
                                        src={child.image}
                                        alt={child.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      />
                                      <div className="absolute bottom-6 left-6 z-20">
                                        <h4 className="text-2xl font-bold text-white tracking-tight">
                                          {child.name}
                                        </h4>
                                        <div className="flex items-center gap-2 text-white/90 font-medium text-sm group-hover:text-white transition-colors">
                                          View Portfolio
                                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="px-2">
                                      <p className="text-muted-foreground leading-relaxed">
                                        {child.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              // Standard Dropdown
                              <div className="py-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    to={child.href}
                                    className="block px-6 py-3 text-[15px] font-medium text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            <Link to="/contact" className="btn-accent px-8 py-2.5 text-sm font-bold shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-accent/40 hover:-translate-y-0.5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden rounded-b-2xl shadow-2xl"
            >
              <div className="py-4">
                {navigation.map((item) => (
                  <div key={item.name} className="px-4">
                    {/* MAIN ITEM */}
                    {item.children ? (
                      <div className="mb-2">
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.name ? null : item.name
                            )
                          }
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-bold transition-all
                            ${mobileDropdown === item.name ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'}
                          `}
                        >
                          <span className="text-lg">{item.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300
                              ${mobileDropdown === item.name ? 'rotate-180' : ''}
                            `}
                          />
                        </button>

                        {/* DROPDOWN - MOBILE */}
                        <AnimatePresence>
                          {mobileDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-secondary/30 rounded-xl mt-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="flex items-center justify-between px-8 py-4 text-[15px] font-semibold text-muted-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
                                >
                                  <span>{child.name}</span>
                                  <ArrowRight className="w-4 h-4 opacity-50" />
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-8 py-4 mb-2 rounded-xl text-lg font-bold text-foreground hover:bg-secondary transition-all"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="p-4 mt-2">
                  <Link to="/contact" className="btn-accent block text-center py-4 rounded-xl text-lg font-bold shadow-xl">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
