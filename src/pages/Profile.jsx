import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Calendar,
  Shield,
  Check,
  AlertCircle,
  Camera,
  Upload,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import { uploadImage } from "../utils/imageupload";

const Profile = () => {
  // Mock astronaut data - replace with actual data from backend
  const [astronautData] = useState({
    id: "AST-001",
    name: "Dr. Walter White",
    email: "walter.white@astroguard.com",
    profileImage: null,
    joinedDate: "2024-01-15", // Format: YYYY-MM-DD
  });

  const [formData, setFormData] = useState({
    name: astronautData.name,
    email: astronautData.email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [selectedImage, setSelectedImage] = useState(
    astronautData.profileImage
  );
  const [imageFile, setImageFile] = useState(null);
  const [isImageSaving, setIsImageSaving] = useState(false);
  const [imageSaved, setImageSaved] = useState(true); // disabled until new image is picked

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setSaveStatus({
          show: true,
          type: "error",
          message: "Please select a valid image file",
        });
        setTimeout(
          () => setSaveStatus({ show: false, type: "", message: "" }),
          4000
        );
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setSaveStatus({
          show: true,
          type: "error",
          message: "Image size must be less than 5MB",
        });
        setTimeout(
          () => setSaveStatus({ show: false, type: "", message: "" }),
          4000
        );
        return;
      }
      setImageFile(file);
      setImageSaved(false); // enable save image button
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageSelect = () => {
    document.getElementById("profile-image-input").click();
  };

  const handleSaveImage = async () => {
    if (!imageFile) {
      console.log("No image file selected.");
      return;
    }

    console.log("handleSaveImage called with imageFile:", imageFile);
    setIsImageSaving(true);

    try {
      const uploadedUrl = await uploadImage(imageFile);
      console.log("Uploaded Image URL received:", uploadedUrl);

      setSelectedImage(uploadedUrl);
      setImageFile(null);
      setImageSaved(true); // disable save button again
      setSaveStatus({
        show: true,
        type: "success",
        message: "Profile image updated successfully!",
      });
      setTimeout(
        () => setSaveStatus({ show: false, type: "", message: "" }),
        4000
      );
    } catch (err) {
      console.error("Error in handleSaveImage:", err);
      setSaveStatus({
        show: true,
        type: "error",
        message: "Failed to upload image",
      });
    } finally {
      setIsImageSaving(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (
      formData.newPassword ||
      formData.confirmPassword ||
      formData.currentPassword
    ) {
      if (!formData.currentPassword) {
        setSaveStatus({
          show: true,
          type: "error",
          message: "Current password is required to change password",
        });
        setTimeout(
          () => setSaveStatus({ show: false, type: "", message: "" }),
          4000
        );
        return;
      }
      if (formData.newPassword !== formData.confirmPassword) {
        setSaveStatus({
          show: true,
          type: "error",
          message: "New passwords do not match",
        });
        setTimeout(
          () => setSaveStatus({ show: false, type: "", message: "" }),
          4000
        );
        return;
      }
      if (formData.newPassword.length < 8) {
        setSaveStatus({
          show: true,
          type: "error",
          message: "New password must be at least 8 characters",
        });
        setTimeout(
          () => setSaveStatus({ show: false, type: "", message: "" }),
          4000
        );
        return;
      }
    }

    setIsSaving(true);
    setTimeout(() => {
      setSaveStatus({
        show: true,
        type: "success",
        message: "Profile updated successfully!",
      });
      setIsSaving(false);
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      setTimeout(
        () => setSaveStatus({ show: false, type: "", message: "" }),
        4000
      );
    }, 1000);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTimeSinceJoined = (dateString) => {
    const joined = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - joined);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 1) return `${diffDays} days`;
    if (diffMonths < 12) return `${diffMonths} months`;
    const years = Math.floor(diffMonths / 12);
    return `${years} ${years === 1 ? "year" : "years"}`;
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Sidebar currentPage="profile" />
      <div className="flex-1 lg:ml-80">
        <div className="p-6 text-white">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
            <p className="text-slate-400">
              Manage your personal information and account settings
            </p>
          </div>

          {saveStatus.show && (
            <div
              className={`mb-6 p-4 rounded-xl border flex items-center gap-3 ${
                saveStatus.type === "success"
                  ? "bg-green-500/10 border-green-500/30 text-green-400"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}
            >
              {saveStatus.type === "success" ? (
                <Check className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span>{saveStatus.message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Profile Overview Card */}
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <h2 className="text-xl font-bold mb-6">Profile Overview</h2>
              <div className="flex flex-col items-center mb-6">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center border-4 border-purple-400/30 shadow-lg mb-4">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt={astronautData.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-white" />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={triggerImageSelect}
                    className="absolute bottom-4 right-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all hover:scale-110 border-2 border-slate-900"
                  >
                    <Camera className="w-5 h-5 text-white" />
                  </button>
                  <input
                    id="profile-image-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-1">
                  {astronautData.name}
                </h3>
                <p className="text-slate-400 text-sm">Astronaut</p>
                <p className="text-xs text-slate-500 mt-2">
                  Click the camera icon to change photo
                </p>
                {/* Save Image Button */}
                <button
                  type="button"
                  onClick={handleSaveImage}
                  disabled={imageSaved || isImageSaving}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
                >
                  {isImageSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      Save Image
                    </>
                  )}
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-400 text-sm">Astronaut ID</span>
                  </div>
                  <p className="text-lg font-semibold text-cyan-400 pl-8">
                    {astronautData.id}
                  </p>
                  <p className="text-xs text-slate-500 pl-8 mt-1">
                    Non-editable
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-400 text-sm">Joined Since</span>
                  </div>
                  <p className="text-lg font-semibold text-white pl-8">
                    {formatDate(astronautData.joinedDate)}
                  </p>
                  <p className="text-xs text-slate-500 pl-8 mt-1">
                    {getTimeSinceJoined(astronautData.joinedDate)} ago
                  </p>
                </div>
              </div>
            </div>

            {/* Edit Profile Form */}
            <div className="xl:col-span-2 bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <h2 className="text-xl font-bold mb-6">Edit Profile</h2>
              <form onSubmit={handleSave} className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-300">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-700/50"></div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-300">
                    Security
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    Leave password fields empty if you don't want to change your
                    password
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="password"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl pl-12 pr-4 py-3 text-white"
                          placeholder="Enter current password"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl pl-12 pr-4 py-3 text-white"
                          placeholder="Enter new password"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1 ml-1">
                        Minimum 8 characters
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl pl-12 pr-4 py-3 text-white"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
                  >
                    {isSaving ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Check className="w-5 h-5" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
