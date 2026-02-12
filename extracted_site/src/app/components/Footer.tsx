import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Logo className="w-10 h-10" />
              <div>
                <div className="text-xs font-medium tracking-wider">ROYAL SHERIUM</div>
                <div className="text-[9px] tracking-widest text-white/60">INTERNATIONAL LTD</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Nigeria's premier real estate and oil & gas company, delivering excellence and value to our clients since 2004.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-[#C9A860] hover:text-[#C9A860] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-[#C9A860] hover:text-[#C9A860] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-[#C9A860] hover:text-[#C9A860] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-serif text-lg mb-6">Real Estate</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/search?type=duplex" className="hover:text-[#C9A860] transition-colors">Luxury Duplexes</Link></li>
              <li><Link to="/search?type=apartment" className="hover:text-[#C9A860] transition-colors">Apartments</Link></li>
              <li><Link to="/search?type=villa" className="hover:text-[#C9A860] transition-colors">Villas & Estates</Link></li>
              <li><Link to="/search?type=commercial" className="hover:text-[#C9A860] transition-colors">Commercial Properties</Link></li>
              <li><Link to="/search" className="hover:text-[#C9A860] transition-colors">All Properties</Link></li>
            </ul>
          </div>

          {/* Oil & Gas */}
          <div>
            <h4 className="font-serif text-lg mb-6">Oil & Gas</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/oil-gas?category=crude" className="hover:text-[#C9A860] transition-colors">Crude Oil</Link></li>
              <li><Link to="/oil-gas?category=refined" className="hover:text-[#C9A860] transition-colors">Refined Products</Link></li>
              <li><Link to="/oil-gas?category=gas" className="hover:text-[#C9A860] transition-colors">Natural Gas (LPG/PNG)</Link></li>
              <li><Link to="/oil-gas?category=lubricants" className="hover:text-[#C9A860] transition-colors">Lubricants</Link></li>
              <li><Link to="/contact" className="hover:text-[#C9A860] transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Plot 123, Cadastral Zone<br />Maitama District<br />Abuja FCT, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+2348034567890" className="hover:text-[#C9A860] transition-colors">+234 803 456 7890</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:royalsheriumintlltd@gmail.com" className="hover:text-[#C9A860] transition-colors">royalsheriumintlltd@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/50">
              © {currentYear} Royal Sherium International Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/50">
              <a href="#" className="hover:text-[#C9A860] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C9A860] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#C9A860] transition-colors">DPR Certified</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}