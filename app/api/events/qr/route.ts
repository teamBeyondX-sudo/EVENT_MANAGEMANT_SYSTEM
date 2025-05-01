
import { NextResponse } from "next/server"
import QRCode from "qrcode"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const eventId = searchParams.get("eventId")
  
  if (!eventId) {
    return NextResponse.json({ error: "Event ID is required" }, { status: 400 })
  }

  try {
    const qrCode = await QRCode.toDataURL(
      `${process.env.NEXT_PUBLIC_URL}/attend/${eventId}`
    )
    
    return NextResponse.json({ qrCode })
  } catch (error) {
    return NextResponse.json({ error: "QR generation failed" }, { status: 500 })
  }
}
