import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import HeroSection from '@/components/sections/HeroSection';
import PurposeSection from '@/components/sections/PurposeSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import MethodSection from '@/components/sections/MethodSection';
import ServicesSection from '@/components/sections/ServicesSection';
import LocationSection from '@/components/sections/LocationSection';
import TimelineSection from '@/components/sections/TimelineSection';
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
        {/* 2. Propósito */}
        <PurposeSection />
        {/* 3. Trajetória (Timeline) */}
        <TimelineSection />
        {/* 4. Ecossistema */}
        <EcosystemSection />
        {/* 5. Nossos Serviços */}
        <ServicesSection />
        {/* 6. Nosso Método */}
        <MethodSection />
        {/* 7. Onde Atuamos */}
        <LocationSection />
        {/* 8. Equipe (Time) */}
        <TeamSection />
        {/* 9. Depoimentos */}
        <TestimonialsSection />
        {/* 10. Contato */}
        <ContactSection />
      </main>
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Index;
