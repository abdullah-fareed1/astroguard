import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Brain, Moon, Heart, Lightbulb, Zap, TrendingUp, TrendingDown, ArrowRight, User } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('All Waves');
  const [neuralLinkActive, setNeuralLinkActive] = useState(true);

  // Astronaut data (this would come from your backend)
  const astronaut = {
    name: "Dr. Walter White",
    id: "AST-001",
    imageUrl: 'https://res.cloudinary.com/djewcevo2/image/upload/v1759328043/photo_4_2025-10-01_19-43-23_ivmqsp.jpg'
  };

  // Dummy data for EEG waves
  const eegData = Array.from({ length: 50 }, (_, i) => ({
    x: i,
    theta: Math.sin(i * 0.3) * 20 + 50,
    alpha: Math.sin(i * 0.25 + 1) * 15 + 40,
    beta: Math.sin(i * 0.35 + 2) * 18 + 45,
    gamma: Math.sin(i * 0.4 + 3) * 22 + 55,
  }));

  // Dummy data for AI predictions
  const predictionData = Array.from({ length: 20 }, (_, i) => ({
    x: i,
    value: 30 + i * 2 + Math.sin(i * 0.5) * 10,
  }));

  // Cognitive state pie chart data
  const cognitiveData = [
    { value: 77 },
    { value: 23 }
  ];

  const toggleNeuralLink = () => {
    setNeuralLinkActive(!neuralLinkActive);
    // Add your neural link toggle logic here
    console.log('Neural Link:', !neuralLinkActive ? 'Activated' : 'Deactivated');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Sidebar */}
      <Sidebar currentPage="dashboard" />

      {/* Main Content */}
      <div className="flex-1 lg:ml-80">
        <div className="p-6 text-white">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            {/* Astronaut Profile */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center border-2 border-purple-400/30">
                {astronaut.imageUrl ? (
                  <img src={astronaut.imageUrl} alt={astronaut.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-8 h-8 text-white" />
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{astronaut.name}</h2>
                <p className="text-slate-400 text-sm">ID: {astronaut.id}</p>
              </div>
            </div>

            {/* Status Indicators */}
            <div className="flex gap-4 items-center flex-wrap">
              <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-300 font-medium">Mission Day: 411</span>
              </div>
              
              {/* Neural Link Toggle */}
              <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-full">
                <span className={`font-medium ${neuralLinkActive ? 'text-green-300' : 'text-slate-400'}`}>
                  Neural Link
                </span>
                <button
                  onClick={toggleNeuralLink}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    neuralLinkActive ? 'bg-green-500' : 'bg-slate-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      neuralLinkActive ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
                {neuralLinkActive && (
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                )}
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Advanced EEG Analysis */}
            <div className="lg:col-span-2 bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold">Advanced EEG Analysis</h2>
              </div>

              <div className="flex gap-3 mb-4 flex-wrap">
                {['All Waves', 'Focus Mode', 'Sleep Analysis'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      activeTab === tab
                        ? 'bg-blue-500/30 text-blue-300 border border-blue-400/50'
                        : 'bg-slate-700/30 text-slate-400 hover:bg-slate-700/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                <div className="ml-auto text-right text-sm text-slate-400 hidden md:block">
                  <div>Sampling Rate: 256 Hz | Resolution:</div>
                  <div>24-bit</div>
                </div>
              </div>

              {/* EEG Wave Chart */}
              <div className="bg-slate-900/50 rounded-2xl p-4 h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={eegData}>
                    <Line type="monotone" dataKey="theta" stroke="#f59e0b" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="alpha" stroke="#3b82f6" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="beta" stroke="#10b981" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="gamma" stroke="#a855f7" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Wave Legend */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full" />
                  <span className="text-slate-300">Theta (4-8 Hz) - Deep Focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-slate-300">Alpha (8-12 Hz) - Relaxed Awareness</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <span className="text-slate-300">Beta (12-30 Hz) - Active Thinking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <span className="text-slate-300">Gamma (30-100 Hz) - Peak Performance</span>
                </div>
              </div>
            </div>

            {/* Cognitive State */}
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold">Cognitive State</h2>
              </div>

              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cognitiveData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                      >
                        <Cell fill="url(#gradient1)" />
                        <Cell fill="#1e293b" />
                      </Pie>
                      <defs>
                        <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                      </defs>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold">77%</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-6 text-center">
                <div className="text-blue-400 text-xl font-semibold mb-2">Good Condition</div>
                <div className="text-slate-400">Optimal cognitive function detected</div>
              </div>
            </div>

            {/* Sleep Analytics */}
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Moon className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold">Sleep Analytics</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-2xl p-5">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">8.2h</div>
                  <div className="text-slate-300 text-lg mb-1">Duration</div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+12min</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-5">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">94%</div>
                  <div className="text-slate-300 text-lg mb-1">Efficiency</div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+2%</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-5">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">22%</div>
                  <div className="text-slate-300 text-lg mb-1">REM Sleep</div>
                  <div className="flex items-center gap-2 text-amber-400 text-sm">
                    <ArrowRight className="w-4 h-4" />
                    <span>Stable</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-5">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">18%</div>
                  <div className="text-slate-300 text-lg mb-1">Deep Sleep</div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+3%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Physiological Monitoring */}
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold">Physiological Monitoring</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-2xl p-5">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">69</div>
                  <div className="text-slate-300 text-lg mb-1">Heart Rate (BPM)</div>
                  <div className="flex items-center gap-2 text-amber-400 text-sm">
                    <ArrowRight className="w-4 h-4" />
                    <span>Normal</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-5">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">55ms</div>
                  <div className="text-slate-300 text-lg mb-1">HRV Score</div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+7ms</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-5">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">Low</div>
                  <div className="text-slate-300 text-lg mb-1">Stress Level</div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <TrendingDown className="w-4 h-4" />
                    <span>Improving</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-5">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">87%</div>
                  <div className="text-slate-300 text-lg mb-1">Recovery</div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+5%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Predictions */}
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold">AI Predictions</h2>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-4 h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={predictionData}>
                    <defs>
                      <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="url(#gradient2)" 
                      strokeWidth={3} 
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-5">
                <div className="text-lg font-semibold mb-4">Next 4 Hours:</div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Peak alertness at 14:30</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Fatigue risk at 18:00</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Optimal rest window: 22:00</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Intelligent Countermeasures */}
            <div className="lg:col-span-2 bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold">Intelligent Countermeasures</h2>
              </div>

              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-xl font-semibold">Circadian Light Therapy</h3>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
                        Medium
                      </span>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Personalized blue light exposure (480nm) for 15 minutes to optimize circadian rhythm and boost alertness. Recommended at 09:00 mission time.
                    </p>
                    <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition-colors">
                      Schedule Session
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold">AI Insights</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/50 rounded-2xl p-5 border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold mb-2">Pattern Recognition</h3>
                  <p className="text-slate-300 text-sm">
                    Detected 23% improvement in theta wave coherence during meditation sessions
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/50 rounded-2xl p-5 border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold mb-2">Sleep Quality</h3>
                  <p className="text-slate-300 text-sm">
                    Your REM cycles have stabilized. Continue current sleep schedule for optimal recovery
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-900/30 to-slate-900/50 rounded-2xl p-5 border-l-4 border-emerald-500">
                  <h3 className="text-lg font-semibold mb-2">Performance Tip</h3>
                  <p className="text-slate-300 text-sm">
                    Beta wave activity peaks between 10:00-12:00. Schedule complex tasks during this window
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;