import React from 'react';
import { Youtube, Film, Building2, UserSquare2 } from 'lucide-react';

const CreatorSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Turn Your Video From Reel to Cinema
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Perfect for content creators who want their videos to stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "YouTube Videos",
              description: "Make your content stand out with professional color grading",
              icon: <Youtube className="w-8 h-8 text-purple-500" />
            },
            {
              title: "Instagram Reels",
              description: "Create scroll-stopping reels that capture attention",
              icon: <Film className="w-8 h-8 text-pink-500" />
            },
            {
              title: "Brand Content",
              description: "Deliver premium quality videos for your clients",
              icon: <Building2 className="w-8 h-8 text-blue-500" />
            },
            {
              title: "Personal Content",
              description: "Give your personal projects a cinematic look",
              icon: <UserSquare2 className="w-8 h-8 text-green-500" />
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;