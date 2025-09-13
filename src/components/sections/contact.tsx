'use client'

import { useState } from 'react'
import { useTranslations } from '@/hooks/use-translations'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle, User, Mail, Building, MessageSquare } from 'lucide-react'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().min(2, 'Organization must be at least 2 characters'),
  interestType: z.enum(['participant', 'media', 'supporter', 'speaker', 'other']),
  comments: z.string().optional()
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const t = useTranslations('contact')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const interestTypes = [
    { value: 'participant', label: t('interestTypes.participant') },
    { value: 'media', label: t('interestTypes.media') },
    { value: 'supporter', label: t('interestTypes.supporter') },
    { value: 'speaker', label: t('interestTypes.speaker') },
    { value: 'other', label: t('interestTypes.other') }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">
                Join the MXSV Community
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">For Participants</h4>
                    <p className="text-gray-300 text-sm">
                      Get early access to tickets, speaker announcements, and exclusive updates about the conference.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-teal-600/20 flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">For Organizations</h4>
                    <p className="text-gray-300 text-sm">
                      Explore sponsorship opportunities and partnership possibilities with the MXSV community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-600/20 to-green-600/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">For Speakers</h4>
                    <p className="text-gray-300 text-sm">
                      Express your interest in speaking and help shape the future of Mexico-Silicon Valley collaboration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20">
                <p className="text-sm text-gray-300">
                  <strong>Privacy:</strong> We respect your privacy and will only use your information to send you updates about MXSV 2026. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('form.name')} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('fullName')}
                        type="text"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('form.email')} *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.organization')} *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('organization')}
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Your company or organization"
                    />
                  </div>
                  {errors.organization && (
                    <p className="mt-1 text-sm text-red-400">{errors.organization.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.interest')} *
                  </label>
                  <select
                    {...register('interestType')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your interest</option>
                    {interestTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-gray-800">
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.interestType && (
                    <p className="mt-1 text-sm text-red-400">{errors.interestType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.comments')}
                  </label>
                  <textarea
                    {...register('comments')}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your interest in MXSV..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-600/20 border border-green-500/50 rounded-lg text-green-300"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>{t('form.success')}</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-300"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{t('form.error')}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('form.submitting')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('form.submit')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}