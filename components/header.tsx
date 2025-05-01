"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Bell } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isLoggedIn = pathname !== "/" && pathname !== "/login" && pathname !== "/register"

  return (
    <header className="w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="font-bold text-white text-lg">BU</span>
            </div>
            <span className="font-bold text-xl text-white hidden md:block">Brainware University</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm text-white hover:text-purple-400 transition-colors ${pathname === "/" ? "text-purple-400" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/events"
              className={`text-sm text-white hover:text-purple-400 transition-colors ${pathname.startsWith("/events") ? "text-purple-400" : ""}`}
            >
              Events
            </Link>
            <Link
              href="/clubs"
              className={`text-sm text-white hover:text-purple-400 transition-colors ${pathname.startsWith("/clubs") ? "text-purple-400" : ""}`}
            >
              Clubs
            </Link>
            <Link
              href="/about"
              className={`text-sm text-white hover:text-purple-400 transition-colors ${pathname === "/about" ? "text-purple-400" : ""}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm text-white hover:text-purple-400 transition-colors ${pathname === "/contact" ? "text-purple-400" : ""}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-white">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
                <Link href="/profile">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>BU</AvatarFallback>
                  </Avatar>
                </Link>
              </>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Button asChild variant="ghost" className="text-white hover:text-purple-400 hover:bg-white/10">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md bg-black/80 border-b border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className={`text-white hover:text-purple-400 transition-colors ${pathname === "/" ? "text-purple-400" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/events"
                  className={`text-white hover:text-purple-400 transition-colors ${pathname.startsWith("/events") ? "text-purple-400" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/clubs"
                  className={`text-white hover:text-purple-400 transition-colors ${pathname.startsWith("/clubs") ? "text-purple-400" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clubs
                </Link>
                <Link
                  href="/about"
                  className={`text-white hover:text-purple-400 transition-colors ${pathname === "/about" ? "text-purple-400" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`text-white hover:text-purple-400 transition-colors ${pathname === "/contact" ? "text-purple-400" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                {!isLoggedIn && (
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                    <Button
                      asChild
                      variant="ghost"
                      className="justify-center text-white hover:text-purple-400 hover:bg-white/10"
                    >
                      <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button asChild className="justify-center bg-purple-600 hover:bg-purple-700 text-white">
                      <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                        Register
                      </Link>
                    </Button>
                  </div>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
