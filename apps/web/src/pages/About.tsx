import React from 'react';
import { Bot, Brain, Users, Shield } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Asky.AI</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're building the future of AI-powered conversations, making advanced artificial intelligence accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              At Asky.AI, we believe in democratizing access to advanced AI technology. Our mission is to create an AI companion that understands, learns, and grows with its users, making artificial intelligence more personal and accessible than ever before.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We envision a future where AI assistants are not just tools, but trusted companions that enhance human capabilities and creativity. Through continuous innovation and user-centered design, we're working to make this vision a reality.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6">
            <Bot className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Advanced AI</h3>
            <p className="text-gray-400">State-of-the-art language models powering our conversations</p>
          </div>
          <div className="text-center p-6">
            <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
            <p className="text-gray-400">Our AI evolves and improves with every interaction</p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Community Driven</h3>
            <p className="text-gray-400">Built with and for our growing user community</p>
          </div>
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Privacy First</h3>
            <p className="text-gray-400">Your data security and privacy is our top priority</p>
          </div>
        </div>
      </div>
    </div>
  );
};