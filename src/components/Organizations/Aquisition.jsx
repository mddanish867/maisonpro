import React from "react";
import { ArrowUpRight } from "lucide-react";

const Aquisition = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center p-4">
      <div className="w-full max-w-md px-8 py-10 border border-white/10 backdrop-blur-md rounded-lg">
        {/* Azure DevOps Logo and Email */}
        <div className="flex items-center gap-3 mb-8">
          <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22 18.055v2.458l-11 .587v-4.569l11-2.458V18.055zm0-12v3.818l-11 2.458V7.505l11-1.45zm-20.5 3.257L9 8.505V13.3L1.5 11.812v-2.5zM9 19.55l-7.5-1.5v-2.5L9 17.505V19.55zm11.5-18.5h-19C.673 1.05 0 1.722 0 2.55v3.818l9 1.188V6.5l11-1.45V2.55c0-.828-.673-1.5-1.5-1.5z"
            />
          </svg>
          <span className="text-xl font-thin">SOORAPRO</span>
        </div>

        {/* Email and Switch Directory */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-400">
            DanishFaiyaz2003@gmail.com
          </span>
          <a href="#" className="text-violet-400 hover:underline text-sm">
            Switch directory
          </a>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl font-thin mb-8">Get started with SooraPro</h1>

        {/* Terms Text */}
        <p className="text-sm text-gray-400 mb-8">
          Choosing <span className="text-white">Continue</span> means that you
          agree to our{" "}
          <a href="#" className="text-violet-400 hover:underline">
            Terms of Service
          </a>
          ,{" "}
          <a href="#" className="text-violet-400 hover:underline">
            Privacy Statement
          </a>
          , and{" "}
          <a href="#" className="text-violet-400 hover:underline">
            Code of Conduct
          </a>
          .
        </p>

        {/* Checkbox Section */}
        <div className="mb-8">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-white/10 bg-transparent checked:bg-violet-400 checked:border-violet-400 focus:ring-violet-400"
            />
            <span className="text-sm text-gray-400">
              I would like information, tips, and offers about SooraPro and
              other SooraPro products and services.{" "}
              <a href="#" className="text-violet-400 hover:underline">
                Privacy Statement
              </a>
            </span>
          </label>
        </div>

        {/* Continue Button */}
        <button className="group w-full relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm font-medium tracking-wider transition-all duration-300 hover:opacity-90">
          CONTINUE
          <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default Aquisition;
