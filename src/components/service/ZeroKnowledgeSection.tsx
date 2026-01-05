'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ZERO_KNOWLEDGE_CAROUSEL } from '@/constants';

export default function ZeroKnowledgeSection() {
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
          <h3 className="text-accent text-xl font-semibold mb-4">
            End - To - End Verifiability
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            비밀투표의 유효성을 안전하고 투명하게 검증하는
            <br />
            영지식증명 기술(Zero-Knowledge Proof)
          </h2>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              공개형 블록체인에 저장된 내용은 모든 사람들에게 공개되기 때문에
              <br />
              투표의 비밀성을 위해서는 <strong className="font-bold underline text-gray-900">암호화하여 저장</strong>해야 합니다.
            </p>
            <p>
              그러나 투표가 암호화되어 있기 때문에
              <br />
              유효한 유권자가 올바르게 투표했는지의 유효성을 확인하기 어렵습니다.
            </p>
            <p>
              제로지식증명은 암호화된 데이터의 내용을 공개하지 않고도,
              <br />
              데이터가 특정 속성을 만족한다는 사실을 누구나 확인할 수 있게 해주는 암호 기술입니다.
            </p>
            <p>
              블록체인에 암호화된 투표와 제로지식 증명을 기록하면,
              <br />
              <strong className="font-bold text-gray-900 underline">투표의 비밀성을 유지하면서도 투표의 유효성을 누구나 확인할 수 있습니다.</strong>
            </p>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <Carousel className="w-full relative">
          <CarouselContent>
            {ZERO_KNOWLEDGE_CAROUSEL.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="space-y-4">
                  {/* Top Image */}
                  <div className="relative w-full h-56.25">
                    <Image
                      src={slide.topImage}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Bottom Image */}
                  <div className="relative w-full h-93.75">
                    <Image
                      src={slide.bottomImage}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-12" />
          <CarouselNext className="right-12" />
        </Carousel>
      </div>
    </section>
  );
}
