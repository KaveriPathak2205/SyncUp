import React from 'react';
import { Zap } from 'lucide-react';

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary-500 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-accent-500 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Logo & App Name */}
      <div className="relative z-10 flex items-center gap-4 animate-fade-in">
        <div className="p-4 rounded-2xl bg-primary-600/20 backdrop-blur-sm border border-primary-500/30">
          <Zap className="w-12 h-12 text-primary-400" />
        </div>
        <div>
          <div className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
            SyncUp
          </div>
          <p className="text-primary-200 font-medium">BPDC Resilience Hub</p>
        </div>
      </div>
      
      {/* Loading indicator */}
      <div className="mt-8 animate-slide-up">
        <div className="w-48 h-1 bg-neutral-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
        </div>
        <p className="text-neutral-300 text-center mt-4">Loading your campus hub...</p>
      </div>
      
      {/* Feature hints */}
      <div className="absolute bottom-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <p className="text-xs text-neutral-400 max-w-md">
          Connecting courses • Securing inbox • Locating mentors • Building careers
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
