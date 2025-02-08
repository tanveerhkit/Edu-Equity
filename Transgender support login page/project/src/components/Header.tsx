import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-purple-600" />
          <h1 className="text-2xl font-bold text-gray-900">TransSupport</h1>
        </Link>
        <nav className="flex space-x-6">
          <Link to="/programs" className="text-gray-600 hover:text-purple-600">Programs</Link>
          <Link to="/verification" className="text-gray-600 hover:text-purple-600">Verification</Link>
          <Link to="/stories" className="text-gray-600 hover:text-purple-600">Success Stories</Link>
          <Link to="/apply" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Apply Now</Link>
        </nav>
      </div>
    </header>
  );
}