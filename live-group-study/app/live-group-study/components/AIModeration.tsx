"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AIModeration() {
  const [message, setMessage] = useState("")
  const [moderatedMessages, setModeratedMessages] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this message to your AI service for moderation
    // For this example, we'll just add it to the list of messages
    setModeratedMessages([...moderatedMessages, `AI Moderated: ${message}`])
    setMessage("")
  }

  return (
    <div>
      <div className="mb-4 h-40 overflow-y-auto border rounded-md p-2">
        {moderatedMessages.map((msg, index) => (
          <p key={index} className="mb-2">
            {msg}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  )
}

