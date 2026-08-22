"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BookingForm from "@/components/sections/BookingForm";
import FAQSection from "@/components/sections/FAQSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SectionDivider />
        <ServicesSection />
        <TestimonialsSection />
        <BookingForm />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
