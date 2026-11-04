import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'teal' | 'image';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
}

/**
 * Eldorado Apartments Brand Logo
 * Pixel-accurate vector representation of the client's official logo
 * (House with bed icon + ELDORADO APARTMENTS + curved arch + "Your place to stay in Lloret" script)
 * Also supports displaying the client's original logo asset image directly.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  // If variant is 'image', show the exact screenshot asset provided by the client
  if (variant === 'image') {
    return (
      <div className={`inline-flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-sm ${className}`}>
        <img
          src="/assets/aistudio/image_f9adf2a4.png"
          alt="Eldorado Apartments - Your place to stay in Lloret"
          className="h-14 w-auto object-contain rounded"
        />
      </div>
    );
  }

  // Size configurations
  const dimensions = {
    sm: { icon: 'w-7 h-7', text: 'text-xs', tracking: 'tracking-wider', script: 'text-xs' },
    md: { icon: 'w-9 h-9', text: 'text-sm md:text-base', tracking: 'tracking-widest', script: 'text-sm md:text-base' },
    lg: { icon: 'w-12 h-12', text: 'text-lg md:text-xl', tracking: 'tracking-widest', script: 'text-lg' },
    hero: { icon: 'w-16 h-16', text: 'text-2xl', tracking: 'tracking-widest', script: 'text-xl' },
  }[size];

  // Color schemes based on variant
  // Variant 'light': for dark backgrounds (white icon and text, brand teal accent)
  // Variant 'dark': for light backgrounds (brand teal icon, dark slate text, brand teal arch)
  // Variant 'teal': for teal backgrounds matching client's screenshot (white icon, dark text)
  const colors = {
    light: {
      iconStroke: '#FFFFFF',
      iconFill: 'none',
      title: 'text-white',
      arch: 'stroke-white/80',
      script: 'text-[#5be5f3]',
      container: '',
    },
    dark: {
      iconStroke: '#00a2b4',
      iconFill: 'none',
      title: 'text-[#0a3641]',
      arch: 'stroke-[#00a2b4]',
      script: 'text-[#00a2b4]',
      container: '',
    },
    teal: {
      iconStroke: '#FFFFFF',
      iconFill: 'none',
      title: 'text-[#07242c]',
      arch: 'stroke-[#07242c]',
      script: 'text-[#07242c]',
      container: 'bg-[#00a2b4] p-3 rounded-xl text-white shadow-md',
    },
  }[variant];

  return (
    <div className={`inline-flex flex-col items-center text-center select-none ${colors.container} ${className}`}>
      {/* House with bed icon */}
      <div className={`relative ${dimensions.icon} flex items-center justify-center mb-1`}>
        <svg
          viewBox="0 0 100 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* House Roof & Outline */}
          <path
            d="M12 40 L50 14 L88 40"
            stroke={colors.iconStroke}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left Wall & Front Bed Leg */}
          <path
            d="M20 38 V80"
            stroke={colors.iconStroke}
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Right Wall & Rear Bed Leg */}
          <path
            d="M80 38 V80"
            stroke={colors.iconStroke}
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Bed Horizontal Frame Bar */}
          <path
            d="M20 62 H80"
            stroke={colors.iconStroke}
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Sleeping Person: Head Circle */}
          <circle
            cx="36"
            cy="47"
            r="8"
            stroke={colors.iconStroke}
            strokeWidth="6"
          />
          {/* Sleeping Person: Pillow & Body / Bed Mattress */}
          <path
            d="M50 62 V45 C50 41 54 38 59 38 H76 C78 38 80 40 80 43 V62"
            stroke={colors.iconStroke}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Main Brand Title */}
      <div className={`font-black font-sans uppercase leading-none font-bold ${dimensions.text} ${dimensions.tracking} ${colors.title}`}>
        ELDORADO APARTMENTS
      </div>

      {/* Curved Underline Arch */}
      <div className="w-full max-w-[170px] my-0.5 flex justify-center">
        <svg viewBox="0 0 160 12" fill="none" className="w-full h-2">
          <path
            d="M4 10 Q 80 0 156 10"
            stroke="currentColor"
            className={colors.arch}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Handwritten Tagline */}
      {showSubtitle && (
        <div className={`font-script font-bold italic leading-none ${dimensions.script} ${colors.script}`}>
          Your place to stay in Lloret
        </div>
      )}
    </div>
  );
};
