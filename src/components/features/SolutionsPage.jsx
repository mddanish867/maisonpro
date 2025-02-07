import React, { useState } from "react";
import { Code, Terminal, Server, Database, Laptop, Globe, ChevronRight } from "lucide-react";

export default function SolutionsPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const solutions = [
    {
      title: "Startups & Small Teams",
      description:
        "Accelerate development with automated documentation and testing for rapid deployment cycles.",
      icon: <Laptop className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Enterprise Development",
      description:
        "Scale documentation and testing across large codebases while maintaining consistency and quality.",
      icon: <Server className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Legacy Code Maintenance",
      description:
        "Document and modernize existing codebases with automated analysis and improvement suggestions.",
      icon: <Database className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Open Source Projects",
      description:
        "Generate comprehensive documentation and test suites for community-driven development.",
      icon: <Globe className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "API Development",
      description:
        "Create detailed API documentation and integration tests automatically from your codebase.",
      icon: <Terminal className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "DevOps Integration",
      description:
        "Seamlessly integrate documentation and testing into your CI/CD pipeline for continuous quality.",
      icon: <Code className="w-6 h-6 text-violet-400" />,
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-violet-400 selection:text-black">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-thin tracking-wider mb-4">
              TAILORED FOR YOUR WORKFLOW
            </h2>
            <div className="w-44 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto" />
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mt-6 mb-12 max-w-3xl mx-auto">
              From startups to enterprises, discover how our AI-powered tools adapt to your 
              development needs and enhance your coding workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((feature, index) => (
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
            Ready to Transform Your Development Process?
          </h2>
          <button className="px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-colors duration-300 flex items-center justify-center mx-auto group">
            GET STARTED
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}