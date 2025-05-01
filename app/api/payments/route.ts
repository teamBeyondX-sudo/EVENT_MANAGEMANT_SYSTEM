
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: Request) {
  try {
    const { eventId, eventTitle, price } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: eventTitle,
            },
            unit_amount: parseInt(price.replace("₹", "")) * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/events/${eventId}?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/events/${eventId}?canceled=true`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Payment error:", error)
    return NextResponse.json({ error: "Payment session creation failed" }, { status: 500 })
  }
}
