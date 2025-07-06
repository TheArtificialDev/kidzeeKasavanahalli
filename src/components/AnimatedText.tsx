'use client';

import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  startDelay?: number;
  letterDelay?: number;
  animateByWords?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  startDelay = 0, 
  letterDelay = 0.05,
  animateByWords = false 
}) => {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [startDelay]);

  const renderLetters = () => {
    if (animateByWords) {
      return text.split(' ').map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block letter-drop mr-2"
          style={{
            animationDelay: hasStarted ? `${wordIndex * letterDelay * 3}s` : '999s',
            animationFillMode: 'forwards'
          }}
        >
          {word}
        </span>
      ));
    }

    return text.split('').map((char, index) => {
      if (char === ' ') {
        return (
          <span key={index} className="letter-space"></span>
        );
      }
      
      return (
        <span
          key={index}
          className="letter-drop"
          style={{
            animationDelay: hasStarted ? `${index * letterDelay}s` : '999s',
            animationFillMode: 'forwards'
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <span className={className} style={{ display: 'inline' }}>
      {renderLetters()}
    </span>
  );
};

export default AnimatedText;
