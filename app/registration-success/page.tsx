
"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Registration Successful!</h1>
        <p className="text-gray-400 mb-8">Your account has been created successfully.</p>
        <div className="space-x-4">
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="/login">Login to Continue</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
