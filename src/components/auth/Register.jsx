// import { useState } from 'react'

// export default function Register() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   })

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle registration logic here
//     console.log('Registration data:', formData)
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               onChange={handleChange}
//               value={formData.username}
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               onChange={handleChange}
//               value={formData.email}
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               onChange={handleChange}
//               value={formData.password}
//             />
//           </div>
//           <div>
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               onChange={handleChange}
//               value={formData.confirmPassword}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import { ArrowLeft, Lock, Mail, Eye, EyeOff, User, Phone } from 'lucide-react';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Details, 2: Verification
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStep(2);
    setIsLoading(false);
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Handle verification success
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white flex flex-col">
      {/* Header with Back Button */}
      <div className="p-6">
        <a href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-3xl font-thin tracking-wider">
              NOVA<span className="text-emerald-400">.</span>
            </span>
          </div>

          {/* Registration Form Container */}
          <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg">
            <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
              {step === 1 ? 'Create Account' : 'Verify Email'}
            </h2>

            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Input */}
                <div className="space-y-2">
                  <label className="block text-sm tracking-wider text-gray-400">
                    FULL NAME
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-sm tracking-wider text-gray-400">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="block text-sm tracking-wider text-gray-400">
                    PHONE NUMBER
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="block text-sm tracking-wider text-gray-400">
                    PASSWORD
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-12 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-400 text-black py-3 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
                </button>

                {/* Sign In Link */}
                <div className="text-center text-sm text-gray-400">
                  Already have an account?{' '}
                  <a href="/login" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                   Login
                  </a>
                </div>
              </form>
            ) : (
              <form onSubmit={handleVerificationSubmit} className="space-y-6">
                <div className="text-center text-gray-400 mb-6">
                  We've sent a verification code to your email address. Please enter it below.
                </div>

                {/* OTP Input Fields */}
                <div className="flex justify-center gap-2">
                  {[...Array(6)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 text-center bg-black/30 border border-gray-800 text-white focus:border-emerald-400 focus:ring-0 focus:outline-none"
                    />
                  ))}
                </div>

                {/* Verify Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-400 text-black py-3 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'VERIFYING...' : 'VERIFY EMAIL'}
                </button>

                {/* Resend Code Link */}
                <div className="text-center text-sm text-gray-400">
                  Didn't receive the code?{' '}
                  <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    Resend
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;