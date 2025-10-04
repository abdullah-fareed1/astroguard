import React from 'react';
import { Home, RefreshCw, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = '/dashboard';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-3/4 left-3/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full top-1/2 left-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-1 h-1 bg-purple-300 rounded-full top-1/3 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 right-1/3 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-1/2 left-1/4 animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full bottom-1/3 left-1/2 animate-pulse" style={{animationDelay: '0.8s'}}></div>
      </div>

      {/* Floating astronaut helmet animation */}
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <svg className="w-64 h-64 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="12" cy="10" r="8" className="text-purple-500" />
          <path d="M12 2a8 8 0 0 1 8 8v2a8 8 0 0 1-16 0v-2a8 8 0 0 1 8-8z" className="text-blue-500" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s'}}>
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full -ml-1.5"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full -ml-1.5"></div>
            </div>
            
            {/* Main circle */}
            <div className="w-32 h-32 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-full border-2 border-purple-500/30 flex items-center justify-center">
              <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lost in Space
          </h2>
          <p className="text-slate-400 text-lg mb-2">
            Houston, we have a problem...
          </p>
          <p className="text-slate-500">
            The page you're looking for has drifted beyond our orbital range.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 mb-8 max-w-md mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-white font-semibold mb-1">Navigation Error</h3>
              <p className="text-slate-400 text-sm">
                This sector doesn't exist in our database. Please check your coordinates and try again.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoHome}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/30"
          >
            <Home className="w-5 h-5" />
            <span>Return to Base</span>
          </button>

          <button
            onClick={handleGoBack}
            className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-xl text-slate-300 font-semibold rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 transform transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>

          <button
            onClick={handleRefresh}
            className="flex items-center gap-3 px-6 py-4 bg-slate-800/50 backdrop-blur-xl text-slate-300 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 transform transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Help Text */}
        <div className="mt-12 text-slate-500 text-sm">
          <p>Need assistance? Contact mission control at</p>
          <a href="mailto:support@astroguard.space" className="text-purple-400 hover:text-purple-300 transition-colors">
            support@astroguard.space
          </a>
        </div>
      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-purple-900/20 to-transparent blur-3xl"></div>
    </div>
  );
};

export default NotFound;