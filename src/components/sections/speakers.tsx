'use client'

import { useState } from 'react'
import { useTranslations } from '@/hooks/use-translations'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  website?: string
  featured: boolean
}

export function SpeakersSection() {
  const [expandedSpeaker, setExpandedSpeaker] = useState<string | null>(null)
  const t = useTranslations('speakers')

  // Placeholder speakers data - in real app this would come from the database
  const speakers: Speaker[] = [
    {
      id: '1',
      name: 'Dr. Elena Rodriguez',
      title: 'Chief Technology Officer',
      company: 'TechMex Ventures',
      bio: 'Leading AI researcher with 15+ years bridging Silicon Valley innovation with Latin American markets. Former Google AI team member, now focused on democratizing technology access across borders.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      featured: true
    },
    {
      id: '2',
      name: 'Carlos Mendoza',
      title: 'Founder & CEO',
      company: 'InnovaMX',
      bio: 'Serial entrepreneur who has successfully scaled 3 startups from Mexico to global markets. Expert in cross-border business development and emerging market strategies.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      title: 'Founder & CEO',
      company: 'InnovaMX',
      bio: 'Serial entrepreneur who has successfully scaled 3 startups from Mexico to global markets. Expert in cross-border business development and emerging market strategies.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      featured: true
    },
    {
      id: '3',
      name: 'Sarah Kim',
      title: 'Partner',
      company: 'Sequoia Capital',
      bio: 'Venture capitalist specializing in Latin American tech investments. Led investments in 50+ startups, with a focus on fintech and enterprise software.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b632?w=300&h=300&fit=crop&crop=face',
      title: 'Partner',
      company: 'Sequoia Capital',
      bio: 'Venture capitalist specializing in Latin American tech investments. Led investments in 50+ startups, with a focus on fintech and enterprise software.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      website: 'https://website.com',
      featured: true
    },
    {
      id: '4',
      name: 'Miguel Santos',
      title: 'Head of Engineering',
      company: 'Meta',
      bio: 'Engineering leader at Meta working on AR/VR technologies. Previously built engineering teams in Mexico City and has deep expertise in distributed system architecture.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      featured: false
    },
    {
      id: '5',
      name: 'Isabella Garcia',
      title: 'Founder',
      company: 'EduTech Mexico',
      bio: 'Education technology pioneer transforming learning in Latin America through innovative digital platforms. Featured in Forbes 30 Under 30.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      featured: false
    },
    {
      id: '6',
      name: 'Alex Chen',
      title: 'Senior Director',
      company: 'Microsoft Azure',
      bio: 'Cloud infrastructure expert leading Microsoft\'s expansion into Latin American markets. Specialist in enterprise digital transformation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com',
      featured: false
    }
  ]

  const featuredSpeakers = speakers.filter(speaker => speaker.featured)
  const otherSpeakers = speakers.filter(speaker => !speaker.featured)

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
    hidden: { opacity: 0, y: 30, rotateY: -15 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const SpeakerCard = ({ speaker, featured = false }: { speaker: Speaker; featured?: boolean }) => (
    <motion.div
      variants={item}
      className={`group perspective-1000 ${featured ? 'col-span-1' : 'col-span-1'}`}
    >
      <div className="relative transform-3d transition-all duration-500 hover:rotateY-12 hover:rotateX-6 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110" />
        
        <div className="relative glass rounded-2xl overflow-hidden backface-hidden">
          <div className="aspect-square relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black-50 to-transparent z-10" />
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <h3 className={`font-heading font-bold text-white mb-1 ${featured ? 'text-xl' : 'text-lg'}`}>
                {speaker.name}
              </h3>
              <p className="text-purple-300 text-sm font-medium">{speaker.title}</p>
              <p className="text-gray-300 text-sm">{speaker.company}</p>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {speaker.twitter && (
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {speaker.website && (
                  <a
                    href={speaker.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <button
                onClick={() => setExpandedSpeaker(
                  expandedSpeaker === speaker.id ? null : speaker.id
                )}
                className="flex items-center gap-1 text-sm text-purple-300 hover:text-white transition-colors"
              >
                {t('viewMore')}
                {expandedSpeaker === speaker.id ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              expandedSpeaker === speaker.id ? 'max-h-96 opacity-100' : 'max-h-16 opacity-75'
            }`}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {speaker.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="speakers" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-teal-900/5 to-dark-bg" />
      
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
            {t('subtitle')}
          </p>
        </motion.div>

        {featuredSpeakers.length > 0 && (
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-heading font-bold text-center mb-12"
            >
              Featured Speakers
            </motion.h3>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} featured />
              ))}
            </motion.div>
          </div>
        )}

        {otherSpeakers.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-heading font-bold text-center mb-12"
            >
              Additional Speakers
            </motion.h3>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {otherSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </motion.div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-xl p-8 max-w-md mx-auto">
            <h4 className="text-xl font-heading font-bold mb-4">
              More Speakers
            </h4>
            <p className="text-gray-300 mb-4">
              {t('tbd')}
            </p>
            <div className="text-sm text-purple-300">
              Stay tuned for announcements!
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}