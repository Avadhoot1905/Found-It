'use client'; 

import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <>
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-1 rounded hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          ☰
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
          <span className="text-2xl">×</span>
        </button>

        <div className="p-6">
          {}
          <div className="text-center mb-8">
            <img 
              src="/assets/foundit.png"
              alt="FoundIt" 
              className="w-[130px] h-[84px] translate-x-8"
            />
          </div>
          <nav>
            <ul className="space-y-4">
              <li key='Home'>
                  <a
                    href="/home"
                    className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li key='Found'>
                  <a
                    href="/found"
                    className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                  >
                    Found
                  </a>
                </li>
              <li key='Lost'>
                <a
                  href="/lost"
                  className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                >
                  Lost
                </a>
              </li>
              <li key='Profile'>
                <a
                  href="/profile"
                  className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                >
                  Profile
                </a>
              </li>
             <li>
                <a
                  href="/logout"
                  onClick={handleLogout}
                  className="block py-2 px-4 text-red-600 hover:bg-gray-700 rounded transition-colors"
                >
                  Logout
                </a>
              </li>
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