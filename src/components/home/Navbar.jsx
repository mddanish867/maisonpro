import React, { useState, useEffect } from "react";
import { 
   Menu, X, 
  } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
      
      const navigate = useNavigate();

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

      const handleGetAccess = () => {
        navigate("/login")
      }
  return (
    <>
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-semibold tracking-widest bg-gradient-to-r from-purple-400 to-yellow-300 bg-clip-text text-transparent">
                SOORAPRO<span className="text-violet-400">°</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              {['FEATURES', 'SOLUTIONS', 'ENTERPRISE'].map((item) => (
                <a 
                  key={item}
                  href={`${item.toLowerCase()}`} 
                  className="text-sm font-extralight tracking-widest hover:text-violet-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-yellow-300 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <button  onClick={handleGetAccess} className="relative px-8 py-3 overflow-hidden group bg-transparent">
                <span className="relative z-10 text-sm tracking-widest font-extralight transition-colors duration-300 group-hover:text-black">
                  GET ACCESS
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
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
    </>
  )
}

export default Navbar