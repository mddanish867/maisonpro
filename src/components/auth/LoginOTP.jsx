import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Mail, KeyRound } from "lucide-react";

const LoginOTP = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (step === 2 && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [step]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending OTP
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 2000);
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input if current field is filled
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Focus previous input on backspace if current field is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      alert("Login successful");
    }, 2000);
  };

  const handleResendOTP = () => {
    setLoading(true);
    // Simulate resending OTP
    setTimeout(() => {
      setLoading(false);
      alert("New OTP sent");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center">
      <div className="w-full max-w-md px-4 py-12 mt-20 border border-white/10 backdrop-blur-md">
        <div className="text-center mb-8">
          {step === 1 ? (
            <Mail className="w-12 h-12 mx-auto mb-4 text-violet-400" />
          ) : (
            <KeyRound className="w-12 h-12 mx-auto mb-4 text-violet-400" />
          )}
          <h2 className="text-3xl font-thin tracking-wide">
            Login with OTP
            <span className="block mt-2 text-violet-400 text-lg font-light">
              {step === 1 ? "Enter your email" : "Enter verification code"}
            </span>
          </h2>
        </div>

        {step === 1 ? (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
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
              {loading ? "SENDING OTP..." : "SEND OTP"}
              <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </form>
        ) : (
          <form onSubmit={handleOTPSubmit} className="space-y-8">
            <div className="text-center text-sm text-gray-400 mb-6">
              We've sent a verification code to {email}
            </div>

            <div className="flex justify-between gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center bg-transparent border border-white/10 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 text-lg font-light outline-none transition-all"
                />
              ))}
            </div>

            <button
              type="submit"
              className="group w-full relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300"
              disabled={loading || otp.join("").length !== 6}
            >
              {loading ? "VERIFYING..." : "VERIFY & LOGIN"}
              <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={loading}
                className="text-sm text-violet-400 hover:underline transition-colors duration-300"
              >
                Resend OTP
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginOTP;
