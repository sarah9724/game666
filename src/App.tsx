import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
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
            {/* 后续会添加更多路由 */}
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
}

export default App;
