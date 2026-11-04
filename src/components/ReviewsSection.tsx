import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Sophie & Marc Laurent',
      location: 'Lyon, France',
      stay: 'Stayed 8 nights in Sea-View Penthouse',
      rating: 5,
      date: 'September 2025',
      title: 'Even better than the photos. Unmatched location.',
      text: 'Having Fenals Beach just two minutes on foot made our summer holiday effortless. We took morning dips before breakfast and spent evenings on the private penthouse terrace with a glass of Priorat wine. The apartment was spotless and the WhatsApp support answered questions within minutes.',
    },
    {
      name: 'Alejandro Morales',
      location: 'Madrid, Spain',
      stay: 'Stayed 14 nights in Deluxe Suite (Workation)',
      rating: 5,
      date: 'June 2025',
      title: 'Reliable fiber Wi-Fi and absolute tranquility.',
      text: 'I worked remotely for two weeks while my partner enjoyed the coast. Symmetrical fiber internet never dropped once on Zoom calls. Fenals is far more peaceful and classy than the main party strip of Lloret. We will definitely return next spring.',
    },
    {
      name: 'Karin & Henrik Lindqvist',
      location: 'Stockholm, Sweden',
      stay: 'Stayed 6 nights in Sunlit Studio',
      rating: 5,
      date: 'May 2025',
      title: 'The keyless self check-in was a breeze after our late flight.',
      text: 'Our flight into Girona landed late at night, so being able to walk right into our apartment with the digital code without disturbing anyone was a huge relief. Crisp linen bedding, wonderful shower pressure, and steps from lovely coastal cafes.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Rating Scoreboard Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#e6f7f8] flex flex-col items-center justify-center text-[#00a2b4]">
              <span className="text-2xl font-black font-mono tabular-nums leading-none">4.9</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">OUT OF 5</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#f59e0b] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h3 className="text-base font-bold text-[#0a3641]">
                Exceptional Guest Satisfaction
              </h3>
              <p className="text-xs text-slate-500">
                Verified reviews from 340+ completed reservations across 2024–2025
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00a2b4]" />
              <span>Location Score: <strong>9.8 / 10</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00a2b4]" />
              <span>Cleanliness: <strong>9.9 / 10</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00a2b4]" />
              <span>Official Catalan Tourism License</span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#f59e0b] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <h4 className="text-base font-serif font-bold text-[#0a3641] mb-2 leading-snug">
                  "{rev.title}"
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {rev.text}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#0a3641]">{rev.name}</div>
                  <div className="text-[11px] text-slate-400">{rev.location}</div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
