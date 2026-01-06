'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  VOTING_FEATURES_SECTION,
  DIVERSE_VOTING_FEATURES,
  ACCURATE_VOTING_FEATURES,
} from '@/constants';

export default function VotingFeaturesSection() {
  const [activeTab, setActiveTab] = useState<'online' | 'offline'>('online');

  const handleTabClick = (tabId: 'online' | 'offline') => {
    setActiveTab(tabId);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {VOTING_FEATURES_SECTION.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            {VOTING_FEATURES_SECTION.subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          {VOTING_FEATURES_SECTION.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id as 'online' | 'offline')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content - Show offline image or online features */}
        {activeTab === 'offline' ? (
          <motion.div
            key="offline"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center py-12"
          >
            <div className="relative w-full max-w-3xl aspect-video">
              <Image
                src="/imgs/현장투표 준비중.avif"
                alt="현장투표 준비중"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        ) : (
          <>
            {/* Diverse Features Section */}
            <motion.div
              key="diverse"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                {DIVERSE_VOTING_FEATURES.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {DIVERSE_VOTING_FEATURES.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Accurate Features Section */}
            <motion.div
              key="accurate"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                {ACCURATE_VOTING_FEATURES.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ACCURATE_VOTING_FEATURES.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
