import React from "react";
import { 
  Book, 
  Video, 
  FileText, 
  ChevronRight, 
  Code, 
  TestTube, 
  Bug, 
  FileCode,
  MessageSquare 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LearnMorePage() {
  const navigate = useNavigate();

  const handleContactSupport = () => {
    navigate("/request-demo");
  };

  const resources = [
    {
      title: "Documentation Generator",
      description: "AI-powered technical documentation generation from your codebase with intelligent context understanding",
      icon: <FileCode className="w-6 h-6 text-violet-400" />,
      link: "#",
    },
    {
      title: "Test Case Generator",
      description: "Automated generation of unit and integration tests with comprehensive coverage analysis",
      icon: <TestTube className="w-6 h-6 text-violet-400" />,
      link: "#",
    },
    {
      title: "Code Analysis",
      description: "Advanced code smell detection and optimization suggestions for cleaner, more efficient code",
      icon: <Code className="w-6 h-6 text-violet-400" />,
      link: "#",
    },
    {
      title: "Bug Detection",
      description: "Intelligent bug detection and security vulnerability scanning with detailed reports",
      icon: <Bug className="w-6 h-6 text-violet-400" />,
      link: "#",
    },
    {
      title: "Code Comments",
      description: "Smart comment generation for better code readability and maintenance",
      icon: <MessageSquare className="w-6 h-6 text-violet-400" />,
      link: "#",
    },
    {
      title: "Best Practices",
      description: "Implementation guides and suggestions following industry standards and best practices",
      icon: <FileText className="w-6 h-6 text-violet-400" />,
      link: "#",
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-violet-400 selection:text-black">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-8">
              Enhance Your
              <span className="block mt-2 font-light text-violet-400">
                Development Workflow
              </span>
            </h1>
            <div className="w-44 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto" />
            
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mt-6 mb-12 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered tools designed to improve
              code quality, documentation, and testing efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="p-8 border border-gray-800 hover:border-violet-400/50 transition-all duration-500 group"
              >
                <div className="flex items-center justify-center mb-6">
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-light tracking-wider mb-4 text-center group-hover:text-violet-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed mb-6">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 text-center group"
                >
                  LEARN MORE
                  <ChevronRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-thin tracking-wider mb-8">
              Ready to Improve Your Code?
            </h2>
            <button
              onClick={handleContactSupport}
              className="px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center mx-auto group"
            >
              START FREE TRIAL
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}