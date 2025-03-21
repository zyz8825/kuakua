import React, { useState, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/outline';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/music/background.mp3'));

  useEffect(() => {
    audio.loop = true; // 循环播放
    audio.volume = 0.3; // 设置音量为30%

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all"
      aria-label={isPlaying ? '暂停音乐' : '播放音乐'}
    >
      {isPlaying ? (
        <PauseIcon className="w-6 h-6 text-gray-700" />
      ) : (
        <PlayIcon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};

export default MusicPlayer; 