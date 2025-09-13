'use client'

import { useState } from 'react'
import { useTranslations } from '@/hooks/use-translations'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, HelpCircle } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('general')
  const t = useTranslations('faq')

  // Placeholder FAQ data
  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'What is Mexico in Silicon Valley (MXSV)?',
      answer: 'MXSV is a premier two-day conference that bridges the innovation gap between Mexico\'s growing tech ecosystem and Silicon Valley. It features workshops, panels, and networking opportunities for tech leaders, entrepreneurs, and innovators.',
      category: 'general'
    },
    {
      id: '2',
      question: 'Who should attend MXSV 2026?',
      answer: 'MXSV is perfect for tech entrepreneurs, startup founders, investors, corporate leaders, developers, and anyone interested in the Mexico-Silicon Valley tech connection. Both emerging and experienced professionals will find value.',
      category: 'general'
    },
    {
      id: '3',
      question: 'What is the difference between Day 1 and Day 2?',
      answer: 'Day 1 features exclusive workshops for leaders focusing on practical skills (AI, Design Thinking, Social Innovation). Day 2 hosts public panels discussing broader industry topics, open to all attendees.',
      category: 'general'
    },
    {
      id: '4',
      question: 'Where exactly is the conference held?',
      answer: 'The conference takes place at Stanford University in Palo Alto, California. Specific building and room details will be provided to registered attendees closer to the event date.',
      category: 'logistics'
    },
    {
      id: '5',
      question: 'Is accommodation provided?',
      answer: 'Accommodation is not included in ticket prices. We will provide a list of recommended hotels and lodging options near Stanford University. Some sponsors may offer accommodation packages.',
      category: 'logistics'
    },
    {
      id: '6',
      question: 'What languages will be used at the conference?',
      answer: 'The primary language is English, with some sessions potentially offering Spanish translation. All materials will be available in both English and Spanish.',
      category: 'logistics'
    },
    {
      id: '7',
      question: 'How can I become a speaker?',
      answer: 'Speaker applications are currently being reviewed. Submit your interest through our contact form, including your background, proposed topic, and relevant experience. Our committee reviews applications on a rolling basis.',
      category: 'speakers'
    },
    {
      id: '8',
      question: 'What are the speaker requirements?',
      answer: 'Speakers should have relevant expertise in technology, entrepreneurship, or innovation with experience in Mexico-US business relations. Previous speaking experience is preferred but not required.',
      category: 'speakers'
    },
    {
      id: '9',
      question: 'Are there different ticket types?',
      answer: 'Yes! We offer Early Bird, Fast Mover, General Admission, and Last Chance tickets. Prices increase over time, and some tiers include additional perks like VIP networking and premium swag.',
      category: 'tickets'
    },
    {
      id: '10',
      question: 'What is the refund policy?',
      answer: 'Full refunds are available if the event is cancelled. For individual cancellations, refunds are available up to 30 days before the event (minus processing fees). No refunds within 30 days of the event.',
      category: 'tickets'
    },
    {
      id: '11',
      question: 'Can I transfer my ticket to someone else?',
      answer: 'Yes, tickets can be transferred to another person up to 7 days before the event. Contact our support team with both the original and new attendee information to process the transfer.',
      category: 'tickets'
    }
  ]

  const categories = [
    { id: 'general', name: t('categories.general') },
    { id: 'logistics', name: t('categories.logistics') },
    { id: 'speakers', name: t('categories.speakers') },
    { id: 'tickets', name: t('categories.tickets') }
  ]

  const filteredFAQs = faqItems.filter(item => item.category === selectedCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-indigo-900/5 to-dark-bg" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-xl text-gray-300">
            Find answers to common questions about MXSV 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-lg p-2 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {filteredFAQs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={item}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openItem === faq.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openItem === faq.id ? 'auto' : 0,
                  opacity: openItem === faq.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-xl p-8">
            <HelpCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-heading font-bold mb-4">
              Still have questions?
            </h4>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}