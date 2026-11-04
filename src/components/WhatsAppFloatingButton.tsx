import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  phoneNumber = '34972369330',
  defaultMessage = 'Hello Eldorado Apartments! I am inquiring about availability for a stay at Fenals Beach.',
}) => {
  const handleClick = () => {
    const encoded = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <aside
      aria-label="Direct Contact WhatsApp"
      className="fixed bottom-6 right-6 z-40"
    >
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with Eldorado (+34 972 36 93 30)
        </span>
      </button>
    </aside>
  );
};
