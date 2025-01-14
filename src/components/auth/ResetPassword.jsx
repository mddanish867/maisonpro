import React, { useState } from "react";
import { ArrowLeft, ArrowUpRight, Lock, Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate password reset
    setTimeout(() => {
      setLoading(false);
      alert("Password reset successful");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <div className="p-6">
        <a href="/login" className="inline-flex items-center text-sm text-gray-400 hover:text-violet-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </a>
      </div>

      <div className="flex-1 flex justify-center items-center px-4">
        <div className="w-full max-w-md px-8 py-12 border border-white/10 backdrop-blur-md">
          <div className="text-center mb-8">
            <Lock className="w-12 h-12 mx-auto mb-4 text-violet-400" />
            <h2 className="text-3xl font-thin tracking-wide">
              Reset Password
              <span className="block mt-2 text-violet-400 text-lg font-light">
                Create a new password
              </span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm text-gray-400 mb-2">New Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  required
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[42px] transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="relative">
                <label className="block text-sm text-gray-400 mb-2">Confirm New Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  required
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-[42px] transform -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="group w-full relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300 mt-8"
              disabled={loading}
            >
              {loading ? "RESETTING PASSWORD..." : "RESET PASSWORD"}
              <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 font-extralight">
              Remember your password?{" "}
              <a
                href="/login"
                className="text-violet-400 hover:underline transition-colors duration-300"
              >
                Back to login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;