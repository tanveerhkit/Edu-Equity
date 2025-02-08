import React, { useState } from 'react';
import { 
  Glasses, 
  GraduationCap, 
  Building2, 
  ChevronRight,
  Globe,
  Microscope,
  BookOpen,
  X,
  ArrowLeft
} from 'lucide-react';

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow"
];

type Tour = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  duration: string;
  price: string;
};

const tours: Tour[] = [
  {
    id: 'historical-wonders',
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    title: "Historical Wonders",
    description: "Travel through time to ancient civilizations and significant historical events.",
    image: "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?auto=format&fit=crop&q=80",
    fullDescription: "Experience history like never before with our immersive VR tours. Visit the pyramids of Egypt, walk through ancient Rome, and witness key moments in world history. Our expert historians provide detailed narration and interactive elements throughout the experience.",
    duration: "2 hours",
    price: "₹1,499"
  },
  {
    id: 'science-lab',
    icon: <Microscope className="w-8 h-8 text-indigo-600" />,
    title: "Science Lab",
    description: "Conduct virtual experiments and explore complex scientific concepts.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    fullDescription: "Step into our virtual laboratory where you can conduct experiments safely in VR. Explore molecular structures, chemical reactions, and physics phenomena in an interactive environment. Perfect for students and science enthusiasts of all ages.",
    duration: "1.5 hours",
    price: "₹1,299"
  },
  {
    id: 'literature-journey',
    icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
    title: "Literature Journey",
    description: "Step into the worlds of classic literature and interactive storytelling.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80",
    fullDescription: "Immerse yourself in the greatest stories ever told. Walk through Shakespeare's Globe Theatre, explore the settings of classic novels, and interact with beloved characters. Our literature experiences bring books to life in unprecedented ways.",
    duration: "2 hours",
    price: "₹1,399"
  }
];

function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [currentView, setCurrentView] = useState('main');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleGetStarted = () => {
    window.scrollTo({ top: document.getElementById('tours')?.offsetTop, behavior: 'smooth' });
  };

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setCurrentView('tour-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCity || !selectedDate) {
      alert('Please select both city and date');
      return;
    }
    
    setBookingStatus('success');
    setTimeout(() => {
      setBookingStatus('idle');
      setSelectedCity('');
      setSelectedDate('');
    }, 3000);
  };

  const handleBookFromTourDetails = () => {
    setCurrentView('main');
    // Use requestAnimationFrame to ensure the main view is rendered before scrolling
    requestAnimationFrame(() => {
      const bookingSection = document.getElementById('booking-section');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  const renderMainView = () => (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <header className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1626387346567-68d0c49af34a?auto=format&fit=crop&q=80"
            alt="VR Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Transform Learning Through Immersive Experiences
            </h1>
            <p className="text-xl mb-8">
              Step into the future of education with our cutting-edge AR/VR learning experiences. 
              Explore history, master science, and learn like never before.
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              Get Started <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Virtual Tours Section */}
      <section id="tours" className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Virtual Tours</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard 
              key={tour.id}
              {...tour}
              onClick={() => handleTourSelect(tour)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our AR/VR Learning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Glasses />}
              title="Immersive Learning"
              description="Experience education in 3D with our state-of-the-art VR technology"
            />
            <FeatureCard 
              icon={<GraduationCap />}
              title="Expert-Led Content"
              description="Courses designed by leading educators and industry experts"
            />
            <FeatureCard 
              icon={<Building2 />}
              title="Local Centers"
              description="Access our VR facilities at convenient locations across India"
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          {selectedTour ? `Book ${selectedTour.title}` : 'Book Your Experience'}
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleBooking} className="space-y-6">
            {selectedTour && (
              <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  {selectedTour.icon}
                  <h3 className="text-lg font-semibold">{selectedTour.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Duration:</span> {selectedTour.duration}
                  </div>
                  <div>
                    <span className="text-gray-600">Price:</span> {selectedTour.price}
                  </div>
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select City
              </label>
              <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Choose a city</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <input 
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <button 
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                bookingStatus === 'success' 
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {bookingStatus === 'success' ? 'Booking Confirmed!' : 'Book Now'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );

  const renderTourDetails = () => {
    if (!selectedTour) return null;

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button 
            onClick={() => setCurrentView('main')}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8"
          >
            <ArrowLeft size={20} />
            Back to Tours
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src={selectedTour.image} 
                alt={selectedTour.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="mb-4">{selectedTour.icon}</div>
              <h1 className="text-4xl font-bold mb-4">{selectedTour.title}</h1>
              <p className="text-gray-600 mb-6">{selectedTour.fullDescription}</p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{selectedTour.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-semibold">{selectedTour.price}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleBookFromTourDetails}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Book This Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return currentView === 'main' ? renderMainView() : renderTourDetails();
}

function TourCard({ icon, title, description, image, onClick }) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center">
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
        {React.cloneElement(icon, { className: 'w-6 h-6 text-indigo-600' })}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;