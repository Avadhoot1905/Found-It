'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Card from './Card';

const Lost: React.FC = () => {
  // Scroll handler function to scroll vertically with mouse wheel
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: container.scrollTop + scrollAmount,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-pink-100 flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-grow p-6 overflow-y-auto" onWheel={handleScroll}> {/* Change overflow to vertical */}
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
            onClick={() => alert("Add Item clicked!")}
          >
            + Add Item
          </button>
        </header>

        {/* Recently Found Section */}
        <section className="mb-10">
          <h2 className="text-3xl text-cyan-900 font-bold mb-4">Items</h2>
          <div className="grid grid-cols-5 gap-7"> {/* Use grid to layout cards */}
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
      </div>
    </div>
  );
};

export default Lost;
