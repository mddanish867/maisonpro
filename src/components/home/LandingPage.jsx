import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, BarChart2, Calendar, Users, 
  ArrowRight, Menu, X, Star, 
  Shield, Globe, Zap, Clock,
  ChevronRight, Award, ArrowUpRight
} from 'lucide-react';

const NovaPro = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      title: "Executive Dashboard",
      description: "Sophisticated analytics and insights for strategic decision-making",
      icon: <BarChart2 className="w-6 h-6 text-violet-400" />
    },
    {
      title: "Global Collaboration",
      description: "Seamless coordination across teams and time zones",
      icon: <Globe className="w-6 h-6 text-violet-400" />
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered workflow optimization and resource allocation",
      icon: <Zap className="w-6 h-6 text-violet-400" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance measures",
      icon: <Shield className="w-6 h-6 text-violet-400" />
    }
  ];

  const metrics = [
    { label: "Enterprise Clients", value: "500+" },
    { label: "Tasks Completed", value: "1M+" },
    { label: "Team Members", value: "50k+" },
    { label: "Countries", value: "120+" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-violet-400 selection:text-black">
      {/* Elegant Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-semibold tracking-widest">
                SOORAPRO<span className="text-violet-400">°</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              {['FEATURES', 'SOLUTIONS', 'ENTERPRISE'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-extralight tracking-widest hover:text-violet-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <button className="relative px-8 py-3 overflow-hidden group bg-transparent">
                <span className="relative z-10 text-sm tracking-widest font-extralight transition-colors duration-300 group-hover:text-black">
                  GET ACCESS
                </span>
                <span className="absolute inset-0 bg-violet-400 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5">
            <div className="px-6 py-8 space-y-6">
              {['FEATURES', 'SOLUTIONS', 'ENTERPRISE'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-sm tracking-widest font-extralight hover:text-violet-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div 
        className="relative min-h-screen pt-48 pb-24 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-8 px-4 py-2 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="text-sm font-extralight tracking-widest">
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
              <button className="group relative px-12 py-4 bg-violet-400 text-black text-sm tracking-wider hover:bg-violet-300 transition-all duration-300">
                REQUEST DEMO
                <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
              <button className="px-12 py-4 border border-white/10 text-sm tracking-wider hover:border-violet-400 transition-colors duration-300 backdrop-blur-sm">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-32 relative" id="features">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-thin tracking-wider mb-4">
              REFINED CAPABILITIES
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`p-8 border border-white/5 backdrop-blur-sm transition-all duration-500 relative ${
                  activeFeature === index ? 'bg-white/5' : 'hover:bg-white/5'
                }`}>
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
            <button className="group relative px-12 py-4 bg-violet-400 text-black text-sm tracking-wider hover:bg-violet-300 transition-all duration-300 inline-flex items-center">
              BEGIN YOUR JOURNEY
              <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-extralight tracking-widest mb-6">
              NOVA<span className="text-violet-400">°</span>
            </div>
            <div className="text-sm text-gray-400 font-extralight">
              © {new Date().getFullYear()} NOVA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NovaPro;