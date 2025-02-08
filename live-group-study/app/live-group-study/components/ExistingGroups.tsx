import { Button } from "@/components/ui/button"

const mockGroups = [
  { id: 1, name: "Math 101 Study Group", participants: 5, startTime: "2:00 PM" },
  { id: 2, name: "History Exam Prep", participants: 3, startTime: "3:30 PM" },
  { id: 3, name: "Computer Science Project Discussion", participants: 7, startTime: "5:00 PM" },
]

export default function ExistingGroups() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Join Existing Study Groups</h2>
      <div className="space-y-4">
        {mockGroups.map((group) => (
          <div key={group.id} className="border p-4 rounded-md flex justify-between items-center">
            <div>
              <h3 className="font-medium">{group.name}</h3>
              <p className="text-sm text-gray-500">
                {group.participants} participants • Starts at {group.startTime}
              </p>
            </div>
            <Button>Join</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

