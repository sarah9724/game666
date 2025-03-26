import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { games, Game } from '../data/games';

type SortKey = 'rating' | 'popular';

const Ranking: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortKey>('rating');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  // 获取所有可用的分类
  const categories = useMemo(() => {
    const uniqueCategories = new Set(games.map(game => game.category));
    return ['全部', ...Array.from(uniqueCategories)];
  }, []);

  // 根据条件筛选和排序游戏
  const sortedGames = useMemo(() => {
    let filtered = selectedCategory === '全部'
      ? games
      : games.filter(game => game.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      // 这里可以添加其他排序逻辑，比如按照游戏热度排序
      return 0;
    });
  }, [sortBy, selectedCategory]);

  return (
    <AppLayout>
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            游戏排行榜
          </h1>
          <p className="text-gray-600">
            发现最受欢迎和评分最高的游戏
          </p>
        </div>

        {/* 筛选和排序控制 */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              游戏分类
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              排序方式
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="rating">评分最高</option>
              <option value="popular">最受欢迎</option>
            </select>
          </div>
        </div>

        {/* 游戏列表 */}
        <div className="space-y-4">
          {sortedGames.map((game, index) => (
            <Link
              key={game.id}
              to={`/games/${game.id}`}
              className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
            >
              <div className="flex items-center p-4">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="text-2xl font-bold text-indigo-600">
                    #{index + 1}
                  </div>
                </div>
                <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  {game.image ? (
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      🎮
                    </div>
                  )}
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {game.title}
                    </h2>
                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full">
                      {game.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {game.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      {game.rating.toFixed(1)}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{game.features.length} 个特性</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {sortedGames.length === 0 && (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                暂无游戏
              </h3>
              <p className="text-gray-600">
                当前分类下还没有游戏，请尝试选择其他分类
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Ranking; 