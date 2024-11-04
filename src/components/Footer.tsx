import React from 'react';
import { Martini, ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 mt-auto">
      <div className="glass-nav border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          {/* Mobile Footer */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            <div className="flex items-center gap-2">
              <Martini size={24} className="text-purple-400" />
              <span className="text-white font-bold text-xl">LUXE</span>
            </div>
            
            <p className="text-white/60 text-sm text-center">
              © 2024 LUXE. All rights reserved.
            </p>

            <div className="flex gap-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all mt-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>

          {/* Desktop Footer */}
          <div className="hidden md:flex flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <Martini size={32} className="text-purple-400" />
                <span className="text-white font-bold text-2xl">LUXE</span>
              </div>
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} LUXE. All rights reserved.
              </p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;