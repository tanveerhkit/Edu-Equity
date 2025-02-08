import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6" />
              <span className="font-bold text-xl">TransSupport</span>
            </div>
            <p className="text-purple-200">Empowering trans communities through education and support.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-200">
              <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
              <li><Link to="/verification" className="hover:text-white">Verification</Link></li>
              <li><Link to="/stories" className="hover:text-white">Success Stories</Link></li>
              <li><Link to="/apply" className="hover:text-white">Apply Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-purple-200">support@transsupport.org</p>
            <p className="text-purple-200">1-800-SUPPORT</p>
          </div>
        </div>
      </div>
    </footer>
  );
}