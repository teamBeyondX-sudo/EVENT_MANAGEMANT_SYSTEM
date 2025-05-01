import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { events } from "@/lib/db/schema"
import { authenticateUser } from "@/lib/auth/middleware"
import { eq } from "drizzle-orm"

export async function GET() {
  try {
    const allEvents = await db.select().from(events)
    return NextResponse.json(allEvents)
  } catch (error) {
    console.error("Failed to fetch events:", error)
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const user = await authenticateUser(request)
    if (user.role !== 'admin') {
      return NextResponse.json({ error: 'Only admins can create events' }, { status: 403 })
    }

    const eventData = await request.json()
    const newEvent = await db.insert(events).values(eventData).returning()
    return NextResponse.json(newEvent[0])
  } catch (error) {
    console.error("Failed to create event:", error)
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 })
  }
}