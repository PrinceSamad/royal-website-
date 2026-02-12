import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Real Estate', path: '/search', id: 'realestate' },
    { name: 'Oil & Gas', path: '/oil-gas', id: 'oilgas' },
    { name: 'Our Team', path: '/agents', id: 'agents' },
    { name: 'About Us', path: '/about', id: 'about' },
    { name: 'Contact', path: '/contact', id: 'contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Logo className="w-12 h-12" />
            <div className="hidden md:block">
              <div className="text-xs font-medium tracking-wider text-[#1A1A1A]">ROYAL SHERIUM</div>
              <div className="text-[9px] tracking-widest text-[#6B6B6B]">INTERNATIONAL LTD</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`text-sm tracking-wide transition-colors relative group ${
                  isActive(link.path) ? 'text-[#C9A860]' : 'text-[#1A1A1A] hover:text-[#C9A860]'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A860] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex items-center space-x-2 px-4 py-2 text-sm text-[#1A1A1A] hover:text-[#C9A860] transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
            <a 
              href="tel:+2348034567890"
              className="hidden md:flex items-center space-x-2 px-4 py-2 text-sm text-[#1A1A1A] hover:text-[#C9A860] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+234 803 456 7890</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A1A1A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-black/5 py-4"
            >
              <form onSubmit={handleSearch} className="flex gap-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search properties, locations, or products..."
                  className="flex-1 px-4 py-2 border border-black/20 focus:border-[#C9A860] focus:outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#1A1A1A] text-white hover:bg-[#C9A860] transition-colors"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-black/5"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base tracking-wide py-2 ${
                    isActive(link.path) ? 'text-[#C9A860]' : 'text-[#1A1A1A]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-black/5">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex items-center space-x-2 w-full py-2 text-sm text-[#1A1A1A]"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
                <a 
                  href="tel:+2348034567890"
                  className="flex items-center space-x-2 w-full py-2 text-sm text-[#1A1A1A]"
                >
                  <Phone className="w-4 h-4" />
                  <span>+234 803 456 7890</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}