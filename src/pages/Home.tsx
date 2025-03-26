import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">女性游戏天地</h1>
      
      {/* 搜索框 */}
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="搜索游戏..."
          className="w-full px-4 py-2 rounded-full border border-pink-200 focus:outline-none focus:border-pink-400"
        />
      </div>

      {/* 分类导航 */}
      <div className="flex justify-center space-x-4 mb-8">
        <button className="px-6 py-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200">
          全部游戏
        </button>
        <button className="px-6 py-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200">
          益智类
        </button>
        <button className="px-6 py-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200">
          解谜类
        </button>
        <button className="px-6 py-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200">
          休闲类
        </button>
      </div>

      {/* 游戏列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 这里后续会添加游戏卡片组件 */}
      </div>
    </div>
  );
};

export default Home; 