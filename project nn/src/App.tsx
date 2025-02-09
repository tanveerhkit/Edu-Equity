import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Professional } from './types';
import { professionals } from './data/professionals';
import { ProfessionalCard } from './components/ProfessionalCard';
import { BookingModal } from './components/BookingModal';
import { ProfileModal } from './components/ProfileModal';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfession, setSelectedProfession] = useState<string>('all');
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [viewingProfile, setViewingProfile] = useState<Professional | null>(null);

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professional.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProfession = selectedProfession === 'all' || professional.profession === selectedProfession;
    return matchesSearch && matchesProfession;
  });

  const handleBook = (professional: Professional) => {
    setSelectedProfessional(professional);
    setViewingProfile(null);
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleViewProfile = (professional: Professional) => {
    setViewingProfile(professional);
  };

  const handleConfirmBooking = (date: string, time: string, duration: number) => {
    // In a real app, this would make an API call to create the booking
    alert(`Booking confirmed!\nDate: ${date}\nTime: ${time}\nDuration: ${duration} hours`);
    setSelectedProfessional(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Find Professional Services</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="sm:w-48 flex items-center gap-2">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={selectedProfession}
              onChange={(e) => setSelectedProfession(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Services</option>
              <option value="cook">Cooking</option>
              <option value="tailor">Stitching</option>
              <option value="artist">Drawing</option>
            </select>
          </div>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
              onBook={handleBook}
              onCall={handleCall}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>

        {/* Show empty state if no results */}
        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No professionals found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Modals */}
      {selectedProfessional && (
        <BookingModal
          professional={selectedProfessional}
          onClose={() => setSelectedProfessional(null)}
          onBook={handleConfirmBooking}
        />
      )}

      {viewingProfile && (
        <ProfileModal
          professional={viewingProfile}
          onClose={() => setViewingProfile(null)}
          onBook={handleBook}
        />
      )}
    </div>
  );
}

export default App;