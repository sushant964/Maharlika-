import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled 
            ? "bg-brand-charcoal/95 backdrop-blur-md shadow-2xl border-white/5 py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-white uppercase group-hover:text-brand-gold transition-colors duration-300">
                Maharlika
              </span>
              <span className="font-sans text-[10px] tracking-[0.3em] text-brand-gold uppercase ml-1">
                Resin
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm tracking-widest uppercase transition-colors duration-300 font-medium",
                  location.pathname === link.path 
                    ? "text-brand-gold" 
                    : "text-gray-300 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2.5 border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 text-sm tracking-widest uppercase font-medium rounded-sm"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-brand-gold transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-charcoal/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold tracking-widest text-white uppercase">
                    Maharlika
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.3em] text-brand-gold uppercase ml-1">
                    Resin
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white hover:text-brand-gold transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 items-center justify-center flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-2xl font-serif tracking-wide transition-colors duration-300",
                      location.pathname === link.path 
                        ? "text-brand-gold" 
                        : "text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Link
                  to="/contact"
                  className="mt-8 px-8 py-4 bg-brand-gold text-brand-charcoal font-medium tracking-widest uppercase rounded-sm hover:-translate-y-1 transition-transform"
                >
                  Request A Quote
                </Link>
              </nav>

              <div className="mt-auto text-center pb-8 border-t border-white/10 pt-8">
                <p className="text-gray-400 mb-2">Call us for inquiries:</p>
                <a href="tel:+15876437948" className="text-brand-gold font-serif text-xl">
                  +1 (587) 643-7948
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
