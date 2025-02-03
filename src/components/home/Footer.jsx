import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-12 border-t border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-extralight tracking-widest mb-6">
              SOORAPRO<span className="text-violet-400">°</span>
            </div>
            <div className="text-sm text-gray-400 font-extralight">
              © {new Date().getFullYear()} SOORAPRO. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
