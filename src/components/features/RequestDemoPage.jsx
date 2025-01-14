import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function RequestDemoPage() {
  return (
    <div className='bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white'>
      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6  lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-8">
              Experience
              <span className="block mt-2 font-light text-emerald-400">NOVA</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12">
              Discover how NOVA can transform your project management. Request a personalized demo today.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input type="text" id="name" name="name" required
                className="w-full px-4 py-3 bg-black/30 border border-gray-800 text-white focus:ring-1 focus:ring-emerald-400 focus:border-transparent outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input type="email" id="email" name="email" required
                className="w-full px-4 py-3 bg-black/30 border border-gray-800 text-white focus:ring-1 focus:ring-emerald-400 focus:border-transparent outline-none" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
              <input type="text" id="company" name="company" required
                className="w-full px-4 py-3 bg-black/30 border border-gray-800 text-white focus:ring-1 focus:ring-emerald-400 focus:border-transparent outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea id="message" name="message" rows={4}
                className="w-full px-4 py-3 bg-black/30 border border-gray-800 text-white focus:ring-1 focus:ring-emerald-400 focus:border-transparent outline-none"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-emerald-400 text-black text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center group">
              REQUEST DEMO
              <ChevronRight className="ml-2 w-4 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}