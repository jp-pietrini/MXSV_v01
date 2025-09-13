"use client"

import Link from "next/link"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import { Container, Divider } from "@/components/ui"

const footerNavigation = {
  main: [
    { name: "About", href: "#about" },
    { name: "Agenda", href: "#agenda" },
    { name: "Speakers", href: "#speakers" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Tickets", href: "#tickets" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "FAQ", href: "#faq" },
    { name: "Help Center", href: "/help" },
    { name: "Contact Support", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Code of Conduct", href: "/code-of-conduct" },
  ],
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/mxsv",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/mxsv",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mxsv",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:info@mxsv.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="py-16">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">MX</span>
                </div>
                <span className="font-bold text-xl text-gray-900">MXSV</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Connecting innovation ecosystems between Mexico and Silicon Valley.
                Join us for two days of workshops, panels, and networking.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                    aria-label={item.name}
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation sections */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Event
              </h3>
              <ul className="space-y-3">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="max-w-md">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Get the latest news and updates about MXSV 2026.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>© 2026 MXSV. All rights reserved.</span>
              <Divider orientation="vertical" className="h-4" />
              <span>February 21-22, 2026</span>
              <Divider orientation="vertical" className="h-4" />
              <span>Stanford University</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/experiments" className="text-gray-600 hover:text-gray-900 transition-colors">
                Design Experiments
              </Link>
              <Link href="/admin" className="text-gray-600 hover:text-gray-900 transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}