
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { events } from '@/lib/db/schema';
import { authenticateUser } from '@/lib/auth/middleware';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const clubId = searchParams.get('clubId');

    const allEvents = [
      {
        id: '1',
        title: "Tech Innovators Summit 2024",
        description: "Join industry leaders and innovators for tech talks and hands-on workshops. Learn about AI, blockchain, and future tech trends.",
        date: "2024-04-15",
        time: "10:00 AM",
        location: "Main Auditorium",
        category: "Technology",
        isPaid: true,
        price: "₹499",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format"
      },
      {
        id: '2',
        title: "Cultural Fest 2024",
        description: "Celebrate diverse cultural performances with music, dance, and art exhibitions.",
        date: "2024-04-20",
        time: "6:00 PM",
        location: "Campus Ground",
        category: "Cultural",
        isPaid: false,
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format"
      },
      {
        id: '3',
        title: "Career Development Workshop",
        description: "Master interview skills, resume writing, and professional networking with industry experts.",
        date: "2024-04-25",
        time: "2:00 PM",
        location: "Seminar Hall B",
        category: "Career",
        isPaid: true,
        price: "₹299",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format"
      },
      {
        id: '4',
        title: "Photography Masterclass",
        description: "Learn advanced photography techniques from professional photographers.",
        date: "2024-05-01",
        time: "11:00 AM",
        location: "Art Studio",
        category: "Workshop",
        isPaid: true,
        price: "₹799",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format"
      },
      {
        id: '5',
        title: "Environmental Awareness Drive",
        description: "Join us for a day of environmental conservation activities and awareness sessions.",
        date: "2024-05-05",
        time: "9:00 AM",
        location: "Campus Garden",
        category: "Environment",
        isPaid: false,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format"
      },
      {
        id: '6',
        title: "Entrepreneurship Seminar",
        description: "Learn from successful entrepreneurs about starting and scaling your business.",
        date: "2024-05-10",
        time: "3:00 PM",
        location: "Business Center",
        category: "Business",
        isPaid: true,
        price: "₹399",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format"
      }
    ];

    return NextResponse.json(allEvents);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = await authenticateUser(request);
    if (user.role !== 'admin') {
      return NextResponse.json({ error: 'Only admins can create events' }, { status: 403 });
    }

    const eventData = await request.json();
    return NextResponse.json(eventData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
