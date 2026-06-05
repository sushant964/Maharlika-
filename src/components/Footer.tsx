import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111] pt-20 pb-10 border-t border-brand-gold/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-white uppercase">
                Maharlika
              </span>
              <span className="font-sans text-[10px] tracking-[0.3em] text-brand-gold uppercase ml-1">
                Resin
              </span>
            </div>
            <p className="text-gray-400 font-serif italic text-lg leading-relaxed">
              "Elegant | Resilient | Flawless Results"
            </p>
            <p className="text-gray-500 text-sm">
              Premium epoxy flooring and decorative surface solutions serving residential and commercial clients.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-gold"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-brand-gold transition-colors text-sm uppercase tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-gold"></span>
              Services
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Epoxy Flooring</li>
              <li className="text-gray-400 text-sm">Concrete Polishing</li>
              <li className="text-gray-400 text-sm">Metallic Epoxy Systems</li>
              <li className="text-gray-400 text-sm">Garage Floor Coatings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-gold"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-sm">Serving Alberta, Canada</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:+15876437948" className="text-sm hover:text-white transition-colors">
                  +1 (587) 643-7948
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:info@maharlikaresin.com" className="text-sm hover:text-white transition-colors">
                  Contact Us Online
                </a>
              </li>
            </ul>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="https://www.instagram.com/maharlikaresin" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-brand-graphite border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-charcoal hover:border-brand-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Maharlika Resin. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-600">
            <Link to="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
