"use client"

import { motion } from "framer-motion"
import { ChevronRight, Play, ArrowDown } from "lucide-react"
import { Button, Container } from "@/components/ui"

export function HeroVariantB() {
  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Editorial-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 py-20">
          {/* Editorial Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-base font-medium text-blue-700"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            February 21-22, 2026 • Stanford University, California
          </motion.div>

          {/* Large Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight leading-none">
              Mexico in{" "}
              <span className="block text-blue-600 italic">
                Silicon Valley
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Two ecosystems. One vision.{" "}
              <span className="text-gray-900 font-medium">
                Connecting innovation between Mexico and Silicon Valley.
              </span>
            </p>
          </motion.div>

          {/* Editorial-style description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              Join us for an extraordinary gathering where the entrepreneurial spirit of Mexico
              meets the technological prowess of Silicon Valley. Two days of workshops, panels,
              and networking that will forge the future of cross-border innovation.
            </p>
          </motion.div>

          {/* Large Editorial CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button size="xl" className="group text-lg px-10 py-4">
              Secure Your Tickets
              <ChevronRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button variant="ghost" size="xl" className="group text-lg px-8 py-4">
              <Play className="mr-3 h-5 w-5" />
              Watch Conference Preview
            </Button>
          </motion.div>

          {/* Editorial-style featured image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative mt-16"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-16 h-96 flex items-center justify-center border border-gray-100 shadow-xl">
              <div className="text-center space-y-6">
                {/* Large logo placeholder */}
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-4xl font-bold">MXSV</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-gray-800">
                    Eagle with Circuit Traces
                  </p>
                  <p className="text-gray-600">
                    Symbolizing the fusion of tradition and innovation
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial floating elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center"
            >
              <span className="text-3xl">🇲🇽</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats with Editorial styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 mt-16 border-t border-gray-200"
          >
            {[
              { label: "Expected Attendees", value: "500+", description: "Industry leaders" },
              { label: "Featured Speakers", value: "50+", description: "Expert voices" },
              { label: "Startup Showcases", value: "100+", description: "Innovation demos" },
              { label: "Investment Partners", value: "75+", description: "Active VCs" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-400"
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}