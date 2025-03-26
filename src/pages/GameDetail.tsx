import React from 'react';
import { useParams } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import GameEmbed from '../components/GameEmbed';
import RatingSystem from '../components/RatingSystem';
import CommentSection from '../components/CommentSection';
import { getGameById } from '../data/games';

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const gameId = parseInt(id || '0');
  const game = getGameById(gameId);

  if (!game) {
    return (
      <AppLayout>
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="text-center py-16">
            <div className="text-4xl mb-4">😢</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">游戏不存在</h3>
            <p className="text-gray-600">
              抱歉，您访问的游戏不存在或已被移除。
            </p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* 游戏标题和分类 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {game.title}
            </h1>
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full">
              {game.category}
            </span>
          </div>
        </div>

        {/* 游戏和信息区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* 游戏区域 */}
          <div className="lg:col-span-2">
            <GameEmbed
              gameUrl={game.gameUrl}
              title={game.title}
            />
          </div>

          {/* 信息侧边栏 */}
          <div className="space-y-8">
            {/* 评分系统 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">游戏评分</h2>
              <RatingSystem gameId={game.id} initialRating={game.rating} />
            </div>

            {/* 游戏特性 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">游戏特性</h2>
              <ul className="space-y-2">
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 游戏说明 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">游戏说明</h2>
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {game.howToPlay}
            </p>
          </div>
        </div>

        {/* 评论区 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">玩家评论</h2>
          <CommentSection gameId={game.id} />
        </div>
      </div>
    </AppLayout>
  );
};

export default GameDetail; 