import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-xl">×</span>
        </button>

        <div className="p-6">
          <div className="text-center mb-8">
            <img 
              src="/assets/foundit.jpg" 
              alt="FoundIt" 
              className="w-20 h-20 mx-auto rounded-full"
            />
            <h2 className="text-2xl font-bold mt-4">Your Title</h2>
          </div>
          <nav>
            <ul className="space-y-4">
              {['Home', 'Found', 'Lost', 'Profile', 'Settings', 'About'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Found' ? '/found' : '#'} className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/logout" className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

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
