// src/components/Chatbot.jsx
import { useState } from 'react';
import './index.css';

const Chatbot = () => {
  const openChatInNewWindow = () => {
    window.open('https://poe.com/BotInvoice', '_blank', 'width=500,height=700');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={openChatInNewWindow}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        aria-label="Open Invoice Assistant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default Chatbot;