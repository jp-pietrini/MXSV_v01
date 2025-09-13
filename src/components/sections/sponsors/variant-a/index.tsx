"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Container, SectionHeader, Card, CardContent, Button } from "@/components/ui"
import sponsorsData from "@/data/sponsors.json"

const tierLabels = {
  platinum: "Platinum Sponsors",
  gold: "Gold Sponsors",
  silver: "Silver Sponsors",
  bronze: "Bronze Sponsors",
  community: "Community Partners"
}

const tierOrder = ["platinum", "gold", "silver", "bronze", "community"]

export function SponsorsVariantA() {
  const visibleSponsors = sponsorsData
    .filter(sponsor => sponsor.isVisible)
    .sort((a, b) => a.order - b.order)

  const sponsorsByTier = tierOrder.reduce((acc, tier) => {
    acc[tier] = visibleSponsors.filter(sponsor => sponsor.tier === tier)
    return acc
  }, {} as Record<string, typeof sponsorsData>)

  const getSponsorLogo = (logoPath: string, name: string) => {
    // For demo purposes, return a placeholder with the company name
    return `https://via.placeholder.com/200x80/f8f9fa/6b7280?text=${encodeURIComponent(name)}`
  }

  const getTierGridCols = (tier: string) => {
    switch (tier) {
      case "platinum": return "grid-cols-1 md:grid-cols-3"
      case "gold": return "grid-cols-2 md:grid-cols-4"
      case "silver": return "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
      case "bronze": return "grid-cols-3 md:grid-cols-5 lg:grid-cols-6"
      case "community": return "grid-cols-3 md:grid-cols-6 lg:grid-cols-8"
      default: return "grid-cols-3 md:grid-cols-6"
    }
  }

  const getTierCardSize = (tier: string) => {
    switch (tier) {
      case "platinum": return "h-24"
      case "gold": return "h-20"
      case "silver": return "h-16"
      case "bronze": return "h-14"
      case "community": return "h-12"
      default: return "h-16"
    }
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
            subtitle="Sponsors & Partners"
            title="Powered by Innovation Leaders"
            description="We're grateful to our sponsors and partners who make MXSV possible."
            size="md"
          />
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="mt-16 space-y-16">
          {tierOrder.map((tier) => {
            const sponsors = sponsorsByTier[tier]
            if (!sponsors || sponsors.length === 0) return null

            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tierLabels[tier as keyof typeof tierLabels]}
                  </h3>
                </div>

                <div className={`grid gap-6 ${getTierGridCols(tier)}`}>
                  {sponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="group border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 h-full">
                        <CardContent className="p-4 flex items-center justify-center">
                          <a
                            href={sponsor.website || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                          >
                            <div className={`flex items-center justify-center ${getTierCardSize(tier)}`}>
                              <img
                                src={getSponsorLogo(sponsor.logo, sponsor.name)}
                                alt={`${sponsor.name} logo`}
                                className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                              />
                            </div>
                            {sponsor.website && (
                              <div className="mt-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <ExternalLink className="h-4 w-4 text-gray-400" />
                              </div>
                            )}
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-gray-200">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Partner with MXSV 2026
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Join leading companies in supporting the Mexico-Silicon Valley innovation corridor.
                  Our sponsorship packages offer unique opportunities to connect with entrepreneurs,
                  investors, and industry leaders from both regions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    Download Sponsorship Packet
                  </Button>
                  <Button variant="ghost" size="lg">
                    Contact Partnerships Team
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benefits Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Brand Visibility",
              description: "Showcase your brand to 500+ innovation leaders and entrepreneurs"
            },
            {
              title: "Networking Access",
              description: "Exclusive access to VIP networking events and speaker dinners"
            },
            {
              title: "Talent Pipeline",
              description: "Connect with top talent from both Mexico and Silicon Valley"
            }
          ].map((benefit, index) => (
            <Card key={benefit.title} className="border-gray-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}