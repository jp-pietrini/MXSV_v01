"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Container } from "@/components/ui"
import agendaData from "@/data/agenda.json"

export function AgendaVariantC() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-500/5 to-blue-600/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <Container>
        <div className="max-w-6xl mx-auto relative">
          {/* Header with Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-base font-medium text-blue-700">
              <Calendar className="w-5 h-5 mr-3" />
              Conference Schedule
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Two Days of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A carefully curated journey through innovation, collaboration, and the future
              of cross-border entrepreneurship.
            </p>
          </motion.div>

          {/* Days */}
          <div className="space-y-16">
            {agendaData.days.map((day, dayIndex) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Day Header with Gradient */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg mb-6">
                    <span className="text-2xl font-bold mr-4">Day {dayIndex + 1}</span>
                    <span className="text-xl">{day.date}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {day.theme}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {day.description}
                  </p>
                </div>

                {/* Sessions with Gradient Accents */}
                <div className="space-y-6">
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.div
                      key={sessionIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: sessionIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        {/* Gradient border on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

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

                            {/* Speakers with Gradient Accents */}
                            {session.speakers && session.speakers.length > 0 && (
                              <div className="flex flex-wrap gap-3">
                                {session.speakers.map((speaker, speakerIndex) => (
                                  <div
                                    key={speakerIndex}
                                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-medium border border-blue-100"
                                  >
                                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2 flex items-center justify-center">
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

                          {/* Session Type Badge with Gradient */}
                          <div className="flex-shrink-0">
                            <span className={`
                              inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border
                              ${session.type === 'keynote'
                                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-purple-500'
                                : session.type === 'panel'
                                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500'
                                : session.type === 'workshop'
                                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500'
                                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500'
                              }
                            `}>
                              {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section with Gradient */}
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
                  Be Part of the{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Experience
                  </span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Limited seats available. Join us for this unprecedented gathering of innovators,
                  investors, and visionaries.
                </p>
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl">
                  <Users className="w-5 h-5 mr-2" />
                  View Available Tickets
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}