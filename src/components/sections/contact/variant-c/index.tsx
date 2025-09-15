"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar, ExternalLink, Send, MessageCircle } from "lucide-react"
import { Button, Container } from "@/components/ui"

export function ContactVariantC() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/5 to-blue-600/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <Container>
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-base font-medium text-blue-700">
              <MessageCircle className="w-5 h-5 mr-3" />
              Get in Touch
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className="space-y-8 relative">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      Send us a{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Message
                      </span>
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
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-300"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-300"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-300"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-300"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        I'm interested in...
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-300 bg-white">
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-300"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>

                    <Button
                      size="xl"
                      className="w-full text-lg py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
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
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="space-y-6 relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Event{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Information
                      </span>
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
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
                        <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Stanford University
                          </div>
                          <div className="text-gray-600 mb-2">
                            Palo Alto, California, USA
                          </div>
                          <a
                            href="#"
                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:underline"
                          >
                            View on Google Maps
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="space-y-6 relative">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Contact{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Methods
                      </span>
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-2">
                            General Inquiries
                          </div>
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:underline">
                            hello@mexicoinsiliconvalley.com
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-2">
                            Phone Support
                          </div>
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:underline">
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
              </div>

              {/* Specialized Contacts */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="space-y-6 relative">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Specialized{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Contacts
                      </span>
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
                        <div key={index} className="border-l-4 border-gradient-to-b from-blue-600 to-purple-600 pl-4">
                          <div className="font-semibold text-gray-900">
                            {contact.title}
                          </div>
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:underline">
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
              </div>

              {/* Social Media */}
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-3xl" />
                  <div className="text-center space-y-6 relative">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Stay{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Connected
                      </span>
                    </h3>
                    <p className="text-gray-600">
                      Follow us for the latest updates, speaker announcements, and behind-the-scenes content.
                    </p>

                    <div className="flex justify-center space-x-4">
                      {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((platform) => (
                        <div
                          key={platform}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-110 group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
                          <span className="text-blue-600 font-bold text-sm relative">
                            {platform.charAt(0)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                      #MexicoInSiliconValley
                    </div>
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