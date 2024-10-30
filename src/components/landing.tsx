'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const LandingPage: React.FC = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#19647E] to-[#4ABDAC] flex flex-col items-center justify-center text-white">
      
      {/* Top Image */}
      <div className="mt-8 mb-4">
        <img 
          src="assets/foundit.png"
          alt="Top Image"
          className="w-[200px] h-[200px] object-contain"
        />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center mb-12 text-center px-4">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Welcome to FoundIt</h1>
        <p className="text-lg mb-8 max-w-lg animate-fadeIn">
          Your one-stop solution for managing lost and found items. Find your belongings or help others recover theirs!
        </p>
        <button 
          onClick={handleLoginClick}
          className="px-6 py-3 bg-white text-[#19647E] rounded-md font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Login
        </button>

          <img 
            src="/assets/plane.png"
            alt="Plane Image"
            className="w-[800px] h-[800px] object-contain"
          />
        </div>
     

      {/* Footer */}
      <footer className="mt-auto p-4 w-full text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} FoundIt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
