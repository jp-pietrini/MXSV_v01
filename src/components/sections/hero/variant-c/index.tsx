"use client"

import { motion } from "framer-motion"
import { ChevronRight, Play, Sparkles } from "lucide-react"
import { Button, Container } from "@/components/ui"

export function HeroVariantC() {
  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Gradient background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Date & Location Badge with Gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-sm font-medium text-blue-700"
            >
              <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
              February 21-22, 2026 • Stanford University
            </motion.div>

            {/* Main Heading with Gradient Text */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight"
              >
                Mexico in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Silicon Valley
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 max-w-2xl leading-relaxed"
              >
                Two ecosystems. One vision.{" "}
                <span className="font-medium text-gray-800">
                  Connecting innovation between Mexico and Silicon Valley.
                </span>
              </motion.p>
            </div>

            {/* CTAs with Gradient Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Secure Your Tickets
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="group text-blue-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Preview
              </Button>
            </motion.div>

            {/* Stats with Gradient Accents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { value: "500+", label: "Attendees" },
                { value: "50+", label: "Speakers" },
                { value: "75+", label: "VCs" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-10" />

              <div className="relative text-center space-y-8">
                {/* Main logo with gradient background */}
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-white text-3xl font-bold">MXSV</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Innovation Bridge
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connecting the entrepreneurial spirit of Mexico with
                    the technological excellence of Silicon Valley.
                  </p>
                </div>

                {/* Floating gradient elements */}
                <div className="flex justify-center space-x-6">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <span className="text-white text-xl">🇲🇽</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <span className="text-white text-xl">🚀</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-40"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}