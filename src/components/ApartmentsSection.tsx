import React, { useState } from 'react';
import { Users, Maximize, Wifi, Coffee, Wind, Eye, ArrowRight, Check } from 'lucide-react';
import seaViewLiving from '../assets/images/apartment_sea_view_living_1793017627043.jpg';
import luxuryBedroom from '../assets/images/apartment_luxury_bedroom_1793017627989.jpg';
import heroVilla from '../assets/images/hero_mediterranean_villa_1793017626468.jpg';

export interface ApartmentItem {
  id: string;
  name: string;
  type: 'penthouse' | 'suite' | 'studio' | 'family';
  tagline: string;
  pricePerNight: number;
  sizeM2: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  seaView: boolean;
  distanceToSea: string;
  amenities: string[];
  description: string;
}

interface ApartmentsSectionProps {
  onSelectApartment: (apt: ApartmentItem) => void;
}

export const ApartmentsSection: React.FC<ApartmentsSectionProps> = ({ onSelectApartment }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'penthouse' | 'suite' | 'studio' | 'family'>('all');

  const apartments: ApartmentItem[] = [
    {
      id: 'apt-penthouse',
      name: 'Mediterranean Sea-View Penthouse',
      type: 'penthouse',
      tagline: 'Top-floor private terrace with 180° azure sea panoramas',
      pricePerNight: 185,
      sizeM2: 85,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      image: seaViewLiving,
      seaView: true,
      distanceToSea: '150m',
      amenities: ['Private 30m² Terrace', 'High-Speed Wi-Fi', 'Full Kitchen', 'Nespresso', 'Air Conditioning', 'Sea View'],
      description: 'Our crown jewel. Perched on the top floor with expansive floor-to-ceiling glass doors opening onto an open terrace with sunbeds and dining table overlooking Fenals Bay.',
    },
    {
      id: 'apt-deluxe-suite',
      name: 'Fenals Breeze Deluxe Suite',
      type: 'suite',
      tagline: 'Spacious corner suite bathed in morning golden light',
      pricePerNight: 140,
      sizeM2: 60,
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      image: luxuryBedroom,
      seaView: true,
      distanceToSea: '150m',
      amenities: ['Corner Balcony', 'King Size Bed', 'Designer Lounge', 'Workstation', 'Smart TV', 'Air Conditioning'],
      description: 'Designed for couples or remote professionals who crave serenity. Features an airy bedroom with natural woven textures and a sea-facing balcony for morning espresso.',
    },
    {
      id: 'apt-terrace-studio',
      name: 'Costa Brava Sunlit Studio',
      type: 'studio',
      tagline: 'Chic, compact seaside retreat for romantic getaways',
      pricePerNight: 98,
      sizeM2: 42,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      image: heroVilla,
      seaView: false,
      distanceToSea: '150m',
      amenities: ['Private Balcony', 'Modern Kitchenette', 'Fast Wi-Fi', 'Rain Shower', 'Quiet Courtyard View'],
      description: 'Thoughtfully appointed with bespoke Mediterranean wood details, a plush double bed, full private bathroom, and direct balcony overlooking quiet gardens.',
    },
    {
      id: 'apt-family-garden',
      name: 'Eldorado Garden Family Residence',
      type: 'family',
      tagline: 'Two-bedroom ground apartment with private patio & lawn',
      pricePerNight: 165,
      sizeM2: 75,
      guests: 5,
      bedrooms: 2,
      bathrooms: 2,
      image: seaViewLiving,
      seaView: false,
      distanceToSea: '150m',
      amenities: ['Private Garden Terrace', '2 Full Baths', 'Family Kitchen', 'Washer/Dryer', 'Child-Friendly'],
      description: 'Ideal for families seeking effortless convenience. Direct ground-floor patio access surrounded by oleanders and bougainvillea, just a 2-minute stroll to the sandy shore.',
    },
  ];

  const filteredApartments = activeFilter === 'all'
    ? apartments
    : apartments.filter((apt) => apt.type === activeFilter);

  return (
    <section id="apartments" className="pt-24 pb-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00a2b4] uppercase mb-2">
              <span>ACCOMMODATION</span>
              <span>·</span>
              <span>FENALS BEACH</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0a3641] tracking-tight">
              Curated Mediterranean Stays
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl text-sm sm:text-base">
              Each apartment is individually styled with natural materials, light-filled living spaces, and balconies catching the sea breeze.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
            {(
              [
                { id: 'all', label: 'All Stays' },
                { id: 'penthouse', label: 'Penthouses' },
                { id: 'suite', label: 'Suites' },
                { id: 'studio', label: 'Studios' },
                { id: 'family', label: 'Family' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#00a2b4] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0a3641] hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredApartments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-[#0a3641]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                    {apt.distanceToSea} to beach
                  </span>
                  {apt.seaView && (
                    <span className="bg-[#00a2b4]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      Sea View
                    </span>
                  )}
                </div>

                {/* Price pill on bottom right of image */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-[#0a3641] px-3.5 py-1.5 rounded-lg shadow-md">
                  <span className="text-xs text-slate-500 font-medium">from </span>
                  <span className="text-lg font-bold font-mono tabular-nums text-[#00a2b4]">
                    €{apt.pricePerNight}
                  </span>
                  <span className="text-xs text-slate-500"> / night</span>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#00a2b4] uppercase tracking-wider mb-1">
                    {apt.tagline}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#0a3641] font-normal leading-snug group-hover:text-[#00a2b4] transition-colors">
                    {apt.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {apt.description}
                  </p>

                  {/* Spec Row */}
                  <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#00a2b4] shrink-0" />
                      <span>Up to <strong>{apt.guests}</strong> guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-[#00a2b4] shrink-0" />
                      <span><strong>{apt.sizeM2}</strong> m² surface</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-[#00a2b4] shrink-0" />
                      <span>Fiber Wi-Fi</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {apt.amenities.slice(0, 4).map((am, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-[#0a3641] bg-[#e6f7f8] px-2.5 py-1 rounded-md"
                      >
                        <Check className="w-3 h-3 text-[#00a2b4]" />
                        {am}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => onSelectApartment(apt)}
                    className="text-xs font-bold text-[#0a3641] hover:text-[#00a2b4] flex items-center gap-1 transition-colors"
                  >
                    <span>View full floorplan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectApartment(apt)}
                    className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#00a2b4] hover:bg-[#008998] active:bg-[#077986] rounded-lg shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book this stay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
