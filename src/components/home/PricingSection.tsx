'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRICING_SECTION } from '@/constants';

export default function PricingSection() {
  return (
    <section className="py-12 mb-40">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
        >
          {PRICING_SECTION.title}
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {PRICING_SECTION.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Plan Name - Left Side */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 md:w-1/3 flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {plan.name}
                  </h3>
                </div>

                {/* Plan Details - Right Side */}
                <div className="flex-1 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {plan.price}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      {plan.description}
                    </p>
                  </div>

                  <Link
                    href={plan.buttonLink}
                    className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
                  >
                    {plan.buttonLabel}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
