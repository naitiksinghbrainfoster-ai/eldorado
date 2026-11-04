import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onBookClick: () => void;
  onWhatsAppClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick, onWhatsAppClick }) => {
  return (
    <footer id="contact" className="bg-[#0a3641] text-white pt-20 pb-12 border-t border-[#00a2b4]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Newsletter / Pre-booking Bar */}
        <div className="bg-[#0e4350] rounded-2xl p-8 mb-16 border border-[#00a2b4]/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-widest text-[#5be5f3] uppercase block mb-1">
              EXCLUSIVE SUMMER 2026 OFFERS
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
              Book directly with Eldorado for 10% off & complimentary welcome basket.
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onBookClick}
              className="px-6 py-3 bg-[#00a2b4] hover:bg-[#008998] active:bg-[#077986] text-white rounded-lg font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book direct online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onWhatsAppClick}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#5be5f3]" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Logo Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="bg-[#00a2b4] p-4 rounded-xl shadow-md inline-block mb-4">
              <Logo variant="teal" size="sm" showSubtitle={true} />
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Boutique holiday apartments in Lloret de Mar, Costa Brava. Located just 150m from Fenals Beach, offering tranquil seaside terraces, modern living, and true Mediterranean hospitality.
            </p>
            <div className="text-[11px] text-slate-400 font-mono">
              Tourism Register: HUTG-012847-82
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#5be5f3] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#apartments" className="hover:text-white transition-colors">Apartments & Suites</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">The Experience</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Fenals Beach Guide</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Showcase</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Directions & Parking</a></li>
            </ul>
          </div>

          {/* Apartments Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#5be5f3] mb-4">
              Accommodations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><span className="font-semibold text-white">Sea-View Penthouse</span> (85 m² · 4 guests)</li>
              <li><span className="font-semibold text-white">Fenals Breeze Suite</span> (60 m² · 3 guests)</li>
              <li><span className="font-semibold text-white">Sunlit Studio Balcony</span> (42 m² · 2 guests)</li>
              <li><span className="font-semibold text-white">Garden Family Suite</span> (75 m² · 5 guests)</li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#5be5f3] mb-4">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00a2b4] shrink-0 mt-0.5" />
                <span>Carrer de Josep Pla, Platja de Fenals, 17310 Lloret de Mar, Girona, Costa Brava, Spain</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00a2b4] shrink-0" />
                <a href="tel:+34972369330" className="hover:text-[#5be5f3] transition-colors">
                  +34 972 36 93 30
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#00a2b4] shrink-0" />
                <button onClick={onWhatsAppClick} className="hover:text-[#5be5f3] transition-colors text-left">
                  WhatsApp Support (24/7)
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00a2b4] shrink-0" />
                <a href="mailto:info@eldoradoapartments.com" className="hover:text-[#5be5f3] transition-colors">
                  info@eldoradoapartments.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Eldorado Apartments. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Direct Booking Terms</span>
            <span>Privacy Policy</span>
            <span>Cancellation Policy</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
