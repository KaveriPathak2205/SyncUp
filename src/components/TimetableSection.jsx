import React from 'react';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';

function TimetableSection({ setPage }) {
  const schedule = {
    Monday: [
      { time: '9:00 AM', subject: 'Data Structures & Algorithms', room: 'CS-101', type: 'Lecture' },
      { time: '11:00 AM', subject: 'Database Management', room: 'CS-205', type: 'Lab' },
      { time: '2:00 PM', subject: 'Operating Systems', room: 'CS-301', type: 'Tutorial' },
    ],
    Tuesday: [
      { time: '10:00 AM', subject: 'Software Engineering', room: 'CS-102', type: 'Lecture' },
      { time: '1:00 PM', subject: 'Web Development', room: 'CS-Lab2', type: 'Lab' },
    ],
    Wednesday: [
      { time: '9:00 AM', subject: 'Computer Networks', room: 'CS-201', type: 'Lecture' },
      { time: '11:00 AM', subject: 'AI & Machine Learning', room: 'CS-401', type: 'Lecture' },
    ],
    Thursday: [
      { time: '10:00 AM', subject: 'Mathematics', room: 'Math-101', type: 'Lecture' },
      { time: '2:00 PM', subject: 'Project Work', room: 'CS-Lab1', type: 'Project' },
    ],
    Friday: [
      { time: '9:00 AM', subject: 'Artificial Intelligence', room: 'CS-401', type: 'Lecture' },
      { time: '11:00 AM', subject: 'Industry Seminar', room: 'Auditorium', type: 'Seminar' },
    ],
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Lecture': return 'bg-primary-100 text-primary-700';
      case 'Lab': return 'bg-success-100 text-success-700';
      case 'Tutorial': return 'bg-accent-100 text-accent-700';
      case 'Project': return 'bg-warning-100 text-warning-700';
      case 'Seminar': return 'bg-neutral-100 text-neutral-700';
      default: return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-neutral-600 to-neutral-700 text-white p-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage('dashboard')}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl font-bold">🗓️ Timetable Builder</h2>
              <p className="text-neutral-200">Manage your weekly schedule</p>
            </div>
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="p-6">
          <div className="grid gap-6">
            {Object.entries(schedule).map(([day, classes]) => (
              <div key={day} className="border border-neutral-100 rounded-xl p-4">
                <h3 className="font-semibold text-lg text-neutral-900 mb-4 border-b border-neutral-100 pb-2">
                  {day}
                </h3>
                <div className="space-y-3">
                  {classes.map((classItem, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-neutral-50 rounded-lg">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <Clock className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-neutral-700 flex-shrink-0">
                          {classItem.time}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-neutral-900 truncate">{classItem.subject}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-3 h-3 text-neutral-400" />
                            <span className="text-xs text-neutral-600">{classItem.room}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getTypeColor(classItem.type)}`}>
                        {classItem.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary-50 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary-600">12</div>
              <div className="text-sm text-primary-700">Lectures</div>
            </div>
            <div className="bg-success-50 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-success-600">3</div>
              <div className="text-sm text-success-700">Lab Sessions</div>
            </div>
            <div className="bg-accent-50 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-accent-600">1</div>
              <div className="text-sm text-accent-700">Tutorial</div>
            </div>
            <div className="bg-warning-50 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-warning-600">2</div>
              <div className="text-sm text-warning-700">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimetableSection;
