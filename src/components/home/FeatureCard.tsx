'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

export function FeatureCard({
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-sm w-full rounded-xl p-6 lg:px-12"
    >
      <div className={`flex flex-col ${isLeftAligned ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isLeftAligned ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md h-80">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isLeftAligned ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 space-y-2 md:space-y-3 text-center lg:text-left"
        >
          <p className="text-base md:text-xl text-tertiary font-bold">
            {title}
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {subtitle}
          </h3>
          <p className="text-base md:text-lg text-white leading-relaxed whitespace-pre-line">
            {description}
          </p>
          <Link
            href={link}
            className="inline-block px-8 py-3 border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors"
          >
            {buttonLabel}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
