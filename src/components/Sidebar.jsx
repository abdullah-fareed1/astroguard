import React, { useState } from 'react';
import { Brain, LayoutDashboard, User, LogOut, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ currentPage = 'dashboard' }) => {

  const navigate = useNavigate
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    navigate('/login');

  };

  const MenuItem = ({ item, isActive }) => (
    <a
      href={item.path}
      className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all group ${
        isActive
          ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white'
          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
      }`}
    >
      <item.icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : 'group-hover:text-purple-400'}`} />
      <span className="font-medium">{item.label}</span>
      {isActive && (
        <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
      )}
    </a>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-slate-800/90 backdrop-blur-xl rounded-xl border border-slate-700/50 text-white hover:bg-slate-700/90 transition-all"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-80`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12 px-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AstroGuard
              </h1>
              <p className="text-xs text-slate-400">Pro Edition</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isActive={currentPage === item.id}
              />
            ))}
          </nav>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-6 py-4 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all border border-transparent hover:border-red-500/30 group"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Logout</span>
          </button>

          {/* Version Info */}
          <div className="mt-4 px-6 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <p className="text-xs text-slate-400">Version 0.1</p>
            <p className="text-xs text-slate-500">Team Stardust Collective</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;