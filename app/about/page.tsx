
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-400">Learn more about our university and our mission</p>
        </motion.div>

        <Card className="backdrop-blur-lg bg-black/30 border-white/10 mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-6">
              To provide quality education and foster innovation through a dynamic learning environment
              that prepares students for the challenges of tomorrow.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400 mb-6">
              To be a leading institution in academic excellence, research, and innovation, creating
              positive impact in society through education and technology.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Core Values</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Excellence in Education</li>
              <li>Innovation and Creativity</li>
              <li>Integrity and Ethics</li>
              <li>Diversity and Inclusion</li>
              <li>Community Engagement</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
