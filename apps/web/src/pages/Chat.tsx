import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ChatMessage } from '../components/ChatMessage';
// import { ChatSidebar } from '../components/chat/ChatSidebar';
import { APISERVICE } from '../service/API';

export const Chat = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm Asky. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "") return;
    
    // Add user message immediately
    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    const userMessage = input;
    setInput('');
    setIsThinking(true);
    setIsTyping(true);
    
    try {
      // Fetch bot response from the server
      const response = await APISERVICE.post("api/ai", { prompt: userMessage });
      // const response = {data : {success : false, data : "Hello world"}};
      if (response.data.success) {
        setIsThinking(false);
        const botMessage = response.data.data;
        addTypingEffect(botMessage);
      } else {
        setIsThinking(false);
        addTypingEffect("Sorry, I couldn't process your request.");
      }
    } catch (error) {
      setIsThinking(false);
      addTypingEffect("Error occurred. Please try again later.");
    }
  };

  const addTypingEffect = (fullMessage: string) => {
    let currentMessage = '';
    let index = 0;

    // Add an initial empty bot message
    setMessages((prev) => [...prev, { text: '', isBot: true }]);

    const typingInterval = setInterval(() => {
      currentMessage += fullMessage[index];
      index++;

      // Update the last bot message progressively
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1] = { text: currentMessage, isBot: true };
        return updatedMessages;
      });

      // Stop the typing effect when all characters are displayed
      if (index === fullMessage.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 0); // Typing speed: Adjust interval to slow down/speed up
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16" style={{
      display : "flex",
      justifyContent : "center"
    }}>
      <div className="h-[calc(100vh-4rem)] flex">
        {/* <ChatSidebar /> */}
        <div className="flex-1 flex flex-col" style={{
          width : "70vw"
        }}>
          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} message={msg.text} isBot={msg.isBot} />
            ))}

            {/* Typing indicator when bot is typing */}
            {isThinking && (
              <ChatMessage message="..." isBot={true} />
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 mb-1 bg-gray-800 rounded-xl">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-500 p-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Send size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
