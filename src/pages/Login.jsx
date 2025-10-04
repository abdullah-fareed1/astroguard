import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Login submitted:', formData);
    // Add your login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-3/4 left-3/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full top-1/2 left-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-1 h-1 bg-purple-300 rounded-full top-1/3 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 right-1/3 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-8 transform transition-all duration-300 hover:shadow-purple-500/20">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sign In
          </h2>
          <p className="text-center text-slate-400 mb-8 text-sm">
            Access your space health dashboard
          </p>

          {/* Form Fields */}
          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <button
              // onClick={handleSubmit}
              onClick={navigate("/dashboard")}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/30"
            >
              Sign In
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <a
              href="/register"
              className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200"
            >
              Don't have an account?{' '}
              <span className="font-semibold text-purple-400 hover:text-purple-300">
                Register here
              </span>
            </a>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-slate-500 text-xs mt-6">
          Space Health Care System • Secure Authentication
        </p>
      </div>
    </div>
  );
};

export default Login;