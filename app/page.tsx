"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Award, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 0.5 }}
                className="block mb-2"
              >
                DISCOVER & CONNECT
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gradient"
              >
                Your Campus Journey
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gradient block text-4xl md:text-5xl mt-2"
              >
                at Brainware
              </motion.span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with events, clubs, and activities that shape your university experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/events">
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/register">Join Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Brainware University?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience a vibrant campus life with endless opportunities to learn, grow, and connect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-purple-400" />}
              title="Academic Excellence"
              description="Cutting-edge programs designed to prepare you for the future"
              delay={0.1}
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-400" />}
              title="Vibrant Community"
              description="Join a diverse community of students from across India"
              delay={0.2}
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-purple-400" />}
              title="Campus Events"
              description="Participate in tech fests, cultural events, and workshops"
              delay={0.3}
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-purple-400" />}
              title="Career Opportunities"
              description="Connect with industry leaders and build your professional network"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
            <Button asChild variant="ghost" className="text-purple-400 hover:text-purple-300">
              <Link href="/events">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-black/30 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Brainware University and be part of a community that's shaping the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/register">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="backdrop-blur-lg bg-black/30 border-white/10 h-full hover:border-purple-500/50 transition-colors">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-purple-900/30">{icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function EventCard({ event }) {
  return (
    <Card className="overflow-hidden backdrop-blur-lg bg-black/30 border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={event.image || `/placeholder.svg?height=192&width=384&text=${encodeURIComponent(event.title)}`}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
          {event.category}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>
        <div className="flex items-center text-gray-400 text-sm">
          <Calendar className="h-4 w-4 mr-2 text-purple-400" />
          {event.date}
        </div>
        <Button asChild className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Innovators Summit 2023",
    description:
      "Join industry leaders and innovators for a day of tech talks, workshops, and networking opportunities.",
    date: "May 15, 2023",
    category: "Technology",
    image: "/placeholder.svg?height=192&width=384&text=Tech+Summit",
  },
  {
    id: 2,
    title: "Cultural Fest: Rhythms of India",
    description: "Celebrate the diverse cultural heritage of India with music, dance, and art performances.",
    date: "May 20, 2023",
    category: "Cultural",
    image: "/placeholder.svg?height=192&width=384&text=Cultural+Fest",
  },
  {
    id: 3,
    title: "Career Development Workshop",
    description: "Learn essential skills for job hunting, resume building, and interview preparation.",
    date: "May 25, 2023",
    category: "Career",
    image: "/placeholder.svg?height=192&width=384&text=Career+Workshop",
  },
]