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
import TimelineSection from '@/components/sections/TimelineSection';
import BrandsSection from '@/components/sections/BrandsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Ecossistema (Quem somos) */}
        <EcosystemSection />
        {/* 3. Serviços (O que fazemos) */}
        <ServicesSection />
        {/* 4. Método (Como fazemos) */}
        <MethodSection />
        {/* 5. Onde Atuamos */}
        <LocationSection />
        {/* 6. Time */}
        <TeamSection />
        {/* 7. Propósito (Por que fazemos) */}
        <PurposeSection />
        {/* 8. Diferenciais (Por que escolher a Chordata) */}
        <ProblemSection />
        {/* 9. Depoimentos */}
        <TestimonialsSection />
        {/* 10. Timeline (História) */}
        <TimelineSection />
        {/* 11. Marcas */}
        <BrandsSection />
        {/* 12. Contato */}
        <ContactSection />
      </main>
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Index;
