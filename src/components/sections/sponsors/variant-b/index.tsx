"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui"
import sponsorsData from "@/data/sponsors.json"

export function SponsorsVariantB() {
  const tierOrder = ['title', 'platinum', 'gold', 'silver', 'community']
  const sortedTiers = sponsorsData.tiers.sort((a, b) =>
    tierOrder.indexOf(a.name.toLowerCase()) - tierOrder.indexOf(b.name.toLowerCase())
  )

  return (
    <section className="py-24 bg-white">
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
              Partnership & Support
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Powered by{" "}
              <span className="text-blue-600 italic">
                Innovation
              </span>{" "}
              Leaders
            </h2>

            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're proud to partner with organizations that share our vision of connecting
              Mexico and Silicon Valley through innovation and collaboration.
            </p>
          </motion.div>

          {/* Sponsor Tiers */}
          <div className="space-y-16">
            {sortedTiers.map((tier, tierIndex) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: tierIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Tier Header */}
                <div className="text-center">
                  <div className={`
                    inline-flex items-center px-8 py-4 rounded-full text-xl font-bold mb-4
                    ${tier.name.toLowerCase() === 'title'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : tier.name.toLowerCase() === 'platinum'
                      ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 shadow-lg'
                      : tier.name.toLowerCase() === 'gold'
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 shadow-lg'
                      : tier.name.toLowerCase() === 'silver'
                      ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 shadow-md'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }
                  `}>
                    {tier.name} Sponsors
                  </div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {tier.description}
                  </p>
                </div>

                {/* Sponsors Grid */}
                <div className={`
                  grid gap-6
                  ${tier.name.toLowerCase() === 'title'
                    ? 'grid-cols-1 lg:grid-cols-2'
                    : tier.name.toLowerCase() === 'platinum'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                  }
                `}>
                  {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <motion.div
                      key={sponsor.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: sponsorIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`
                        bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer
                        ${tier.name.toLowerCase() === 'title'
                          ? 'p-12 shadow-lg'
                          : tier.name.toLowerCase() === 'platinum'
                          ? 'p-8 shadow-md'
                          : 'p-6 shadow-sm'
                        }
                      `}
                    >
                      <div className="text-center space-y-4">
                        {/* Logo Placeholder */}
                        <div className={`
                          bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-md
                          ${tier.name.toLowerCase() === 'title'
                            ? 'w-32 h-32'
                            : tier.name.toLowerCase() === 'platinum'
                            ? 'w-24 h-24'
                            : 'w-20 h-20'
                          }
                        `}>
                          <span className={`
                            text-white font-bold
                            ${tier.name.toLowerCase() === 'title'
                              ? 'text-2xl'
                              : tier.name.toLowerCase() === 'platinum'
                              ? 'text-xl'
                              : 'text-lg'
                            }
                          `}>
                            {sponsor.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h4 className={`
                            font-bold text-gray-900
                            ${tier.name.toLowerCase() === 'title'
                              ? 'text-2xl'
                              : tier.name.toLowerCase() === 'platinum'
                              ? 'text-xl'
                              : 'text-lg'
                            }
                          `}>
                            {sponsor.name}
                          </h4>

                          {sponsor.description && (
                            <p className={`
                              text-gray-600 leading-relaxed
                              ${tier.name.toLowerCase() === 'title'
                                ? 'text-base'
                                : 'text-sm'
                              }
                            `}>
                              {sponsor.description}
                            </p>
                          )}

                          {sponsor.industry && (
                            <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                              {sponsor.industry}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Editorial Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100 text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Join Our Mission
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Partner with us to bridge the gap between Mexico and Silicon Valley.
                  Your support helps create meaningful connections that drive innovation
                  and economic growth across borders.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                    Become a Sponsor
                  </div>
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer">
                    Partnership Deck
                  </div>
                </div>

                {/* Contact Information */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-gray-600 mb-2">For partnership inquiries:</p>
                  <div className="text-blue-600 font-semibold">
                    partnerships@mexicoinsiliconvalley.com
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}