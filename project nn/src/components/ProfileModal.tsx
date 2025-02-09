import React from 'react';
import { X, MapPin, Phone, Award, Clock, Calendar } from 'lucide-react';
import { Professional } from '../types';

interface Props {
  professional: Professional;
  onClose: () => void;
  onBook: (professional: Professional) => void;
}

export function ProfileModal({ professional, onClose, onBook }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 my-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-semibold">{professional.name}</h2>
            <span className="inline-block mt-1 bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {professional.profession.charAt(0).toUpperCase() + professional.profession.slice(1)}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              src={professional.imageUrl} 
              alt={professional.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    {professional.address.street}<br />
                    {professional.address.area}<br />
                    {professional.address.city}, {professional.address.state}<br />
                    {professional.address.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <p className="text-gray-600">{professional.phone}</p>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">Available Days</p>
                  <p className="text-gray-600">
                    {professional.availableTimeSlots.map(slot => slot.day).join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-gray-600">{professional.description}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-semibold">Verified Certificates</h3>
              </div>
              
              <div className="space-y-4">
                {professional.certificates.map(cert => (
                  <div key={cert.id} className="border rounded-lg p-4">
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-gray-600">Issued by: {cert.issuedBy}</p>
                    <p className="text-sm text-gray-600">Issue Date: {new Date(cert.issueDate).toLocaleDateString()}</p>
                    {cert.expiryDate && (
                      <p className="text-sm text-gray-600">
                        Expiry Date: {new Date(cert.expiryDate).toLocaleDateString()}
                      </p>
                    )}
                    <div className="mt-2 flex items-center gap-1">
                      <Award className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600">Verified by EduEquity</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onBook(professional)}
              className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Now - ₹{professional.hourlyRate}/hr
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}