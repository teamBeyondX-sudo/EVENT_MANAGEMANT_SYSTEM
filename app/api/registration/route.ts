import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { registrations, events } from "@/lib/db/schema";
import { authenticateUser } from "@/lib/auth/middleware";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const user = await authenticateUser(request);
    const { eventId } = await request.json();

    // Check if already registered
    const existingRegistration = await db.query.registrations.findFirst({
      where: eq(registrations.eventId, eventId)
    });

    if (existingRegistration) {
      return NextResponse.json(
        { error: "Already registered" },
        { status: 400 }
      );
    }

    // Create registration
    const registration = await db.insert(registrations).values({
      userId: user.id,
      eventId,
      status: 'confirmed',
      createdAt: new Date()
    }).returning();

    return NextResponse.json(registration[0]);
  } catch (error) {
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const user = await authenticateUser(request);
    const userRegistrations = await db.query.registrations.findMany({
      where: eq(registrations.userId, user.id),
      with: {
        event: true
      }
    });

    return NextResponse.json(userRegistrations);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch registrations" },
      { status: 500 }
    );
  }
}