import React from 'react';

interface CardProps {
  title: string;
  location: string;
  time: string;
}

const Card: React.FC<CardProps> = ({ title, location, time }) => {
  return (
    <div className="bg-teal-200 p-4 rounded-lg shadow-md">
      <img
        src="/product-image.png"
        alt={title}
        className="h-24 w-full object-cover rounded-md mb-2"
      />
      <h5 className="text-lg font-semibold">{title}</h5>
      <p className="text-sm">Found at: {location}</p>
      <p className="text-sm">Time: {time}</p>
    </div>
  );
};

export default Card;
