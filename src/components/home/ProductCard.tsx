import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';
import SplitText from '@/components/ui/SplitText';

interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
  backgroundImage?: string;
  category?: string;
}

const ProductCard = ({ name, description, href, icon, index, backgroundImage, category }: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="group h-full"
    >
      <Link
        to={href}
        className="relative h-full flex flex-col bg-white border-2 border-primary/5 hover:border-primary/20 transition-all duration-700 overflow-hidden"
      >


        {/* Image Container */}
        <div className="relative aspect-[16/11] shrink-0 overflow-hidden bg-primary/5">
          {backgroundImage && (
            <img
              src={backgroundImage}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
            />
          )}

          {/* Subtle Industrial Overlay */}
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-700" />

        </div>

        {/* Content Section */}
        <div className="p-8 pb-10 flex-1 flex flex-col relative">
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
            </div>

            <h3 className="text-3xl font-black text-primary leading-none uppercase tracking-tighter">
              {name}
            </h3>
          </div>

          <p className="text-primary/60 text-sm font-light leading-relaxed line-clamp-2">
            {description}
          </p>

          <div className="pt-8 mt-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover:text-primary transition-colors">
              <span>Spec Sheets</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
            </div>

            {/* Corner Decorative Accent */}
            <div className="w-4 h-4 border-r-2 border-b-2 border-primary/5 group-hover:border-accent transition-colors" />
          </div>
        </div>

        {/* Industrial Border Reveal on Hover */}
        <div className="absolute inset-0 border-2 border-accent scale-[1.02] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none" />
      </Link>
    </motion.article>
  );
};

export default ProductCard;
