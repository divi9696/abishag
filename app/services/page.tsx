'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Caregiver Services (Non-Medical Support)",
      icon: "🤝",
      image: "/images/Abishag_img/1. Caregiver Services.png",
      scope: "Personal hygiene (Bathing, Grooming, Oral care) • Toileting & Diaper management • Feeding assistance (Oral / Ryle's tube support under guidance) • Mobility assistance (Bed to chair, ambulation support) • Bedridden care & repositioning (Bedsore prevention) • Companionship & emotional support • Vital signs monitoring (basic: temperature, pulse) • Sleep supervision & safety monitoring",
      targetPatients: "Elderly / Geriatric • Post-surgery recovery • Stroke / Paralysis patients • Dementia / Alzheimer's cases"
    },
    {
      id: 2,
      title: "Nursing Services (Clinical Care at Home)",
      icon: "❤️",
      image: "/images/Abishag_img/2. Nursing Services.png",
      scope: "Medication administration (Oral / IM / IV) • Injection & infusion therapy • Wound care & dressing (post-surgical, diabetic wounds) • Catheter care (Foley / Suprapubic) • Tracheostomy care & suctioning • Ryle's tube feeding & care • Oxygen therapy management • Monitoring vitals (BP, Sugar, SpO2)",
      targetPatients: "ICU-trained nurses • Ventilator handling (under supervision) • Critical care monitoring"
    },
    {
      id: 3,
      title: "Hospice Care",
      icon: "🕯️",
      image: "/images/Abishag_img/3. Hospice Care.png",
      scope: "End-of-life comfort care • Pain & symptom management • Emotional & psychological support • Spiritual care (as per patient beliefs) • Family counseling & bereavement support",
      focus: "Dignity, comfort, and quality of life rather than cure"
    },
    {
      id: 4,
      title: "Dementia Care",
      icon: "🧠",
      image: "/images/Abishag_img/4. Dementia Care.png",
      scope: "Memory care routines • Behavioral management (agitation, wandering) • Safety supervision (fall prevention) • Cognitive engagement activities • Family education & support",
      conditions: "Alzheimer's Disease • Parkinson's-related dementia • Age-related cognitive decline"
    },
    {
      id: 5,
      title: "Allied Health & Professional Visits",
      icon: "👨‍⚕️",
      image: "/images/Abishag_img/5. Allied Health Visit.png",
      scope: "Physician Visit - General health assessment, Treatment plan review, Prescription management • Physiotherapist - Mobility & strengthening exercises, Stroke rehabilitation, Pain management therapy • Speech Therapist - Swallowing therapy, Speech recovery (post-stroke) • Pastor / Spiritual Care Provider - Prayer support, Spiritual counseling, End-of-life spiritual guidance • Social Worker - Psychosocial assessment, Family counseling, Resource coordination"
    },
    {
      id: 6,
      title: "Nurse Visits (On-Demand / Periodic)",
      icon: "⚕️",
      image: "/images/Abishag_img/6. Nurse Visit (On-demand).png",
      scope: "Injection administration • IV cannulation • Wound dressing • Catheter insertion/removal • Vitals monitoring • Health assessment",
      models: "One-time visit • Scheduled visits • Follow-up care plans"
    },
    {
      id: 7,
      title: "Geriatric / Elderly Care",
      icon: "👴",
      image: "/images/Abishag_img/7. Geriatric Care.png",
      scope: "Long-term elderly care planning • Fall prevention strategies • Chronic disease management (Diabetes, Hypertension) • Daily routine support • Mental well-being & companionship",
      approach: "Holistic care (Physical + Emotional + Social)"
    },
    {
      id: 8,
      title: "Palliative Care Management",
      icon: "💚",
      image: "/images/Abishag_img/8. Palliative Care.png",
      scope: "Pain management (Cancer / Chronic illness) • Symptom control (breathlessness, nausea, fatigue) • Psychological & emotional care • Family guidance • Coordination with doctors",
      conditions: "Cancer patients • End-stage organ failure • Chronic debilitating illnesses"
    },
    {
      id: 9,
      title: "Medical Equipment Rental / Sales",
      icon: "🏥",
      image: "/images/Abishag_img/9. Medical Equipment Setup.png",
      equipment: "Oxygen concentrators • Hospital beds (Manual / Motorized) • Wheelchairs & walkers • Suction machines • BiPAP / CPAP machines • Patient monitors • Air mattresses (Bedsore prevention)",
      services: "Delivery & installation • Maintenance support • Training for caregivers"
    },
    {
      id: 10,
      title: "ICU Setup @ Home (Critical Care at Home)",
      icon: "🚨",
      image: "/images/Abishag_img/10. ICU Setup at Home.png",
      scope: "Complete ICU bed setup • Ventilator support • Cardiac monitor installation • Oxygen pipeline setup • Infusion pumps & suction apparatus • 24/7 ICU nurse deployment • Doctor on-call / periodic visits",
      support: "Biomedical technician support • Emergency backup protocols • Ambulance coordination"
    },
    {
      id: 11,
      title: "Integrated Care Coordination",
      icon: "📋",
      image: "/images/Abishag_img/11. Care Coordination.png",
      scope: "Case manager allocation • Care plan development • Regular monitoring & reporting • Family communication • Emergency response coordination • Replacement & staffing management"
    },
    {
      id: 12,
      title: "Lab Sample Collection at Home",
      icon: "🧪",
      image: "/images/Abishag_img/12. Lab Sample Collection.png",
      scope: "Blood sample collection (Routine / Fasting / Postprandial) • Urine, stool, sputum sample collection • Specialized tests (HbA1c, Thyroid profile, Lipid profile, etc.) • Sample transport to accredited labs (NABL-certified preferred) • Digital report delivery (WhatsApp / Email)",
      features: "Trained phlebotomists • Infection control protocols • Early morning fasting collections • Integration with doctor consultation"
    },
    {
      id: 13,
      title: "Pharmacy Delivery",
      icon: "💊",
      image: "/images/Abishag_img/13. Pharmacy Delivery.png",
      scope: "Prescription medicine delivery • OTC medications supply • Consumables (Diapers, gloves, syringes, dressings) • Medical nutrition products (Ensure, protein supplements)",
      features: "Tie-up with licensed pharmacies • Prescription validation compliance • Same-day / scheduled delivery • Refill reminders for chronic patients"
    },
    {
      id: 14,
      title: "Teleconsultation Support",
      icon: "📱",
      scope: "Doctor consultation via video / audio call • Follow-up consultations • Second opinion services • Specialist consultations (Physician, Neurologist, etc.)",
      features: "Appointment scheduling • Digital prescription sharing • Integration with patient records • Emergency escalation guidance"
    },
    {
      id: 15,
      title: "Dietician Consultation",
      icon: "🥗",
      image: "/images/Abishag_img/15. Dietician Consultation.png",
      scope: "Personalized diet planning • Therapeutic diets: Diabetic diet, Renal diet, Cardiac diet, Post-surgical nutrition • Tube feeding diet planning (Ryle's tube / PEG)",
      features: "Initial assessment (medical history + lifestyle) • Weekly / monthly follow-ups • Meal plan customization (regional preferences)"
    },
    {
      id: 16,
      title: "Mental Health Counseling",
      icon: "🧘‍♀️",
      image: "/images/Abishag_img/16. Mental Health Counseling.png",
      scope: "Psychological counseling (patients & family) • Depression / anxiety management • Caregiver stress management • Grief & bereavement counseling • Cognitive behavioral support",
      professionals: "Psychologists • Clinical counselors • Psychiatrist (if required for medication)"
    }
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
                {service.image && (
                  <div className="mb-4 w-full h-48 relative overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>

                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-300 ${expandedCard === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t-2 border-green-200 space-y-3">
                    {service.scope && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Scope:</strong><br/>
                          {service.scope}
                        </p>
                      </div>
                    )}
                    {service.targetPatients && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Target Patients:</strong><br/>
                          {service.targetPatients}
                        </p>
                      </div>
                    )}
                    {service.focus && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Focus:</strong><br/>
                          {service.focus}
                        </p>
                      </div>
                    )}
                    {service.conditions && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Conditions:</strong><br/>
                          {service.conditions}
                        </p>
                      </div>
                    )}
                    {service.models && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Models:</strong><br/>
                          {service.models}
                        </p>
                      </div>
                    )}
                    {service.approach && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Approach:</strong><br/>
                          {service.approach}
                        </p>
                      </div>
                    )}
                    {service.equipment && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Equipment:</strong><br/>
                          {service.equipment}
                        </p>
                      </div>
                    )}
                    {service.services && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Services:</strong><br/>
                          {service.services}
                        </p>
                      </div>
                    )}
                    {service.support && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Support:</strong><br/>
                          {service.support}
                        </p>
                      </div>
                    )}
                    {service.features && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Features:</strong><br/>
                          {service.features}
                        </p>
                      </div>
                    )}
                    {service.professionals && (
                      <div>
                        <p className="text-gray-600 text-sm">
                          <strong className="text-green-700">Professionals:</strong><br/>
                          {service.professionals}
                        </p>
                      </div>
                    )}
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
