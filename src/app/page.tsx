import { Navigation } from '@/components/ui/navigation'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProgramSection } from '@/components/sections/program'
import { SpeakersSection } from '@/components/sections/speakers'
import { SponsorsSection } from '@/components/sections/sponsors'
import { TicketsSection } from '@/components/sections/tickets'
import { FAQSection } from '@/components/sections/faq'
import { ContactSection } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <Navigation locale="en" />
      <main className="min-h-screen">
        <HeroSection locale="en" />
        <AboutSection />
        <ProgramSection />
        <SpeakersSection />
        <SponsorsSection />
        <TicketsSection locale="en" />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  )
}