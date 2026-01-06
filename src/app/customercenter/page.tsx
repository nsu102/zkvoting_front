'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/constants';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function CustomerCenterPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFaqToggle = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            고객센터
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            자주 묻는 질문을 확인하시거나 1:1 문의를 남겨주세요
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="faq" className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="inquiry">1:1문의</TabsTrigger>
            </TabsList>
          </motion.div>

          {/* FAQ Content */}
          <TabsContent value="faq">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => handleFaqToggle(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-500 shrink-0 transition-transform ${
                          openFaqId === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaqId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
                            {faq.answer.map((paragraph, idx) => (
                              <p
                                key={idx}
                                className="text-gray-700 leading-relaxed mb-3 last:mb-0"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Inquiry Form Content */}
          <TabsContent value="inquiry">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  1:1 문의하기
                </h2>
                <p className="text-gray-600 mb-8">
                  문의 내용을 남겨주시면 빠른 시일 내에 답변드리겠습니다.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      제목 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="문의 제목을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      문의 내용 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={8}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="문의 내용을 상세히 입력해주세요"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    문의 보내기
                  </button>
                </form>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
