"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react"
import { Container, SectionHeader, Card, CardContent, CardHeader, CardTitle, Button, Input, Textarea, Select } from "@/components/ui"

const interestTypes = [
  { value: "attending", label: "Attending the Event" },
  { value: "speaking", label: "Speaking Opportunity" },
  { value: "sponsoring", label: "Sponsorship" },
  { value: "partnership", label: "Partnership" },
  { value: "media", label: "Media Inquiry" },
  { value: "other", label: "Other" }
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@mxsv.com",
    link: "mailto:info@mxsv.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Stanford University\nPalo Alto, CA 94305",
    link: "https://maps.google.com/?q=Stanford+University"
  }
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/mxsv",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/mxsv",
    color: "hover:text-blue-400"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/mxsv",
    color: "hover:text-pink-600"
  }
]

export function ContactVariantA() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    interestType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    // Reset form or show success message
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      interestType: "",
      message: ""
    })
  }

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            subtitle="Get in Touch"
            title="We're Here to Help"
            description="Have questions about MXSV 2026? We'd love to hear from you."
            size="md"
          />
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Send us a Message
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-gray-700">
                      Organization
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your company or organization"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interestType" className="text-sm font-medium text-gray-700">
                      Interest Type *
                    </label>
                    <Select
                      name="interestType"
                      value={formData.interestType}
                      onChange={handleInputChange}
                      placeholder="Select your interest"
                      required
                    >
                      {interestTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-600 whitespace-pre-line">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Stay updated with the latest news and announcements about MXSV 2026.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg bg-gray-50 text-gray-600 transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Quick Response
                </h3>
                <p className="text-sm text-blue-800">
                  We typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}