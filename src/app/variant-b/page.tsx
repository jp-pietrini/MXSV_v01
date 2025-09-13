import { Metadata } from "next"
import { HeroVariantB } from "@/components/sections/hero/variant-b"
import { AboutVariantB } from "@/components/sections/about/variant-b"
import { AgendaVariantB } from "@/components/sections/agenda/variant-b"
import { SpeakersVariantB } from "@/components/sections/speakers/variant-b"
import { SponsorsVariantB } from "@/components/sections/sponsors/variant-b"
import { TicketsVariantB } from "@/components/sections/tickets/variant-b"
import { FaqVariantB } from "@/components/sections/faq/variant-b"
import { ContactVariantB } from "@/components/sections/contact/variant-b"

export const metadata: Metadata = {
  title: "Mexico in Silicon Valley - Editorial Stripe Variant",
  description: "Two ecosystems. One vision. Connecting innovation between Mexico and Silicon Valley.",
}

export default function VariantBPage() {
  return (
    <main className="min-h-screen">
      <HeroVariantB />
      <AboutVariantB />
      <AgendaVariantB />
      <SpeakersVariantB />
      <SponsorsVariantB />
      <TicketsVariantB />
      <FaqVariantB />
      <ContactVariantB />
    </main>
  )
}