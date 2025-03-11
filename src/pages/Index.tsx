
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ModelsSection from "@/components/home/ModelsSection";
import ConfiguratorSection from "@/components/home/ConfiguratorSection";
import TechnologySection from "@/components/home/TechnologySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ModelsSection />
        <ConfiguratorSection />
        <TechnologySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
