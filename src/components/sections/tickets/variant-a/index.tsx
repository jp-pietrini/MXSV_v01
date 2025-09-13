"use client"

import { motion } from "framer-motion"
import { Check, Star, Clock } from "lucide-react"
import { Container, SectionHeader, Card, CardContent, CardHeader, CardTitle, Button, Badge } from "@/components/ui"
import { formatPrice } from "@/lib/utils"
import ticketsData from "@/data/tickets.json"

export function TicketsVariantA() {
  const activeTickets = ticketsData.filter(ticket => ticket.isActive)
    .sort((a, b) => a.order - b.order)

  const getAvailabilityStatus = (ticket: any) => {
    const soldPercentage = (ticket.sold / ticket.quantity) * 100
    if (soldPercentage >= 100) return { status: "sold-out", label: "Sold Out", color: "bg-red-100 text-red-800" }
    if (soldPercentage >= 90) return { status: "limited", label: "Limited", color: "bg-orange-100 text-orange-800" }
    return { status: "available", label: "Available", color: "bg-green-100 text-green-800" }
  }

  const isEarlyBird = (ticket: any) => {
    return ticket.deadline && new Date(ticket.deadline) > new Date()
  }

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            subtitle="Get Your Tickets"
            title="Secure Your Spot at MXSV 2026"
            description="Choose the ticket tier that best fits your needs. All tickets include access to both days of programming, meals, and networking events."
            size="md"
          />
        </motion.div>

        {/* Tickets Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activeTickets.map((ticket, index) => {
            const availability = getAvailabilityStatus(ticket)
            const isPopular = ticket.badge === "Most Popular"
            const hasDiscount = ticket.originalPrice && ticket.originalPrice > ticket.price

            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${isPopular ? "lg:scale-105 z-10" : ""}`}
              >
                <Card className={`h-full border-2 transition-all duration-200 ${
                  isPopular
                    ? "border-blue-300 shadow-lg"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}>
                  <CardHeader className="text-center pb-4">
                    {/* Badges */}
                    <div className="flex justify-center space-x-2 mb-4">
                      {ticket.badge && (
                        <Badge
                          variant={isPopular ? "primary" : "secondary"}
                          size="sm"
                        >
                          {ticket.badge}
                        </Badge>
                      )}
                      <Badge
                        variant="secondary"
                        className={availability.color}
                        size="sm"
                      >
                        {availability.label}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl font-bold text-gray-900">
                      {ticket.name}
                    </CardTitle>

                    {/* Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        {hasDiscount && (
                          <span className="text-lg text-gray-400 line-through">
                            {formatPrice(ticket.originalPrice)}
                          </span>
                        )}
                        <span className={`text-3xl font-bold ${
                          isPopular ? "text-blue-600" : "text-gray-900"
                        }`}>
                          {formatPrice(ticket.price)}
                        </span>
                      </div>

                      {isEarlyBird(ticket) && (
                        <div className="flex items-center justify-center text-sm text-orange-600">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Until {new Date(ticket.deadline!).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 mt-2">
                      {ticket.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {ticket.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Note */}
                    {ticket.note && (
                      <p className="text-xs text-gray-500 mb-4 italic">
                        {ticket.note}
                      </p>
                    )}

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{ticket.sold} sold</span>
                        <span>{ticket.quantity} total</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            availability.status === "sold-out" ? "bg-red-500" :
                            availability.status === "limited" ? "bg-orange-500" : "bg-green-500"
                          }`}
                          style={{ width: `${Math.min((ticket.sold / ticket.quantity) * 100, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={isPopular ? "primary" : "secondary"}
                      className="w-full"
                      disabled={availability.status === "sold-out"}
                    >
                      {availability.status === "sold-out" ? "Sold Out" : "Select Ticket"}
                    </Button>
                  </CardContent>
                </Card>

                {/* Popular indicator */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Group Discounts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Planning to attend with your team? We offer special pricing for groups of 5 or more.
                Contact us for custom pricing and benefits.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Refund Policy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Full refunds available until January 15, 2026. After this date, tickets are non-refundable
                but can be transferred to another person.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="bg-white border-gray-200">
            <CardContent className="p-8">
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Need Help Choosing?
                </h3>
                <p className="text-gray-600">
                  Our team is here to help you find the perfect ticket for your needs.
                  Contact us for assistance or custom arrangements.
                </p>
                <Button variant="ghost">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}