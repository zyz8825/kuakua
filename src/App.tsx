import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { compliments, Compliment } from './data/compliments';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [currentCompliment, setCurrentCompliment] = useState<Compliment | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<'humorous' | 'elegant' | 'abstract' | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const generateCompliment = (style: 'humorous' | 'elegant' | 'abstract') => {
    const filteredCompliments = compliments.filter(c => c.style === style);
    const randomIndex = Math.floor(Math.random() * filteredCompliments.length);
    setCurrentCompliment(filteredCompliments[randomIndex]);
    setSelectedStyle(style);
    setIsLiked(false);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
    } else {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const styleButtonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-100 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          夸夸机器人
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">选择你喜欢的夸奖风格</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.button
                onClick={() => generateCompliment('humorous')}
                variants={styleButtonVariants}
                whileHover="hover"
                whileTap="tap"
                className={`p-4 rounded-lg transition-all ${
                  selectedStyle === 'humorous'
                    ? 'bg-[#FF6B6B] text-white'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              >
                幽默风格
              </motion.button>
              <motion.button
                onClick={() => generateCompliment('elegant')}
                variants={styleButtonVariants}
                whileHover="hover"
                whileTap="tap"
                className={`p-4 rounded-lg transition-all ${
                  selectedStyle === 'elegant'
                    ? 'bg-[#FF6B6B] text-white'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              >
                优雅风格
              </motion.button>
              <motion.button
                onClick={() => generateCompliment('abstract')}
                variants={styleButtonVariants}
                whileHover="hover"
                whileTap="tap"
                className={`p-4 rounded-lg transition-all ${
                  selectedStyle === 'abstract'
                    ? 'bg-[#FF6B6B] text-white'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              >
                抽象风格
              </motion.button>
            </div>
          </div>

          {currentCompliment && (
            <motion.div
              key={currentCompliment.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6"
            >
              <p className="text-xl text-gray-800 mb-4 text-center">
                {currentCompliment.text}
              </p>
              <div className="flex justify-center items-center space-x-4">
                <motion.button 
                  onClick={handleLike}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`p-2 rounded-full hover:bg-white/50 transition-all ${
                    isLiked ? 'text-red-500' : 'text-gray-500'
                  }`}
                >
                  <HeartIcon className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                </motion.button>
                <motion.span 
                  className="text-gray-600"
                  animate={{ scale: isLiked ? 1.2 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {likeCount}
                </motion.span>
                <motion.button 
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="p-2 rounded-full hover:bg-white/50 text-gray-500"
                >
                  <ShareIcon className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
