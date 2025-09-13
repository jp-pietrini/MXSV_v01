"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui"

export function AboutVariantB() {
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
              Two Days of Innovation
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Where{" "}
              <span className="text-blue-600 italic">
                Innovation
              </span>{" "}
              Knows No Borders
            </h2>

            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mexico in Silicon Valley represents more than a conference—it's a movement.
              A celebration of the entrepreneurial spirit that transcends geographical boundaries.
            </p>
          </motion.div>

          {/* Editorial Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  The Silicon Valley Experience
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For decades, Silicon Valley has been the epicenter of technological innovation.
                  From garage startups to global unicorns, this ecosystem has redefined how we
                  live, work, and connect.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Now, we're creating a bridge between this technological powerhouse and the
                  vibrant entrepreneurial landscape of Mexico—fostering collaboration that
                  will shape the future of both regions.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  "Cross-border investment opportunities",
                  "Technology transfer initiatives",
                  "Startup acceleration programs",
                  "Cultural exchange and networking"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-lg text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 h-96 flex flex-col justify-center border border-gray-100 shadow-xl">
                <div className="text-center space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="text-4xl">🇲🇽</div>
                      <div className="text-sm font-semibold text-gray-800">Mexican Innovation</div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-4xl">🚀</div>
                      <div className="text-sm font-semibold text-gray-800">Silicon Valley Tech</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-6xl mb-4">🤝</div>
                    <div className="text-lg font-bold text-gray-900">United Vision</div>
                    <div className="text-sm text-gray-600">Building Tomorrow Together</div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center"
              >
                <span className="text-2xl">💡</span>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, -3, 3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center"
              >
                <span className="text-2xl">🌎</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Editorial Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 italic leading-relaxed mb-8">
                "The future belongs to those who can bridge cultures, technologies, and dreams.
                Mexico in Silicon Valley is that bridge."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">MXSV</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Conference Vision</div>
                  <div className="text-gray-600">Stanford University 2026</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}