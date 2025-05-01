import { NextResponse } from "next/server"

// Mock database of events
const events = [
  {
    id: 1,
    title: "Tech Innovators Summit 2023",
    description:
      "Join industry leaders and innovators for a day of tech talks, workshops, and networking opportunities.",
    date: "May 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "University Center, Room 302",
    category: "Technology",
    isPaid: true,
    price: "₹500",
    image: "/placeholder.svg?height=192&width=384&text=Tech+Summit",
    organizer: "Computer Science Department",
    attendees: 156,
    maxAttendees: 200,
  },
  {
    id: 2,
    title: "Cultural Fest: Rhythms of India",
    description: "Celebrate the diverse cultural heritage of India with music, dance, and art performances.",
    date: "May 20, 2023",
    time: "6:00 PM - 10:00 PM",
    location: "Campus Amphitheater",
    category: "Cultural",
    isPaid: false,
    image: "/placeholder.svg?height=192&width=384&text=Cultural+Fest",
    organizer: "Cultural Committee",
    attendees: 210,
    maxAttendees: 500,
  },
  {
    id: 3,
    title: "Career Development Workshop",
    description: "Learn essential skills for job hunting, resume building, and interview preparation.",
    date: "May 25, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Business Building, Room 105",
    category: "Career",
    isPaid: false,
    image: "/placeholder.svg?height=192&width=384&text=Career+Workshop",
    organizer: "Placement Cell",
    attendees: 89,
    maxAttendees: 100,
  },
  {
    id: 4,
    title: "Entrepreneurship Conference",
    description: "Connect with successful entrepreneurs and learn how to launch your own startup.",
    date: "June 5, 2023",
    time: "9:00 AM - 3:00 PM",
    location: "Innovation Center",
    category: "Business",
    isPaid: true,
    price: "₹300",
    image: "/placeholder.svg?height=192&width=384&text=Entrepreneurship",
    organizer: "E-Cell",
    attendees: 75,
    maxAttendees: 150,
  },
  {
    id: 5,
    title: "Environmental Sustainability Panel",
    description: "Join the discussion on environmental challenges and sustainable solutions for our campus and beyond.",
    date: "June 10, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Science Building, Auditorium",
    category: "Environment",
    isPaid: false,
    image: "/placeholder.svg?height=192&width=384&text=Sustainability",
    organizer: "Environmental Science Department",
    attendees: 62,
    maxAttendees: 200,
  },
  {
    id: 6,
    title: "Annual Sports Meet",
    description: "Participate in various sports competitions and cheer for your department.",
    date: "June 15-17, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "University Sports Complex",
    category: "Sports",
    isPaid: false,
    image: "/placeholder.svg?height=192&width=384&text=Sports+Meet",
    organizer: "Sports Committee",
    attendees: 320,
    maxAttendees: 1000,
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const search = searchParams.get("search")?.toLowerCase()

  let filteredEvents = [...events]

  // Filter by category if provided
  if (category) {
    filteredEvents = filteredEvents.filter((event) => event.category.toLowerCase() === category.toLowerCase())
  }

  // Filter by search term if provided
  if (search) {
    filteredEvents = filteredEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(search) ||
        event.description.toLowerCase().includes(search) ||
        event.location.toLowerCase().includes(search),
    )
  }

  return NextResponse.json(filteredEvents)
}

export async function POST(request: Request) {
  try {
    const eventData = await request.json()

    // Validate required fields
    const requiredFields = ["title", "description", "date", "time", "location", "category"]
    for (const field of requiredFields) {
      if (!eventData[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // In a real app, you would save to a database
    const newEvent = {
      id: events.length + 1,
      ...eventData,
      attendees: 0,
      maxAttendees: eventData.maxAttendees || 100,
    }

    // Add to our mock database
    events.push(newEvent)

    return NextResponse.json({
      success: true,
      message: "Event created successfully",
      event: newEvent,
    })
  } catch (error) {
    console.error("Event creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
