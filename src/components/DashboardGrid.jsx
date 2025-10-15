import React from 'react';
import { BookOpen, MessageCircle, Mail, Briefcase, Calendar } from 'lucide-react';

function DashboardGrid({ setPage }) {
  const sections = [
    {
      id: 'courses',
      title: 'Courses',
      icon: BookOpen,
      description: 'Access playlists & practice papers',
      color: 'bg-gradient-to-br from-primary-500 to-primary-600',
      onClick: () => alert("Open Courses (prototype)"),
    },
    {
      id: 'chat',
      title: 'Peer Chat',
      icon: MessageCircle,
      description: 'Connect with seniors & peers',
      color: 'bg-gradient-to-br from-accent-500 to-accent-600',
      onClick: () => setPage('chat'),
    },
    {
      id: 'inbox',
      title: 'Secure Inbox',
      icon: Mail,
      description: 'University communications',
      color: 'bg-gradient-to-br from-warning-500 to-warning-600',
      onClick: () => setPage('inbox'),
    },
    {
      id: 'career',
      title: 'Career Hub',
      icon: Briefcase,
      description: 'Opportunities & alumni network',
      color: 'bg-gradient-to-br from-success-500 to-success-600',
      onClick: () => setPage('career'),
    },
    {
      id: 'timetable',
      title: 'Timetable',
      icon: Calendar,
      description: 'Build & manage your schedule',
      color: 'bg-gradient-to-br from-neutral-600 to-neutral-700',
      onClick: () => setPage('timetable'),
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
        <h2 className="text-xl font-bold text-neutral-900 mb-6">🏠 Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={section.onClick}
              className="group cursor-pointer rounded-xl overflow-hidden border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg"
            >
              <div className={`${section.color} p-4 text-white`}>
                <section.icon className="w-8 h-8 mb-2" />
                <h3 className="font-semibold text-lg">{section.title}</h3>
              </div>
              <div className="p-4 bg-neutral-50 group-hover:bg-white transition-colors">
                <p className="text-sm text-neutral-600">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DashboardGrid;
