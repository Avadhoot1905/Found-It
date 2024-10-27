import React from 'react';

interface CardProps {
  title: string;
  location: string;
  time: string;
}

const Card: React.FC<CardProps> = ({ title, location, time }) => {
  return (
    <div className="bg-[#28AFB0] p-4 rounded-lg shadow-md">
    <img
      src="/assets/aasa.png" 
      alt={title}                  //background: #19647E;
      width={300} 
      height={100}
      className="rounded-lg mb-4" 
    />
      <h5 className="text-[#19647E] text-lg font-semibold">{title}</h5>
      <p className="text-sm">Found at: {location}</p>
      <p className="text-sm">Time: {time}</p>
    </div>
  );
};

export default Card;
