import { NextResponse } from "next/server"

// In a real application, you would use a database and proper authentication
const MOCK_USERS = [
  {
    id: "1",
    email: "student@brainwareuniversity.ac.in",
    password: "password123", // In a real app, this would be hashed
    name: "Rahul Sharma",
    role: "student",
  },
  {
    id: "2",
    email: "admin@brainwareuniversity.ac.in",
    password: "admin123", // In a real app, this would be hashed
    name: "Admin User",
    role: "admin",
  },
]

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    // Find user (in a real app, you would query a database)
    const user = MOCK_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    )

    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    // In a real app, you would create a session or JWT token here
    const userWithoutPassword = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    }

    // Return user data (in a real app, you would return a token)
    return NextResponse.json({
      user: userWithoutPassword,
      message: "Login successful",
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { error: "Internal server error" },\
      { status: 500   error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  )
}
