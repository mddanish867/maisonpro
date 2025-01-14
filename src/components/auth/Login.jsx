import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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
    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      alert("Login successful");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center">
      <div className="w-full max-w-md px-8 py-12 border border-white/10 backdrop-blur-md rounded-lg">
        <h2 className="text-3xl font-thin tracking-wide mb-8 text-center">
          Welcome Back
          <span className="block mt-2 text-violet-400 text-lg font-light">
            Log in to your account
          </span>
        </h2>

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
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
              required
            />
          </div>

          <button className="group w-full relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300">
                LOGIN
                <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
        </form>

        <div className="mt-8 text-center">
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
    </div>
  );
};

export default Login;
