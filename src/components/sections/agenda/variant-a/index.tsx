"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Download, Users } from "lucide-react"
import { Container, SectionHeader, Card, CardContent, Button, Badge } from "@/components/ui"
import agendaData from "@/data/agenda.json"

const days = [
  {
    id: "workshops",
    title: "Workshops Day",
    date: "February 21, 2026",
    description: "Interactive workshops and deep-dive sessions"
  },
  {
    id: "panels",
    title: "Panels Day",
    date: "February 22, 2026",
    description: "Panel discussions and keynote presentations"
  }
]

const typeColors = {
  keynote: "bg-purple-100 text-purple-800",
  panel: "bg-blue-100 text-blue-800",
  workshop: "bg-green-100 text-green-800",
  networking: "bg-orange-100 text-orange-800",
  fireside: "bg-pink-100 text-pink-800",
  closing: "bg-gray-100 text-gray-800"
}

export function AgendaVariantA() {
  const [activeDay, setActiveDay] = useState("workshops")

  const filteredAgenda = agendaData.filter(item => item.day === activeDay && item.isVisible)
    .sort((a, b) => a.order - b.order)

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            subtitle="Event Agenda"
            title="Two Days of Innovation"
            description="Explore our comprehensive program designed to maximize networking, learning, and collaboration opportunities."
            size="md"
          />
        </motion.div>

        {/* Day Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {days.map((day) => (
            <Card
              key={day.id}
              className={`cursor-pointer transition-all duration-200 ${
                activeDay === day.id
                  ? "border-blue-300 bg-blue-50 shadow-md"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
              onClick={() => setActiveDay(day.id)}
            >
              <CardContent className="p-6 text-center">
                <h3 className={`font-semibold text-lg mb-2 ${
                  activeDay === day.id ? "text-blue-900" : "text-gray-900"
                }`}>
                  {day.title}
                </h3>
                <p className={`text-sm mb-1 ${
                  activeDay === day.id ? "text-blue-700" : "text-gray-600"
                }`}>
                  {day.date}
                </p>
                <p className={`text-xs ${
                  activeDay === day.id ? "text-blue-600" : "text-gray-500"
                }`}>
                  {day.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Agenda Items */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 space-y-4"
        >
          {filteredAgenda.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6 items-start">
                    {/* Time & Type */}
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {formatTime(item.startTime)} - {formatTime(item.endTime)}
                        </span>
                      </div>

                      <Badge
                        variant="secondary"
                        className={typeColors[item.type as keyof typeof typeColors] || "bg-gray-100 text-gray-800"}
                      >
                        {item.type}
                      </Badge>

                      {item.location && (
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Speakers */}
                    <div className="space-y-2">
                      {item.speakers && item.speakers.length > 0 && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          <span>
                            {item.speakers.length} Speaker{item.speakers.length > 1 ? 's' : ''}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="bg-white border-gray-200">
            <CardContent className="p-8">
              <div className="max-w-md mx-auto space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Download Full Agenda
                </h3>
                <p className="text-gray-600 text-sm">
                  Get the complete schedule with detailed session descriptions, speaker bios, and venue maps.
                </p>
                <Button variant="secondary" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}