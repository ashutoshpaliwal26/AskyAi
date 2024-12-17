import React from 'react';
import { Moon, Sun, Volume2, VolumeX, MessageSquare, Zap } from 'lucide-react';

export const ChatSettings = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-300">Display</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon size={18} className="text-gray-400" />
            <span className="text-sm text-gray-300">Dark Mode</span>
          </div>
          <button className="w-12 h-6 bg-purple-500 rounded-full relative">
            <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-300">Sound</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 size={18} className="text-gray-400" />
            <span className="text-sm text-gray-300">Message Sounds</span>
          </div>
          <button className="w-12 h-6 bg-gray-700 rounded-full relative">
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-300">Chat</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare size={18} className="text-gray-400" />
              <span className="text-sm text-gray-300">Message Preview</span>
            </div>
            <button className="w-12 h-6 bg-purple-500 rounded-full relative">
              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-gray-400" />
              <span className="text-sm text-gray-300">Quick Responses</span>
            </div>
            <button className="w-12 h-6 bg-purple-500 rounded-full relative">
              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};