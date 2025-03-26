import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { Game, games, getGamesByCategory, searchGames } from '../data/games';

// 分类数据
const categories = ['全部', '休闲', '益智', '模拟', '角色扮演', '冒险', '策略'];

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [filteredGames, setFilteredGames] = useState<Game[]>(games);
  const searchQuery = searchParams.get('search') || '';

  // 处理分类和搜索过滤
  useEffect(() => {
    let filtered = searchQuery 
      ? searchGames(searchQuery)
      : getGamesByCategory(selectedCategory);
    setFilteredGames(filtered);
  }, [selectedCategory, searchQuery]);

  // 根据分类获取对应的emoji
  function getCategoryEmoji(category: string): string {
    const emojiMap: Record<string, string> = {
      '全部': '🌟',
      '休闲': '🎯',
      '益智': '🧩',
      '模拟': '🏠',
      '角色扮演': '👑',
      '冒险': '🏝️',
      '策略': '♟️'
    };
    return emojiMap[category] || '🎮';
  }

  return (
    <AppLayout>
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              搜索结果: "{searchQuery}"
            </h2>
            <p className="text-gray-600 mt-1">
              找到 {filteredGames.length} 个游戏
            </p>
          </div>
        )}

        {/* 分类过滤器 */}
        <div className="mb-12 overflow-auto pb-4 no-scrollbar">
          <div className="flex space-x-3">
            {categories.map(category => (
              <button
                key={category}
                className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <span className="mr-2">
                  {getCategoryEmoji(category)}
                </span>
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 游戏网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGames.map(game => (
            <Link
              to={`/games/${game.id}`}
              key={game.id}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100">
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-purple-100 to-indigo-100 w-full h-48 flex items-center justify-center">
                    {game.image ? (
                      <img 
                        src={game.image} 
                        alt={game.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {getCategoryEmoji(game.category)}
                      </div>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center bg-black/50 backdrop-blur-md rounded-full px-2 py-1">
                    <span className="text-yellow-400 text-xs mr-1">★</span>
                    <span className="text-white text-xs">{game.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {game.title}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                      {game.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {game.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                    <span className="text-indigo-600 text-sm font-medium group-hover:underline">
                      查看详情
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 空状态 */}
        {filteredGames.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">😢</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">没有找到游戏</h3>
            <p className="text-gray-600">
              {searchQuery 
                ? `没有找到与"${searchQuery}"相关的游戏，请尝试其他关键词`
                : '当前分类下没有可用的游戏，请尝试选择其他分类'
              }
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Home; 