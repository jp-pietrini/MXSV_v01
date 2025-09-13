"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar, ExternalLink } from "lucide-react"
import { Button, Container } from "@/components/ui"

export function ContactVariantB() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Editorial Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-lg font-medium text-blue-700">
              <span className="w-3 h-3 bg-blue-600 rounded-full mr-4"></span>
              Get in Touch
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Let's Build{" "}
              <span className="text-blue-600 italic">
                Together
              </span>
            </h2>

            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Whether you're an entrepreneur, investor, or innovation enthusiast,
              we'd love to connect and explore how we can collaborate.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Send us a Message
                  </h3>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      I'm interested in...
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="">Select an option</option>
                      <option value="attending">Attending the conference</option>
                      <option value="speaking">Speaking opportunities</option>
                      <option value="sponsoring">Sponsorship packages</option>
                      <option value="partnering">Partnership opportunities</option>
                      <option value="media">Media and press</option>
                      <option value="other">Other inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <Button size="xl" className="w-full text-lg py-4">
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Event Info Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Event Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          February 21-22, 2026
                        </div>
                        <div className="text-gray-600">
                          Two days of innovation and networking
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          Stanford University
                        </div>
                        <div className="text-gray-600">
                          Palo Alto, California, USA
                        </div>
                        <a
                          href="#"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-2"
                        >
                          View on Google Maps
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Contact Methods
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-2">
                          General Inquiries
                        </div>
                        <div className="text-blue-600 hover:text-blue-700">
                          hello@mexicoinsiliconvalley.com
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-2">
                          Phone Support
                        </div>
                        <div className="text-blue-600 hover:text-blue-700">
                          +1 (650) 555-0123
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Available Mon-Fri, 9AM-6PM PST
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialized Contacts */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Specialized Contacts
                  </h3>

                  <div className="grid gap-4">
                    {[
                      {
                        title: "Speaking Opportunities",
                        email: "speakers@mexicoinsiliconvalley.com",
                        description: "Submit your speaking proposal"
                      },
                      {
                        title: "Sponsorship & Partnerships",
                        email: "partnerships@mexicoinsiliconvalley.com",
                        description: "Explore collaboration opportunities"
                      },
                      {
                        title: "Media & Press",
                        email: "press@mexicoinsiliconvalley.com",
                        description: "Media inquiries and press accreditation"
                      }
                    ].map((contact, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-4">
                        <div className="font-semibold text-gray-900">
                          {contact.title}
                        </div>
                        <div className="text-blue-600 hover:text-blue-700">
                          {contact.email}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {contact.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-100">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Stay Connected
                  </h3>
                  <p className="text-gray-600">
                    Follow us for the latest updates, speaker announcements, and behind-the-scenes content.
                  </p>

                  <div className="flex justify-center space-x-4">
                    {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((platform) => (
                      <div
                        key={platform}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1"
                      >
                        <span className="text-blue-600 font-bold text-sm">
                          {platform.charAt(0)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-blue-600 font-semibold">
                    #MexicoInSiliconValley
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}