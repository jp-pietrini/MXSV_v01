"use client"

import { motion } from "framer-motion"
import { Check, Star, Users, Calendar } from "lucide-react"
import { Button, Container } from "@/components/ui"
import ticketsData from "@/data/tickets.json"

export function TicketsVariantB() {
  const { formatPrice } = ticketsData.pricing

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
              <Calendar className="w-5 h-5 mr-3" />
              Secure Your Experience
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Choose Your{" "}
              <span className="text-blue-600 italic">
                Journey
              </span>
            </h2>

            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Select the perfect ticket for your innovation journey. Each tier offers
              unique access to networks, insights, and opportunities.
            </p>
          </motion.div>

          {/* Tickets Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {ticketsData.tickets.map((ticket, index) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`
                  relative bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2
                  ${ticket.featured ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : ''}
                `}
              >
                {/* Featured Badge */}
                {ticket.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`p-8 ${ticket.featured ? 'pt-12' : ''}`}>
                  {/* Ticket Header */}
                  <div className="text-center space-y-4 mb-8">
                    <div className={`
                      w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow-lg
                      ${ticket.featured
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                        : 'bg-gradient-to-br from-gray-600 to-gray-700'
                      }
                    `}>
                      <span className="text-white text-2xl font-bold">
                        {ticket.name.charAt(0)}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {ticket.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {ticket.description}
                    </p>

                    {/* Price */}
                    <div className="space-y-2">
                      <div className="text-4xl lg:text-5xl font-bold text-gray-900">
                        {formatPrice}{ticket.price}
                      </div>
                      {ticket.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">
                          {formatPrice}{ticket.originalPrice}
                        </div>
                      )}
                      <div className="text-sm text-gray-500">
                        {ticket.availability}
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {ticket.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`
                          flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5
                          ${ticket.featured
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                          }
                        `}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={ticket.featured ? "primary" : "secondary"}
                    size="xl"
                    className="w-full text-lg py-4"
                  >
                    {ticket.ctaText}
                  </Button>

                  {/* Additional Info */}
                  {ticket.note && (
                    <p className="text-sm text-gray-500 text-center mt-4">
                      {ticket.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Group Discounts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 mb-16"
          >
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Group Discounts Available
                </h3>
              </div>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Bring your team and save! Special pricing available for groups of 5 or more.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {ticketsData.groupDiscounts.map((discount, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-2xl p-6 border border-blue-100"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {discount.size}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      {discount.description}
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {discount.discount}
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="ghost" size="lg" className="text-blue-600">
                Contact for Group Pricing
              </Button>
            </div>
          </motion.div>

          {/* Editorial CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Shape the Future?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Limited seats available. Join innovators, entrepreneurs, and investors
                in this unprecedented gathering between Mexico and Silicon Valley.
              </p>

              <div className="space-y-4">
                <Button size="xl" className="text-lg px-10 py-4">
                  Secure Your Tickets Now
                </Button>

                <div className="text-sm text-gray-500">
                  ✓ Secure payment • ✓ Instant confirmation • ✓ Full refund policy
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}