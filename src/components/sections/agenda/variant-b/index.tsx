"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Container } from "@/components/ui"
import agendaData from "@/data/agenda.json"

export function AgendaVariantB() {
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
              <Calendar className="w-5 h-5 mr-3" />
              Conference Schedule
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Two Days of{" "}
              <span className="text-blue-600 italic">
                Transformation
              </span>
            </h2>

            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A carefully curated journey through innovation, collaboration, and the future
              of cross-border entrepreneurship.
            </p>
          </motion.div>

          {/* Days Grid */}
          <div className="space-y-16">
            {agendaData.days.map((day, dayIndex) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Day Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-8 py-4 rounded-full bg-gray-50 border border-gray-200 mb-6">
                    <span className="text-2xl font-bold text-gray-900 mr-4">
                      Day {dayIndex + 1}
                    </span>
                    <span className="text-xl text-gray-600">{day.date}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {day.theme}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {day.description}
                  </p>
                </div>

                {/* Sessions Grid */}
                <div className="grid gap-6">
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.div
                      key={sessionIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: sessionIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        {/* Time and Location */}
                        <div className="flex flex-col sm:flex-row gap-4 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="font-medium">{session.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{session.location}</span>
                          </div>
                        </div>

                        {/* Session Content */}
                        <div className="flex-1 lg:mx-8">
                          <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                            {session.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {session.description}
                          </p>

                          {/* Speakers */}
                          {session.speakers && session.speakers.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                              {session.speakers.map((speaker, speakerIndex) => (
                                <div
                                  key={speakerIndex}
                                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                                >
                                  <div className="w-6 h-6 bg-blue-600 rounded-full mr-2 flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                      {speaker.name.charAt(0)}
                                    </span>
                                  </div>
                                  {speaker.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Session Type Badge */}
                        <div className="flex-shrink-0">
                          <span className={`
                            inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                            ${session.type === 'keynote'
                              ? 'bg-purple-50 text-purple-700 border border-purple-200'
                              : session.type === 'panel'
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : session.type === 'workshop'
                              ? 'bg-orange-50 text-orange-700 border border-orange-200'
                              : 'bg-gray-50 text-gray-700 border border-gray-200'
                            }
                          `}>
                            {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Editorial CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Reserve Your Experience
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Limited seats available. Join us for this unprecedented gathering of innovators,
                investors, and visionaries.
              </p>
              <div className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors cursor-pointer">
                View Available Tickets
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}