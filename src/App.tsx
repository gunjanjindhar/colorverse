import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import BeforeAfter from './components/BeforeAfter';
import CreatorSection from './components/CreatorSection';
import NoSoftware from './components/NoSoftware';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { GradingPanel } from './components/grading/GradingPanel';
import { useGradingStore } from './store/gradingStore';

function App() {
  const gradingSession = useGradingStore(state => state.gradingSession);

  if (gradingSession) {
    return <GradingPanel />;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <HowItWorks />
      <BeforeAfter />
      <CreatorSection />
      <NoSoftware />
      <Comparison />
      <Pricing />
      <div className="text-center py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <p className="text-2xl font-light max-w-3xl mx-auto text-gray-300">
          "Transform your content with professional color grading that used to take hours, now in just minutes. Join thousands of creators who've elevated their content with DIcolorist.ai"
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;