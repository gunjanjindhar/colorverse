import React from 'react';
import * as Slider from '@radix-ui/react-slider';

export const Timeline = () => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        🕹️ Browse Your Scenes
        <span className="text-sm font-normal text-gray-400">
          Click a scene to preview and edit it individually
        </span>
      </h3>

      <div className="bg-[#1a1a1a] rounded-lg p-4">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {/* Example scene thumbnails */}
          {[1, 2, 3, 4, 5].map((scene) => (
            <div
              key={scene}
              className="flex-shrink-0 group cursor-pointer transition-all duration-300"
            >
              <div className="w-40 h-24 bg-black rounded overflow-hidden border border-[#2a2a2a] group-hover:border-[#00ffe7] transition-colors">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
              </div>
              <p className="mt-2 text-sm text-gray-400 group-hover:text-white">
                Scene {String(scene).padStart(2, '0')}
              </p>
            </div>
          ))}
        </div>

        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5 mt-4"
          defaultValue={[0]}
          max={100}
          step={1}
        >
          <Slider.Track className="bg-[#2a2a2a] relative grow rounded-full h-[3px]">
            <Slider.Range className="absolute bg-[#ff6a00] rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-[#ff6a00]"
          />
        </Slider.Root>
      </div>
    </div>
  );
};