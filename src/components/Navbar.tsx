import React, { useState } from 'react';
import { MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onBookClick: () => void;
  onWhatsAppClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onWhatsAppClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Apartments', href: '#apartments' },
    { label: 'Experience', href: '#experience' },
    { label: 'Location', href: '#location' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark & Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a2b4] rounded-lg p-1"
          >
            <Logo variant="dark" size="sm" showSubtitle={true} />
          </a>
        </div>

        {/* Zone 2: Navigation Links (single line, clean typography) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#00a2b4] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#00a2b4] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (WhatsApp + Book Your Stay) */}
        <div className="flex items-center gap-4">
          {/* WhatsApp Direct */}
          <button
            onClick={onWhatsAppClick}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#00a2b4] transition-colors whitespace-nowrap py-2 px-1"
          >
            <MessageCircle className="w-4 h-4 text-[#00a2b4]" />
            <span>WhatsApp</span>
          </button>

          {/* Primary CTA (In Brand Turquoise) */}
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00a2b4] hover:bg-[#008998] active:bg-[#087784] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer group"
          >
            <span>Book your stay</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-[#00a2b4] rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-3 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#00a2b4] py-2 border-b border-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onWhatsAppClick();
              }}
              className="flex items-center gap-2 text-slate-700 hover:text-[#00a2b4] py-2 text-left"
            >
              <MessageCircle className="w-4 h-4 text-[#00a2b4]" />
              <span>Contact via WhatsApp</span>
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-white bg-[#00a2b4] hover:bg-[#008998] rounded-lg font-semibold shadow-sm"
            >
              <span>Book your stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
