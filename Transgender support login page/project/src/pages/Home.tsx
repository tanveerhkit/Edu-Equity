import React from 'react';
import { ArrowRight, GraduationCap, ShieldCheck, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold mb-6">Empowering Trans Communities Through Education</h2>
            <p className="text-xl mb-8">Access specialized programs and scholarships designed to support your educational journey.</p>
            <Link to="/apply" className="inline-flex bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold items-center space-x-2 hover:bg-purple-50 transition-colors">
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Available Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Educational Scholarships</h3>
            <p className="text-gray-600 mb-4">Full and partial scholarships for undergraduate and graduate studies.</p>
            <span className="text-purple-600 font-medium">Up to ₹20,00,000/year</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <Award className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Skills Development Grants</h3>
            <p className="text-gray-600 mb-4">Funding for professional certifications and skill-building courses.</p>
            <span className="text-purple-600 font-medium">Up to ₹4,00,000/program</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Mentorship Program</h3>
            <p className="text-gray-600 mb-4">Connect with successful professionals from the trans community.</p>
            <span className="text-purple-600 font-medium">6-month program</span>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Success Story" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah's Journey</h3>
              <p className="text-gray-600">
                "The scholarship program helped me pursue my dream of becoming a software engineer..."
              </p>
              <Link to="/stories" className="text-purple-600 hover:text-purple-700 font-medium mt-4 inline-block">
                Read more stories →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}