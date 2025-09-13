"use client"

import { Header } from "@/components/layouts/Header"
import { Footer } from "@/components/layouts/Footer"
import { HeroVariantA } from "@/components/sections/hero/variant-a"
import { AboutVariantA } from "@/components/sections/about/variant-a"
import { AgendaVariantA } from "@/components/sections/agenda/variant-a"
import { SpeakersVariantA } from "@/components/sections/speakers/variant-a"
import { SponsorsVariantA } from "@/components/sections/sponsors/variant-a"
import { TicketsVariantA } from "@/components/sections/tickets/variant-a"
import { FAQVariantA } from "@/components/sections/faq/variant-a"
import { ContactVariantA } from "@/components/sections/contact/variant-a"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroVariantA />
        <section id="about">
          <AboutVariantA />
        </section>
        <section id="agenda">
          <AgendaVariantA />
        </section>
        <section id="speakers">
          <SpeakersVariantA />
        </section>
        <section id="sponsors">
          <SponsorsVariantA />
        </section>
        <section id="tickets">
          <TicketsVariantA />
        </section>
        <section id="faq">
          <FAQVariantA />
        </section>
        <section id="contact">
          <ContactVariantA />
        </section>
      </main>
      <Footer />
    </div>
  )
}