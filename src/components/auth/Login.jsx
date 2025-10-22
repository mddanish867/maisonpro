import React, { useState } from "react";
import { ArrowUpRight, Eye, EyeOff, Github, Gitlab, GitBranch, GitBranchPlus } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/create-org";
    }, 1000);
  };

  const handleOAuthLogin = (provider) => {
    alert(`Login with ${provider}`);
  };

  const oauthProviders = [
    { name: "Azure", color: "from-blue-500 to-blue-600", icon: <GitBranchPlus className="w-5 h-5" /> },
    { name: "GitHub", color: "from-gray-700 to-gray-800", icon: <Github className="w-5 h-5" /> },
    { name: "Bitbucket", color: "from-blue-600 to-blue-700", icon: <GitBranch className="w-5 h-5"/> },
    { name: "GitLab", color: "from-orange-500 to-orange-600", icon: <Gitlab className="w-5 h-5"/> },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center p-4">
      <div className="w-full max-w-5xl px-6 py-12 border border-white/10 backdrop-blur-md rounded-lg">
        <h2 className="text-3xl font-thin tracking-wide mb-8 text-center">
          Welcome Back
          <span className="block mt-2 text-violet-400 text-lg font-light">
            Log in to your account
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Email Login */}
          <div className="flex-1">
            <h3 className="text-xl font-light mb-6 text-center lg:text-left">Login with Email</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                  required
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
              <div className="text-end">
                <p className="text-sm text-gray-400 font-extralight">
                  <a
                    href="/forgot-password"
                    className="text-violet-400 hover:underline transition-colors duration-300"
                  >
                    Forgot Password?
                  </a>
                </p>
              </div>
              <button className="group w-full relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300">
                LOGIN
                <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 text-center lg:text-left">
              <p className="text-sm text-gray-400 font-extralight">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-violet-400 hover:underline transition-colors duration-300"
                >
                  Register now
                </a>
              </p>
            </div>
          </div>

          {/* Mobile Divider */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-sm text-gray-400 font-extralight">or</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Desktop Divider */}
          <div className="hidden lg:block w-px bg-white/10"></div>

          {/* Right Side - OAuth Providers */}
          <div className="flex-1">
            <h3 className="text-xl font-light mb-6 text-center lg:text-left">Quick Login</h3>
            <div className="space-y-4">
              {oauthProviders.map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => handleOAuthLogin(provider.name)}
                  className={`group w-full px-6 py-4 bg-gradient-to-r ${provider.color} border border-white/10 text-white text-sm tracking-wider transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3`}
                >
                  {typeof provider.icon === "string" ? (
                    <span className="text-lg font-bold">{provider.icon}</span>
                  ) : (
                    provider.icon
                  )}
                  <span>Continue with {provider.name}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;