
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UsersIcon, CalendarIcon, FolderIcon } from "lucide-react"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalEvents: 0,
    totalClubs: 0,
  })

  useEffect(() => {
    // Fetch stats from API
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/admin/stats")
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error("Failed to fetch stats:", error)
      }
    }
    fetchStats()
  }, [])

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-black/20 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <UsersIcon className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Total Users</p>
                <h3 className="text-2xl font-bold text-white">{stats.totalUsers}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/20 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <CalendarIcon className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Total Events</p>
                <h3 className="text-2xl font-bold text-white">{stats.totalEvents}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/20 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <FolderIcon className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Total Clubs</p>
                <h3 className="text-2xl font-bold text-white">{stats.totalClubs}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="bg-black/20 border-white/10">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="clubs">Clubs</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-6">
          <Card className="bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              {/* User management content */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <Card className="bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle>Event Management</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Event management content */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clubs" className="mt-6">
          <Card className="bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle>Club Management</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Club management content */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
