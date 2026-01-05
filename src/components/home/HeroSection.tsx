import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '@/constants';

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full">
        <div className="relative w-full lg:aspect-[2.16/1] md:aspect-[1.26/1] aspect-2/3">
          <div className="absolute inset-0 z-0">
            <Image
              src="/imgs/zkvoting_main_bg.avif"
              alt="Hero Background"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
              priority
            />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
              <div className="max-w-3xl space-y-6 md:space-y-4">
                <p className="text-sm md:text-lg font-medium text-white/90 tracking-wide uppercase">
                  {HERO_CONTENT.smallTitle}
                </p>
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                  {HERO_CONTENT.mainTitle.line1}
                  <br />
                  {HERO_CONTENT.mainTitle.line2}
                </h1>

                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 pt-4">
                  <Link
                    href={HERO_CONTENT.buttons.quote.href}
                    className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    {HERO_CONTENT.buttons.quote.label}
                  </Link>
                  <Link
                    href={HERO_CONTENT.buttons.contact.href}
                    className="px-8 py-3 bg-transparent border border-white text-white font-normal rounded-md hover:bg-white/10 transition-colors"
                  >
                    {HERO_CONTENT.buttons.contact.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-50 right-0 bg-white/10 h-30">
            <div className="grid grid-cols-3 text-white text-center h-full">
              {HERO_CONTENT.bottomTabs.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className='group flex cursor-pointer items-center justify-center h-full text-2xl transition-colors gap-1.5 hover:bg-white hover:text-primary'
                >
                  {tab.label}
                  <ArrowRight className='border border-white rounded-full p-0.5 mt-px transition-colors group-hover:border-primary' />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
