import { NextResponse } from "next/server"

// Mock database of event registrations
const registrations = [
  {
    id: 1,
    eventId: 1,
    userId: "user1",
    registrationDate: "2023-05-01T10:30:00Z",
    status: "confirmed",
    paymentStatus: "paid",
    paymentAmount: 500,
  },
  {
    id: 2,
    eventId: 2,
    userId: "user1",
    registrationDate: "2023-05-02T14:15:00Z",
    status: "confirmed",
    paymentStatus: "free",
    paymentAmount: 0,
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  const eventId = searchParams.get("eventId")

  let filteredRegistrations = [...registrations]

  if (userId) {
    filteredRegistrations = filteredRegistrations.filter((reg) => reg.userId === userId)
  }

  if (eventId) {
    filteredRegistrations = filteredRegistrations.filter((reg) => reg.eventId === Number.parseInt(eventId))
  }

  return NextResponse.json(filteredRegistrations)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.eventId || !data.userId) {
      return NextResponse.json({ error: "eventId and userId are required" }, { status: 400 })
    }

    // Check if already registered
    const existingRegistration = registrations.find((reg) => reg.eventId === data.eventId && reg.userId === data.userId)

    if (existingRegistration) {
      return NextResponse.json({ error: "User is already registered for this event" }, { status: 400 })
    }

    // Create new registration
    const newRegistration = {
      id: registrations.length + 1,
      eventId: data.eventId,
      userId: data.userId,
      registrationDate: new Date().toISOString(),
      status: "confirmed",
      paymentStatus: data.paymentStatus || "free",
      paymentAmount: data.paymentAmount || 0,
    }

    // Add to our mock database
    registrations.push(newRegistration)

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      registration: newRegistration,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
