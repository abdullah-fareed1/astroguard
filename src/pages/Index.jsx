import React, { useState, useEffect } from 'react';
import { Brain, Zap, Shield, TrendingUp, ArrowRight, Menu, X, CheckCircle, Activity, Moon, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleLogin = () => {
   navigate('/dashboard');
  };

  const features = [
    {
      icon: Brain,
      title: 'Advanced EEG Analysis',
      description: 'Real-time brainwave monitoring with AI-powered pattern recognition for optimal cognitive performance.',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Moon,
      title: 'Sleep Optimization',
      description: 'Track and improve sleep quality with detailed REM and deep sleep analytics tailored for space missions.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Activity,
      title: 'Cognitive Insights',
      description: 'Predictive AI models that forecast mental states and recommend personalized countermeasures.',
      gradient: 'from-cyan-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Vital Monitoring',
      description: 'Comprehensive physiological tracking including heart rate variability, stress levels, and recovery metrics.',
      gradient: 'from-emerald-500 to-green-500'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '24/7', label: 'Real-time Monitoring' },
    { value: '< 50ms', label: 'Response Time' },
    { value: '256Hz', label: 'Sampling Rate' }
  ];

  const benefits = [
    'AI-powered cognitive state prediction',
    'Personalized countermeasures recommendations',
    'Advanced sleep cycle optimization',
    'Real-time alertness tracking',
    'Comprehensive health dashboard',
    'Mission-critical reliability'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  AstroGuard
                </h1>
                <p className="text-xs text-slate-400">Pro Edition</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <button 
                onClick={handleLogin}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Login
              </button>
              <button 
                onClick={handleGetStarted}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#features" className="block text-slate-300 hover:text-white transition-colors py-2">Features</a>
              <a href="#benefits" className="block text-slate-300 hover:text-white transition-colors py-2">Benefits</a>
              <a href="#about" className="block text-slate-300 hover:text-white transition-colors py-2">About</a>
              <button 
                onClick={handleLogin}
                className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
              >
                Login
              </button>
              <button 
                onClick={handleGetStarted}
                className="block w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold mt-2"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Next-Gen Astronaut Monitoring</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Monitor <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Cognitive Health</span> in Real-Time
            </h1>
            
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Advanced AI-powered platform for astronaut cognitive monitoring, sleep optimization, and mission-critical health insights. Experience the future of space medicine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl font-semibold text-lg transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Monitoring
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl font-semibold text-lg transition-all">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to monitor and optimize astronaut cognitive performance in space missions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AstroGuard</span>?
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Built specifically for the demanding environment of space missions, AstroGuard provides mission-critical insights when they matter most.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-purple-500/20">
                    <div className="flex items-center gap-4 mb-4">
                      <Shield className="w-8 h-8 text-purple-400" />
                      <div>
                        <div className="text-2xl font-bold">99.9%</div>
                        <div className="text-sm text-slate-400">Mission Uptime</div>
                      </div>
                    </div>
                    <p className="text-slate-300">Reliable monitoring when lives depend on it</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/20">
                    <div className="flex items-center gap-4 mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-400" />
                      <div>
                        <div className="text-2xl font-bold">AI-Powered</div>
                        <div className="text-sm text-slate-400">Predictive Analytics</div>
                      </div>
                    </div>
                    <p className="text-slate-300">Anticipate issues before they occur</p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl p-6 border border-cyan-500/20">
                    <div className="flex items-center gap-4 mb-4">
                      <Brain className="w-8 h-8 text-cyan-400" />
                      <div>
                        <div className="text-2xl font-bold">Real-Time</div>
                        <div className="text-sm text-slate-400">EEG Analysis</div>
                      </div>
                    </div>
                    <p className="text-slate-300">256Hz sampling with instant insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Space Medicine?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join the future of astronaut health monitoring with AstroGuard Pro Edition
            </p>
            <button 
              onClick={handleGetStarted}
              className="px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl font-semibold text-lg transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105 inline-flex items-center gap-2"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2025 AstroGuard Pro - Team Stardust Collective</p>
          <p className="text-sm">Next-Generation Cognitive Monitoring for Space Missions</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;