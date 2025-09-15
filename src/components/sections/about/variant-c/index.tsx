"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui"

export function AboutVariantC() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header with Gradient Accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-base font-medium text-blue-700">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></span>
              Our Mission
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Bridging{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>{" "}
              Ecosystems
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mexico in Silicon Valley brings together the entrepreneurial spirit of Mexico
              with the technological excellence of Silicon Valley, creating unprecedented
              opportunities for collaboration and growth.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
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
                  Silicon Valley has been the epicenter of technological innovation for decades.
                  From garage startups to global unicorns, this ecosystem has transformed
                  how we live, work, and connect.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Now, we're creating a bridge to Mexico's vibrant entrepreneurial landscape,
                  fostering collaboration that will define the future of both regions.
                </p>
              </div>

              {/* Feature Cards with Gradients */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "💡", title: "Innovation", desc: "Cutting-edge tech solutions" },
                  { icon: "🤝", title: "Collaboration", desc: "Cross-border partnerships" },
                  { icon: "🚀", title: "Growth", desc: "Scalable opportunities" },
                  { icon: "🌎", title: "Impact", desc: "Global market reach" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className="text-2xl mb-3">{item.icon}</div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
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
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-0.5">
                  <div className="bg-white rounded-3xl w-full h-full" />
                </div>

                <div className="relative text-center space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl">🇲🇽</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-800">Mexican Innovation</div>
                      <div className="text-xs text-gray-600">Entrepreneurial Spirit</div>
                    </div>
                    <div className="space-y-3">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl">🚀</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-800">Silicon Valley Tech</div>
                      <div className="text-xs text-gray-600">Global Reach</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl mb-4">
                      <span className="text-white text-3xl">🤝</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">United Vision</div>
                    <div className="text-sm text-gray-600">Building Tomorrow Together</div>
                  </div>
                </div>
              </div>

              {/* Floating gradient accents */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30"
              />
            </motion.div>
          </div>

          {/* Stats Section with Gradient Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "500+", label: "Expected Attendees", desc: "Industry leaders" },
                  { value: "50+", label: "Featured Speakers", desc: "Expert voices" },
                  { value: "100+", label: "Startup Showcases", desc: "Innovation demos" },
                  { value: "75+", label: "Investment Partners", desc: "Active VCs" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}