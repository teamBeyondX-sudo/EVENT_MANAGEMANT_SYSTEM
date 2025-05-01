
import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users, events, clubs } from "@/lib/db/schema"
import { authenticateUser } from "@/lib/auth/middleware"

export async function GET(request: Request) {
  try {
    const user = await authenticateUser(request)
    if ((user as any).role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const [totalUsers, totalEvents, totalClubs] = await Promise.all([
      db.select().from(users).execute(),
      db.select().from(events).execute(),
      db.select().from(clubs).execute(),
    ])

    return NextResponse.json({
      totalUsers: totalUsers.length,
      totalEvents: totalEvents.length,
      totalClubs: totalClubs.length,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
