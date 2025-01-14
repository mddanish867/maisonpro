import React from 'react';
import { Shield, Zap, Users, Globe, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EnterprisePage() {
  const navigate = useNavigate();
  const handleContactSales = () => {
    navigate("/request-demo")
  }
  const enterpriseFeatures = [
    {
      title: "Advanced Security",
      description: "Enterprise-grade security measures to protect your sensitive data.",
      icon: <Shield className="w-6 h-6 text-violet-400" />
    },
    {
      title: "Scalable Performance",
      description: "Seamlessly scale NOVA to meet your growing enterprise needs.",
      icon: <Zap className="w-6 h-6 text-violet-400" />
    },
    {
      title: "Dedicated Support",
      description: "24/7 priority support from our expert team.",
      icon: <Users className="w-6 h-6 text-violet-400" />
    },
    {
      title: "Global Deployment",
      description: "Deploy NOVA across your global offices with ease.",
      icon: <Globe className="w-6 h-6 text-violet-400" />
    }
  ];

  return (
    <div className='bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white'>
      <div className="pt-32 pb-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-thin tracking-wider mb-4">
              ENTERPRISE EXCELLENCE
            </h2>
            <div className="w-44 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto" />

            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mt-6 mb-12 max-w-3xl mx-auto">
              Empower your enterprise with NOVA's comprehensive suite of tools designed for large-scale operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="p-8 border border-gray-800 hover:border-emerald-400/50 transition-all duration-500 group">
                <div className="flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-light tracking-wider mb-4 text-center group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-thin tracking-wider mb-8">
            Elevate Your Enterprise
          </h2>
          <button 
          onClick={handleContactSales}
          className="px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-colors duration-300 flex items-center justify-center mx-auto group">
            CONTACT SALES
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}