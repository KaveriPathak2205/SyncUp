import React from 'react';
import { ArrowLeft, Users, MapPin, ExternalLink } from 'lucide-react';


function CareerSection({ setPage }) {
  const opportunities = [
    {
      company: "Deriv",
      role: "AI Intern",
      location: "Dubai, UAE",
      alumni: "Netra",
      graduationYear: "2025",
      department: "Computer Science",
      logo: "https://i0.wp.com/greatplacetowork.me/wp-content/uploads/2024/04/Deriv-Logo.png?fit=1251%2C1251&ssl=1",
      type: "Internship"
    },
    {
      company: "Deloitte",
      role: "Finance Analyst",
      location: "Mumbai, India",
      alumni: "Sarah Ali",
      graduationYear: "2022",
      department: "Business Administration",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=80&h=80&fit=crop&crop=center",
      type: "Full-time",
    },
    {
      company: "Microsoft",
      role: "Software Engineer",
      location: "Hyderabad, India",
      alumni: "Raj Patel",
      graduationYear: "2023",
      department: "Information Technology",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=80&h=80&fit=crop&crop=center",
      type: "Full-time",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-success-500 to-success-600 text-white p-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage('dashboard')}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl font-bold">💼 Career Hub</h2>
              <p className="text-success-100">Opportunities & alumni network</p>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Featured Opportunities</h3>
            <p className="text-neutral-600">Connect with alumni and explore career paths</p>
          </div>

          <div className="grid gap-6">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="border border-neutral-100 rounded-xl p-6 hover:shadow-sm transition-all">
                <div className="flex gap-4">
                  <img
                    src={opportunity.logo}
                    alt={`${opportunity.company} logo`}
                    className="w-16 h-16 rounded-xl object-cover border border-neutral-100"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-lg text-neutral-900">{opportunity.company}</h4>
                        <p className="text-neutral-700 font-medium">{opportunity.role}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        opportunity.type === 'Internship' 
                          ? 'bg-primary-100 text-primary-700' 
                          : 'bg-success-100 text-success-700'
                      }`}>
                        {opportunity.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{opportunity.location}</span>
                    </div>

                    {/* Alumni Connection */}
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {opportunity.alumni.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="w-4 h-4 text-neutral-500" />
                            <span className="font-medium text-neutral-900">{opportunity.alumni}</span>
                          </div>
                          <p className="text-sm text-neutral-600">
                            {opportunity.department} • Class of {opportunity.graduationYear}
                          </p>
                        </div>
                        <button className="flex items-center gap-1 px-3 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
                          Connect
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 p-6 bg-gradient-to-r from-success-50 to-primary-50 rounded-xl border border-success-100">
            <div className="text-center">
              <h4 className="font-semibold text-neutral-900 mb-2">Ready to Connect?</h4>
              <p className="text-neutral-600 mb-4">Join our alumni network and discover more opportunities</p>
              <button className="px-6 py-3 bg-success-600 text-white font-semibold rounded-lg hover:bg-success-700 transition-colors">
                Explore Network →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerSection;
