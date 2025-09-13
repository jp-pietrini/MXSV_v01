'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from '@/hooks/use-translations'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Clock, Users, AlertCircle } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

interface TicketTier {
  id: string
  tier: string
  price: number
  quantity: number
  sold: number
  active: boolean
  features: string[]
  popular?: boolean
  urgent?: boolean
}

export function TicketsSection({ locale }: { locale: string }) {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const t = useTranslations('tickets')

  // Placeholder ticket data - would come from database in real app
  const tickets: TicketTier[] = [
    {
      id: '1',
      tier: 'early',
      price: 25,
      quantity: 80,
      sold: 67,
      active: true,
      features: [
        'Access to all panels and workshops',
        'Welcome coffee and networking lunch',
        'Digital conference materials',
        'Certificate of attendance',
        'Early bird price guarantee'
      ],
      urgent: true
    },
    {
      id: '2',
      tier: 'fast',
      price: 40,
      quantity: 80,
      sold: 23,
      active: true,
      features: [
        'Everything in Early Bird',
        'VIP networking session',
        'Premium swag bag',
        'Access to speaker meet & greet',
        'Priority seating'
      ],
      popular: true
    },
    {
      id: '3',
      tier: 'general',
      price: 50,
      quantity: 120,
      sold: 8,
      active: true,
      features: [
        'Access to all panels and workshops',
        'Welcome coffee and networking lunch',
        'Digital conference materials',
        'Certificate of attendance',
        'Standard seating'
      ]
    },
    {
      id: '4',
      tier: 'last',
      price: 60,
      quantity: 50,
      sold: 0,
      active: true,
      features: [
        'Access to all panels and workshops',
        'Welcome coffee and networking lunch',
        'Digital conference materials',
        'Certificate of attendance',
        'Last chance pricing'
      ]
    }
  ]

  const tierConfig = {
    early: {
      icon: Clock,
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/20 to-red-600/20',
      name: t('early')
    },
    fast: {
      icon: Zap,
      color: 'from-purple-600 to-blue-600',
      bgColor: 'from-purple-600/20 to-blue-600/20',
      name: t('fast')
    },
    general: {
      icon: Users,
      color: 'from-blue-600 to-teal-600',
      bgColor: 'from-blue-600/20 to-teal-600/20',
      name: t('general')
    },
    last: {
      icon: Crown,
      color: 'from-teal-600 to-green-600',
      bgColor: 'from-teal-600/20 to-green-600/20',
      name: t('last')
    }
  }

  const handlePurchase = async (ticketId: string) => {
    setLoading(true)
    setSelectedTier(ticketId)
    
    try {
      // Create checkout session
      const response = await fetch('/api/tickets/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticketId,
          locale
        }),
      })
      
      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
    } finally {
      setLoading(false)
      setSelectedTier(null)
    }
  }

  const getAvailability = (ticket: TicketTier) => {
    const remaining = ticket.quantity - ticket.sold
    const percentage = (remaining / ticket.quantity) * 100
    
    if (remaining === 0) return { status: 'sold-out', text: t('soldOut'), color: 'text-red-400' }
    if (percentage <= 20) return { status: 'low', text: `${remaining} ${t('available')}`, color: 'text-orange-400' }
    return { status: 'available', text: `${remaining} ${t('available')}`, color: 'text-green-400' }
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="tickets" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-green-900/5 to-dark-bg" />
      
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tickets.map((ticket) => {
            const config = tierConfig[ticket.tier as keyof typeof tierConfig]
            const TierIcon = config.icon
            const availability = getAvailability(ticket)
            const isDisabled = availability.status === 'sold-out' || !ticket.active
            
            return (
              <motion.div
                key={ticket.id}
                variants={item}
                className={`relative group ${ticket.popular ? 'lg:scale-105' : ''}`}
              >
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 rounded-full text-sm font-medium text-white flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                {ticket.urgent && availability.status === 'low' && (
                  <div className="absolute -top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1 animate-pulse">
                      <AlertCircle className="w-3 h-3" />
                      Almost Gone!
                    </div>
                  </div>
                )}

                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${config.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className={`relative glass rounded-2xl p-6 h-full flex flex-col transition-all duration-300 ${
                    ticket.popular ? 'ring-2 ring-purple-500/50' : ''
                  } ${isDisabled ? 'opacity-75' : 'group-hover:bg-white/5'}`}>
                    
                    <div className="text-center mb-6">
                      <div className="relative mb-4">
                        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center`}>
                          <TierIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold mb-2">
                        {config.name}
                      </h3>
                      
                      <div className="mb-4">
                        <span className="text-3xl font-bold gradient-text">
                          {formatCurrency(ticket.price)}
                        </span>
                        <span className="text-gray-400 text-sm ml-1">
                          {t('perTicket')}
                        </span>
                      </div>
                      
                      <div className={`text-sm font-medium ${availability.color}`}>
                        {availability.text}
                      </div>
                      
                      {availability.status !== 'sold-out' && (
                        <div className="mt-2">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${config.color} transition-all duration-300`}
                              style={{ 
                                width: `${((ticket.quantity - ticket.sold) / ticket.quantity) * 100}%` 
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 mb-6">
                      <ul className="space-y-3">
                        {ticket.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handlePurchase(ticket.id)}
                      disabled={isDisabled || loading}
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                        isDisabled
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          : `bg-gradient-to-r ${config.color} text-white hover:scale-105 hover:shadow-lg`
                      } ${loading && selectedTier === ticket.id ? 'animate-pulse' : ''}`}
                    >
                      {loading && selectedTier === ticket.id
                        ? 'Processing...'
                        : isDisabled
                        ? t('soldOut')
                        : t('buyNow')
                      }
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-purple-400" />
              <h4 className="text-xl font-heading font-bold">
                Limited Time Pricing
              </h4>
            </div>
            <p className="text-gray-300 mb-4">
              Ticket prices increase as the event approaches. Secure your spot now for the best value!
            </p>
            <div className="text-sm text-purple-300">
              ✓ Secure payment processing via Stripe<br />
              ✓ Instant confirmation email<br />
              ✓ Full refund if event is cancelled
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}