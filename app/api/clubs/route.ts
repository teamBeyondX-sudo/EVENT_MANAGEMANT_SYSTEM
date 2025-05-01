
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { clubs } from '@/lib/db/schema';
import { authenticateUser } from '@/lib/auth/middleware';

export async function GET() {
  try {
    const allClubs = await db.query.clubs.findMany();
    return NextResponse.json(allClubs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch clubs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = await authenticateUser(request);
    if ((user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { name, description, icon } = await request.json();
    const newClub = await db.insert(clubs).values({
      name,
      description,
      icon
    }).returning();

    return NextResponse.json(newClub[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create club' }, { status: 500 });
  }
}
