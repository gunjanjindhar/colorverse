import React from 'react';

export const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <video
        src={url}
        controls
        className="w-full h-full"
      />
    </div>
  );
};