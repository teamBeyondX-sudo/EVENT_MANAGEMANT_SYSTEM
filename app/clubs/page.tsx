
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const clubs = [
  {
    id: 1,
    name: "Tech Innovators Club",
    description: "Exploring cutting-edge technologies and innovation",
    members: 120,
    category: "Technology"
  },
  {
    id: 2,
    name: "Cultural Society",
    description: "Celebrating diversity through arts and culture",
    members: 85,
    category: "Cultural"
  },
  {
    id: 3,
    name: "Sports Club",
    description: "Promoting physical fitness and sportsmanship",
    members: 150,
    category: "Sports"
  }
];

export default function ClubsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Campus Clubs</h1>
          <p className="text-gray-400">Join and participate in various clubs and activities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="backdrop-blur-lg bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{club.name}</h3>
                  <p className="text-gray-400 mb-4">{club.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400">{club.members} members</span>
                    <Button variant="outline">Join Club</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
