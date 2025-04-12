import React, { useState, useRef, useEffect } from 'react';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX: number;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = event.clientX;
    }

    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    const clampedPosition = Math.min(Math.max(position, 0), 100);
    setSliderPosition(clampedPosition);
  };

  const handleMouseDown = () => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      handleMove(e as unknown as React.MouseEvent);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = () => {
    if (!containerRef.current) return;

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e as unknown as React.TouchEvent);
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Before & After</h2>
        
        <div className="relative w-full h-[600px] overflow-hidden rounded-xl" ref={containerRef}>
          {/* Before Image (Base layer) */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute top-4 left-4 bg-red-500 px-4 py-2 rounded-full text-sm font-semibold">
              Before
            </div>
          </div>

          {/* After Image (Overlay layer) */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              filter: 'contrast(1.2) saturate(1.3) brightness(1.1)'
            }}
          >
            <div className="absolute top-4 left-4 bg-green-500 px-4 py-2 rounded-full text-sm font-semibold">
              After
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize select-none"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-6 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Enhanced Quality</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <h4 className="font-semibold">Improved Color Grading</h4>
              </div>
              <p className="text-gray-400 ml-5">Enhanced color balance and tone mapping</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <h4 className="font-semibold">Enhanced Contrast</h4>
              </div>
              <p className="text-gray-400 ml-5">Perfect balance of shadows and highlights</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <h4 className="font-semibold">Professional Polish</h4>
              </div>
              <p className="text-gray-400 ml-5">Cinema-grade final output</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;