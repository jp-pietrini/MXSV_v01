'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useTranslations } from '@/hooks/use-translations'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navigation({ locale }: { locale: string }) {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const t = useTranslations('nav')
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: t('about') },
    { href: '#program', label: t('program') },
    { href: '#speakers', label: t('speakers') },
    { href: '#sponsors', label: t('sponsors') },
    { href: '#tickets', label: t('tickets') },
    { href: '#contact', label: t('contact') },
  ]

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MX</span>
            </div>
            <span className="text-xl font-heading font-bold gradient-text">MXSV</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleLocale}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>

            <Link
              href={`/${locale}/admin`}
              className="hidden md:inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105"
            >
              {t('admin')}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-white/10"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={`/${locale}/admin`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all text-center"
                >
                  {t('admin')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}