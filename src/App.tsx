import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import Ranking from './pages/Ranking';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-pink-600">女性游戏天地</h1>
              <div className="flex space-x-4">
                <a href="/" className="text-gray-600 hover:text-pink-600">首页</a>
                <a href="/ranking" className="text-gray-600 hover:text-pink-600">排行榜</a>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="text-6xl mb-4">404</div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">页面不存在</h1>
                  <p className="text-gray-600 mb-4">抱歉，您访问的页面不存在。</p>
                  <a href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    返回首页
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <footer className="bg-white mt-8 py-4">
          <div className="container mx-auto px-4 text-center text-gray-600">
            © 2024 女性游戏天地. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
