'use client';

import { useState, useEffect } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Daily Care & Activities",
      description: "Comprehensive daily care routines including meals, personal hygiene, and recreational activities designed to maintain engagement and wellness.",
      icon: "🏥",
      details: "Morning exercises, meal preparation, afternoon games, and social activities"
    },
    {
      id: 2,
      title: "Health Monitoring",
      description: "Regular health check-ups, medication management, and vital signs monitoring by trained healthcare professionals.",
      icon: "❤️",
      details: "Blood pressure monitoring, medication schedules, health assessments, emergency support"
    },
    {
      id: 3,
      title: "Nutrition & Meal Services",
      description: "Specially prepared meals considering dietary requirements, nutritional needs, and food preferences of our seniors.",
      icon: "🍽️",
      details: "Balanced meals, dietary accommodations, hydration monitoring, special diets"
    },
    {
      id: 4,
      title: "Social & Recreational Programs",
      description: "Engaging activities, games, cultural programs, and entertainment to promote social interaction and mental stimulation.",
      icon: "🎭",
      details: "Games, music therapy, movie nights, social gatherings, and cultural events"
    },
    {
      id: 5,
      title: "Physical & Wellness Activities",
      description: "Gentle exercises, yoga, and wellness programs designed to maintain mobility and improve overall health.",
      icon: "🧘",
      details: "Yoga sessions, stretching, walking programs, mobility exercises, wellness workshops"
    },
    {
      id: 6,
      title: "Transportation Services",
      description: "Safe and comfortable transportation for medical appointments and other necessary outings.",
      icon: "🚐",
      details: "Doctor visits, shopping trips, recreational outings, hospital appointments"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl font-bold mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our Services
          </h1>
          <p className={`text-xl transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Comprehensive care services designed to enhance the quality of life for our elderly residents
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white p-8 rounded-lg border-t-4 border-green-700 overflow-hidden cursor-pointer transition-all duration-500 transform hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ${
                expandedCard === service.id ? 'shadow-2xl scale-105' : 'shadow-md'
              }`}
              onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: isVisible ? 1 : 0,
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-300 ${expandedCard === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t-2 border-green-200">
                    <p className="text-gray-600 text-sm">
                      <strong className="text-green-700">What's Included:</strong><br/>
                      {service.details}
                    </p>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="mt-4 text-green-700 font-semibold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  {expandedCard === service.id ? '▼ Less details' : '▶ More details'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-bounce">Service Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-l-4 border-green-700 hover:shadow-xl hover:scale-105 transition-all duration-300 transform cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Flexible Scheduling</h3>
              <p className="text-gray-700 mb-4">
                We offer flexible enrollment options including full-day, half-day, and customized schedules to meet the unique needs of each family.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <span className="text-green-700 text-xl">✓</span>
                  <span>Full-day programs</span>
                </li>
                <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <span className="text-green-700 text-xl">✓</span>
                  <span>Half-day programs</span>
                </li>
                <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <span className="text-green-700 text-xl">✓</span>
                  <span>Customized schedules</span>
                </li>
                <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <span className="text-green-700 text-xl">✓</span>
                  <span>Weekend services available</span>
                </li>
              </ul>
            </div>
            <div className="group p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-l-4 border-green-700 hover:shadow-xl hover:scale-105 transition-all duration-300 transform cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Qualified Staff</h3>
              <p className="text-gray-700 mb-4">
                Our team consists of trained healthcare professionals and caregivers committed to providing excellent care and support.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <span className="text-green-700 text-xl">✓</span>
                  <span>Certified caregivers</span>
                </li>
                <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <span className="text-green-700 text-xl">✓</span>
                  <span>Healthcare professionals</span>
                </li>
                <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <span className="text-green-700 text-xl">✓</span>
                  <span>Regular training programs</span>
                </li>
                <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <span className="text-green-700 text-xl">✓</span>
                  <span>Background-verified staff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-bounce">Interested in Our Services?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss which services best fit your loved one's needs.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-gray-100 hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 font-semibold text-lg transform">
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Add animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
