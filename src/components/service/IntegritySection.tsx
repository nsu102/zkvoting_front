'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { INTEGRITY_FEATURES, INTEGRITY_CARDS } from '@/constants';
import { renderHighlightedText } from '@/utils/text.utils';

export default function IntegritySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-accent text-xl font-semibold mb-4">Integrity</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            공개형 블록체인에서 언제든 투·개표 정보를 확인하실 수 있습니다
          </h2>
        </motion.div>

        <div className="space-y-8 mb-16">
          {INTEGRITY_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex gap-6 items-center bg-bg-secondary py-6 px-20"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {feature.number}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {renderHighlightedText(feature.text, feature.highlights)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {INTEGRITY_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative p-8 text-center rounded-md overflow-hidden"
            >
              <Image
                src="/imgs/bg_dark_gray_box.avif"
                alt=""
                fill
                className="object-cover"
              />
              <div className="relative z-10">
                <h4 className="text-3xl font-semibold text-white mb-1">{card.title}</h4>
                <p className="text-gray-300 text-xl">{card.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
