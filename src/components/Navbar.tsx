import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import logo from "../Kunzyte.png";
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6">
        <nav
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-[#fff7ed]/95 backdrop-blur-md shadow-xl shadow-orange-200/50 border border-orange-200/90'
              : 'bg-[#fff7ed] shadow-lg shadow-orange-100/70 border border-orange-200'
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Kunzite logo"
                className="h-[99px] md:h-[136px] w-auto object-contain origin-left scale-110 md:scale-125 transition-transform duration-300 group-hover:scale-[1.32]"
              />
            </Link>

            {/* Desktop nav */}
            {/* <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-md font-medium transition-colors duration-200 hover:text-[#f59e0b] ${
                    location.pathname === link.path ? 'text-[#f59e0b]' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div> */}

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>+91 78954 63211</span>
              </a>
              <div className="w-px h-5 bg-orange-300" />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-[#f59e0b] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#fb923c] transition-colors duration-200"
              >
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-black hover:bg-orange-100 transition-all duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-150 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-[#fff7ed]/78 backdrop-blur-md backdrop-saturate-150" />
        <div className={`relative h-full flex items-center justify-center px-6 transition-all duration-200 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
          <div className="w-full max-w-sm text-center space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block rounded-2xl px-4 py-3 text-3xl font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-[#f59e0b]/15 text-[#d97706]'
                    : 'text-white hover:bg-orange-100/80 hover:text-[#d97706]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-orange-200/70">
              <Link
                to="/terms"
                className="block px-4 py-3 rounded-xl text-base text-white hover:text-black transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="block px-4 py-3 rounded-xl text-base text-white hover:text-black transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen menu (desktop) */}
      <div
        className={`fixed inset-0 z-40 hidden md:block transition-opacity duration-150 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-[#fff7ed]/78 backdrop-blur-md backdrop-saturate-150" />
        <div className="relative flex items-center justify-center h-full">
          <div className={`text-center space-y-6 transition-all duration-200 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
            {[...navLinks, { label: 'Terms & Conditions', path: '/terms' }, { label: 'Privacy Policy', path: '/privacy' }].map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  className="block text-4xl font-semibold text-white hover:text-[#d97706] transition-all duration-300 hover:translate-x-2 transform"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
