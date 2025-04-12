import React from 'react';
import { X } from 'lucide-react';

const NoSoftware = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block p-4 rounded-full bg-red-500/10 mb-8">
          <X className="w-12 h-12 text-red-500" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          No Expensive Software Needed
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          All you need is your footage. We'll take care of the rest using AI.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">No DaVinci Resolve</h3>
            <p className="text-gray-400">Skip the complex color grading software and let AI do the work.</p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">No Plugins</h3>
            <p className="text-gray-400">Everything you need is built right into our platform.</p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">No Learning Curve</h3>
            <p className="text-gray-400">Get professional results without years of experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoSoftware;