import Image from 'next/image';
import { INTRO_CONTENT } from '@/constants';

export default function IntroSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/zkvoting_bg_main_2.avif"
          alt="Background"
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-sm sm:text-base md:text-lg text-white/80">
            {INTRO_CONTENT.subtitle}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {INTRO_CONTENT.title}
          </h2>
        </div>
      </div>
    </section>
  );
}
