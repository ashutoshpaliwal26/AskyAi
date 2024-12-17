import React from 'react';
import { Check } from 'lucide-react';
import { Plan } from '../types';

export const Pricing = () => {
  const plans: Plan[] = [
    {
      name: 'Free',
      price: '$0',
      features: [
        '100 messages per day',
        'Basic AI responses',
        'Standard support',
        'Web access only'
      ],
      buttonText: 'Get Started',
    },
    {
      name: 'Pro',
      price: '$19/month',
      features: [
        'Unlimited messages',
        'Advanced AI capabilities',
        'Priority support',
        'API access',
        'Custom AI training',
        'Team collaboration'
      ],
      buttonText: 'Upgrade to Pro',
      recommended: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-xl">Choose the plan that's right for you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-animation">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-gray-800 rounded-lg p-8 transform transition-all hover:scale-105 ${
                plan.recommended ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.recommended && (
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Recommended
                </span>
              )}
              
              <h3 className="text-2xl font-bold text-white mt-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-white mt-4">{plan.price}</p>
              
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transform transition-all hover:scale-105 ${
                  plan.recommended
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};