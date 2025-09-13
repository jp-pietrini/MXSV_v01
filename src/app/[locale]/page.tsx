import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProgramSection } from '@/components/sections/program'
import { SpeakersSection } from '@/components/sections/speakers'
import { SponsorsSection } from '@/components/sections/sponsors'
import { TicketsSection } from '@/components/sections/tickets'
import { FAQSection } from '@/components/sections/faq'
import { ContactSection } from '@/components/sections/contact'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
    },
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  
  return (
    <>
      <HeroSection locale={locale} />
      <AboutSection />
      <ProgramSection />
      <SpeakersSection />
      <SponsorsSection />
      <TicketsSection locale={locale} />
      <FAQSection />
      <ContactSection />
    </>
  )
}