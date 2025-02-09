import React from 'react';
import { BookOpen, Contact, HelpCircle, Info, Palette, School, Scissors, UtensilsCrossed, Heart, Code, Terminal, Coffee } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">EDU-EQUITY</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  <Info className="h-5 w-5 mr-1" />
                  About Us
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  <Contact className="h-5 w-5 mr-1" />
                  Contact Us
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  <HelpCircle className="h-5 w-5 mr-1" />
                  Help
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="http://localhost:3000/" className="flex items-center text-gray-600 hover:text-indigo-600">
                <School className="h-5 w-5 mr-1" />
                Courses
              </a>
              <a href="http://localhost:5000/" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Palette className="h-5 w-5 mr-1" />
                Beyond Books
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Heart className="h-5 w-5 mr-1" />
                LGBTQ+ Power
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
          alt="E-learning Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Learn Without Limits</h1>
            <p className="text-xl mb-8">Discover your passion and unlock your potential</p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition">
              Start Learning
            </button>
          </div>
        </div>
      </div>

      {/* Technical Courses Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Web Development"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Code className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <p className="text-gray-600">Master HTML, CSS, JavaScript, and modern frameworks</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
          </div>

          {/* C++ Programming */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
              alt="C++ Programming"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Terminal className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">C++ Programming</h3>
              </div>
              <p className="text-gray-600">Learn object-oriented programming and system development</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Data Structures</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Algorithms</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">STL</span>
              </div>
            </div>
          </div>

          {/* Java Programming */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
              alt="Java Programming"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Coffee className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">Java Programming</h3>
              </div>
              <p className="text-gray-600">Build enterprise applications and Android apps</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Android</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">JVM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beyond Books Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Beyond Books</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cooking */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
              alt="Cooking"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <UtensilsCrossed className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">Culinary Arts</h3>
              </div>
              <p className="text-gray-600">Master the art of cooking with our expert-led courses</p>
            </div>
          </div>

          {/* Stitching */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&q=80"
              alt="Stitching"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Scissors className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">Fashion & Stitching</h3>
              </div>
              <p className="text-gray-600">Learn sewing and fashion design from industry professionals</p>
            </div>
          </div>

          {/* Designing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
              alt="Designing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Palette className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">Creative Design</h3>
              </div>
              <p className="text-gray-600">Explore graphic design, UI/UX, and digital art</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;