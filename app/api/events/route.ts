
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
        description: "Join industry leaders and innovators for tech talks",
        date: "2024-04-15",
        time: "10:00 AM",
        location: "Main Auditorium",
        category: "Technology",
        isPaid: false
      },
      {
        id: '2',
        title: "Cultural Fest 2024",
        description: "Celebrate diverse cultural performances",
        date: "2024-04-20",
        time: "6:00 PM",
        location: "Campus Ground",
        category: "Cultural",
        isPaid: false
      },
      {
        id: '3',
        title: "Career Fair Spring 2024",
        description: "Meet top employers and explore opportunities",
        date: "2024-04-25",
        time: "9:00 AM",
        location: "Convention Center",
        category: "Career",
        isPaid: false
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
