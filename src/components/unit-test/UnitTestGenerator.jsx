import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function UnitTestGenerator() {
  const [framework, setFramework] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [output, setOutput] = useState("");

  const handleGenerateTests = () => {
    if (!framework) return;
    
    setOutput(`Generated test cases for ${framework}:

describe('ExampleComponent', () => {
  it('should render correctly', () => {
    // Test implementation
  });

  it('should handle user input', () => {
    // Test implementation
  });

  it('should update state correctly', () => {
    // Test implementation
  });
});`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center p-4">
        <div className="w-full max-w-md px-4 py-10 border border-white/10 backdrop-blur-md rounded-lg mt-20">
             {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-white/10">
        <h2 className="text-lg sm:text-xl text-white font-thin tracking-wide">
          Unit Test Generator
        </h2>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Framework Select */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full sm:w-48 px-4 py-2 text-left text-sm text-gray-300 bg-white/5 rounded-md font-extralight flex justify-between items-center"
          >
            {framework || "Select Framework"}
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute w-full sm:w-48 mt-2 bg-[#0A0A0A] border border-white/10 rounded-md shadow-lg">
              {["Jest", "NUnit", "Pytest"].map((fw) => (
                <button
                  key={fw}
                  className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-white/5 font-extralight text-left"
                  onClick={() => {
                    setFramework(fw);
                    setIsOpen(false);
                  }}
                >
                  {fw}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerateTests}
          disabled={!framework}
          className={`mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-extralight transition-colors duration-300 ${
            framework
              ? "bg-white/5 hover:bg-white/10 text-gray-300"
              : "bg-white/5 text-gray-500 cursor-not-allowed"
          }`}
        >
          <Play size={16} className="text-violet-400" />
          Generate Tests
        </button>

        {/* Output Console */}
        {output && (
          <div className="mt-6">
            <h3 className="text-sm text-gray-400 font-normal mb-2">Output Console:</h3>
            <pre className="bg-white/5 p-4 rounded-md text-xs sm:text-sm text-gray-300 font-extralight overflow-x-auto">
              {output}
            </pre>
          </div>
        )}
      </div>
        </div>
    </div>
   
  );
}