import React, { useState } from 'react';
import { Phone, Globe, ChevronDown, MapPin } from 'lucide-react';

interface TopHeaderProps {
  onLanguageChange?: (lang: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onLanguageChange }) => {
  const [currentLang, setCurrentLang] = useState('ES');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' },
    { code: 'CA', label: 'Català' },
    { code: 'FR', label: 'Français' },
    { code: 'DE', label: 'Deutsch' },
  ];

  const handleSelectLang = (code: string) => {
    setCurrentLang(code);
    setLangMenuOpen(false);
    onLanguageChange?.(code);
  };

  return (
    <div className="bg-[#0a3641] text-white text-xs py-2 px-4 md:px-8 border-b border-[#00a2b4]/20 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand marker & location */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#00a2b4] flex items-center justify-center font-bold text-[10px] text-white shadow-sm ring-1 ring-white/20">
              E
            </span>
            <span className="font-bold tracking-wider text-slate-100 hidden sm:inline">
              ELDORADO
            </span>
            <span className="text-slate-400 text-[11px] hidden md:inline">
              Lloret de Mar · Costa Brava
            </span>
          </div>
        </div>

        {/* Center: Distance highlight from screenshot */}
        <div className="flex items-center gap-2 text-slate-300 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#00a2b4] shrink-0" />
          <span>Fenals Beach</span>
          <span className="text-[#00a2b4] text-xs font-bold">•</span>
          <span className="text-white font-semibold">150m from the sea</span>
        </div>

        {/* Right: Direct Phone & Language Dropdown */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+34972369330"
            className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-[#5be5f3] transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#00a2b4]" />
            <span className="font-medium">+34 972 36 93 30</span>
          </a>

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white py-0.5 px-2 rounded hover:bg-white/10 transition-colors"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#00a2b4]" />
              <span className="font-semibold">{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-32 bg-[#06252d] border border-[#00a2b4]/30 rounded-lg shadow-xl py-1 z-50 text-slate-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLang(lang.code)}
                    className={`w-full text-left px-3 py-1.5 hover:bg-[#00a2b4]/20 flex items-center justify-between text-xs ${
                      currentLang === lang.code ? 'text-[#5be5f3] font-bold bg-[#00a2b4]/10' : ''
                    }`}
                  >
                    <span>{lang.label}</span>
                    <span className="text-[10px] text-slate-400">{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
