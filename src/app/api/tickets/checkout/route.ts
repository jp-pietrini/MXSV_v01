import { NextRequest, NextResponse } from 'next/server'
import { stripe, formatAmountForStripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { ticketId, locale = 'en' } = await request.json()

    if (!ticketId) {
      return NextResponse.json(
        { error: 'Ticket ID is required' },
        { status: 400 }
      )
    }

    // Get ticket from database
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId }
    })

    if (!ticket) {
      return NextResponse.json(
        { error: 'Ticket not found' },
        { status: 404 }
      )
    }

    if (!ticket.active) {
      return NextResponse.json(
        { error: 'Ticket is not available' },
        { status: 400 }
      )
    }

    if (ticket.sold >= ticket.quantity) {
      return NextResponse.json(
        { error: 'Ticket is sold out' },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `MXSV 2026 - ${ticket.tier} Ticket`,
              description: 'Mexico in Silicon Valley Conference 2026 - February 21-22 at Stanford University',
              images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`],
            },
            unit_amount: formatAmountForStripe(ticket.price),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}#tickets`,
      metadata: {
        ticketId: ticket.id,
        ticketTier: ticket.tier,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}