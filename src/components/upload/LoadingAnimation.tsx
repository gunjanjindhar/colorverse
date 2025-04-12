import React from 'react';

export const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-3 h-12 bg-primary rounded-full animate-pulse"
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};