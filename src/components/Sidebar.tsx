'use client'; /* to ensure it's only client-side rendered */

import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          Menu ☰
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-xl">×</span>
        </button>

        <div className="p-6">
          {}
          <div className="text-center mb-8">
            <img 
              src="/assets/foundit.png"
              alt="FoundIt" 
              className="w-[130px] h-[84px]"
            />
          </div>
          <nav>
            <ul className="space-y-4">
              {['Home', 'Found', 'Lost', 'Profile', 'Settings', 'About'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
