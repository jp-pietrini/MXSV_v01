"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Eye, Palette, Sparkles } from "lucide-react"
import { Container, SectionHeader, Card, CardContent, CardHeader, CardTitle, Button } from "@/components/ui"

const variants = [
  {
    id: "variant-a",
    name: "Variant A: Pure Stripe",
    description: "Ultra-minimal design with thin borders and soft shadows. Clean typography and generous white space following Stripe's design principles.",
    icon: Eye,
    color: "bg-blue-50 text-blue-600 border-blue-200",
    features: [
      "Ultra-minimal aesthetic",
      "1-2px borders",
      "Soft shadows",
      "Clean typography",
      "Generous white space"
    ],
    href: "/variant-a",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&auto=format&q=80"
  },
  {
    id: "variant-b",
    name: "Variant B: Editorial Stripe",
    description: "Larger typography and more prominent imagery while maintaining Stripe's clean aesthetic. Enhanced visual hierarchy for better content consumption.",
    icon: Palette,
    color: "bg-purple-50 text-purple-600 border-purple-200",
    features: [
      "Larger type scale",
      "More prominent imagery",
      "Enhanced visual hierarchy",
      "Editorial layouts",
      "Content-focused design"
    ],
    href: "/variant-b",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format&q=80"
  },
  {
    id: "variant-c",
    name: "Variant C: Gradient Accent",
    description: "Subtle gradient accents while maintaining white backgrounds. Carefully applied color to guide attention without overwhelming the clean aesthetic.",
    icon: Sparkles,
    color: "bg-green-50 text-green-600 border-green-200",
    features: [
      "Subtle gradient accents",
      "White backgrounds maintained",
      "Strategic color usage",
      "Visual interest",
      "Balanced approach"
    ],
    href: "/variant-c",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop&auto=format&q=80"
  }
]

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <SectionHeader
            subtitle="Design Experiments"
            title="Compare Visual Variants"
            description="Explore different visual approaches for the MXSV website. Each variant maintains the core Stripe-style aesthetic while exploring different emphasis and presentation styles."
            size="md"
          />
        </motion.div>

        {/* Variants Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="relative mb-4 rounded-lg overflow-hidden">
                    <img
                      src={variant.image}
                      alt={variant.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <div className={`p-2 rounded-lg border ${variant.color}`}>
                        <variant.icon className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {variant.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {variant.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {variant.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action */}
                    <div className="pt-4">
                      <Link href={variant.href}>
                        <Button
                          variant={index === 0 ? "primary" : "secondary"}
                          className="w-full group-hover:shadow-md transition-shadow"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Variant
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl border border-gray-200 p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Shared Design Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All variants follow these core principles inspired by Stripe's design philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Clarity over Cleverness",
                description: "Simple, direct communication that serves the user's goals"
              },
              {
                title: "White Space as Feature",
                description: "Generous padding and margins that help content breathe"
              },
              {
                title: "Subtle Depth",
                description: "Soft shadows and thin borders that add dimension without noise"
              },
              {
                title: "Restrained Motion",
                description: "150-250ms easings with gentle hover effects and scale ≤1.02"
              }
            ].map((principle, index) => (
              <div key={principle.title} className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-sm">
            These experiments help us find the perfect balance between aesthetics and functionality
            for the MXSV 2026 conference website.
          </p>
          <div className="mt-6">
            <Link href="/admin">
              <Button variant="ghost">
                Admin Panel
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}