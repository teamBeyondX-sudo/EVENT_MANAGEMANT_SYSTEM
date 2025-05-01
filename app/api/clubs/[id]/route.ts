
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { clubs, clubMemberships } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { authenticateUser } from '@/lib/auth/middleware';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const club = await db.query.clubs.findFirst({
      where: eq(clubs.id, params.id),
      with: {
        members: true,
        events: true
      }
    });

    if (!club) {
      return NextResponse.json({ error: 'Club not found' }, { status: 404 });
    }

    return NextResponse.json(club);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch club' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await authenticateUser(request);
    if ((user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { name, description, icon } = await request.json();
    const updatedClub = await db.update(clubs)
      .set({ name, description, icon })
      .where(eq(clubs.id, params.id))
      .returning();

    return NextResponse.json(updatedClub[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update club' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await authenticateUser(request);
    if ((user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await db.delete(clubs).where(eq(clubs.id, params.id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete club' }, { status: 500 });
  }
}
