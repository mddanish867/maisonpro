import React, { useState } from "react";
import { BarChart2, Globe, Zap, Shield, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const navigate = useNavigate();
  const handleContactSales = () => {
    navigate("/request-demo");
  };

  const features = [
    {
      title: "Executive Dashboard",
      description:
        "Sophisticated analytics and insights for strategic decision-making",
      icon: <BarChart2 className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Global Collaboration",
      description: "Seamless coordination across teams and time zones",
      icon: <Globe className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered workflow optimization and resource allocation",
      icon: <Zap className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance measures",
      icon: <Shield className="w-6 h-6 text-violet-400" />,
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-violet-400 selection:text-black py-32 relative" id="features">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.1),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-3xl font-thin tracking-wider mb-4">
            REFINED CAPABILITIES
          </h2>
          <div className="w-44 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div
                className={`p-8 border border-white/5 backdrop-blur-sm transition-all duration-500 relative ${
                  activeFeature === index ? "bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-violet-400/0 to-violet-400/0 group-hover:to-violet-400/10 transition-all duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-extralight tracking-wider mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-thin tracking-wider mb-8">
            Explore new Features
          </h2>
          <button
            onClick={handleContactSales}
            className="px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-colors duration-300 flex items-center justify-center mx-auto group"
          >
            CONTACT SALES
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
