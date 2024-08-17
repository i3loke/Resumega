import React, { useEffect, useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessages = [...messages, { text: input, sender: 'user' }];
    // Call your RAG API here and add the response to the chat
    // For now, we'll just echo the message
    const botResponse = { text: `You said: ${input}`, sender: 'bot' };
    setMessages([...newMessages, botResponse]);
    setInput('');
  };

  const handleContact = () => {
    window.open('tel:+1234567890'); // Replace with your Google Voice number
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-80 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="h-16 flex p-2">
        <button
          type="button"
          onClick={handleContact}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Contact Me
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
          Send
        </button>
      </form>
    </div>
  );
}