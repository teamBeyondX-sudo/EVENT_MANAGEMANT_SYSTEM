
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Users } from "lucide-react"

const clubs = [
  {
    id: 1,
    name: "Tech Innovators Club",
    description: "Exploring cutting-edge technologies and innovation",
    members: 120,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format"
  },
  {
    id: 2,
    name: "Cultural Society",
    description: "Celebrating diversity through arts and culture",
    members: 85,
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format"
  },
  {
    id: 3,
    name: "Sports Club",
    description: "Promoting physical fitness and sportsmanship",
    members: 150,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format"
  },
  {
    id: 4,
    name: "Photography Club",
    description: "Capturing moments and learning photography techniques",
    members: 65,
    category: "Arts",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format"
  },
  {
    id: 5,
    name: "Entrepreneurship Cell",
    description: "Fostering entrepreneurial spirit and innovation",
    members: 95,
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format"
  },
  {
    id: 6,
    name: "Environmental Club",
    description: "Working towards a sustainable future",
    members: 75,
    category: "Environment",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format"
  }
];

function ClubChat({ clubId }) {
  const [messages, setMessages] = useState([
    { id: 1, user: "John", message: "Hey everyone! When's the next meet?" },
    { id: 2, user: "Sarah", message: "I think it's next Thursday" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: messages.length + 1, user: "You", message: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="space-y-4">
      <div className="h-[300px] overflow-y-auto space-y-4 p-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.user === "You" ? "justify-end" : "justify-start"}`}>
            <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.user === "You" ? "bg-purple-600 text-white" : "bg-gray-800 text-white"}`}>
              <p className="text-sm font-medium">{msg.user}</p>
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="bg-black/40 border-white/10"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

export default function ClubsPage() {
  const [joinedClubs, setJoinedClubs] = useState([]);

  const joinClub = (clubId) => {
    if (!joinedClubs.includes(clubId)) {
      setJoinedClubs([...joinedClubs, clubId]);
    }
  };

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
              <Card className="backdrop-blur-lg bg-black/30 border-white/10 overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{club.name}</h3>
                  <p className="text-gray-400 mb-4">{club.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-purple-400 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {club.members} members
                    </span>
                    <span className="text-gray-400">{club.category}</span>
                  </div>
                  {joinedClubs.includes(club.id) ? (
                    <Tabs defaultValue="feed" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="feed">Feed</TabsTrigger>
                        <TabsTrigger value="chat">Chat</TabsTrigger>
                      </TabsList>
                      <TabsContent value="feed" className="mt-4">
                        <div className="space-y-4">
                          <p className="text-gray-400">Recent club activities and announcements will appear here.</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="chat" className="mt-4">
                        <ClubChat clubId={club.id} />
                      </TabsContent>
                    </Tabs>
                  ) : (
                    <Button onClick={() => joinClub(club.id)} className="w-full">Join Club</Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
