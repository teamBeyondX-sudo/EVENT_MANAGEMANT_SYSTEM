
"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student"
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        const data = await res.json()
        if (data.user.role === 'admin') {
          router.push('/admin')
        } else {
          router.push('/dashboard')
        }
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="w-full max-w-md space-y-8 bg-black/30 p-8 rounded-xl border border-white/10">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label className="text-white block mb-2">Login as</Label>
            <RadioGroup 
              value={formData.role}
              onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative">
                <RadioGroupItem
                  value="student"
                  id="student"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="student"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-white/10 bg-black/20 p-4 hover:bg-black/30 peer-data-[state=checked]:border-purple-600 cursor-pointer"
                >
                  <span className="text-white">Student</span>
                </Label>
              </div>
              <div className="relative">
                <RadioGroupItem
                  value="admin"
                  id="admin"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="admin"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-white/10 bg-black/20 p-4 hover:bg-black/30 peer-data-[state=checked]:border-purple-600 cursor-pointer"
                >
                  <span className="text-white">Admin</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-black/20 border-white/10 text-white"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-black/20 border-white/10 text-white"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            />
          </div>

          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Sign In <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>

        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <Link href="/register" className="text-purple-400 hover:text-purple-300">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}
