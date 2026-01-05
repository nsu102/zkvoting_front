'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BEST_IN_WORLD_PARAGRAPHS } from '@/constants';
import { renderHighlightedText } from '@/utils/text.utils';

export default function BestInWorldSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-accent text-xl font-semibold mb-4">
            The Best in the World
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-15">
            세계에서 인정받은 블록체인 온라인 투표 시스템, zkVoting
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 leading-relaxed mb-12 px-20"
          >
            {BEST_IN_WORLD_PARAGRAPHS.map((paragraph, index) => (
              <p
                key={index}
                className='text-xl text-nav-bg'
              >
                {renderHighlightedText(paragraph.text, paragraph.highlights)}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="https://admin.zkvoting.com/login"
              className="inline-block px-12 py-3.5 bg-white border border-primary text-primary rounded-sm font-semibold hover:bg-primary hover:text-white transition-colors text-lg"
            >
              투표 개설하기
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
