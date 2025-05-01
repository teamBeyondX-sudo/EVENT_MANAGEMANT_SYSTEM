
import { NextResponse } from 'next/server';

const sampleEvents = [
  {
    id: '1',
    title: "Tech Workshop 2024",
    description: "Join us for an intensive workshop on emerging technologies",
    date: "2024-04-15",
    time: "10:00 AM",
    location: "Tech Hub, Main Campus",
    category: "Workshop",
    isPaid: true,
    price: "₹499",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format",
    attendees: 45,
    maxAttendees: 100,
    schedule: [
      { time: "10:00 AM", title: "Introduction", speaker: "Dr. Smith", location: "Hall A" },
      { time: "11:30 AM", title: "Hands-on Session", speaker: "Prof. Johnson", location: "Lab 1" }
    ],
    speakers: [
      { name: "Dr. Smith", title: "Tech Lead", avatar: "/placeholder.svg" },
      { name: "Prof. Johnson", title: "Senior Developer", avatar: "/placeholder.svg" }
    ]
  },
  {
    id: '2',
    title: "AI Seminar Series",
    description: "Explore the latest developments in Artificial Intelligence",
    date: "2024-04-20",
    time: "2:00 PM",
    location: "Science Block",
    category: "Seminar",
    isPaid: false,
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&auto=format",
    attendees: 30,
    maxAttendees: 150,
    schedule: [
      { time: "2:00 PM", title: "AI Ethics", speaker: "Dr. Chen", location: "Hall B" },
      { time: "3:30 PM", title: "Future of AI", speaker: "Ms. White", location: "Hall B" }
    ],
    speakers: [
      { name: "Dr. Chen", title: "AI Researcher", avatar: "/placeholder.svg" },
      { name: "Ms. White", title: "Data Scientist", avatar: "/placeholder.svg" }
    ]
  }
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const event = sampleEvents.find(e => e.id === params.id);
    
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 });
  }
}
