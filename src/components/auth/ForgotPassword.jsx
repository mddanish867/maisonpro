import React, { useState } from "react";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending reset link
    setTimeout(() => {
      setLoading(false);
      navigate("/reset-password");
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
            <Mail className="w-12 h-12 mx-auto mb-4 text-violet-400" />
            <h2 className="text-3xl font-thin tracking-wide">
              Forgot Password
              <span className="block mt-2 text-violet-400 text-lg font-light">
                Reset your account password
              </span>
            </h2>
          </div>

          <div className="text-center text-sm text-gray-400 mb-8">
            Enter your email address and we'll send you a link
            to reset your password.
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            <button
              type="submit"
              className="group w-full relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300"
              disabled={loading}
            >
              {loading ? "SENDING LINK..." : "SEND RESET LINK"}
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

export default ForgotPassword;