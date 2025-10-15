import React from 'react';
import { Zap, User, Mail, Lock, UserPlus } from 'lucide-react';

function SignupPage({ name, setName, email, setEmail, password, setPassword, onSignup, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-success-50 to-primary-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-success-600 text-white">
              <Zap className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900">SyncUp</h1>
          </div>
          <p className="text-neutral-600">Join your campus community</p>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-neutral-900">Create Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                University Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a secure password"
                  className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-success-600 text-white py-3 rounded-lg hover:bg-success-700 transition-colors flex items-center justify-center gap-2 font-semibold"
            >
              Create Account
              <UserPlus className="w-4 h-4" />
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center">
            <div className="text-sm text-neutral-600">
              Already have an account?{" "}
              <button
                onClick={onLogin}
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                Sign in here
              </button>
            </div>
          </div>
        </div>

        {/* Terms Notice */}
        <div className="mt-6 text-center text-xs text-neutral-500">
          By creating an account, you agree to our Terms of Service
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
