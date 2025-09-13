'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from '@/hooks/use-translations'
import { motion, useInView } from 'framer-motion'
import { Users, Mic, MessageSquare, Network } from 'lucide-react'

const Counter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

export function AboutSection() {
  const t = useTranslations('about')

  const stats = [
    { icon: Users, value: 300, suffix: '+', label: t('stats.attendees') },
    { icon: Mic, value: 50, suffix: '+', label: t('stats.speakers') },
    { icon: MessageSquare, value: 10, suffix: '+', label: t('stats.panels') },
    { icon: Network, value: 100, suffix: '%', label: t('stats.networking') },
  ]

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
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-purple-900/5 to-dark-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center group"
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-300" />
                <div className="relative glass rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-purple-400" />
                </div>
              </div>
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:scale-105 transition-transform duration-300" />
            <div className="relative glass rounded-2xl p-8 h-full">
              <div className="flex items-center mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-4" />
                <h3 className="text-2xl font-heading font-bold">{t('day1.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('day1.description')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['AI', 'Cloud', 'Blockchain', 'IoT'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl blur-xl group-hover:scale-105 transition-transform duration-300" />
            <div className="relative glass rounded-2xl p-8 h-full">
              <div className="flex items-center mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-teal-600 rounded-full mr-4" />
                <h3 className="text-2xl font-heading font-bold">{t('day2.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('day2.description')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Startups', 'Talent', 'Innovation', 'Growth'].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}