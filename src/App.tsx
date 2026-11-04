import React, { useState } from 'react';
import { TopHeader } from './components/TopHeader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ApartmentsSection, ApartmentItem } from './components/ApartmentsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { LocationSection } from './components/LocationSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ExploreModal } from './components/ExploreModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<ApartmentItem | null>(null);

  // Search parameters passed from hero booking bar
  const [searchParams, setSearchParams] = useState({
    dates: 'Jun 15 — Jun 22, 2026',
    guests: '2 adults · 0 children',
    adults: 2,
    children: 0,
  });

  // Handlers
  const handleOpenBooking = (apt?: ApartmentItem | null) => {
    setSelectedApartment(apt || null);
    setIsBookingOpen(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      'Hello Eldorado Apartments! I am visiting your website and would like to inquire about staying at Fenals Beach, Lloret de Mar.'
    );
    window.open(`https://wa.me/34972369330?text=${text}`, '_blank');
  };

  const handleCheckAvailability = (params: {
    dates: string;
    guests: string;
    adults: number;
    children: number;
  }) => {
    setSearchParams(params);
    setIsBookingOpen(true);
  };

  const scrollToApartments = () => {
    const el = document.getElementById('apartments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#00a2b4]/20 selection:text-[#0a3641]">
      {/* Top Utility Bar */}
      <TopHeader />

      {/* Main Navigation */}
      <Navbar
        onBookClick={() => handleOpenBooking(null)}
        onWhatsAppClick={handleWhatsAppDirect}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section matching client layout with updated logo & turquoise branding */}
        <HeroSection
          onFindApartmentClick={scrollToApartments}
          onExploreClick={() => setIsExploreOpen(true)}
          onCheckAvailability={handleCheckAvailability}
        />

        {/* Apartments Showcase */}
        <ApartmentsSection onSelectApartment={handleOpenBooking} />

        {/* Experience & Amenities */}
        <ExperienceSection />

        {/* Location & Fenals Beach Guide */}
        <LocationSection />

        {/* Visual Gallery with Lightbox */}
        <GallerySection />

        {/* Verified Reviews */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer
        onBookClick={() => handleOpenBooking(null)}
        onWhatsAppClick={handleWhatsAppDirect}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton phoneNumber="34972369330" />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedApartment={selectedApartment}
        initialDates={searchParams.dates}
        initialAdults={searchParams.adults}
        initialChildren={searchParams.children}
      />

      <ExploreModal
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
        onBookNow={() => {
          setIsExploreOpen(false);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}
