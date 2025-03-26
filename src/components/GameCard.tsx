import React from 'react';

interface GameCardProps {
  title: string;
  category: string;
  rating: number;
  imageUrl: string;
  commentCount: number;
}

const GameCard: React.FC<GameCardProps> = ({ title, category, rating, imageUrl, commentCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-gray-600">{rating.toFixed(1)}</span>
          </div>
          <div className="text-gray-500 text-sm">
            {commentCount} 条评论
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard; 