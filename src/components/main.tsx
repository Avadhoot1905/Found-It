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
    <div className="min-h-screen bg-pink-100 flex">
      {/* Sidebar */}
      <Sidebar />

      
      <div className="flex-grow p-6 overflow-x-hidden">
        <header className="flex justify-between items-end mb-6 ">
          <h1 className="text-2xl p-8 font-bold text-cyan-900">Welcome, User_name</h1>
        
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Search..."
          />
        </header>

        {/* Recently Found Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Recently found</h2>
          <div
            className="container flex space-x-6 min-w-max overflow-x-scroll"
            onWheel={handleScroll}  // Add scroll handler
          >
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-72">
                <Card
                  title="Product name"
                  location="Location"
                  time="Time"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Recently Lost Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Recently lost</h2>
          <div
            className="container flex space-x-6 min-w-max overflow-x-scroll"
            onWheel={handleScroll}  // Add scroll handler
          >
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-72">
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
