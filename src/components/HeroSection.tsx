import React, { useState } from 'react';
import { ArrowRight, Play, MapPin, ChevronLeft, ChevronRight, Calendar, Users, ChevronDown } from 'lucide-react';
import heroVilla from '../assets/images/hero_mediterranean_villa_1793017626468.jpg';
import seaViewLiving from '../assets/images/apartment_sea_view_living_1793017627043.jpg';
import fenalsBeach from '../assets/images/fenals_beach_coast_1793017628172.jpg';

interface HeroSectionProps {
  onFindApartmentClick: () => void;
  onExploreClick: () => void;
  onCheckAvailability: (searchParams: { dates: string; guests: string; adults: number; children: number }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onFindApartmentClick,
  onExploreClick,
  onCheckAvailability,
}) => {
  // Hero background carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Search widget state
  const [checkInDate, setCheckInDate] = useState('2026-06-15');
  const [checkOutDate, setCheckOutDate] = useState('2026-06-22');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Dropdown popover visibility
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  const slides = [
    {
      id: '01',
      image: heroVilla,
      location: 'Fenals Beach · Lloret de Mar, Costa Brava',
      kicker: '01 — STAY A LITTLE CLOSER TO THE SEA',
    },
    {
      id: '02',
      image: seaViewLiving,
      location: 'Private Sea View Terraces · Eldorado Suites',
      kicker: '02 — WAKE UP TO THE MEDITERRANEAN BREEZE',
    },
    {
      id: '03',
      image: fenalsBeach,
      location: 'Fenals Bay & Camí de Ronda · 150m from your door',
      kicker: '03 — CATALONIA\'S PREMIER COASTLINE',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlideData = slides[currentSlide];

  // Format date range text
  const formatDateDisplay = () => {
    if (!checkInDate || !checkOutDate) return 'Choose your dates';
    const d1 = new Date(checkInDate);
    const d2 = new Date(checkOutDate);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return `${d1.toLocaleDateString('en-US', options)} — ${d2.toLocaleDateString('en-US', options)}`;
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDatePicker(false);
    setShowGuestPicker(false);
    onCheckAvailability({
      dates: formatDateDisplay(),
      guests: `${adults} adults · ${children} children`,
      adults,
      children,
    });
  };

  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[700px] flex flex-col justify-between overflow-visible">
      {/* Background Image Container with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
        <img
          src={activeSlideData.image}
          alt="Eldorado Apartments Lloret de Mar"
          className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out scale-100"
        />

        {/* Cinematic Scrim: deep gradient on left and bottom for pristine text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pt-16 md:pt-24 pb-28 lg:pb-36 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Kicker from screenshot */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest text-[#5be5f3] uppercase mb-4 drop-shadow-sm">
            <span>{activeSlideData.kicker}</span>
          </div>

          {/* Main Headline from screenshot */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif leading-[1.08] text-white tracking-tight drop-shadow-md mb-6">
            <span className="block font-normal">Your own place</span>
            <span className="block italic font-normal text-[#5be5f3]">
              by the Mediterranean.
            </span>
          </h1>

          {/* Subtitle from screenshot */}
          <p className="text-base sm:text-lg md:text-xl text-slate-100 font-light leading-relaxed mb-8 max-w-xl drop-shadow">
            Thoughtful apartments, sea-breeze mornings and the best of Lloret right outside your door.
          </p>

          {/* CTA Buttons - Primary in client's Mediterranean Turquoise */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Primary Find Your Apartment CTA */}
            <button
              onClick={onFindApartmentClick}
              className="inline-flex items-center gap-3 px-6 py-3.5 text-base font-semibold text-white bg-[#00a2b4] hover:bg-[#008998] active:bg-[#077986] rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 cursor-pointer group"
            >
              <span>Find your apartment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary Explore Eldorado with Circular Play Button */}
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-3 text-white hover:text-[#5be5f3] transition-colors py-2 px-3 rounded-lg hover:bg-white/10 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all group-hover:bg-[#00a2b4] group-hover:border-[#00a2b4] group-hover:scale-105 shadow">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </div>
              <span className="font-medium text-sm sm:text-base">Explore Eldorado</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Right Controls (Location pin + Carousel pagination) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 mb-6 hidden md:flex items-center justify-end gap-6 text-white text-xs">
        {/* Location Pin */}
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
          <MapPin className="w-3.5 h-3.5 text-[#5be5f3]" />
          <span className="font-medium">{activeSlideData.location}</span>
        </div>

        {/* Carousel controls ‹ 01 — 03 › */}
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono tabular-nums text-slate-300">
            <strong className="text-white">{activeSlideData.id}</strong> — 03
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Floating Booking Search Bar - Overlapping bottom edge */}
      <div className="relative z-20 max-w-6xl mx-auto w-full px-4 -mb-16 sm:-mb-14">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-4 sm:p-6 transition-all">
          <form onSubmit={handleSearchSubmit} className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            {/* Left Section: Start Planning Header */}
            <div className="lg:w-1/4 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 pb-3 lg:pb-0 lg:pr-4">
              <span className="text-[11px] font-bold tracking-widest text-[#00a2b4] uppercase block">
                START PLANNING
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-[#0a3641] leading-tight mt-0.5">
                Make yourself at home.
              </h2>
            </div>

            {/* Middle Section: Check in — Check out input */}
            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => {
                  setShowDatePicker(!showDatePicker);
                  setShowGuestPicker(false);
                }}
                className="w-full flex items-center justify-between p-3 border border-slate-200 hover:border-[#00a2b4] rounded-lg transition-colors text-left bg-slate-50/50 hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#00a2b4]/10 flex items-center justify-center text-[#00a2b4]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      Check in — Check out
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {formatDateDisplay()}
                    </span>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {/* Date Picker Popover */}
              {showDatePicker && (
                <div className="absolute left-0 top-full mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl p-4 z-50 animate-fadeIn">
                  <div className="text-xs font-bold text-[#0a3641] uppercase tracking-wider mb-3">
                    Select Your Dates
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <label className="text-[10px] text-slate-500 font-semibold block mb-1">CHECK IN</label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full text-xs p-2 border border-slate-200 rounded focus:border-[#00a2b4] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-500 font-semibold block mb-1">CHECK OUT</label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full text-xs p-2 border border-slate-200 rounded focus:border-[#00a2b4] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowDatePicker(false)}
                      className="px-3 py-1.5 text-xs font-medium text-white bg-[#00a2b4] rounded hover:bg-[#008998]"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Middle Section: Guests Input */}
            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => {
                  setShowGuestPicker(!showGuestPicker);
                  setShowDatePicker(false);
                }}
                className="w-full flex items-center justify-between p-3 border border-slate-200 hover:border-[#00a2b4] rounded-lg transition-colors text-left bg-slate-50/50 hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#00a2b4]/10 flex items-center justify-center text-[#00a2b4]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Guests</span>
                    <span className="text-sm font-semibold text-slate-800">
                      {adults} adults · {children} {children === 1 ? 'child' : 'children'}
                    </span>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {/* Guest Picker Popover */}
              {showGuestPicker && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-2xl p-4 z-50 animate-fadeIn">
                  <div className="text-xs font-bold text-[#0a3641] uppercase tracking-wider mb-3">
                    Select Guests
                  </div>

                  {/* Adults */}
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Adults</div>
                      <div className="text-[10px] text-slate-400">Ages 13 and above</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center font-bold text-slate-600"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold w-4 text-center tabular-nums">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(Math.min(6, adults + 1))}
                        className="w-7 h-7 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center font-bold text-slate-600"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Children</div>
                      <div className="text-[10px] text-slate-400">Ages 0 to 12</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center font-bold text-slate-600"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold w-4 text-center tabular-nums">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(Math.min(4, children + 1))}
                        className="w-7 h-7 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center font-bold text-slate-600"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end pt-3">
                    <button
                      type="button"
                      onClick={() => setShowGuestPicker(false)}
                      className="px-3 py-1.5 text-xs font-medium text-white bg-[#00a2b4] rounded hover:bg-[#008998]"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section: Check Availability Action */}
            <div className="shrink-0">
              <button
                type="submit"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#00a2b4] hover:bg-[#008998] active:bg-[#077986] rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Check availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
