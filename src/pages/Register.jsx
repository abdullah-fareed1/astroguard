import React, { useState } from 'react';
import { Upload, User, X } from 'lucide-react';
import { account, ID, storage } from "../lib/appwrite"; // adjust path if needed
import { meta } from '@eslint/js';
import { uploadImage } from '../utils/imageupload';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState(""); // for name
  // const [profileImg, setProfileImg] = useState(""); // for profile_img
  const [message, setMessage] = useState("");



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    // if (password !== confirmPassword) {
    //   setMessage("Passwords do not match!");
    //   return;
    // }

    // try {
    //   // 1. Create Appwrite user
    //   const user = await account.create(
    //     ID.unique(),
    //     email,
    //     password,
    //     username
    //   );

    //   let uploadedUrl = null;

    //   // 2. Upload to Cloudinary if image is selected
    //   if (!profileImage) {
    //     console.log("No image file selected.");
    //     return;
    //   }

    //   console.log("Image selected" + profileImage);

    //   try {
    //     const uploadedUrl = await uploadImage(profileImage);
    //     console.log("Uploaded Image URL received:", uploadedUrl);

    //   } catch (error) {
    //     console.error("Error in uploadingImage :" + error)
    //   }

    //   // 3. Save Cloudinary URL to Appwrite user prefs
    //   await account.updatePrefs({
    //     profile_img: uploadedUrl,
    //   });


    //   const getUser = await account.get();
    //   console.log("getting user from appwrite :" + getUser);
    //   console.log(getUser.prefs);

    //   setMessage(`✅ User created: ${user.name}`);
    // } catch (err) {
    //   setMessage(`❌ Error: ${err.message}`);
    // }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-3/4 left-3/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full top-1/2 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-purple-300 rounded-full top-1/3 right-1/4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 right-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-8 transform transition-all duration-300 hover:shadow-purple-500/20">
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
            Join the AstroGuard network
          </p>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Profile Image Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Profile Picture
              </label>
              <div className="flex items-center gap-4">
                {/* Image Preview */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-900/50 border-2 border-slate-600 flex items-center justify-center">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Profile preview" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-8 h-8 text-slate-500" />
                    )}
                  </div>
                  {imagePreview && (
                    <button
                      onClick={removeImage}
                      className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  )}
                </div>

                {/* Upload Button */}
                <label className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-800/50 hover:border-purple-500/50 transition-all duration-200">
                    <Upload className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {imagePreview ? 'Change Photo' : 'Upload Photo'}
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                JPG, PNG or GIF (Max. 5MB)
              </p>
            </div>
            {message && <p className='text-sm text-fuchsia-200 text-center'>{message}</p>}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">
                username
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
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
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <button
              onClick={()=>{handleSubmit,  navigate('/Dashboard')}}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/30"
            >
              Register
            </button>
          </div>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <a
              href="/login"
              className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200"
            >
              Already have an account?{' '}
              <span className="font-semibold text-purple-400 hover:text-purple-300">
                Sign In here
              </span>
            </a>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-slate-500 text-xs mt-6">
          AstroGuard Health Care System • Secure Authentication
        </p>
      </div>
    </div>
  );
};

export default Register;