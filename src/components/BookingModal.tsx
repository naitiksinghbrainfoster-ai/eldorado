import React, { useState } from 'react';
import { X, Calendar, Users, MessageCircle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { ApartmentItem } from './ApartmentsSection';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedApartment?: ApartmentItem | null;
  initialDates?: string;
  initialAdults?: number;
  initialChildren?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedApartment,
  initialDates = '2026-06-15 — 2026-06-22',
  initialAdults = 2,
  initialChildren = 0,
}) => {
  const [aptType, setAptType] = useState<string>(selectedApartment?.id || 'apt-penthouse');
  const [nights, setNights] = useState<number>(7);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const aptPrices: Record<string, { name: string; rate: number }> = {
    'apt-penthouse': { name: 'Mediterranean Sea-View Penthouse', rate: 185 },
    'apt-deluxe-suite': { name: 'Fenals Breeze Deluxe Suite', rate: 140 },
    'apt-terrace-studio': { name: 'Costa Brava Sunlit Studio', rate: 98 },
    'apt-family-garden': { name: 'Eldorado Garden Family Residence', rate: 165 },
  };

  const currentPrice = aptPrices[aptType] || { name: 'Selected Apartment', rate: 150 };
  const subtotal = currentPrice.rate * nights;
  const cleaningFee = 45;
  const touristTax = 2.25 * nights * initialAdults;
  const total = subtotal + cleaningFee + touristTax;

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hello Eldorado Apartments! I would like to book the "${currentPrice.name}" for ${nights} nights (${initialDates}) for ${initialAdults} adults and ${initialChildren} children. Guest: ${guestName || 'Inquirer'} (${guestPhone || 'Phone'}).`
    );
    window.open(`https://wa.me/34972369330?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative my-8 animate-fadeIn border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#e6f7f8] text-[#00a2b4] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif text-[#0a3641] font-bold mb-2">
              Reservation Request Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Thank you, <strong>{guestName || 'Guest'}</strong>. Our reservation team at Fenals Beach is preparing your confirmation for <strong>{currentPrice.name}</strong>.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 max-w-md mx-auto mb-6 text-left">
              <div className="font-bold text-[#0a3641] mb-1">Reservation Reference #ELD-2026</div>
              <div>Stay: {initialDates} ({nights} nights)</div>
              <div>Total Quoted: €{total.toFixed(2)}</div>
              <div>Direct Phone: +34 972 36 93 30</div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-lg text-xs font-bold hover:bg-[#1ebd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#0a3641] text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-widest text-[#00a2b4] uppercase">
                DIRECT BOOKING GUARANTEE
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#0a3641] font-semibold mt-0.5">
                Reserve Your Stay at Eldorado
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Best price guarantee · No hidden booking platform fees · 150m from Fenals Beach
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Apartment Selection */}
              <div>
                <label className="text-xs font-bold text-[#0a3641] uppercase tracking-wider block mb-1.5">
                  Apartment Selection
                </label>
                <select
                  value={aptType}
                  onChange={(e) => setAptType(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3 border border-slate-200 rounded-lg focus:border-[#00a2b4] focus:outline-none bg-white font-medium"
                >
                  <option value="apt-penthouse">Mediterranean Sea-View Penthouse (€185/night)</option>
                  <option value="apt-deluxe-suite">Fenals Breeze Deluxe Suite (€140/night)</option>
                  <option value="apt-terrace-studio">Costa Brava Sunlit Studio (€98/night)</option>
                  <option value="apt-family-garden">Eldorado Garden Family Residence (€165/night)</option>
                </select>
              </div>

              {/* Dates & Nights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#0a3641] uppercase tracking-wider block mb-1.5">
                    Dates
                  </label>
                  <div className="flex items-center gap-2 p-2.5 border border-slate-200 rounded-lg text-xs text-slate-700 bg-slate-50 font-medium">
                    <Calendar className="w-4 h-4 text-[#00a2b4]" />
                    <span>{initialDates}</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0a3641] uppercase tracking-wider block mb-1.5">
                    Duration (Nights)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={2}
                      max={28}
                      value={nights}
                      onChange={(e) => setNights(Number(e.target.value))}
                      className="w-full accent-[#00a2b4]"
                    />
                    <span className="font-mono font-bold text-xs w-12 text-right tabular-nums text-[#0a3641]">
                      {nights} nts
                    </span>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#0a3641] uppercase tracking-wider block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Maria Gonzalez"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg focus:border-[#00a2b4] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#0a3641] uppercase tracking-wider block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="maria@example.com"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg focus:border-[#00a2b4] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0a3641] uppercase tracking-wider block mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="+34 600 000 000"
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-lg focus:border-[#00a2b4] focus:outline-none"
                />
              </div>

              {/* Price Breakdown Calculation */}
              <div className="p-4 bg-[#f4fbfc] border border-[#00a2b4]/20 rounded-xl space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>€{currentPrice.rate} × {nights} nights</span>
                  <span className="font-mono tabular-nums">€{subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>End-of-stay cleaning & linen service</span>
                  <span className="font-mono tabular-nums">€{cleaningFee}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Catalonia municipal tourist tax (taxa turística)</span>
                  <span className="font-mono tabular-nums">€{touristTax.toFixed(2)}</span>
                </div>
                <div className="pt-2 border-t border-[#00a2b4]/30 flex justify-between font-bold text-sm text-[#0a3641]">
                  <span>Total Estimated Cost</span>
                  <span className="font-mono tabular-nums text-[#00a2b4] text-base">€{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 text-white bg-[#00a2b4] hover:bg-[#008998] active:bg-[#077986] rounded-lg text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Reservation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto py-3 px-4 text-[#075e54] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Ask on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
