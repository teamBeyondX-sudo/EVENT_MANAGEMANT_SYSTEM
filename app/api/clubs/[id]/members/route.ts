
import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { clubMembers, users } from "@/lib/db/schema"
import { eq, and } from "drizzle-orm"
import { authenticateUser } from "@/lib/auth/middleware"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const members = await db.query.clubMembers.findMany({
      where: eq(clubMembers.clubId, params.id),
      with: {
        user: true
      }
    })

    return NextResponse.json(members)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 })
  }
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await authenticateUser(request)
    if ((user as any).role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const { userId, role } = await request.json()
    const member = await db.insert(clubMembers)
      .values({
        clubId: params.id,
        userId,
        role,
        joinedAt: new Date()
      })
      .returning()

    return NextResponse.json(member[0])
  } catch (error) {
    return NextResponse.json({ error: "Failed to add member" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await authenticateUser(request)
    if ((user as any).role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const { userId } = await request.json()
    await db.delete(clubMembers)
      .where(
        and(
          eq(clubMembers.clubId, params.id),
          eq(clubMembers.userId, userId)
        )
      )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove member" }, { status: 500 })
  }
}
