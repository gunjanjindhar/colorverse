import React from 'react';
import { Wand2, Palette, Link, Download, Sparkles } from 'lucide-react';

export const GradingControls = () => {
  const controls = [
    {
      name: 'AI Color Correct',
      description: 'Fix exposure, white balance, and contrast',
      icon: <Wand2 className="w-5 h-5" />,
      action: () => console.log('Color correct')
    },
    {
      name: 'AI Color Grade',
      description: 'Apply cinematic color grading',
      icon: <Palette className="w-5 h-5" />,
      action: () => console.log('Color grade')
    },
    {
      name: 'Lock & Match All',
      description: 'Apply current grade to all scenes',
      icon: <Link className="w-5 h-5" />,
      action: () => console.log('Match shots')
    },
    {
      name: 'Choose a Look',
      description: 'Select from cinematic presets',
      icon: <Sparkles className="w-5 h-5" />,
      action: () => console.log('Apply look')
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        🎛️ AI Controls
      </h2>
      
      <div className="space-y-4">
        {controls.map((control) => (
          <button
            key={control.name}
            onClick={control.action}
            className="w-full py-4 px-4 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg flex flex-col gap-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,231,0.1)] group"
          >
            <div className="flex items-center gap-3">
              <div className="text-[#00ffe7] group-hover:text-white transition-colors">
                {control.icon}
              </div>
              <span className="font-semibold">{control.name}</span>
            </div>
            <p className="text-sm text-gray-400 text-left pl-8">
              {control.description}
            </p>
          </button>
        ))}
      </div>

      <div className="pt-6 border-t border-[#2a2a2a]">
        <button className="w-full py-4 px-4 bg-[#ff6a00] hover:bg-[#ff8a00] rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.2)]">
          <Download className="w-5 h-5" />
          <span>Download Final Video</span>
        </button>
      </div>
    </div>
  );
};