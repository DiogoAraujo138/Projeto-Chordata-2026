import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import HeroSection from '@/components/sections/HeroSection';
import PurposeSection from '@/components/sections/PurposeSection';
import ProblemSection from '@/components/sections/ProblemSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import MethodSection from '@/components/sections/MethodSection';
import ServicesSection from '@/components/sections/ServicesSection';
import LocationSection from '@/components/sections/LocationSection';

import ClientsSection from '@/components/sections/ClientsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <PurposeSection />
        <ProblemSection />
        <EcosystemSection />
        <MethodSection />
        <ServicesSection />
        <LocationSection />
        
        <ClientsSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Index;
