'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Card from './Card';

const Profile: React.FC = () => {
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
    <div className="min-h-screen flex">
      <Sidebar />
      
      <img
      src="/assets/paperplane.png" 
      className="absolute top-[70px] right-[50px] w-150 h-40" // Positioning at the top-right corner
    />
      <div className="flex-grow p-8 overflow-x-hidden">
        
        {/* User Information Section */}
        <div className="bg-[#19647E] p-4 mb-6 rounded-lg shadow-md flex items-center" style={{ height: '300px' }}>
          {/* Profile Image - Smaller size */}
          <div className="h-4/5 aspect-square">  {/* Changed from h-full to h-4/5 */}
            <img 
              src="assets/profile.jpg"
              alt="User Avatar" 
              className="h-full w-full rounded-full border-4 border-white object-cover"
            />
            
          </div>
          
          {/* User Info */}
          <div className="flex-grow text-white pl-8">
            <h2 className="text-4xl font-bold mb-6">User Information</h2>
            <div className="space-y-3">
              <p className="text-lg">Name: John Doe</p>
              <p className="text-lg">Email ID: john.doe@example.com</p>
              <p className="text-lg">Address: 1234 Elm St, Springfield</p>
              <p className="text-lg">Contact No: +1234567890</p>
            </div>
          </div>
        </div>

        {/* Recently Found Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-cyan-900 font-bold mb-4">Uploads</h2>
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

        {/* Recently Viewed Section */}
        <section>
          <h2 className="text-2xl text-cyan-900 font-bold mb-4">Recently viewed</h2>
          <div
            className="flex space-x-6 overflow-x-auto px-2 py-4 scroll-smooth"
            onWheel={handleScroll}
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

export default Profile;