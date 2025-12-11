'use client'

import { useState, useRef, useEffect } from 'react';
import { useUIStore } from '@/store/uiStore';
import useMediaQuery from '@/app/MediaQuery';

export default function Terminal() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to my portfolio terminal!', sender: 'bot', timestamp: new Date() },
    { id: 2, text: 'Type "help" to see available commands', sender: 'bot', timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');
  const { terminalOpen } = useUIStore();
  const messagesEndRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: messages.length + 1, text: input, sender: 'user', timestamp: new Date() };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      let botResponse = 'Command not recognized. Type "help" for available commands.';
      if (input.toLowerCase() === 'help') {
        botResponse = 'Available commands: help, about, skills, projects, contact, clear';
      } else if (input.toLowerCase() === 'clear') {
        setMessages([]);
        setInput('');
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }, 300);

    setInput('');
  };

  if (!terminalOpen) return null;

  return (
    <div className={`w-full ${isMobile ? 'h-[30%]' : 'h-[30%]'} bg-black border-t border-gray-700 flex flex-col overflow-hidden`}>
      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-2 text-xs md:text-sm">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${msg.sender === 'user' ? 'text-blue-400' : 'text-green-400'}`}
          >
            {msg.sender === 'user' ? '> ' : '$ '} {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-700 p-2 md:p-3 flex gap-2">
        <span className="text-green-400 text-xs md:text-sm">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-transparent text-green-400 outline-none text-xs md:text-sm"
          autoFocus
        />
      </div>
    </div>
  );
}
