import React, { useState, } from 'react';
import {    
  ChevronRight, Award, ArrowUpRight
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const NovaPro = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleRequestDemo = () => {
    navigate("/request-demo");
  };

  const handleLearnMore = () => {
    navigate("/learn-more");
  };

  const metrics = [
    { label: "Enterprise Clients", value: "500+" },
    { label: "Tasks Completed", value: "1M+" },
    { label: "Team Members", value: "50k+" },
    { label: "Countries", value: "120+" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-violet-400 selection:text-black">
      {/* Elegant Navigation */}
      

      {/* Hero Section */}
      <div 
        className="relative min-h-screen pt-44 pb-24 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-8 px-4 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="text-sm font-extralight tracking-widest bg-gradient-to-r from-purple-400 to-yellow-300 bg-clip-text text-transparent">
                VERSION 2.0 NOW AVAILABLE
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-8">
              Elevate Your
              <span className="block mt-2 font-light bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Project Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-extralight leading-relaxed mb-12">
              Experience unprecedented sophistication in project management.
              Designed for visionary leaders and exceptional teams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={handleRequestDemo} className="group relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300">
                REQUEST DEMO
                <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
              <button onClick={handleLearnMore} className="px-12 py-4 border border-white/10 text-sm tracking-wider hover:border-violet-400 transition-colors duration-300 backdrop-blur-sm">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      

      {/* Metrics Section */}
      <div className="py-32 bg-black/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-thin text-violet-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm tracking-wider text-gray-400 font-extralight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-12 h-12 text-violet-400 mx-auto mb-8" />
            <p className="text-2xl font-extralight italic leading-relaxed mb-8">
              "NOVA has revolutionized how we manage global projects. The level of sophistication
              and attention to detail is unmatched in the industry."
            </p>
            <div className="text-sm tracking-wider text-violet-400 mb-2 font-extralight">
              ALEXANDRA CHEN
            </div>
            <div className="text-sm tracking-wider text-gray-400 font-extralight">
              CHIEF TECHNOLOGY OFFICER, FORTUNE 500
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 bg-gradient-to-b from-black via-black to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-thin tracking-wider mb-8">
              EXPERIENCE EXCELLENCE
            </h2>
            <p className="text-gray-400 mb-12 leading-relaxed font-extralight">
              Join the elite circle of organizations transforming their project management capabilities.
            </p>
            <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider hover:bg-violet-300 transition-all duration-300 inline-flex items-center">
              BEGIN YOUR JOURNEY
              <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default NovaPro;