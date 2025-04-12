import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Creator",
      price: "Free",
      features: [
        "5 videos per month",
        "720p export quality",
        "Basic AI grading",
        "Email support"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: [
        "Unlimited videos",
        "4K export quality",
        "Advanced AI grading",
        "Priority support",
        "Custom presets"
      ],
      cta: "Go Pro",
      popular: true
    },
    {
      name: "Studio",
      price: "$99/mo",
      features: [
        "Everything in Pro",
        "8K export quality",
        "Team collaboration",
        "API access",
        "Dedicated support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Simple Pricing, No Surprises</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/20 to-primary/5 border border-primary' 
                  : 'bg-gray-900'
              }`}
            >
              {plan.popular && (
                <span className="bg-primary text-sm py-1 px-3 rounded-full">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && (
                  <span className="text-gray-400 ml-2">/month</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary-hover' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;