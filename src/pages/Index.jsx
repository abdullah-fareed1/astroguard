import React, { useState } from "react";
import { account, ID } from "../lib/appwrite"; // make sure this path is correct

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    astronautId: ""
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      // Create new Appwrite user
      await account.create(
        ID.unique(), // Unique user ID
        formData.email,
        formData.password,
        formData.fullName // This sets the user's name in Appwrite
      );

      // Automatically log them in after signup
      await account.createEmailPasswordSession(formData.email, formData.password);

      alert("Registration successful! 🎉 You are now logged in.");
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        astronautId: ""
      });
    } catch (err) {
      console.error(err);
      alert("Registration failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-3/4 left-3/4 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full top-1/2 left-1/2 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute w-1 h-1 bg-purple-300 rounded-full top-1/3 right-1/4 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 right-1/3 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-8">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-center text-slate-400 mb-8 text-sm">
            Join the space health network
          </p>

          {/* Form Fields */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
              />
            </div>

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
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
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
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="astronautId" className="block text-sm font-medium text-slate-300 mb-2">
                Astronaut ID
              </label>
              <input
                id="astronautId"
                name="astronautId"
                type="text"
                value={formData.astronautId}
                onChange={handleInputChange}
                placeholder="Enter your astronaut ID"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/30"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <a
              href="/login"
              className="text-sm text-slate-400 hover:text-purple-400 transition-colors"
            >
              Already have an account?{" "}
              <span className="font-semibold text-purple-400 hover:text-purple-300">
                Sign In here
              </span>
            </a>
          </div>
        </div>

        <p className="text-center text-slate-500 text-xs mt-6">
          Space Health Care System • Secure Authentication
        </p>
      </div>
    </div>
  );
};

export default Register;
