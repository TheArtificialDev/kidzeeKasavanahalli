'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down' | 'scale' | 'rotate' | 'bounce' | 'flip' | 'fade-blur' | 'float' | 'glide' | 'elastic';
  delay?: number;
  className?: string;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animation = 'fade',
  delay = 0,
  className = '',
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1, '0px 0px -100px 0px');

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    const baseClass = `animate-${animation === 'fade' ? 'fade-in' : animation.replace('-', '-')}`;
    const delayClass = delay > 0 ? `animate-stagger-${Math.min(delay, 6)}` : '';
    
    return `${baseClass} ${delayClass}`.trim();
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
