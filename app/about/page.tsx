'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      role: "Senior Caregiver",
      description: "Dedicated professional with extensive experience in elderly care.",
      icon: "👩‍⚕️"
    },
    {
      id: 2,
      name: "Team Member 2",
      role: "Healthcare Coordinator",
      description: "Ensures quality healthcare delivery and wellness programs.",
      icon: "👨‍⚕️"
    },
    {
      id: 3,
      name: "Team Member 3",
      role: "Activities Organizer",
      description: "Creates engaging recreational and therapeutic activities.",
      icon: "👨‍🎓"
    },
  ];

  const coreValues = [
    { id: 1, title: "Compassion", icon: "🤝", description: "We care for our residents with empathy and genuine concern for their wellbeing." },
    { id: 2, title: "Excellence", icon: "⭐", description: "We maintain high standards in all aspects of our care delivery." },
    { id: 3, title: "Respect", icon: "🙏", description: "We honor the dignity and autonomy of every individual in our care." },
    { id: 4, title: "Growth", icon: "🌱", description: "We foster continuous improvement and personal development." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className={`text-5xl font-bold mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            About Abhishag
          </h1>
          <p className={`text-xl transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            Our mission, vision, and commitment to excellence in elderly care
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-bounce">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed hover:text-gray-800 transition-colors">
              Abhishag was founded with a simple yet powerful mission: to provide compassionate,
              professional care for elderly individuals while preserving their dignity and independence.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed hover:text-gray-800 transition-colors">
              We believe that aging is a natural part of life, and every senior deserves to live with
              respect, comfort, and access to quality healthcare services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-800 transition-colors">
              Our team works tirelessly to create an environment where our residents can thrive,
              maintain meaningful relationships, and enjoy their daily lives to the fullest.
            </p>
          </div>
          <div className={`group bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-12 border-l-4 border-green-700 hover:shadow-xl hover:scale-105 transition-all duration-300 transform cursor-pointer ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} transition-all delay-300`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Tagline</h3>
            <p className="text-3xl text-green-700 font-semibold mb-6 group-hover:scale-110 transition-transform">
              "Abundance of Life"
            </p>
            <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
              This reflects our core belief that every day is an opportunity to help our seniors
              experience joy, wellness, and meaningful connections with their community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-l-4 border-green-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-pointer">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors">
                To provide exceptional, compassionate daycare services that enhance the quality of life
                for elderly individuals through professional care, engaging activities, and a supportive community.
              </p>
            </div>

            {/* Vision */}
            <div className="group p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-l-4 border-green-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-pointer">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors">
                To be the most trusted and respected elderly daycare center in the community, known for
                our commitment to excellence, innovation in care delivery, and genuine love for our residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-bounce">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={value.id}
              className={`group text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-lg border-t-4 border-green-700 hover:shadow-2xl hover:scale-110 hover:bg-gradient-to-br hover:from-green-100 hover:to-green-50 transition-all duration-300 transform cursor-pointer ${
                activeValue === value.id ? 'shadow-2xl scale-110 bg-gradient-to-br from-green-100 to-green-50' : ''
              }`}
              onClick={() => setActiveValue(activeValue === value.id ? null : value.id)}
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                {value.title}
              </h3>
              <p className={`text-gray-700 transition-all duration-300 ${activeValue === value.id ? 'text-base opacity-100' : 'text-sm opacity-75 group-hover:opacity-100'}`}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-bounce">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border-t-4 border-green-700 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-pointer"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl">{member.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{member.name}</h3>
                <p className="text-green-700 font-semibold mb-3 group-hover:scale-105 transition-transform">{member.role}</p>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-bounce">Why Choose Abhishag?</h2>
        <div className="space-y-6">
          {[
            {
              title: "Professional & Trained Staff",
              desc: "All team members are trained, certified, and dedicated to providing exceptional care."
            },
            {
              title: "Personalized Care Plans",
              desc: "We develop individualized care plans tailored to each resident's specific needs and preferences."
            },
            {
              title: "Safe & Comfortable Facility",
              desc: "Our center is equipped with modern amenities and safety features designed for elderly care."
            },
            {
              title: "Family-Centric Approach",
              desc: "We maintain open communication with families and involve them in care decisions."
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex gap-6 p-6 bg-white rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer border-l-4 border-green-700"
            >
              <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">✓</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-bounce">Get in Touch With Us</h2>
          <p className="text-xl mb-8">
            We'd love to hear from you and answer any questions about our services.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-gray-100 hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 font-semibold text-lg transform">
            Contact Us Today
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
