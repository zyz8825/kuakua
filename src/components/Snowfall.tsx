import React from 'react';
import Snowflake from './Snowflake';

const Snowfall: React.FC = () => {
  const snowflakes = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    size: Math.random() * 4 + 2, // 2-6px
    startX: Math.random() * window.innerWidth, // 0 to window width
    duration: Math.random() * 10 + 10, // 10-20s
    delay: Math.random() * 5, // 0-5s
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          size={flake.size}
          startX={flake.startX}
          duration={flake.duration}
          delay={flake.delay}
        />
      ))}
    </div>
  );
};

export default Snowfall; 