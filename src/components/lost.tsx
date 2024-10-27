'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Card from './Card';
import AddItemButton from './Addbutton';
import AddItemForm from './AddItemForm'; // Ensure this is imported

const Lost: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize the modal state

  // Scroll handler function to scroll horizontally with mouse wheel
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-pink-100 flex">
      <Sidebar />

      <div className="flex-grow p-6 overflow-y-auto" onWheel={handleScroll}>
        <header className="flex justify-between items-end mb-6 mt-10">
          <h1 className="text-6xl p-8 font-bold text-cyan-900">
            <span className="text-[#19647E]">Lost it? :(</span>
          </h1>

          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Search..."
          />
          <button
            className="bg-cyan-900 font-bold text-white rounded-md px-5 py-4 hover:bg-cyan-700 absolute"
            style={{ top: '50px', right: '20px' }} // Adjusted top value
            onClick={() => setIsModalOpen(true)}
          >
            + Add Item
          </button>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl text-cyan-900 font-bold mb-4">Items</h2>
          <div className="grid grid-cols-5 gap-7">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex-shrink-0">
                <Card
                  title="Product name"
                  location="Location"
                  time="Time"
                />
              </div>
            ))}
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-gray-300"
              >
                ✕
              </button>
              <AddItemForm onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lost;
