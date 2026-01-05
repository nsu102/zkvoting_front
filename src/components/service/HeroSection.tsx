'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-62.5 md:h-70 lg:h-75 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/imgs/zkvoting_banner_bg.avif"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-full flex flex-col items-center justify-center max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3"
        >
          언제 어디서나 빠르고 안전하게 경험하는
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white"
        >
          공개형 블록체인 온라인 투표
        </motion.h2>
      </motion.div>
    </section>
  );
}
