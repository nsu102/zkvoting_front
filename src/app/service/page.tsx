import HeroSection from '@/components/service/HeroSection';
import IntegritySection from '@/components/service/IntegritySection';
import ZeroKnowledgeSection from '@/components/service/ZeroKnowledgeSection';
import BestInWorldSection from '@/components/service/BestInWorldSection';
import VideoSection from '@/components/service/VideoSection';
import Footer from '@/components/service/Footer';

export default function ServicePage() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <HeroSection />
      <IntegritySection />
      <ZeroKnowledgeSection />
      <BestInWorldSection />
      <VideoSection />
      <Footer />
    </div>
  );
}
