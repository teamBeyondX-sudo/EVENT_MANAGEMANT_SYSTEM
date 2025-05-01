
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { clubs, clubMemberships } from "@/lib/db/schema";
import { checkRole } from "@/lib/auth/middleware";

export async function POST(request: Request) {
  try {
    const user = await checkRole(request, ['admin']);
    const clubData = await request.json();
    
    const newClub = await db.insert(clubs).values({
      name: clubData.name,
      description: clubData.description,
      icon: clubData.icon,
      createdAt: new Date()
    }).returning();

    return NextResponse.json(newClub[0]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create club" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allClubs = await db.query.clubs.findMany({
      with: {
        members: true
      }
    });
    return NextResponse.json(allClubs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch clubs" },
      { status: 500 }
    );
  }
}
