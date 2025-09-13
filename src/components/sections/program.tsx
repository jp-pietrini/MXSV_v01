'use client'

import { useState } from 'react'
import { useTranslations } from '@/hooks/use-translations'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Code, Lightbulb, Target, Presentation, Coffee } from 'lucide-react'

const dayIcons = {
  workshop: Code,
  panel: Presentation,
  break: Coffee,
  networking: Users,
  arrival: MapPin
}

export function ProgramSection() {
  const [selectedDay, setSelectedDay] = useState(1)
  const t = useTranslations('program')

  const programData = {
    0: {
      title: t('day0.title'),
      subtitle: t('day0.description'),
      events: [
        {
          time: '9:00 AM - 6:00 PM',
          title: 'Silicon Valley Tech Tour',
          description: 'Optional guided tour of major tech companies',
          type: 'arrival',
          location: 'Various Locations'
        }
      ]
    },
    1: {
      title: t('day1.title'),
      subtitle: 'Leaders\' Workshops - Exclusive Content',
      events: [
        {
          time: '8:00 - 9:00 AM',
          title: 'Registration & Welcome Coffee',
          description: 'Network and fuel up for an incredible day',
          type: 'networking',
          location: 'Stanford Main Hall'
        },
        {
          time: '9:00 - 12:00 PM',
          title: t('day1.workshops.ai'),
          description: 'Hands-on workshop covering AI implementation strategies for Mexican markets',
          type: 'workshop',
          location: 'Tech Lab A',
          speakers: ['Dr. Maria Rodriguez', 'Alex Chen']
        },
        {
          time: '12:00 - 1:00 PM',
          title: 'Networking Lunch',
          description: 'Connect with fellow innovators over Mexican-Silicon Valley fusion cuisine',
          type: 'break',
          location: 'Garden Terrace'
        },
        {
          time: '1:00 - 4:00 PM',
          title: t('day1.workshops.design'),
          description: 'Interactive design thinking session focused on cross-cultural innovation',
          type: 'workshop',
          location: 'Innovation Studio',
          speakers: ['Carlos Mendoza', 'Sarah Kim']
        },
        {
          time: '4:00 - 6:00 PM',
          title: t('day1.workshops.social'),
          description: 'Exploring technology solutions for social challenges in Latin America',
          type: 'workshop',
          location: 'Impact Lab',
          speakers: ['Isabella Santos', 'Michael Zhang']
        }
      ]
    },
    2: {
      title: t('day2.title'),
      subtitle: 'Public Panels - Open to All',
      events: [
        {
          time: '9:00 - 10:30 AM',
          title: t('day2.panels.1'),
          description: 'Current landscape, opportunities, and challenges in Mexican tech ecosystem',
          type: 'panel',
          location: 'Main Auditorium',
          speakers: ['Panel of 5 experts']
        },
        {
          time: '10:45 AM - 12:15 PM',
          title: t('day2.panels.2'),
          description: 'How investors are bridging the Mexico-Silicon Valley gap',
          type: 'panel',
          location: 'Main Auditorium',
          speakers: ['VCs and Angel Investors']
        },
        {
          time: '12:15 - 1:15 PM',
          title: 'Lunch & Expo',
          description: 'Explore sponsor booths and startup showcases',
          type: 'break',
          location: 'Exhibition Hall'
        },
        {
          time: '1:15 - 2:45 PM',
          title: t('day2.panels.3'),
          description: 'Strategies for building distributed teams across borders',
          type: 'panel',
          location: 'Main Auditorium',
          speakers: ['Remote work experts']
        },
        {
          time: '3:00 - 4:30 PM',
          title: t('day2.panels.4'),
          description: 'How innovation thrives in emerging markets like Mexico',
          type: 'panel',
          location: 'Main Auditorium',
          speakers: ['Innovation leaders']
        },
        {
          time: '4:45 - 6:15 PM',
          title: t('day2.panels.5'),
          description: 'What\'s next for Mexico-Silicon Valley collaboration',
          type: 'panel',
          location: 'Main Auditorium',
          speakers: ['Visionary leaders']
        }
      ]
    }
  }

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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <section id="program" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-blue-900/5 to-dark-bg" />
      
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
            Two days of intensive learning, networking, and collaboration
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="glass rounded-lg p-2 flex gap-2">
            {[0, 1, 2].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedDay === day
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">
                    {day === 0 ? 'Feb 20' : day === 1 ? 'Day 1' : 'Day 2'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                {programData[selectedDay as keyof typeof programData].title}
              </h3>
              <p className="text-gray-400">
                {programData[selectedDay as keyof typeof programData].subtitle}
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-teal-600" />
              
              <div className="space-y-8">
                {programData[selectedDay as keyof typeof programData].events.map((event, index) => {
                  const IconComponent = dayIcons[event.type as keyof typeof dayIcons]
                  
                  return (
                    <motion.div
                      key={index}
                      variants={item}
                      className="relative flex items-start gap-6 group"
                    >
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-purple-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1 glass rounded-xl p-6 group-hover:bg-white/5 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-purple-300 font-medium">
                                {event.time}
                              </span>
                            </div>
                            
                            <h4 className="text-xl font-heading font-bold mb-2">
                              {event.title}
                            </h4>
                            
                            <p className="text-gray-300 mb-4">
                              {event.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{event.location}</span>
                              </div>
                              
                              {event.speakers && (
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  <span>{event.speakers.join(', ')}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className={`
                            px-3 py-1 rounded-full text-xs font-medium
                            ${event.type === 'workshop' ? 'bg-purple-600/20 text-purple-300' : ''}
                            ${event.type === 'panel' ? 'bg-blue-600/20 text-blue-300' : ''}
                            ${event.type === 'break' ? 'bg-green-600/20 text-green-300' : ''}
                            ${event.type === 'networking' ? 'bg-teal-600/20 text-teal-300' : ''}
                            ${event.type === 'arrival' ? 'bg-orange-600/20 text-orange-300' : ''}
                          `}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <Lightbulb className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-heading font-bold mb-2">
              Interactive & Engaging
            </h4>
            <p className="text-gray-300">
              All sessions include Q&A, networking breaks, and hands-on activities. 
              Come prepared to participate, learn, and connect with the community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}