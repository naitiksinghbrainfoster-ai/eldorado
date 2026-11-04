import React from 'react';
import { Waves, Sun, KeyRound, Coffee, Wifi, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import fenalsBeach from '../assets/images/fenals_beach_coast_1793017628172.jpg';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: Waves,
      title: '150m from Fenals Shoreline',
      subtitle: 'Costa Brava\'s pristine bay',
      description: 'Step out of your apartment and within 2 minutes sink your toes into the soft golden sand of Fenals Beach, renowned for crystal waters and sheltered cove serenity.',
    },
    {
      icon: Sun,
      title: 'Private Terraces & Sun Decks',
      subtitle: 'Sea breeze from dawn to dusk',
      description: 'Every suite includes private outdoor space for morning coffee, evening cava, or simply watching Mediterranean sunsets over pine-clad coastal cliffs.',
    },
    {
      icon: KeyRound,
      title: '24/7 Keyless Smart Access',
      subtitle: 'Seamless, flexible arrival',
      description: 'Arrive at any hour with our encrypted keypad check-in system. No waiting at front desks, with personalized WhatsApp concierge support ready 24/7.',
    },
    {
      icon: Wifi,
      title: 'High-Speed Fiber Wi-Fi',
      subtitle: 'Ideal for workations',
      description: 'Symmetrical 600 Mbps fiber connectivity with comfortable ergonomic workspaces, making Eldorado ideal for digital nomads and extended stays.',
    },
    {
      icon: Coffee,
      title: 'Fully Appointed Kitchens',
      subtitle: 'Local market dining at home',
      description: 'Cook fresh Mediterranean seafood from the Lloret market in your induction kitchen, complete with Nespresso machines, dishwasher, and designer cookware.',
    },
    {
      icon: Compass,
      title: 'Costa Brava Trail Access',
      subtitle: 'Camí de Ronda path steps away',
      description: 'Direct access to the breathtaking coastal walking path that connects Fenals to Santa Clotilde Gardens, Sa Boadella nudist cove, and ancient castle viewpoints.',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00a2b4] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE ELDORADO EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0a3641] tracking-tight">
            Designed for unhurried Mediterranean living.
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            We blend the autonomy and comfort of a stylish private home with boutique seaside hospitality in the quietest, most scenic district of Lloret de Mar.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-100 bg-[#f4fbfc]/50 hover:bg-[#e6f7f8]/50 hover:border-[#00a2b4]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00a2b4] text-white flex items-center justify-center mb-6 shadow-md shadow-[#00a2b4]/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-[#00a2b4] uppercase tracking-wider mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-xl font-serif text-[#0a3641] font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Callout Banner */}
        <div className="mt-16 bg-[#0a3641] rounded-2xl overflow-hidden shadow-xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-widest text-[#5be5f3] uppercase mb-2">
                PEACE OF MIND GUARANTEE
              </span>
              <h3 className="text-2xl md:text-3xl font-serif leading-snug mb-4">
                Transparent direct booking with complimentary cancellation up to 7 days before arrival.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                When booking directly with Eldorado, you receive guaranteed best rates, complimentary beach towels, welcome Spanish wine & olive oil, and flexible check-in times.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5be5f3]" />
                  <span>Verified Safe & Clean Stay</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5be5f3]" />
                  <span>Welcome Mediterranean Basket</span>
                </div>
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-[#5be5f3]" />
                  <span>Zero Key Deposit</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
              <img
                src={fenalsBeach}
                alt="Fenals Beach Costa Brava"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a3641] lg:from-[#0a3641] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
