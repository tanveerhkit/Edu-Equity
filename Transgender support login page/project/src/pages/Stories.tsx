import React from 'react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Stories() {
  const stories = [
    {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      story: "The scholarship program helped me pursue my dream of becoming a software engineer. Today, I work at a leading tech company and mentor others in the community. The support I received wasn't just financial – it was emotional and professional too.",
      program: "Educational Scholarship",
      year: "2023"
    },
    {
      name: "Alex Rivera",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      story: "Through the skills development program, I was able to start my own business. The mentorship and support made all the difference in my entrepreneurial journey. Now I'm proud to say my business employs other trans individuals.",
      program: "Skills Development Grant",
      year: "2023"
    },
    {
      name: "Jordan Taylor",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      story: "The mentorship program connected me with amazing role models who helped me navigate both my career and personal journey. Their guidance gave me the confidence to pursue my PhD in Biomedical Engineering.",
      program: "Mentorship Program",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600">Inspiring journeys from our community members</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={story.image} 
                alt={story.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <Quote className="w-8 h-8 text-purple-600 mb-4" />
                <p className="text-gray-600 mb-6">{story.story}</p>
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-lg mb-1">{story.name}</h3>
                  <p className="text-purple-600 mb-1">{story.program}</p>
                  <p className="text-sm text-gray-500">Class of {story.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Share Your Story</h2>
          <p className="text-gray-600 mb-6">
            Are you a TransSupport program graduate? We'd love to hear about your journey and share it with the community.
          </p>
          <Link 
            to="/submit-story" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Submit Your Story
          </Link>
        </div>
      </div>
    </div>
  );
}