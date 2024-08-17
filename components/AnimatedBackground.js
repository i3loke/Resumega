import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateBubbles = () => {
      return [...Array(50)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        animationDuration: `${Math.random() * 10 + 5}s`,
      }));
    };

    setBubbles(generateBubbles());
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 animate-gradient-x"></div>
      <div className="absolute inset-0 opacity-50">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: bubble.top,
              left: bubble.left,
              width: bubble.width,
              height: bubble.height,
              animation: `float ${bubble.animationDuration} linear infinite`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}