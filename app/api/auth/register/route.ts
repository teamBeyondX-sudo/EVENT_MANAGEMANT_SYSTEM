import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "password", "studentId", "department"]
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Validate email format
    if (!data.email.endsWith("@brainwareuniversity.ac.in")) {
      return NextResponse.json({ error: "Email must be a valid Brainware University email" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Store user in database
    // 4. Send verification email

    // Simulate successful registration
    return NextResponse.json({
      success: true,
      message: "Registration successful",
      userId: "user_" + Math.random().toString(36).substr(2, 9),
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
