"use client"

import { motion } from "framer-motion"
import { ChevronRight, Play } from "lucide-react"
import { Button, Container } from "@/components/ui"

export function HeroVariantA() {
  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-60" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Date & Location Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700"
            >
              February 21-22, 2026 • Stanford University
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight"
              >
                Mexico in{" "}
                <span className="text-blue-600">
                  Silicon Valley
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 max-w-2xl leading-relaxed"
              >
                Connecting innovation ecosystems. Two days of workshops, panels, and networking
                that bridge Mexico and Silicon Valley's thriving tech communities.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group">
                Get Your Tickets
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button variant="ghost" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Highlights
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-gray-100"
            >
              {[
                { label: "Attendees", value: "500+" },
                { label: "Speakers", value: "50+" },
                { label: "Startups", value: "100+" },
                { label: "Investors", value: "75+" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Placeholder for MXSV logo/visual */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 h-96 flex items-center justify-center border border-gray-100 shadow-lg">
              <div className="text-center space-y-4">
                {/* Logo placeholder */}
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">MXSV</span>
                </div>
                <p className="text-gray-600 font-medium">
                  Eagle with Circuit Traces
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center"
            >
              <span className="text-2xl">🇲🇽</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}