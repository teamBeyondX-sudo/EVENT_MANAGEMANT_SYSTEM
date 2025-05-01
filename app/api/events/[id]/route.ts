import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { events } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { authenticateUser } from '@/lib/auth/middleware';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = await params.id
    const event = await db.select().from(events).where(eq(events.id, id))

    if (!event.length) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }

    return NextResponse.json(event[0])
  } catch (error) {
    console.error("Failed to fetch event:", error)
    return NextResponse.json({ error: "Failed to fetch event" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await authenticateUser(request);
    if ((user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const eventData = await request.json();
    const updatedEvent = await db.update(events)
      .set(eventData)
      .where(eq(events.id, params.id))
      .returning();

    return NextResponse.json(updatedEvent[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await authenticateUser(request);
    if ((user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await db.delete(events).where(eq(events.id, params.id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}