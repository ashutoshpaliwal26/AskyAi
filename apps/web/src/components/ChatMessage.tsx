import React from 'react';
// import ReactMarkdown from 'react-markdown';
import MarkdownPreview from '@uiw/react-markdown-preview';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4 animate-slide-in`}>
      <div
        className={`max-w-[70%] p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
          isBot
            ? 'bg-gradient-to-r from-gray-800 to-gray-700'
            : 'bg-gradient-to-r from-purple-600 to-indigo-600'
        }`}
      >
        {isBot ? (
          <MarkdownPreview source={message} style={{
            backgroundColor : "transparent"
          }}/>
        ) : (
          <p className="text-white">{message}</p>
        )}
      </div>
    </div>
  );
};
