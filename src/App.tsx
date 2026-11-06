import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CanvasCarScroller } from './components/CanvasCarScroller';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { PricingPackages } from './components/PricingPackages';
import { FaqSection } from './components/FaqSection';
import { StudioLocation } from './components/StudioLocation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-[#580318]/50 selection:text-[#d6d9dc]">
      {/* Top sticky glass navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 1. Interactive Sequential Canvas Car Scroller starts immediately at the top */}
        <CanvasCarScroller onOpenBooking={handleOpenBooking} />

        {/* 2. Studio Quality Credentials & Impact Metrics Strip */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Core Detailing Services */}
        <ServicesGrid onOpenBooking={handleOpenBooking} />

        {/* 4. Tier Pricing Packages */}
        <PricingPackages onOpenBooking={handleOpenBooking} />

        {/* 5. FAQ Accordion */}
        <FaqSection />

        {/* 6. Studio Location & Simulated Radar Map */}
        <StudioLocation />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Multi-step Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
};

export default App;
