import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

const products = [
  { name: 'Oil & Gas', href: '/products/Oil' },
  { name: 'Petrochemicals', href: '/products/Chemical' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-secondary/20 relative overflow-hidden">
      {/* Subtle brand mark */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group focus:outline-none">
              <img
                src={logo}
                alt="VANTARA ENERGY"
                className="h-28 md:h-36 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-foreground/70 leading-relaxed font-medium">
              Leading supplier and exporter of premium petrochemical products,
              serving industries worldwide with excellence and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black mb-8 text-primary uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground/60 hover:text-accent font-bold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-black mb-8 text-primary uppercase tracking-widest">Our Products</h3>
            <ul className="space-y-4">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-foreground/60 hover:text-accent font-bold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-black mb-8 text-primary uppercase tracking-widest">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-accent shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-foreground/70 font-medium">
                  1520, Burjuman Business Tower,<br />
                  Burjuman, Dubai, UAE
                </span>
              </li> 
              <li>
                <a
                  href="mailto:info@vantaraenergy.com"
                  className="flex items-center gap-4 text-foreground/70 hover:text-accent font-medium transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  info@vantaraenergy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+971551623344"
                  className="flex items-center gap-4 text-foreground/70 hover:text-accent font-medium transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  +971 551 623 344
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971551623344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground/70 hover:text-accent font-medium transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-secondary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-foreground/40 text-[11px] font-black uppercase tracking-widest">
              © {currentYear} VANTARA ENERGY. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link to="/about" className="text-foreground/40 hover:text-accent text-[11px] font-black uppercase tracking-widest transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-foreground/40 hover:text-accent text-[11px] font-black uppercase tracking-widest transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
