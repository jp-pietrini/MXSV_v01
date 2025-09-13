"use client"

import { motion } from "framer-motion"
import { Target, Eye, Users, TrendingUp } from "lucide-react"
import { Container, SectionHeader, Card, CardContent } from "@/components/ui"

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Foster meaningful connections and partnerships between Mexican and Silicon Valley innovation communities, driving economic growth and technological advancement in both regions."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "A future where the borders between innovation ecosystems are bridges, not barriers - where the best ideas flow freely and create value for both Mexico and Silicon Valley."
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Building lasting relationships between entrepreneurs, investors, technologists, and thought leaders from both innovation ecosystems."
  },
  {
    icon: TrendingUp,
    title: "Growth Impact",
    description: "Creating opportunities for collaboration, investment, and scaling that benefit startups and enterprises in both regions."
  }
]

const stats = [
  { value: "500+", label: "Expected Attendees" },
  { value: "50+", label: "Industry Speakers" },
  { value: "100+", label: "Participating Startups" },
  { value: "75+", label: "Active Investors" }
]

export function AboutVariantA() {
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
            subtitle="About MXSV"
            title="Bridging Innovation Ecosystems"
            description="MXSV is a premier conference that connects the thriving innovation ecosystems of Mexico and Silicon Valley. Over two transformative days, we bring together entrepreneurs, investors, technologists, and thought leaders to explore opportunities for collaboration, investment, and growth."
            size="md"
          />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                MXSV 2026 by the Numbers
              </h3>
              <p className="text-gray-600">
                Join a diverse community of innovators and changemakers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Bridge Two Innovation Ecosystems?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're an entrepreneur looking to scale, an investor seeking opportunities,
              or a technologist eager to collaborate, MXSV 2026 is your gateway to cross-border innovation.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}