import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SplineBackground } from "@/components/spline-background"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brainware University - Campus Events Hub",
  description: "Centralized Event & Club Management System for Brainware University",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen overflow-hidden">
            <SplineBackground />
            <div className="relative z-10">
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
