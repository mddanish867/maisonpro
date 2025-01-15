import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  Lock,
  Bell,
  Shield,
  User,
  Eye,
  EyeOff,
} from "lucide-react";

const AccountSettings = () => {
  const [settings, setSettings] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    password: "",
    notifications: true,
    twoFactor: false,
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setSettings({ ...settings, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate saving settings
    setTimeout(() => {
      setLoading(false);
      alert("Settings updated successfully");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center">
      <div className="w-full max-w-md px-4 py-12 mt-20 mb-12 border border-white/10 backdrop-blur-md">
        <h2 className="text-3xl font-thin tracking-wide mb-8 text-center">
          Account Settings
          <span className="block mt-2 text-violet-400 text-lg font-light">
            Manage your account preferences
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-sm text-gray-400 mb-2">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={settings.fullName}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
              />
              <User className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-400 mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-400 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={settings.password}
                onChange={handleInputChange}
                placeholder="Enter new password"
                className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-violet-400" />
                <div>
                  <p className="text-sm font-light">Email Notifications</p>
                  <p className="text-xs text-gray-400">
                    Receive updates and alerts
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={settings.notifications}
                  onChange={handleInputChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:ring-1 peer-focus:ring-violet-400 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-400"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-violet-400" />
                <div>
                  <p className="text-sm font-light">Two-Factor Auth</p>
                  <p className="text-xs text-gray-400">
                    Enhanced account security
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="twoFactor"
                  checked={settings.twoFactor}
                  onChange={handleInputChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:ring-1 peer-focus:ring-violet-400 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-400"></div>
              </label>
            </div>
          </div>

          <button
            className="group w-full relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300 mt-8"
            disabled={loading}
          >
            {loading ? "SAVING CHANGES..." : "SAVE CHANGES"}
            <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
