import React, { useState } from 'react';
import { 
  BookOpen, 
  Brain, 
  Video, 
  FileText, 
  TrendingUp, 
  Calendar, 
  Clock,
  ChevronRight,
  Upload,
  X,
  User,
  Mail,
  Phone,
  FileUp
} from 'lucide-react';

function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<any>(null);
  const [selectedNote, setSelectedNote] = useState<any>(null);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  const enrolledCourses = [
    { id: 1, name: 'Advanced Mathematics', progress: 75, lastAccessed: '2 days ago' },
    { id: 2, name: 'Physics Fundamentals', progress: 45, lastAccessed: '1 day ago' },
    { id: 3, name: 'Computer Science 101', progress: 90, lastAccessed: '5 hours ago' },
  ];

  const suggestedTopics = [
    { id: 1, topic: 'Calculus Integration', reason: 'Based on recent quiz performance' },
    { id: 2, topic: 'Vector Analysis', reason: 'Complements your current progress' },
    { id: 3, topic: 'Statistical Methods', reason: 'Recommended for your career path' },
  ];

  const upcomingSessions = [
    { 
      id: 1, 
      title: 'Group Study: Advanced Calculus', 
      time: '2:00 PM', 
      date: 'Today',
      description: 'Join this interactive session to master complex calculus concepts with peer learning.',
      meetingLink: 'https://meet.example.com/calculus'
    },
    { 
      id: 2, 
      title: 'Physics Lab Session', 
      time: '4:30 PM', 
      date: 'Tomorrow',
      description: 'Virtual lab session focusing on quantum mechanics experiments.',
      meetingLink: 'https://meet.example.com/physics'
    },
  ];

  const aiSummaries = [
    {
      id: 1,
      title: 'Physics Chapter 5 Summary',
      description: 'AI-generated summary of your notes on Quantum Mechanics',
      content: `
        Key Concepts:
        1. Wave-Particle Duality
        2. Schrödinger's Equation
        3. Quantum States
        4. Probability Density

        Important Formulas:
        - E = hf
        - ψ(x,t) = Ae^(i(kx-ωt))
        
        Practice Problems:
        1. Calculate the de Broglie wavelength
        2. Solve for energy eigenvalues
      `
    },
    {
      id: 2,
      title: 'Math Formulas Review',
      description: 'Key concepts and formulas from Calculus II',
      content: `
        Integration Techniques:
        1. Integration by Parts
        2. Partial Fractions
        3. Trigonometric Substitution

        Series and Sequences:
        - Convergence Tests
        - Power Series
        - Taylor Series

        Applications:
        1. Area Between Curves
        2. Volume of Revolution
      `
    }
  ];

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the profile data to a server
    setIsProfileModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfile(prev => ({ ...prev, resume: file }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleJoinSession = (session: any) => {
    setSelectedSession(session);
    setIsSessionModalOpen(true);
  };

  const handleViewNote = (note: any) => {
    setSelectedNote(note);
    setIsNoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Learning Hub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="relative group"
            >
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white"
                src={profile.image}
                alt="Profile"
              />
              <div className="absolute hidden group-hover:block w-48 p-2 bg-white shadow-lg rounded-md -bottom-20 right-0">
                <p className="text-sm text-gray-600">Click to update profile</p>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Section */}
            <section className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-indigo-600" />
                  Enrolled Courses Progress
                </h2>
                <div className="mt-6 space-y-6">
                  {enrolledCourses.map(course => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">{course.name}</span>
                        <span className="text-sm text-gray-500">Last accessed {course.lastAccessed}</span>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div 
                            className="absolute h-2 bg-indigo-600 rounded-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* AI Suggestions */}
            <section className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-indigo-600" />
                  AI-Suggested Topics
                </h2>
                <div className="mt-6 space-y-4">
                  {suggestedTopics.map(topic => (
                    <button
                      key={topic.id}
                      className="w-full flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                    >
                      <TrendingUp className="h-5 w-5 text-indigo-600 mt-1" />
                      <div className="text-left">
                        <h3 className="text-sm font-medium text-gray-900">{topic.topic}</h3>
                        <p className="text-sm text-gray-500">{topic.reason}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Sessions */}
            <section className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Video className="h-5 w-5 mr-2 text-indigo-600" />
                  Upcoming Live Sessions
                </h2>
                <div className="mt-6 space-y-4">
                  {upcomingSessions.map(session => (
                    <button
                      key={session.id}
                      onClick={() => handleJoinSession(session)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <div className="text-left">
                          <h3 className="text-sm font-medium text-gray-900">{session.title}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {session.time} · {session.date}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Notes & Summaries */}
            <section className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-indigo-600" />
                  Recent AI Summaries
                </h2>
                <div className="mt-6 space-y-4">
                  {aiSummaries.map(note => (
                    <button
                      key={note.id}
                      onClick={() => handleViewNote(note)}
                      className="w-full p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <h3 className="text-sm font-medium text-gray-900">{note.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{note.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Profile Modal */}
      <Modal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <div className="mt-2 flex items-center space-x-4">
              <img src={profile.image} alt="Profile" className="h-16 w-16 rounded-full" />
              <label className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                <span>Change Photo</span>
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <User className="inline h-4 w-4 mr-1" />
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={profile.name}
              onChange={e => setProfile(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <Mail className="inline h-4 w-4 mr-1" />
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={profile.email}
              onChange={e => setProfile(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <Phone className="inline h-4 w-4 mr-1" />
              Phone
            </label>
            <input
              type="tel"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={profile.phone}
              onChange={e => setProfile(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <FileUp className="inline h-4 w-4 mr-1" />
              Resume
            </label>
            <div className="mt-1 flex items-center space-x-4">
              <label className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
                <span>{profile.resume ? profile.resume.name : 'Upload Resume'}</span>
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsProfileModalOpen(false)}
              className="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>

      {/* Session Modal */}
      <Modal isOpen={isSessionModalOpen} onClose={() => setIsSessionModalOpen(false)}>
        {selectedSession && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{selectedSession.title}</h2>
            <p className="text-gray-600">{selectedSession.description}</p>
            <div className="flex items-center space-x-2 text-gray-500">
              <Calendar className="h-5 w-5" />
              <span>{selectedSession.date}</span>
              <Clock className="h-5 w-5 ml-4" />
              <span>{selectedSession.time}</span>
            </div>
            <div className="flex justify-end">
              <a
                href={selectedSession.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Join Session
              </a>
            </div>
          </div>
        )}
      </Modal>

      {/* Note Modal */}
      <Modal isOpen={isNoteModalOpen} onClose={() => setIsNoteModalOpen(false)}>
        {selectedNote && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{selectedNote.title}</h2>
            <p className="text-gray-600">{selectedNote.description}</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {selectedNote.content}
              </pre>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;