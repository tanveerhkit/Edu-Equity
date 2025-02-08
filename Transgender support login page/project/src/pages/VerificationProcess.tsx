import React from 'react';
import { ClipboardCheck, FileCheck, UserCheck, ShieldCheck } from 'lucide-react';

export function VerificationProcess() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Verification Process Guide</h1>
          <p className="text-xl text-gray-600">A step-by-step guide to complete your verification</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="relative flex items-start md:items-center space-x-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <ClipboardCheck className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. Initial Application</h3>
                  <p className="text-gray-600">
                    Fill out the basic application form with your personal details and contact information.
                    This helps us understand your needs and match you with the right verification partner.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start md:items-center space-x-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <FileCheck className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">2. Document Preparation</h3>
                  <p className="text-gray-600">
                    Gather the required documents. This may include:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Government-issued ID</li>
                    <li>Medical documentation (if available)</li>
                    <li>Legal name change documents (if applicable)</li>
                    <li>Proof of residence</li>
                  </ul>
                </div>
              </div>

              <div className="relative flex items-start md:items-center space-x-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3. Partner Organization Meeting</h3>
                  <p className="text-gray-600">
                    Schedule a meeting with one of our partner organizations. They will:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Review your documents</li>
                    <li>Verify your identity</li>
                    <li>Provide additional support if needed</li>
                  </ul>
                </div>
              </div>

              <div className="relative flex items-start md:items-center space-x-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <ShieldCheck className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">4. Verification Completion</h3>
                  <p className="text-gray-600">
                    Once verified, you'll receive:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Verification certificate</li>
                    <li>Access to all TransSupport programs</li>
                    <li>Dedicated support contact</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-purple-50 rounded-lg">
              <h4 className="font-semibold mb-4">Important Notes:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• The verification process typically takes 5-7 working days</li>
                <li>• All information shared is kept strictly confidential</li>
                <li>• Support is available throughout the process</li>
                <li>• There is no fee for verification</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Verification Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}