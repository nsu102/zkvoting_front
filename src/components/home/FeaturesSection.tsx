import Link from 'next/link';
import Image from 'next/image';
import { FEATURES_CONTENT } from '@/constants';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  buttonLabel: string;
  isLeftAligned?: boolean;
}

function FeatureCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  link,
  buttonLabel,
  isLeftAligned = true,
}: FeatureCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 lg:px-12">
      <div className={`flex flex-col ${isLeftAligned ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-80">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
          <p className="text-sm md:text-base text-purple-300 font-medium">
            {title}
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {subtitle}
          </h3>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {description}
          </p>
          <Link
            href={link}
            className="inline-block px-8 py-3 border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* Same background as IntroSection */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/zkvoting_bg_main_2.avif"
          alt="Background"
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {FEATURES_CONTENT.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
