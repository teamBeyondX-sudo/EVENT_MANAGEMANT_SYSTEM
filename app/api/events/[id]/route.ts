import { NextResponse } from "next/server"

// Mock database of events (same as in the main events route)
const events = [
  {
    id: 1,
    title: "Tech Innovators Summit 2023",
    description:
      "Join industry leaders and innovators for a day of tech talks, workshops, and networking opportunities. This summit brings together the brightest minds in technology to discuss emerging trends, share insights, and collaborate on future innovations.\n\nThe event will feature keynote speeches, panel discussions, interactive workshops, and networking sessions. Participants will have the opportunity to engage with experts, gain valuable knowledge, and connect with peers in the tech industry.",
    date: "May 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "University Center, Room 302",
    category: "Technology",
    isPaid: true,
    price: "₹500",
    image: "/placeholder.svg?height=400&width=800&text=Tech+Summit",
    organizer: "Computer Science Department",
    attendees: 156,
    maxAttendees: 200,
    schedule: [
      {
        time: "10:00 AM - 10:30 AM",
        title: "Registration & Welcome Coffee",
        location: "Main Lobby",
      },
      {
        time: "10:30 AM - 11:30 AM",
        title: "Keynote: The Future of AI in Education",
        speaker: "Dr. Rajesh Kumar",
        location: "Main Hall",
      },
      {
        time: "11:45 AM - 12:45 PM",
        title: "Panel Discussion: Emerging Tech Trends",
        location: "Room 302",
      },
      {
        time: "1:00 PM - 2:00 PM",
        title: "Lunch & Networking",
        location: "Dining Hall",
      },
      {
        time: "2:15 PM - 3:15 PM",
        title: "Workshop: Hands-on Machine Learning",
        location: "Computer Lab",
      },
      {
        time: "3:30 PM - 4:00 PM",
        title: "Closing Remarks & Next Steps",
        location: "Main Hall",
      },
    ],
    speakers: [
      {
        name: "Dr. Rajesh Kumar",
        title: "AI Research Lead, Brainware University",
        avatar: "/placeholder.svg?height=64&width=64&text=RK",
      },
      {
        name: "Priya Sharma",
        title: "CTO, TechInnovate",
        avatar: "/placeholder.svg?height=64&width=64&text=PS",
      },
      {
        name: "Amit Patel",
        title: "Data Science Director, FutureLabs",
        avatar: "/placeholder.svg?height=64&width=64&text=AP",
      },
    ],
  },
  // Other events would be defined here
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)

  // Find the event by ID
  const event = events.find((e) => e.id === id)

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 })
  }

  return NextResponse.json(event)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const updateData = await request.json()

    // Find the event index
    const eventIndex = events.findIndex((e) => e.id === id)

    if (eventIndex === -1) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    // Update the event
    const updatedEvent = {
      ...events[eventIndex],
      ...updateData,
      id, // Ensure ID doesn't change
    }

    events[eventIndex] = updatedEvent

    return NextResponse.json({
      success: true,
      message: "Event updated successfully",
      event: updatedEvent,
    })
  } catch (error) {
    console.error("Event update error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)

  // Find the event index
  const eventIndex = events.findIndex((e) => e.id === id)

  if (eventIndex === -1) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 })
  }

  // Remove the event
  events.splice(eventIndex, 1)

  return NextResponse.json({
    success: true,
    message: "Event deleted successfully",
  })
}
