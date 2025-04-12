import React from 'react';
import { Upload, Zap, Play, Download } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-[#FF4C00]" />,
      title: "Upload Your Footage",
      description: "Drag and drop your video files directly into our platform",
      image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Zap className="w-12 h-12 text-[#FF4C00]" />,
      title: "Let AI Color Correct & Grade",
      description: "Our AI analyzes and enhances your footage automatically",
      image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Play className="w-12 h-12 text-[#FF4C00]" />,
      title: "Preview and Fine-Tune",
      description: "Review the results and make adjustments if needed",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Download className="w-12 h-12 text-[#FF4C00]" />,
      title: "Download Your Final Video",
      description: "Export your professionally graded footage",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-24 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
      <div className="max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0"
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src={step.image} 
                alt={step.title}
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}