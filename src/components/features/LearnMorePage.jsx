import React from 'react';
import { Book, Video, FileText, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LearnMorePage() {
  const navigate = useNavigate();
  const handleContactSupport = () => {
    navigate("/request-demo")
  }
  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      icon: <Book className="w-12 h-12 text-emerald-400" />,
      link: "#"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for NOVA features",
      icon: <Video className="w-12 h-12 text-emerald-400" />,
      link: "#"
    },
    {
      title: "Case Studies",
      description: "Real-world success stories from NOVA clients",
      icon: <FileText className="w-12 h-12 text-emerald-400" />,
      link: "#"
    }
  ];

  return (
    <div className='bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white'>
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-8">
              Discover
              <span className="block mt-2 font-light text-emerald-400">NOVA</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Explore our comprehensive resources to master NOVA and unlock its full potential for your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {resources.map((resource, index) => (
              <div key={index} className="p-8 border border-gray-800 hover:border-emerald-400/50 transition-all duration-500 group">
                <div className="flex items-center justify-center mb-6">
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-light tracking-wider mb-4 text-center group-hover:text-emerald-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed mb-6">
                  {resource.description}
                </p>
                <a href={resource.link} className="block w-full px-6 py-3 bg-emerald-400 text-black text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 text-center group">
                  EXPLORE
                  <ChevronRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-thin tracking-wider mb-8">
              Need More Information?
            </h2>
            <button 
            onClick={handleContactSupport}
            className="px-12 py-4 bg-emerald-400 text-black text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center mx-auto group">
              CONTACT SUPPORT
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}