"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { Container } from "@/components/ui"
import faqData from "@/data/faq.json"

export function FaqVariantB() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Editorial Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-lg font-medium text-blue-700">
              <HelpCircle className="w-5 h-5 mr-3" />
              Questions & Answers
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Everything You{" "}
              <span className="text-blue-600 italic">
                Need to Know
              </span>
            </h2>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about Mexico in Silicon Valley.
              Can't find what you're looking for? We're here to help.
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqData.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {category.name}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 1000 + faqIndex
                    const isOpen = openItems.includes(globalIndex)

                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: faqIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-8 py-6 text-left flex items-center justify-between group hover:bg-gray-100 transition-colors"
                        >
                          <h4 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                            {faq.question}
                          </h4>
                          <div className={`
                            flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center transition-all duration-200
                            ${isOpen ? 'rotate-180 bg-blue-700' : 'group-hover:bg-blue-700'}
                          `}>
                            {isOpen ? (
                              <Minus className="w-4 h-4 text-white" />
                            ) : (
                              <Plus className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-6">
                                <div className="border-t border-gray-200 pt-6">
                                  <div className="text-gray-600 leading-relaxed space-y-4">
                                    {Array.isArray(faq.answer) ? (
                                      faq.answer.map((paragraph, pIndex) => (
                                        <p key={pIndex}>{paragraph}</p>
                                      ))
                                    ) : (
                                      <p>{faq.answer}</p>
                                    )}

                                    {faq.links && faq.links.length > 0 && (
                                      <div className="pt-4 space-y-2">
                                        <p className="font-medium text-gray-700">
                                          Helpful links:
                                        </p>
                                        <ul className="space-y-1">
                                          {faq.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                              <a
                                                href={link.url}
                                                className="text-blue-600 hover:text-blue-700 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                {link.text}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Editorial Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team is here to help. Whether you need assistance with tickets,
                accommodations, or general inquiries, we're just a message away.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                  Contact Support
                </div>
                <div className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer">
                  Live Chat
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto pt-8 border-t border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">General Inquiries</div>
                  <div className="text-blue-600">hello@mexicoinsiliconvalley.com</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Media & Press</div>
                  <div className="text-blue-600">press@mexicoinsiliconvalley.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}