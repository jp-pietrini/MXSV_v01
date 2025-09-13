'use client'

import { useTranslations } from '@/hooks/use-translations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Countdown from 'react-countdown'
import { ParticlesBackground } from '@/components/ui/particles-background'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
  const t = useTranslations('hero.countdown')
  
  if (completed) {
    return <span className="text-2xl font-bold gradient-text">Event Started!</span>
  }
  
  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8">
      {[
        { value: days, label: t('days') },
        { value: hours, label: t('hours') },
        { value: minutes, label: t('minutes') },
        { value: seconds, label: t('seconds') },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg blur-xl" />
            <div className="relative glass rounded-lg p-4 md:p-6">
              <div className="text-3xl md:text-5xl font-bold gradient-text">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-2">{item.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations('hero')
  const eventDate = new Date('2026-02-21T09:00:00-08:00')

  return (
    <section className="hero-bg flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse-glow" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-5xl md:text-6xl">MX</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
        >
          <span className="gradient-text">{t('title')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-5 h-5" />
            <span>{t('date')}</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-gray-500 rounded-full" />
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5" />
            <span>{t('location')}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Countdown date={eventDate} renderer={CountdownRenderer} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg transition-all duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <span className="relative flex items-center gap-2 text-white font-semibold">
              {t('cta.register')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link
            href="#tickets"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg glass hover:bg-white/10 transition-all duration-300"
          >
            <span className="relative flex items-center gap-2 font-semibold">
              {t('cta.tickets')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}