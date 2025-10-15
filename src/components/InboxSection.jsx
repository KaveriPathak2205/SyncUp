import React from 'react';
import { ArrowLeft, AlertTriangle, Calendar, Briefcase } from 'lucide-react';

function InboxSection({ setPage }) {
  const messages = [
    {
      sender: "University Administration",
      subject: "Mid-Semester Examination Schedule Released",
      preview: "The examination timetable for mid-semester tests has been published. Please check your course schedule...",
      time: "2 hours ago",
      priority: "high",
      icon: Calendar,
    },
    {
      sender: "Placement Cell",
      subject: "Company Pre-Placement Talk - TechCorp Solutions",
      preview: "Join us for an exciting session with TechCorp Solutions. Learn about internship opportunities and career paths...",
      time: "5 hours ago",
      priority: "medium",
      icon: Briefcase,
    },
    {
      sender: "Security Alert System",
      subject: "Important: Phishing Email Warning",
      preview: "We have detected suspicious emails targeting student accounts. Please be cautious of emails requesting personal information...",
      time: "1 day ago",
      priority: "high",
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-warning-500 to-warning-600 text-white p-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage('dashboard')}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl font-bold">📧 Secure Inbox</h2>
              <p className="text-warning-100">Official university communications</p>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="divide-y divide-neutral-100">
          {messages.map((message, index) => (
            <div key={index} className="p-6 hover:bg-neutral-50 transition-colors cursor-pointer">
              <div className="flex gap-4">
                <div className={`p-3 rounded-xl ${
                  message.priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-neutral-100 text-neutral-600'
                }`}>
                  <message.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-neutral-900 truncate">{message.subject}</h3>
                    <span className="text-sm text-neutral-500 whitespace-nowrap ml-4">{message.time}</span>
                  </div>
                  <p className="text-sm text-neutral-600 mb-2">{message.sender}</p>
                  <p className="text-sm text-neutral-700 line-clamp-2">{message.preview}</p>
                  
                  {message.priority === 'high' && (
                    <div className="mt-2">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                        <AlertTriangle className="w-3 h-3" />
                        High Priority
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-100 p-4 bg-neutral-50">
          <div className="text-center text-sm text-neutral-600">
            All messages are encrypted and secured by university protocols
          </div>
        </div>
      </div>
    </section>
  );
}

export default InboxSection;
