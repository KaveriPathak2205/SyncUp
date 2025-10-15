import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import DashboardHeader from './components/DashboardHeader';
import DashboardGrid from './components/DashboardGrid';
import CoursesPreview from './components/CoursesPreview';
import ChatSection from './components/ChatSection';
import InboxSection from './components/InboxSection';
import CareerSection from './components/CareerSection';
import TimetableSection from './components/TimetableSection';

function App() {
  // App state
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState('login');

  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  // Authentication handlers
  const handleLogin = () => {
    setPage('dashboard');
  };

  const handleSignup = () => {
    setPage('dashboard');
  };

  const handleLogout = () => {
    setPage('login');
    setEmail('');
    setPassword('');
    setName('');
  };

  // Show loading screen
  if (loading) {
    return <LoadingScreen />;
  }

  // Show login page
  if (page === 'login') {
    return (
      <LoginPage
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onLogin={handleLogin}
        onSignup={() => setPage('signup')}
      />
    );
  }

  // Show signup page
  if (page === 'signup') {
    return (
      <SignupPage
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSignup={handleSignup}
        onLogin={() => setPage('login')}
      />
    );
  }

  // Show dashboard and other sections
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="p-6 space-y-6">
        <DashboardHeader onLogout={handleLogout} />

        {page === 'dashboard' && (
          <>
            <DashboardGrid setPage={setPage} />
            <CoursesPreview />
          </>
        )}

        {page === 'chat' && <ChatSection setPage={setPage} />}
        {page === 'inbox' && <InboxSection setPage={setPage} />}
        {page === 'career' && <CareerSection setPage={setPage} />}
        {page === 'timetable' && <TimetableSection setPage={setPage} />}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-100 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="text-center text-sm text-neutral-600">
            <a 
              href="https://biela.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
            </a>
            <a 
              href="https://www.bits-pilani.ac.in/dubai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              BITS Pilani Dubai Campus
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
