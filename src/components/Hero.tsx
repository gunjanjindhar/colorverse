import React, { useState } from 'react';
import { Upload, ChevronDown } from 'lucide-react';
import { UploadModal } from './upload/UploadModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('how-it-works');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with color wheels */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-red-500 via-transparent to-transparent mix-blend-overlay animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-gradient-to-bl from-blue-500 via-transparent to-transparent mix-blend-overlay animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-green-500 via-transparent to-transparent mix-blend-overlay animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 tracking-wider">
          Color Grading Made Easy
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Upload your video, get cinematic color grading in minutes.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="group bg-[#FF4C00] hover:bg-[#FF6D00] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,76,0,0.5)]"
        >
          <Upload className="inline-block mr-2 mb-1" />
          Upload Your Footage
        </button>

        {/* Bouncing scroll arrow */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToNextSection}
        >
          <ChevronDown className="w-8 h-8 text-white opacity-75" />
        </div>
      </div>

      <UploadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}