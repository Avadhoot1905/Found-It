'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Card from './Card';

const Main: React.FC = () => {
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
    <div className="min-h-screen bg-white-100 flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-grow p-6 overflow-x-hidden">
        <header className="flex justify-between items-start mb-6"> 
          <h1 className="text-5xl p-8 font-bold text-cyan-900">Welcome <br />
            <span className="text-[#19647E]">User_name</span>
          </h1>

          <img
            src="/assets/paperplane.png" 
            className="w-150 h-40" 
          />
        </header>

        <section className="mb-10">
          <h2 className="text-2xl text-cyan-900 font-bold mb-4">Recently found</h2>
          <div
            className="flex space-x-6 overflow-x-auto px-2 py-4 scroll-smooth"
            onWheel={handleScroll}
          >
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-72 flex-shrink-0">
                <Card
                  title="Product name"
                  location="Location"
                  time="Time"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-cyan-900 font-bold mb-4">Recently lost</h2>
          <div
            className="flex space-x-6 overflow-x-auto px-2 py-4 scroll-smooth"
            onWheel={handleScroll} // Add scroll handler
          >
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-72 flex-shrink-0">
                <Card
                  title="Product name"
                  location="Lost by: Person"
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

export default Main;
