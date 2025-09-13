"use client"

import { motion } from "framer-motion"
import { Linkedin, ExternalLink } from "lucide-react"
import { Container, SectionHeader, Card, CardContent, Badge } from "@/components/ui"
import speakersData from "@/data/speakers.json"

const typeColors = {
  keynote: "bg-purple-100 text-purple-800",
  panelist: "bg-blue-100 text-blue-800",
  moderator: "bg-green-100 text-green-800"
}

const getImageUrl = (imagePath: string) => {
  // For now, return a placeholder. In production, this would be actual speaker photos
  return `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=80`
}

export function SpeakersVariantA() {
  const visibleSpeakers = speakersData
    .filter(speaker => speaker.isVisible)
    .sort((a, b) => a.order - b.order)

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
            subtitle="Featured Speakers"
            title="Industry Leaders and Innovators"
            description="Meet the visionaries who are shaping the future of technology and innovation in Mexico and Silicon Valley."
            size="md"
          />
        </motion.div>

        {/* Keynote Speakers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Keynote Speakers</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleSpeakers
              .filter(speaker => speaker.type === "keynote")
              .map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Speaker Photo */}
                        <div className="relative">
                          <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 overflow-hidden">
                            <img
                              src={getImageUrl(speaker.image)}
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2">
                            <Badge
                              variant="secondary"
                              className={typeColors[speaker.type as keyof typeof typeColors] || "bg-gray-100 text-gray-800"}
                              size="sm"
                            >
                              Keynote
                            </Badge>
                          </div>
                        </div>

                        {/* Speaker Info */}
                        <div className="text-center space-y-2">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {speaker.name}
                          </h4>
                          <p className="text-sm font-medium text-blue-600">
                            {speaker.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {speaker.company}
                          </p>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-gray-600 leading-relaxed text-center">
                          {speaker.bio.length > 120
                            ? `${speaker.bio.substring(0, 120)}...`
                            : speaker.bio
                          }
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-3 pt-2">
                          {speaker.linkedin && (
                            <a
                              href={speaker.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                          {speaker.twitter && (
                            <a
                              href={speaker.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                          {speaker.website && (
                            <a
                              href={speaker.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            }
          </div>
        </motion.div>

        {/* Panel Speakers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Panelists & Moderators</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleSpeakers
              .filter(speaker => speaker.type === "panelist" || speaker.type === "moderator")
              .map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="group border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 h-full">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {/* Speaker Photo */}
                        <div className="relative">
                          <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 overflow-hidden">
                            <img
                              src={getImageUrl(speaker.image)}
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Speaker Info */}
                        <div className="text-center space-y-1">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {speaker.name}
                          </h4>
                          <p className="text-xs text-blue-600 font-medium">
                            {speaker.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {speaker.company}
                          </p>
                        </div>

                        {/* Type Badge */}
                        <div className="flex justify-center">
                          <Badge
                            variant="secondary"
                            className={typeColors[speaker.type as keyof typeof typeColors] || "bg-gray-100 text-gray-800"}
                            size="sm"
                          >
                            {speaker.type}
                          </Badge>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-2">
                          {speaker.linkedin && (
                            <a
                              href={speaker.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Linkedin className="h-3 w-3" />
                            </a>
                          )}
                          {speaker.twitter && (
                            <a
                              href={speaker.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            }
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
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-8">
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Want to Speak at MXSV 2026?
                </h3>
                <p className="text-gray-600">
                  We're always looking for thought leaders and innovators to share their insights.
                  Submit your speaking proposal and join this incredible lineup.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}