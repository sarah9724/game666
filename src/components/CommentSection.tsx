import React, { useState, useEffect } from 'react';

interface Comment {
  id: string;
  nickname: string;
  content: string;
  timestamp: number;
  gameId: number;
}

interface CommentSectionProps {
  gameId: number;
}

const CommentSection: React.FC<CommentSectionProps> = ({ gameId }) => {
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  // 从localStorage加载评论
  useEffect(() => {
    const savedComments = localStorage.getItem(`game-comments-${gameId}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [gameId]);

  // 提交评论
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nickname.trim() || !content.trim()) {
      alert('请填写昵称和评论内容');
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      nickname: nickname.trim(),
      content: content.trim(),
      timestamp: Date.now(),
      gameId
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`game-comments-${gameId}`, JSON.stringify(updatedComments));
    
    // 重置表单
    setContent('');
  };

  // 格式化时间
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* 评论输入区域 */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="你的昵称"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            maxLength={20}
          />
        </div>
        <div>
          <textarea
            placeholder="写下你的评论..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            rows={4}
            maxLength={500}
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            发表评论
          </button>
        </div>
      </form>

      {/* 评论列表 */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-800">{comment.nickname}</h3>
                <span className="text-sm text-gray-500">
                  {formatTime(comment.timestamp)}
                </span>
              </div>
              <p className="mt-2 text-gray-600 whitespace-pre-wrap">{comment.content}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">
            还没有评论，来说说你的想法吧~
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection; 