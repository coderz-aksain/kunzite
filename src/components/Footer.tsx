import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import Kunzyte from "../Kunzyte.png"
export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-[#f59e0b] py-4 overflow-hidden">
        <div className="marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 px-8 text-black font-semibold text-sm whitespace-nowrap">
              <span>KUNZITE - RAW. REAL. RADIANT SKINCARE.</span>
              <span className="text-black/40">•</span>
              <span>CLEAN FORMULAS • GLOW RESULTS • EVERYDAY CONFIDENCE.</span>
              <span className="text-black/40">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              {/* <div className="w-9 h-9 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div> */}
              <img    src={Kunzyte} alt="Kunzite" className="h-52 w-56" />
              
              {/* <span className="text-xl font-bold text-white">Kunzite</span> */}
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium skincare and body care crafted for real skin, real routines, and long-term glow.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 hover:bg-[#f59e0b] rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold mb-5 text-lg uppercase tracking-widest">Quick Links</p>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Our Story', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#f59e0b] text-md transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[#f59e0b] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white font-semibold mb-5 text-lg uppercase tracking-widest">Legal</p>
            <ul className="space-y-3">
              {[
                { label: 'Terms & Conditions', path: '/terms' },
                { label: 'Privacy Policy', path: '/privacy' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#f59e0b] text-md transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[#f59e0b] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-5 text-lg uppercase tracking-widest">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-md">Brij vihar kankhal Haridwar Uttrakhand 249408</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white text-md transition-colors">
                  +91 78954 63211
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <a href="mailto:skinscare26@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  skinscare26@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-md">
            &copy; {new Date().getFullYear()} Kunzite. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy
            </Link>
            <Link to="https://www.nexoraai.world/" className="text-white hover:text-gray-300 text-sm transition-colors">
              Developed by <span className="font-semibold hover:text-[#f59e0b] transition-colors">Nexora.</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
