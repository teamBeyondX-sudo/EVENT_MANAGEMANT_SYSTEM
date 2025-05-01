import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { events } from '@/lib/db/schema';
import { authenticateUser } from '@/lib/auth/middleware';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const clubId = searchParams.get('clubId');

    let query = db.query.events.findMany({
      with: {
        category: true,
        club: true
      }
    });

    if (category) {
      query = db.query.events.findMany({
        where: (events, { eq }) => eq(events.categoryId, category),
        with: {
          category: true,
          club: true
        }
      });
    }

    if (clubId) {
      query = db.query.events.findMany({
        where: (events, { eq }) => eq(events.clubId, clubId),
        with: {
          category: true,
          club: true
        }
      });
    }

    const allEvents = await query;
    return NextResponse.json(allEvents);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = await authenticateUser(request);
    if ((user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Only admins can create events' }, { status: 403 });
    }
    const user = await authenticateUser(request);
    if ((user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const eventData = await request.json();
    const newEvent = await db.insert(events).values(eventData).returning();

    return NextResponse.json(newEvent[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}