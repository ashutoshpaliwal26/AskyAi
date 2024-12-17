import React from 'react';
import { History, Settings, Search } from 'lucide-react';
import { ChatHistory } from './ChatHistory';
import { ChatSettings } from './ChatSettings';

export const ChatSidebar = () => {
  const [activeTab, setActiveTab] = React.useState<'history' | 'settings'>('history');
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="w-64 bg-gray-800 h-full flex flex-col border-r border-gray-700">
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="flex border-b border-gray-700">
        <button
          className={`flex-1 p-4 text-sm font-medium ${
            activeTab === 'history'
              ? 'text-purple-500 border-b-2 border-purple-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('history')}
        >
          <div className="flex items-center justify-center gap-2">
            <History size={18} />
            History
          </div>
        </button>
        <button
          className={`flex-1 p-4 text-sm font-medium ${
            activeTab === 'settings'
              ? 'text-purple-500 border-b-2 border-purple-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('settings')}
        >
          <div className="flex items-center justify-center gap-2">
            <Settings size={18} />
            Settings
          </div>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'history' ? (
          <ChatHistory searchTerm={searchTerm} />
        ) : (
          <ChatSettings />
        )}
      </div>
    </div>
  );
};