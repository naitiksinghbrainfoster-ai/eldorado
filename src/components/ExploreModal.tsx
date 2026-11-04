import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, MapPin, Compass, ArrowRight } from 'lucide-react';
import heroVilla from '../assets/images/hero_mediterranean_villa_1793017626468.jpg';
import seaViewLiving from '../assets/images/apartment_sea_view_living_1793017627043.jpg';
import fenalsBeach from '../assets/images/fenals_beach_coast_1793017628172.jpg';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export const ExploreModal: React.FC<ExploreModalProps> = ({ isOpen, onClose, onBookNow }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedTourSpot, setSelectedTourSpot] = useState(0);

  if (!isOpen) return null;

  const tourSpots = [
    {
      title: 'Mediterranean Villa Terrace & Steps',
      desc: 'Bougainvillea-draped stone terrace with morning sun over Costa Brava',
      image: heroVilla,
      tag: '01 · Exterior & Architecture',
    },
    {
      title: 'Airy Sea-View Living Suites',
      desc: 'French doors opening towards Fenals Bay with natural oak finishes',
      image: seaViewLiving,
      tag: '02 · Interior Living',
    },
    {
      title: 'Platja de Fenals Bay',
      desc: 'Just 150 meters from Eldorado — pristine turquoise waters and golden sand',
      image: fenalsBeach,
      tag: '03 · Shoreline & Surroundings',
    },
  ];

  const spot = tourSpots[selectedTourSpot];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0a3641] text-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#00a2b4]/30 relative animate-fadeIn flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#00a2b4] flex items-center justify-center font-bold text-xs">
              E
            </span>
            <div>
              <h3 className="text-base md:text-lg font-serif font-bold text-white">
                Explore Eldorado Apartments
              </h3>
              <p className="text-[11px] text-[#5be5f3]">
                Virtual Tour & Experience · Fenals Beach, Lloret de Mar
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
          <img
            src={spot.image}
            alt={spot.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Tour Spot Overlay Info */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-auto">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#5be5f3] uppercase bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                {spot.tag}
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold mt-1 text-white">
                {spot.title}
              </h4>
              <p className="text-xs text-slate-200 mt-0.5 max-w-md">
                {spot.desc}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#00a2b4] backdrop-blur-md flex items-center justify-center transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#00a2b4] backdrop-blur-md flex items-center justify-center transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Spot Selector Bar */}
        <div className="p-4 bg-[#07242c] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {tourSpots.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTourSpot(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedTourSpot === idx
                    ? 'bg-[#00a2b4] text-white shadow-xs'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {item.title.split(' ')[0]} {item.title.split(' ')[1]}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              onClose();
              onBookNow();
            }}
            className="w-full sm:w-auto px-5 py-2 text-xs font-bold text-[#07242c] bg-[#5be5f3] hover:bg-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>Book this stay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
