"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react"
import { Container } from "@/components/ui"
import faqData from "@/data/faq.json"

export function FaqVariantC() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-bl from-blue-500/5 to-purple-600/5 rounded-full blur-3xl translate-x-1/3" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/5 to-blue-600/5 rounded-full blur-3xl -translate-x-1/3" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-base font-medium text-blue-700">
              <HelpCircle className="w-5 h-5 mr-3" />
              Questions & Answers
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Everything You{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Need to Know
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                  <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg mb-4">
                    <Sparkles className="w-5 h-5 mr-2" />
                    <h3 className="text-xl lg:text-2xl font-bold">
                      {category.name}
                    </h3>
                  </div>
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
                        className="group relative"
                      >
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                          {/* Gradient border on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                          
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-8 py-6 text-left flex items-center justify-between group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200"
                          >
                            <h4 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 pr-4">
                              {faq.question}
                            </h4>
                            <div className={`
                              flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center transition-all duration-200
                              ${isOpen ? 'rotate-180' : ''}
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
                                  <div className="border-t border-gradient-to-r from-blue-100 to-purple-100 pt-6">
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
                                                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:underline"
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
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-3xl" />
              <div className="relative">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Still Have{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Questions?
                  </span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Our team is here to help. Whether you need assistance with tickets,
                  accommodations, or general inquiries, we're just a message away.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl">
                    Contact Support
                  </div>
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-200 rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 cursor-pointer">
                    Live Chat
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto pt-8 border-t border-blue-200">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">General Inquiries</div>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      hello@mexicoinsiliconvalley.com
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Media & Press</div>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      press@mexicoinsiliconvalley.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}