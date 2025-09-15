"use client"

import { motion } from "framer-motion"
import { MapPin, Building, Users } from "lucide-react"
import { Container } from "@/components/ui"
import speakersData from "@/data/speakers.json"

export function SpeakersVariantC() {
  const featuredSpeakers = speakersData.speakers.filter(speaker => speaker.featured)
  const regularSpeakers = speakersData.speakers.filter(speaker => !speaker.featured)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/5 to-purple-600/5 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-blue-600/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <Container>
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-base font-medium text-blue-700">
              <Users className="w-5 h-5 mr-3" />
              Visionary Voices
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Leaders Shaping{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the innovators, entrepreneurs, and visionaries who are defining the future
              of technology and cross-border collaboration.
            </p>
          </motion.div>

          {/* Featured Speakers */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 text-center mb-12"
            >
              Keynote Speakers
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    {/* Gradient border on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    
                    <div className="text-center space-y-6">
                      {/* Profile with gradient background */}
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <span className="text-white text-3xl font-bold">
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {speaker.name}
                        </h4>

                        <div className="space-y-2">
                          <div className="flex items-center justify-center text-lg font-semibold">
                            <Building className="w-5 h-5 mr-2 text-blue-600" />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {speaker.title}
                            </span>
                          </div>
                          <div className="text-lg font-medium text-gray-700">
                            {speaker.company}
                          </div>
                          <div className="flex items-center justify-center text-gray-500">
                            <MapPin className="w-4 h-4 mr-2" />
                            {speaker.location}
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                          {speaker.bio}
                        </p>

                        {/* Gradient expertise tags */}
                        <div className="flex flex-wrap justify-center gap-2">
                          {speaker.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Regular Speakers */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 text-center mb-12"
            >
              Featured Speakers & Panelists
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    {/* Subtle gradient accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="text-center space-y-4 relative">
                      {/* Profile */}
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                        <span className="text-white text-lg font-bold">
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900">
                          {speaker.name}
                        </h4>

                        <div className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {speaker.title}
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          {speaker.company}
                        </div>
                        <div className="flex items-center justify-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {speaker.location}
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {speaker.bio}
                      </p>

                      {/* Compact tags */}
                      <div className="flex flex-wrap justify-center gap-1">
                        {speaker.expertise.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gradient-to-r from-gray-50 to-blue-50 text-gray-600 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {speaker.expertise.length > 3 && (
                          <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded-full text-xs">
                            +{speaker.expertise.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-3xl" />
              <div className="relative">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Join Our{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Speaker Lineup
                  </span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  We're always looking for innovative voices to share their insights.
                  Apply to speak at future MXSV events.
                </p>
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl">
                  Apply to Speak
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}