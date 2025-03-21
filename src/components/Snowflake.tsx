import React from 'react';
import { motion } from 'framer-motion';

interface SnowflakeProps {
  size: number;
  startX: number;
  duration: number;
  delay: number;
}

const Snowflake: React.FC<SnowflakeProps> = ({ size, startX, duration, delay }) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full opacity-70"
      style={{
        width: size,
        height: size,
        left: startX,
      }}
      initial={{
        y: -20,
        x: startX,
        opacity: 0,
      }}
      animate={{
        y: '100vh',
        x: startX + Math.random() * 100 - 50, // 随机左右摆动
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default Snowflake; 