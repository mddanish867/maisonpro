import React, { useState } from "react";
import { Shield, Database, Users, GitMerge, Scale, Server, Lock, Settings, ChevronRight  } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EnterprisePage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const navigate = useNavigate();
  const handleContactSales = () => {
    navigate("/request-demo");
  };
  const enterpriseFeatures = [
    {
      title: "Enterprise Security",
      description:
        "Advanced security protocols for protecting proprietary code and sensitive documentation.",
      icon: <Shield className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Large-Scale Analysis",
      description:
        "Process and analyze massive codebases with distributed computing capabilities.",
      icon: <Database className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Team Management",
      description: "Comprehensive team management with role-based access control and collaboration features.",
      icon: <Users className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "CI/CD Integration",
      description: "Seamless integration with enterprise CI/CD pipelines and development workflows.",
      icon: <GitMerge className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Unlimited Scaling",
      description: "Scale documentation and testing across multiple projects and repositories.",
      icon: <Scale className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Private Deployment",
      description: "On-premise deployment options with dedicated infrastructure support.",
      icon: <Server className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Compliance Controls",
      description: "Built-in compliance checks and audit trails for regulated industries.",
      icon: <Lock className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Custom Integration",
      description: "Custom API integrations with existing enterprise development tools.",
      icon: <Settings className="w-6 h-6 text-violet-400" />,
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-violet-400 selection:text-black">
      <div className="pt-32 pb-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-thin tracking-wider mb-4">
              ENTERPRISE SOLUTIONS
            </h2>
            <div className="w-44 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto" />

            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mt-6 mb-12 max-w-3xl mx-auto">
              Scale your development capabilities with our enterprise-grade documentation 
              and testing platform designed for large organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseFeatures.map((feature, index) => (
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
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-thin tracking-wider mb-8">
            Scale Your Development Process
          </h2>
          <button
            onClick={handleContactSales}
            className="px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-colors duration-300 flex items-center justify-center mx-auto group"
          >
            TALK TO SALES
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}