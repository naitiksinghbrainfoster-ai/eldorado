import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import heroVilla from '../assets/images/hero_mediterranean_villa_1793017626468.jpg';
import seaViewLiving from '../assets/images/apartment_sea_view_living_1793017627043.jpg';
import luxuryBedroom from '../assets/images/apartment_luxury_bedroom_1793017627989.jpg';
import fenalsBeach from '../assets/images/fenals_beach_coast_1793017628172.jpg';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'views' | 'interiors' | 'beach'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    {
      url: heroVilla,
      title: 'Mediterranean Villa Terrace & Bougainvillea',
      category: 'views',
      caption: 'Sunlit stone staircase, blooming bougainvillea, and sea breezes in Lloret de Mar.',
    },
    {
      url: seaViewLiving,
      title: 'Penthouse Living Space & Balcony',
      category: 'interiors',
      caption: 'Airy open living room with wide French doors framing the turquoise Mediterranean.',
    },
    {
      url: luxuryBedroom,
      title: 'Master Bedroom with Coastal Balcony',
      category: 'interiors',
      caption: 'Crisp linens, woven textures, and soft morning sunlight streaming across the suite.',
    },
    {
      url: fenalsBeach,
      title: 'Platja de Fenals Aerial View',
      category: 'beach',
      caption: 'Golden sand cove sheltered by Mediterranean pine headlands, just 150m away.',
    },
  ];

  const filtered = activeCategory === 'all'
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filtered.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00a2b4] uppercase mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>VISUAL SHOWCASE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0a3641] tracking-tight">
              Life at Eldorado
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl text-sm sm:text-base">
              Explore the light, texture, and Mediterranean tranquility awaiting your stay in Costa Brava.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-50 border border-slate-200 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'views', label: 'Terraces & Views' },
              { id: 'interiors', label: 'Suites & Living' },
              { id: 'beach', label: 'Fenals Beach' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#00a2b4] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0a3641] hover:bg-slate-200/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">{img.title}</h4>
                  <Maximize2 className="w-4 h-4 text-[#5be5f3]" />
                </div>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filtered[selectedImageIndex].url}
              alt={filtered[selectedImageIndex].title}
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-lg font-serif font-bold text-white">
                {filtered[selectedImageIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-lg">
                {filtered[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
