import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 bg-gray-800 w-64 p-5 text-white`}>
        <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(!isOpen)}>
          X
        </button>
        <div className="flex flex-col space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Foundit</h2>
          </div>
          <ul className="space-y-2">
            <li><a href="#" className="block py-2 hover:bg-gray-600 rounded">Home</a></li>
            <li><a href="#" className="block py-2 hover:bg-gray-600 rounded">Found</a></li>
            <li><a href="#" className="block py-2 hover:bg-gray-600 rounded">Lost</a></li>
            <li><a href="#" className="block py-2 hover:bg-gray-600 rounded">Profile</a></li>
            <li><a href="#" className="block py-2 hover:bg-gray-600 rounded">Settings</a></li>
            <li><a href="#" className="block py-2 hover:bg-gray-600 rounded">About</a></li>
          </ul>
        </div>
      </div>
      <button
        className="fixed top-4 left-4 bg-gray-800 text-white p-2 rounded z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </>
  );
};

export default Sidebar;
