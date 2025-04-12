import React from 'react';
import { MonitorPlay } from 'lucide-react';

const Tutorial = () => {
  const steps = [
    {
      title: "Upload Your Video",
      description: "Drag and drop your footage directly into our platform",
      image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI Processing",
      description: "Our AI analyzes and enhances your footage automatically",
      image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fine-Tune",
      description: "Make optional adjustments to perfect your look",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Export",
      description: "Download your professionally graded footage",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <MonitorPlay className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">How to Use DIcolorist.ai</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started in minutes with our simple workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorial;