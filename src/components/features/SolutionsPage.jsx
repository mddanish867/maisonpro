import React from 'react';
import { Briefcase, Users, Building, ChevronRight } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Corporate Management",
      description: "Streamline operations and enhance decision-making across your organization.",
      icon: <Briefcase className="w-6 h-6 text-violet-400" />
    },
    {
      title: "Team Collaboration",
      description: "Foster seamless communication and productivity among diverse teams.",
      icon: <Users className="w-6 h-6 text-violet-400" />
    },
    {
      title: "Enterprise Integration",
      description: "Seamlessly integrate NOVA with your existing enterprise systems.",
      icon: <Building className="w-6 h-6 text-violet-400" />
    }
  ];

  return (
    <div className='bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white'>
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-thin tracking-wider mb-4">
              TAILOREDF SOLUTIONS
            </h2>
            <div className="w-28 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto" />
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mt-6 mb-12 max-w-3xl mx-auto">
              Discover how NOVA adapts to your unique business needs, providing targeted solutions for every challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="p-8 border border-gray-800 hover:border-emerald-400/50 transition-all duration-500 group">
                <div className="flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-light tracking-wider mb-4 text-center group-hover:text-emerald-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-thin tracking-wider mb-8">
            Find Your Perfect Solution
          </h2>
          <button className="px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider  transition-colors duration-300 flex items-center justify-center mx-auto group">
            EXPLORE SOLUTIONS
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}