'use client';

import Slideshow from './components/Slideshow';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Abhishag
            </h1>
            <p className="text-xl text-gray-700 mb-4 font-semibold">
              Home Health Services - Abundance of Life
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Providing compassionate and professional daycare services for elderly individuals in our community. We focus on health, wellness, and creating a nurturing environment for our seniors.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-semibold transform">
                Learn More
              </button>
              <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-semibold transform">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content - Slideshow */}
          <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <Slideshow />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Abhishag?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-green-50 rounded-lg border-l-4 border-green-700 hover:shadow-2xl hover:scale-105 hover:bg-green-100 transition-all duration-500 transform cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">👨‍⚕️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Professional Care</h3>
              <p className="text-gray-700 group-hover:text-gray-800">
                Our trained and experienced staff provide the highest quality care and attention to every individual.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-green-50 rounded-lg border-l-4 border-green-700 hover:shadow-2xl hover:scale-105 hover:bg-green-100 transition-all duration-500 transform cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Safe Environment</h3>
              <p className="text-gray-700 group-hover:text-gray-800">
                A secure and comfortable facility designed specifically for the needs of our elderly residents.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-green-50 rounded-lg border-l-4 border-green-700 hover:shadow-2xl hover:scale-105 hover:bg-green-100 transition-all duration-500 transform cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🌟</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Holistic Wellness</h3>
              <p className="text-gray-700 group-hover:text-gray-800">
                We focus on physical health, mental wellbeing, and social engagement for a better quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our services and schedule a visit.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-gray-100 hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 font-semibold text-lg transform">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

