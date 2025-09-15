import { Metadata } from "next"
import { HeroVariantC } from "@/components/sections/hero/variant-c"
import { AboutVariantC } from "@/components/sections/about/variant-c"
import { AgendaVariantC } from "@/components/sections/agenda/variant-c"
import { SpeakersVariantC } from "@/components/sections/speakers/variant-c"
import { SponsorsVariantC } from "@/components/sections/sponsors/variant-c"
import { TicketsVariantC } from "@/components/sections/tickets/variant-c"
import { FaqVariantC } from "@/components/sections/faq/variant-c"
import { ContactVariantC } from "@/components/sections/contact/variant-c"

export const metadata: Metadata = {
  title: "Mexico in Silicon Valley - Gradient Accent Variant",
  description: "Two ecosystems. One vision. Connecting innovation between Mexico and Silicon Valley.",
}

export default function VariantCPage() {
  return (
    <main className="min-h-screen">
      <HeroVariantC />
      <AboutVariantC />
      <AgendaVariantC />
      <SpeakersVariantC />
      <SponsorsVariantC />
      <TicketsVariantC />
      <FaqVariantC />
      <ContactVariantC />
    </main>
  )
}