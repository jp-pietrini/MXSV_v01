import { Metadata } from "next"
import { HeroVariantA } from "@/components/sections/hero/variant-a"
import { AboutVariantA } from "@/components/sections/about/variant-a"
import { AgendaVariantA } from "@/components/sections/agenda/variant-a"
import { SpeakersVariantA } from "@/components/sections/speakers/variant-a"
import { SponsorsVariantA } from "@/components/sections/sponsors/variant-a"
import { TicketsVariantA } from "@/components/sections/tickets/variant-a"
import { FaqVariantA } from "@/components/sections/faq/variant-a"
import { ContactVariantA } from "@/components/sections/contact/variant-a"

export const metadata: Metadata = {
  title: "Mexico in Silicon Valley - Pure Stripe Variant",
  description: "Two ecosystems. One vision. Connecting innovation between Mexico and Silicon Valley.",
}

export default function VariantAPage() {
  return (
    <main className="min-h-screen">
      <HeroVariantA />
      <AboutVariantA />
      <AgendaVariantA />
      <SpeakersVariantA />
      <SponsorsVariantA />
      <TicketsVariantA />
      <FaqVariantA />
      <ContactVariantA />
    </main>
  )
}