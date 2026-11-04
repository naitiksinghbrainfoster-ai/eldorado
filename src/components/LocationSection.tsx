import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Waves, Trees, Utensils, Plane } from 'lucide-react';
import fenalsBeach from '../assets/images/fenals_beach_coast_1793017628172.jpg';

export const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'beach' | 'gardens' | 'trail' | 'dining'>('beach');

  const places = {
    beach: {
      title: 'Platja de Fenals',
      distance: '150 meters (2 min walk)',
      badge: 'Immediate Proximity',
      description: 'The quieter, more upscale alternative to Lloret\'s central beach. Fenals is celebrated for crystal-clear azure waters, coarse golden sand that doesn\'t stick, paddleboard rentals, and peaceful beachfront chiringuitos (beach cafes).',
      tips: 'Morning swims before 10 AM offer mirror-like calm water with schools of Mediterranean fish visible through the shallows.',
      icon: Waves,
    },
    gardens: {
      title: 'Jardins de Santa Clotilde',
      distance: '650 meters (8 min walk)',
      badge: 'Historic Landmark',
      description: 'Perched on a cliff overlooking the sea, these internationally acclaimed Italian Renaissance-style gardens are shaded by cypress trees, marble sirens, and panoramic viewing terraces. Featured as high-fantasy filming locations.',
      tips: 'Visit in the golden hour before sunset for cinematic views over Cala Sa Boadella cove.',
      icon: Trees,
    },
    trail: {
      title: 'Camí de Ronda Coastal Path',
      distance: '200 meters (3 min walk)',
      badge: 'Scenic Hiking',
      description: 'The legendary footpath tracing the Costa Brava shoreline. Winding through pine groves and rocky headlands, it connects Fenals to secluded turquoise coves and medieval watchtowers.',
      tips: 'Wear comfortable walking shoes for the 25-minute trail heading south toward Blanes.',
      icon: Compass,
    },
    dining: {
      title: 'Authentic Catalan Seafood & Tapas',
      distance: '50 - 300 meters',
      badge: 'Local Gastronomy',
      description: 'The Fenals residential quarter hosts some of the region\'s most authentic family-run seafood restaurants, offering daily wild fish catches, traditional paellas, tapas bars, and artisan gelaterias away from tourist crowds.',
      tips: 'Try the Fideuà (seafood noodles with homemade alioli) at the promenade bistros.',
      icon: Utensils,
    },
  };

  const current = places[activeTab];

  return (
    <section id="location" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00a2b4] uppercase mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>THE NEIGHBORHOOD</span>
              <span>·</span>
              <span>COSTA BRAVA</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0a3641] tracking-tight">
              Fenals: The refined side of Lloret de Mar.
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl text-sm sm:text-base">
              Nestled between fragrant pine forests and the Mediterranean shore, Fenals is a peaceful haven just minutes from vibrant Catalonia culture.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
            <Plane className="w-4 h-4 text-[#00a2b4]" />
            <span>28 min from Girona Airport · 65 min from Barcelona</span>
          </div>
        </div>

        {/* Interactive Location Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Spot Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {[
              { id: 'beach', label: 'Fenals Beach & Sea', dist: '150m', icon: Waves },
              { id: 'gardens', label: 'Santa Clotilde Gardens', dist: '650m', icon: Trees },
              { id: 'trail', label: 'Camí de Ronda Trail', dist: '200m', icon: Compass },
              { id: 'dining', label: 'Seafood & Tapas Dining', dist: '100m', icon: Utensils },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`p-4 rounded-xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#00a2b4] shadow-md ring-1 ring-[#00a2b4]/30'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#00a2b4] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0a3641]">{tab.label}</h4>
                      <p className="text-[11px] text-slate-500">Walking distance from Eldorado</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                      isSelected ? 'bg-[#e6f7f8] text-[#00a2b4]' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tab.dist}
                  </span>
                </button>
              );
            })}

            {/* Quick Map Directions Card */}
            <div className="mt-4 p-5 bg-[#0a3641] rounded-xl text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5be5f3] uppercase tracking-wider mb-2">
                <Navigation className="w-4 h-4" />
                <span>Exact Location</span>
              </div>
              <p className="text-sm text-slate-200 font-medium mb-1">
                Carrer de Josep Pla, Fenals
              </p>
              <p className="text-xs text-slate-400 mb-4">
                17310 Lloret de Mar, Girona, Costa Brava, Spain
              </p>
              <a
                href="https://maps.google.com/?q=Fenals+Beach+Lloret+de+Mar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#00a2b4] hover:bg-[#008998] py-2 px-3.5 rounded-lg transition-colors"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Spot Details & Photography */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold text-[#00a2b4] uppercase tracking-wider bg-[#e6f7f8] px-3 py-1 rounded-full">
                  {current.badge}
                </span>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00a2b4]" />
                  {current.distance}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-[#0a3641] font-semibold mb-3">
                {current.title}
              </h3>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Local Insider Tip */}
              <div className="bg-slate-50 border-l-2 border-[#00a2b4] p-4 rounded-r-lg mb-6">
                <div className="text-xs font-bold text-[#0a3641] uppercase tracking-wider mb-1">
                  Eldorado Concierge Tip
                </div>
                <div className="text-xs text-slate-600 italic">
                  "{current.tips}"
                </div>
              </div>
            </div>

            {/* Scenic Image Preview */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] relative bg-slate-100 shadow-inner">
              <img
                src={fenalsBeach}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-md font-medium">
                Fenals Coastline · 150m from Eldorado Apartments
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
