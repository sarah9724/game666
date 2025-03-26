import React, { useState, useEffect } from 'react';

interface RatingSystemProps {
  gameId: number;
  initialRating?: number;
}

// 获取唯一用户ID，安全处理服务器端渲染
function getUserId() {
  if (typeof window === 'undefined') {
    return '';
  }
  
  // 检查sessionStorage中是否已有userId
  let userId = sessionStorage.getItem('femaleGamer-userId');
  
  // 如果没有，生成一个新的并保存
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('femaleGamer-userId', userId);
  }
  
  return userId;
}

const RatingSystem: React.FC<RatingSystemProps> = ({ gameId, initialRating = 0 }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [hasRated, setHasRated] = useState<boolean>(false);
  const [avgRating, setAvgRating] = useState<number>(initialRating);
  const [totalRatings, setTotalRatings] = useState<number>(0);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    // 在客户端设置userId
    setUserId(getUserId());
    
    // 加载用户之前的评分
    const userRating = localStorage.getItem(`game-rating-${gameId}`);
    if (userRating) {
      setRating(parseInt(userRating));
      setHasRated(true);
    }

    // 加载游戏的平均评分
    const ratings = JSON.parse(localStorage.getItem(`game-ratings-${gameId}`) || '[]');
    if (ratings.length > 0) {
      const avg = ratings.reduce((a: number, b: number) => a + b, 0) / ratings.length;
      setAvgRating(avg);
      setTotalRatings(ratings.length);
    }
  }, [gameId]);

  const handleRating = (value: number) => {
    if (hasRated) {
      console.log('您已经评分过了');
      return;
    }

    setRating(value);
    setHasRated(true);
    
    // 存储用户评分
    localStorage.setItem(`game-rating-${gameId}`, value.toString());

    // 更新平均评分
    const ratings = JSON.parse(localStorage.getItem(`game-ratings-${gameId}`) || '[]');
    ratings.push(value);
    localStorage.setItem(`game-ratings-${gameId}`, JSON.stringify(ratings));
    
    const avg = ratings.reduce((a: number, b: number) => a + b, 0) / ratings.length;
    setAvgRating(avg);
    setTotalRatings(ratings.length);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center">
        <div className="mr-2 text-sm text-gray-600 min-w-20">你的评分:</div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`text-2xl focus:outline-none ${
                (hover || rating) >= star
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              } transition-colors`}
              onClick={() => handleRating(star)}
              onMouseEnter={() => !hasRated && setHover(star)}
              onMouseLeave={() => !hasRated && setHover(0)}
              disabled={hasRated}
            >
              ★
            </button>
          ))}
        </div>
        {hasRated && (
          <span className="ml-2 text-sm text-green-600">
            已评分
          </span>
        )}
      </div>
      
      <div className="flex items-center mt-1">
        <div className="mr-2 text-sm text-gray-600 min-w-20">平均评分:</div>
        <div className="flex text-yellow-400 text-2xl">
          {'★'.repeat(Math.floor(avgRating))}
          {avgRating % 1 >= 0.5 ? '½' : ''}
          {'☆'.repeat(5 - Math.ceil(avgRating))}
        </div>
        <span className="ml-2 text-gray-500">
          {avgRating.toFixed(1)} ({totalRatings} 人评分)
        </span>
      </div>
    </div>
  );
};

export default RatingSystem; 