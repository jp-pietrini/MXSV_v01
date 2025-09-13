'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from '@/hooks/use-translations'
import { motion } from 'framer-motion'
import { ExternalLink, Star, Award, Medal, Trophy } from 'lucide-react'
import Image from 'next/image'

interface Sponsor {
  id: string
  name: string
  logo: string
  website?: string
  description?: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
}

export function SponsorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const t = useTranslations('sponsors')

  // Placeholder sponsors data
  const sponsors: Sponsor[] = [
    {
      id: '1',
      name: 'TechCorp International',
      logo: '/api/placeholder/200/100',
      website: 'https://techcorp.com',
      description: 'Leading technology solutions for global enterprises',
      tier: 'platinum'
    },
    {
      id: '2',
      name: 'Innovation Labs',
      logo: '/api/placeholder/200/100',
      website: 'https://innovationlabs.com',
      description: 'Accelerating startup growth across borders',
      tier: 'platinum'
    },
    {
      id: '3',
      name: 'GlobalVentures',
      logo: '/api/placeholder/200/100',
      website: 'https://globalventures.com',
      description: 'Venture capital for emerging markets',
      tier: 'gold'
    },
    {
      id: '4',
      name: 'CloudTech Solutions',
      logo: '/api/placeholder/200/100',
      website: 'https://cloudtech.com',
      description: 'Enterprise cloud infrastructure',
      tier: 'gold'
    },
    {
      id: '5',
      name: 'DataFlow Systems',
      logo: '/api/placeholder/200/100',
      website: 'https://dataflow.com',
      description: 'Big data analytics platform',
      tier: 'gold'
    },
    {
      id: '6',
      name: 'StartupHub MX',
      logo: '/api/placeholder/200/100',
      website: 'https://startuphub.mx',
      description: 'Mexican startup ecosystem support',
      tier: 'silver'
    },
    {
      id: '7',
      name: 'TechBridge Consulting',
      logo: '/api/placeholder/200/100',
      website: 'https://techbridge.com',
      tier: 'silver'
    },
    {
      id: '8',
      name: 'CodeCraft Academy',
      logo: '/api/placeholder/200/100',
      website: 'https://codecraft.edu',
      tier: 'bronze'
    }
  ]

  const tierConfig = {
    platinum: {
      icon: Trophy,
      color: 'from-gray-300 to-gray-100',
      textColor: 'text-gray-200',
      size: 'h-24 md:h-32'
    },
    gold: {
      icon: Award,
      color: 'from-yellow-400 to-yellow-200',
      textColor: 'text-yellow-300',
      size: 'h-20 md:h-28'
    },
    silver: {
      icon: Medal,
      color: 'from-gray-400 to-gray-300',
      textColor: 'text-gray-300',
      size: 'h-16 md:h-24'
    },
    bronze: {
      icon: Star,
      color: 'from-orange-400 to-orange-300',
      textColor: 'text-orange-300',
      size: 'h-14 md:h-20'
    }
  }

  const sponsorsByTier = {
    platinum: sponsors.filter(s => s.tier === 'platinum'),
    gold: sponsors.filter(s => s.tier === 'gold'),
    silver: sponsors.filter(s => s.tier === 'silver'),
    bronze: sponsors.filter(s => s.tier === 'bronze')
  }

  // Auto-scroll effect
  useEffect(() => {
    if (sponsors.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sponsors.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [sponsors.length])

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
    <section id="sponsors" className="py-20 md:py-32 relative overflow-hidden">
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
            {t('subtitle')}
          </p>
        </motion.div>

        {Object.entries(sponsorsByTier).map(([tier, tierSponsors]) => {
          if (tierSponsors.length === 0) return null
          
          const config = tierConfig[tier as keyof typeof tierConfig]
          const TierIcon = config.icon
          
          return (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <TierIcon className={`w-8 h-8 ${config.textColor}`} />
                  <h3 className={`text-2xl font-heading font-bold ${config.textColor}`}>
                    {t(`tiers.${tier}`)} Partners
                  </h3>
                  <TierIcon className={`w-8 h-8 ${config.textColor}`} />
                </div>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`grid gap-8 ${
                  tier === 'platinum' ? 'grid-cols-1 md:grid-cols-2' :
                  tier === 'gold' ? 'grid-cols-2 md:grid-cols-3' :
                  'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}
              >
                {tierSponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.id}
                    variants={item}
                    className="group"
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${config.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      
                      <div className="relative glass rounded-2xl p-6 md:p-8 group-hover:bg-white/5 transition-all duration-300 group-hover:scale-105">
                        <div className={`flex items-center justify-center ${config.size} mb-4`}>
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            width={200}
                            height={100}
                            className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                          />
                        </div>
                        
                        <h4 className="text-center font-heading font-bold mb-2">
                          {sponsor.name}
                        </h4>
                        
                        {sponsor.description && (
                          <p className="text-center text-sm text-gray-400 mb-4">
                            {sponsor.description}
                          </p>
                        )}
                        
                        {sponsor.website && (
                          <div className="text-center">
                            <a
                              href={sponsor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-white transition-colors"
                            >
                              Visit Website
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )
        })}

        {/* Moving sponsor logos carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-2xl glass p-8">
            <div className="flex items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-8 md:gap-12 animate-pulse">
                {sponsors.slice(0, 6).map((sponsor, index) => (
                  <div
                    key={sponsor.id}
                    className={`flex-shrink-0 transition-all duration-500 ${
                      index === currentIndex % 6 ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
                    }`}
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain filter brightness-75"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-xl p-8 max-w-lg mx-auto">
            <h4 className="text-xl font-heading font-bold mb-4">
              Interested in Sponsoring?
            </h4>
            <p className="text-gray-300 mb-6">
              Join leading companies in supporting the Mexico-Silicon Valley tech bridge.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105">
              {t('cta')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}