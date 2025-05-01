
import { NextResponse } from 'next/server';
import { db, checkDatabaseConnection } from '@/lib/db';
import { events } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  try {
    const isConnected = await checkDatabaseConnection();
    
    if (!isConnected || !db) {
      // Fallback to mock data
      return NextResponse.json([
        {
          id: '1',
          title: "Tech Innovators Summit 2024",
          description: "Join industry leaders and innovators for tech talks and workshops.",
          date: new Date('2024-04-15').toISOString(),
          time: "10:00 AM",
          location: "Main Auditorium",
          category: "Technology",
          isPaid: true,
          price: 499,
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
        }
      ]);
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    let query = db.select().from(events);
    if (category && category !== 'all') {
      query = query.where(eq(events.categoryId, category));
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
    if (!db) {
      return NextResponse.json({ error: 'Database not initialized' }, { status: 500 });
    }

    const eventData = await request.json();
    const result = await db.insert(events).values(eventData).returning();
    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
