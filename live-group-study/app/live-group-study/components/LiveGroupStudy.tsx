"use client"

import { useState } from "react"
import ExistingGroups from "./ExistingGroups"
import ScheduleSession from "./ScheduleSession"
import AIModeration from "./AIModeration"

export default function LiveGroupStudy() {
  const [activeTab, setActiveTab] = useState("join")

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex mb-6">
        <button
          className={`mr-4 px-4 py-2 rounded-md ${activeTab === "join" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("join")}
        >
          Join Existing Groups
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeTab === "schedule" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("schedule")}
        >
          Schedule a New Session
        </button>
      </div>

      {activeTab === "join" && <ExistingGroups />}
      {activeTab === "schedule" && <ScheduleSession />}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">AI-Powered Discussion Moderation</h2>
        <AIModeration />
      </div>
    </div>
  )
}

