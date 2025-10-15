import React from 'react';
import { Zap, LogOut } from 'lucide-react';

function DashboardHeader({ onLogout }) {
  return (
    <header className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary-600 text-white">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">SyncUp</h1>
              <p className="text-sm text-neutral-600">BPDC Resilience Hub — Your student companion</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-red-600 border border-neutral-200 hover:border-red-300 px-4 py-2 rounded-lg transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
