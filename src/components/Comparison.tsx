import React from 'react';

const Comparison = () => {
  const features = [
    {
      feature: "Color Grading",
      dicolorist: "AI-powered automatic grading",
      competitor: "Manual grading required"
    },
    {
      feature: "Learning Curve",
      dicolorist: "Instant results",
      competitor: "Extensive training needed"
    },
    {
      feature: "Processing Time",
      dicolorist: "Minutes",
      competitor: "Hours"
    },
    {
      feature: "Software Required",
      dicolorist: "None",
      competitor: "Professional suite"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose DIcolorist.ai
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-left text-primary">DIcolorist.ai</th>
                <th className="py-4 px-6 text-left text-gray-400">Others</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-4 px-6">{item.feature}</td>
                  <td className="py-4 px-6 text-primary">{item.dicolorist}</td>
                  <td className="py-4 px-6 text-gray-400">{item.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary hover:bg-primary-hover px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Try DIcolorist.ai Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;