import React from 'react';
import { useGradingStore } from '../../store/gradingStore';
import { VideoPlayer } from './VideoPlayer';
import { GradingControls } from './GradingControls';
import { Timeline } from './Timeline';

export const GradingPanel = () => {
  const gradingSession = useGradingStore(state => state.gradingSession);

  if (!gradingSession) return null;

  return (
    <div className="fixed inset-0 bg-[#0d0d0d] flex">
      {/* Main content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="relative">
          <VideoPlayer url={gradingSession.videoUrl} />
          <div className="absolute inset-0 pointer-events-none border border-[#1a1a1a] rounded-lg shadow-[0_0_20px_rgba(255,106,0,0.1)]" />
        </div>
        <Timeline />
      </div>

      {/* Right sidebar */}
      <div className="w-80 bg-[#1a1a1a] p-6 border-l border-[#2a2a2a]">
        <GradingControls />
      </div>
    </div>
  );
};