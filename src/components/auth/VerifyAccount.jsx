import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

const VerifyAccount = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus the first input on component mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate verification
    setTimeout(() => {
      setLoading(false);
      alert("Verification successful");
    }, 2000);
  };

  const handleResend = () => {
    setLoading(true);
    // Simulate resending code
    setTimeout(() => {
      setLoading(false);
      alert("New verification code sent");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center">
      <div className="w-full max-w-md px-4 py-12 mt-20 mb-12 border border-white/10 backdrop-blur-md">
        <div className="text-center mb-8">
          <Mail className="w-12 h-12 mx-auto mb-4 text-violet-400" />
          <h2 className="text-3xl font-thin tracking-wide">
            Email Verification
            <span className="block mt-2 text-violet-400 text-lg font-light">
              Enter the code we sent you
            </span>
          </h2>
        </div>

        <div className="text-center text-sm text-gray-400 mb-8">
          We've sent a verification code to your email address. Please enter it
          below.
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
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
            className="group w-full relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300"
            disabled={loading || otp.join("").length !== 6}
          >
            {loading ? "VERIFYING..." : "VERIFY EMAIL"}
            <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 font-extralight">
            Didn't receive the code?{" "}
            <button
              onClick={handleResend}
              disabled={loading}
              className="text-violet-400 hover:underline transition-colors duration-300"
            >
              Resend code
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
