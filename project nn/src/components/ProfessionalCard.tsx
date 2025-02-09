import React from 'react';
import { Star, Phone, Calendar, MapPin, Award } from 'lucide-react';
import { Professional } from '../types';

interface Props {
  professional: Professional;
  onBook: (professional: Professional) => void;
  onCall: (phone: string) => void;
  onViewProfile: (professional: Professional) => void;
}

export function ProfessionalCard({ professional, onBook, onCall, onViewProfile }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={professional.imageUrl} 
        alt={professional.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <button
            onClick={() => onViewProfile(professional)}
            className="text-lg font-semibold text-left hover:text-blue-600 transition-colors"
          >
            {professional.name}
          </button>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {professional.profession.charAt(0).toUpperCase() + professional.profession.slice(1)}
          </span>
        </div>
        
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm text-gray-600">
            {professional.rating} ({professional.reviews} reviews)
          </span>
        </div>

        <div className="flex items-start gap-1 mb-2">
          <MapPin className="w-4 h-4 text-gray-400 mt-1" />
          <span className="text-sm text-gray-600">
            {professional.address.area}, {professional.address.city}
          </span>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <Award className="w-4 h-4 text-green-500" />
          <span className="text-sm text-gray-600">
            {professional.certificates.length} Verified Certificates
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{professional.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-blue-600">
            ₹{professional.hourlyRate}/hr
          </span>
          <span className={`text-sm ${professional.availability ? 'text-green-600' : 'text-red-600'}`}>
            {professional.availability ? 'Available' : 'Unavailable'}
          </span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onCall(professional.phone)}
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call
          </button>
          <button
            onClick={() => onBook(professional)}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book
          </button>
        </div>
      </div>
    </div>
  );
}