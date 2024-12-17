import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ChatHistoryProps {
  searchTerm: string;
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({ searchTerm }) => {
  // Mock history data - in a real app, this would come from your backend
  const conversations = [
    { id: 1, title: "Getting started with React", date: "2024-03-15" },
    { id: 2, title: "How to center a div", date: "2024-03-14" },
    { id: 3, title: "Understanding TypeScript", date: "2024-03-13" },
    { id: 4, title: "API Integration help", date: "2024-03-12" },
  ].filter(conv => 
    conv.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2">
      {conversations.map((conv) => (
        <button
          key={conv.id}
          className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors mb-2 group"
        >
          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-purple-500" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-200 truncate">
                {conv.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(conv.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};