import React from 'react';
import { ShieldCheck, CheckCircle2, FileCheck, UserCheck } from 'lucide-react';

export function Verification() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Verification Process</h1>
          <p className="text-xl text-gray-600">Simple, secure, and respectful verification for our community</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ShieldCheck className="w-12 h-12 text-purple-600 mb-6" />
              <h2 className="text-2xl font-semibold mb-4">Why We Verify</h2>
              <p className="text-gray-600 mb-4">
                Our verification process ensures that our resources reach the trans community members who need them most. 
                We've designed the process to be respectful, secure, and straightforward.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Protects community resources</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Ensures fair distribution</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Maintains program integrity</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Verification Steps</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FileCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">1. Submit Basic Information</h3>
                    <p className="text-gray-600">Complete our initial form with your basic contact information.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <UserCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Connect with a Partner Organization</h3>
                    <p className="text-gray-600">Choose from our network of trusted LGBTQ+ organizations for verification.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Receive Verification</h3>
                    <p className="text-gray-600">Get verified and gain access to all our programs and resources.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Partner Organizations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-purple-100 rounded-lg">
              <h3 className="font-semibold mb-2">LGBTQ+ Community Centers</h3>
              <p className="text-gray-600">Local centers providing verification services and support.</p>
            </div>
            <div className="p-4 border border-purple-100 rounded-lg">
              <h3 className="font-semibold mb-2">Healthcare Providers</h3>
              <p className="text-gray-600">Licensed healthcare professionals specializing in trans care.</p>
            </div>
            <div className="p-4 border border-purple-100 rounded-lg">
              <h3 className="font-semibold mb-2">Legal Aid Organizations</h3>
              <p className="text-gray-600">Organizations providing legal support and documentation assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}