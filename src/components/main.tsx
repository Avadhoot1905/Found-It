import React from 'react';
import Sidebar from './Sidebar';
import Card from './Card';

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome, User_name</h1>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Search..."
          />
        </header>

        {/* Recently Found Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Recently found</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(5)].map((_, index) => (
              <Card
                key={index}
                title="Product name"
                location="Location"
                time="Time"
              />
            ))}
          </div>
        </section>

        {/* Recently Lost Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Recently lost</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(5)].map((_, index) => (
              <Card
                key={index}
                title="Product name"
                location="Lost by: Person"
                time="Time"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;