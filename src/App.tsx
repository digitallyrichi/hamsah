import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutCapabilities } from './components/AboutCapabilities';
import { LifecycleNavigator } from './components/LifecycleNavigator';
import { CorePillars } from './components/CorePillars';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingFAQ } from './components/FloatingFAQ';
import { WhatsAppFloatingButton } from './components/WhatsAppButton';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [selectedStage, setSelectedStage] = useState<string>('Stage 01: The Idea');
  const [selectedPractice, setSelectedPractice] = useState<string>('Bid & Tender Management');

  // Intersection Observer for scroll-triggered section entrance animations
  useEffect(() => {
    // If IntersectionObserver is not supported, reveal all immediately
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.remove('opacity-0', 'translate-y-8');
        el.classList.add('opacity-100', 'translate-y-0');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            // Unobserve after animating in to conserve performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.08,
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLifecycle = () => {
    const el = document.getElementById('lifecycle');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStageSelectForBooking = (stageTitle: string) => {
    setSelectedStage(stageTitle);
    scrollToBooking();
  };

  const handlePracticeSelectForBooking = (practiceTitle: string) => {
    setSelectedPractice(practiceTitle);
    scrollToBooking();
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0e1620] text-slate-900 dark:text-slate-200 flex flex-col selection:bg-[#f38545] selection:text-white transition-colors duration-200">
        {/* Viewport Scroll Depth Progress Bar */}
        <ScrollProgress />

        {/* Top Advisory Bar & Navigation */}
        <Header onBookClick={scrollToBooking} />

        {/* Main Content Sections with Viewport Reveal Animation */}
        <main className="flex-1 overflow-hidden">
          {/* 1. Hero Section - Immediate smooth presence */}
          <div>
            <Hero
              onExploreLifecycle={scrollToLifecycle}
              onBookClick={scrollToBooking}
            />
          </div>

          {/* 2. Who We Are & Capabilities (What We Do) */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out will-change-[opacity,transform]">
            <AboutCapabilities
              onSelectPractice={handlePracticeSelectForBooking}
            />
          </div>

          {/* 3. The 8-Stage Business Lifecycle Journey */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out will-change-[opacity,transform]">
            <LifecycleNavigator
              onSelectStageForBooking={handleStageSelectForBooking}
            />
          </div>

          {/* 4. What Remains Constant (Core Pillars) */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out will-change-[opacity,transform]">
            <CorePillars />
          </div>

          {/* 5. Appointment Booking System */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out will-change-[opacity,transform]">
            <BookingSection
              selectedStage={selectedStage}
              selectedPractice={selectedPractice}
            />
          </div>

          {/* 6. Contact & Gurugram Headquarters */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out will-change-[opacity,transform]">
            <ContactSection />
          </div>
        </main>

        {/* Floating Direct WhatsApp Action Button */}
        <WhatsAppFloatingButton />

        {/* Floating Collapsible Advisory FAQ Drawer */}
        <FloatingFAQ onBookConsultation={scrollToBooking} />

        {/* Footer & Regulatory Disclaimers */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
