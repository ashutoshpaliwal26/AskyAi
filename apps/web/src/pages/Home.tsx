import { useNavigate } from 'react-router-dom';
import { MessageSquare, Shield, Zap } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-purple-500">Asky.AI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl animate-slide-up">
            Your intelligent AI companion for meaningful conversations and instant answers
          </p>
          <button
            onClick={() => navigate('/chat')}
            className="px-8 py-4 bg-purple-500 rounded-lg text-xl font-semibold hover:bg-purple-600 transition-all transform hover:scale-105 animate-scale-in"
          >
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-20 stagger-animation">
          <div className="p-6 bg-gray-800 rounded-lg transform transition-all hover:scale-105">
            <MessageSquare className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
            <p className="text-gray-400">Engage in human-like conversations with our advanced AI</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg transform transition-all hover:scale-105">
            <Zap className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Get instant responses to all your queries</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg transform transition-all hover:scale-105">
            <Shield className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-400">Your conversations are always private and secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};