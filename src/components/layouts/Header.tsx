"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Globe, Sun, Moon } from "lucide-react"
import { Button, Container } from "@/components/ui"
import { cn, scrollToElement } from "@/lib/utils"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Agenda", href: "#agenda" },
  { name: "Speakers", href: "#speakers" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Tickets", href: "#tickets" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToElement(href.substring(1))
      setMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 w-full z-50 nav-stripe">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">MX</span>
              </div>
              <span className="font-bold text-xl text-gray-900">MXSV</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </motion.div>

          {/* Right side actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            {/* Language switcher */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Globe className="h-5 w-5" />
            </button>

            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Experiments link */}
            <Link href="/experiments">
              <Button variant="ghost" size="sm">
                Experiments
              </Button>
            </Link>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Button onClick={() => handleNavClick("#tickets")}>
                Get Tickets
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <div className="space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  onClick={() => handleNavClick("#tickets")}
                  className="w-full"
                >
                  Get Tickets
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </header>
  )
}