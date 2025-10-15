import React from 'react';
import { Play, FileText } from 'lucide-react';

function CoursesPreview() {
  const courses = [
    {
      name: "Data Structures & Algorithms",
      code: "CS201",
      progress: 75,
    },
    {
      name: "Database Management Systems",
      code: "CS301",
      progress: 60,
    },
    {
      name: "Operating Systems",
      code: "CS302",
      progress: 45,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
            📚 Current Courses
          </h2>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-semibold">
            View All →
          </button>
        </div>
        
        <div className="grid gap-4">
          {courses.map((course, index) => (
            <div key={index} className="border border-neutral-100 rounded-xl p-4 hover:shadow-sm transition-all">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-neutral-900">{course.name}</h3>
                  <p className="text-sm text-neutral-500">{course.code}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-neutral-500 mb-1">Progress</div>
                  <div className="text-lg font-semibold text-primary-600">{course.progress}%</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-neutral-100 rounded-full h-2 mb-4">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium">
                  <Play className="w-4 h-4" />
                  Video Playlist
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-50 text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium">
                  <FileText className="w-4 h-4" />
                  Practice Papers
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesPreview;
