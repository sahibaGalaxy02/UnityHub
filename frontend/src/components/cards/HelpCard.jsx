import { Heart, Share2, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function HelpCard({ title, description, author, avatar, category, helpCount = 0 }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(helpCount);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Header with category badge */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex justify-between items-start">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          {category || 'Help'}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

        {/* Author info */}
        {author && (
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
            {avatar && (
              <img 
                src={avatar} 
                alt={author} 
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <span className="text-sm text-gray-500">by <span className="font-medium text-gray-700">{author}</span></span>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2 flex-wrap">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <MessageCircle size={18} />
            Offer Help
          </button>
          
          <button 
            onClick={handleLike}
            className={`px-3 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1 ${
              isLiked 
                ? 'bg-red-100 text-red-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
            <span className="text-sm">{likeCount}</span>
          </button>

          <button className="px-3 py-2.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200 flex items-center gap-1">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Footer with metadata */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-500">Help Needed</span>
        <span className="text-xs font-medium text-blue-600">View Details →</span>
      </div>
    </div>
  );
}
