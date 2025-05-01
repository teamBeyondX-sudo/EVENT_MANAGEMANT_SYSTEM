import { NextResponse } from 'next/server';
import { db, checkDatabaseConnection } from '@/lib/db';
import { events } from '@/lib/db/schema';
import { authenticateUser } from '@/lib/auth/middleware';

export async function GET(request: Request) {
  try {
    const isConnected = await checkDatabaseConnection();

    if (!isConnected) {
      // Return mock data if database is not connected
      return NextResponse.json([
        {
          id: '1',
          title: "Tech Innovators Summit 2024",
          description: "Join industry leaders and innovators for tech talks and hands-on workshops.",
          date: "2024-04-15",
          time: "10:00 AM",
          location: "Main Auditorium",
          category: "Technology",
          isPaid: true,
          price: "₹499",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format"
        },
        // ... other events
      ]);
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const clubId = searchParams.get('clubId');

    let query = db.select().from(events);

    if (category && category !== 'all') {
      query = query.where(sql`category = ${category}`);
    }

    if (clubId) {
      query = query.where(sql`club_id = ${clubId}`);
    }

    const allEvents = await query;
    return NextResponse.json(allEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
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
    const newEvent = await db.insert(events).values(eventData).returning();
    return NextResponse.json(newEvent[0]);
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}