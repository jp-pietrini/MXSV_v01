import { Inter, Space_Grotesk } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navigation } from '@/components/ui/navigation'
import { locales } from '@/i18n'
import '../globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  if (!locales.includes(locale as any)) {
    notFound()
  }

  let messages
  try {
    messages = (await import(`@/locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navigation locale={locale} />
            <main className="min-h-screen">{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}