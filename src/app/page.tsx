import { HeroSection, IntroSection, FeaturesSection } from '@/components/home';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
    </main>
  );
}
