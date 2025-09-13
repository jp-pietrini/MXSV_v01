"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Container, SectionHeader, Card, CardContent, Button } from "@/components/ui"
import { cn } from "@/lib/utils"
import faqData from "@/data/faq.json"

const categoryTabs = [
  { id: "general", label: "General" },
  { id: "tickets", label: "Tickets" },
  { id: "travel", label: "Travel" },
  { id: "venue", label: "Venue" },
  { id: "networking", label: "Networking" }
]

export function FAQVariantA() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openItems, setOpenItems] = useState<string[]>([])

  const filteredFAQs = faqData
    .filter(faq => faq.category === activeCategory && faq.isVisible)
    .sort((a, b) => a.order - b.order)

  const toggleItem = (itemId: string) => {
    setOpenItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about MXSV 2026."
            size="md"
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id)
                setOpenItems([]) // Close all items when switching categories
              }}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                activeCategory === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-4xl mx-auto space-y-4"
        >
          {filteredFAQs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id)

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-gray-400 transition-transform duration-200 flex-shrink-0",
                            isOpen && "transform rotate-180"
                          )}
                        />
                      </div>
                    </CardContent>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* No FAQs Message */}
        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center py-12"
          >
            <p className="text-gray-500">
              No frequently asked questions found for this category.
            </p>
          </motion.div>
        )}

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-white border-gray-200">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Still Have Questions?
                  </h3>
                  <p className="text-gray-600">
                    Can't find what you're looking for? Our team is here to help you with any
                    questions about MXSV 2026.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    Contact Support
                  </Button>
                  <Button variant="ghost" size="lg">
                    Submit a Question
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}