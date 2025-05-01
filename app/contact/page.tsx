
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400">Get in touch with us for any inquiries</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="backdrop-blur-lg bg-black/30 border-white/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-medium">Address</h3>
                    <p className="text-gray-400">
                      398, Ramkrishnapur Road, Barasat, Kolkata - 700125
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-gray-400">+91 (033) 2432-7100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-gray-400">info@brainwareuniversity.ac.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-medium">Working Hours</h3>
                    <p className="text-gray-400">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-black/30 border-white/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Emergency Contacts</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-medium">Security Office</h3>
                  <p className="text-gray-400">+91 9831234567</p>
                </div>

                <div>
                  <h3 className="text-white font-medium">Student Affairs</h3>
                  <p className="text-gray-400">+91 9831234568</p>
                </div>

                <div>
                  <h3 className="text-white font-medium">IT Support</h3>
                  <p className="text-gray-400">support@brainwareuniversity.ac.in</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
