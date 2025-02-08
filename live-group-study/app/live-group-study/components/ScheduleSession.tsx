"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ScheduleSession() {
  const [sessionName, setSessionName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Scheduled session:", { sessionName, date, time })
    // Reset form
    setSessionName("")
    setDate("")
    setTime("")
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Schedule a New Session</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="sessionName">Session Name</Label>
          <Input id="sessionName" value={sessionName} onChange={(e) => setSessionName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="time">Time</Label>
          <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <Button type="submit">Schedule Session</Button>
      </form>
    </div>
  )
}

