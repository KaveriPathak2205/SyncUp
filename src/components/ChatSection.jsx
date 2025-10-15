import React from 'react';
import { ArrowLeft, Send } from 'lucide-react';

function ChatSection({ setPage }) {
  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage('dashboard')}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl font-bold">💬 Peer Chat</h2>
              <p className="text-accent-100">Connect with your campus community</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-6 space-y-4 min-h-[400px]">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              S
            </div>
            <div className="flex-1">
              <div className="bg-neutral-50 rounded-2xl rounded-tl-md p-4">
                <p className="text-sm font-semibold text-neutral-700 mb-1">Senior - Computer Science</p>
                <p className="text-neutral-800">Welcome to BPDC! Feel free to ask me anything about courses, placements, or campus life. We're all here to help each other succeed! 🚀</p>
              </div>
              <p className="text-xs text-neutral-500 mt-1 ml-4">2 minutes ago</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 bg-success-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              F
            </div>
            <div className="flex-1">
              <div className="bg-neutral-50 rounded-2xl rounded-tl-md p-4">
                <p className="text-sm font-semibold text-neutral-700 mb-1">Fresher - Information Technology</p>
                <p className="text-neutral-800">Thanks! Can you share some tips for the upcoming Data Structures and Algorithms exam? What topics should I focus on most?</p>
              </div>
              <p className="text-xs text-neutral-500 mt-1 ml-4">1 minute ago</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              S
            </div>
            <div className="flex-1">
              <div className="bg-primary-50 border border-primary-100 rounded-2xl rounded-tl-md p-4">
                <p className="text-sm font-semibold text-primary-700 mb-1">Senior - Computer Science</p>
                <p className="text-primary-800">Great question! For DAA, focus on: 1) Time & Space complexity analysis, 2) Sorting algorithms (especially merge & quick sort), 3) Binary trees & BST operations, 4) Dynamic programming basics. Practice coding these concepts daily! 💪</p>
              </div>
              <p className="text-xs text-neutral-500 mt-1 ml-4">Just now</p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="border-t border-neutral-100 p-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
            />
            <button className="p-3 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatSection;
