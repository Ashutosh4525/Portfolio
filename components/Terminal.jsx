'use client'

import { useEffect, useRef, useState } from 'react';
import useMediaQuery from '@/app/MediaQuery';
import { useEditorStore } from '@/store/EditorStore';
import { themePresets, useUIStore } from '@/store/uiStore';

const baseMessages = [
  { id: 1, text: 'Terminal ready.', sender: 'bot' },
  {
    id: 2,
    text: 'Commands: help, about, skills, projects, contact, mode editor|showcase|zen, content classic|reference, theme darkplus|dracula|monokai|nord|githubdark, clear',
    sender: 'bot',
  },
];

export default function Terminal({ docked = false }) {
  const [messages, setMessages] = useState(baseMessages.map((message) => ({ ...message, timestamp: new Date() })));
  const [input, setInput] = useState('');
  const { terminalOpen, setLayoutMode, setContentVariant, setThemeId, toggleTerminal } = useUIStore();
  const { openTabById } = useEditorStore();
  const messagesEndRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const command = input.trim().toLowerCase();
    const userMessage = { id: messages.length + 1, text: input, sender: 'user', timestamp: new Date() };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      let botResponse = 'Unknown command. Try help for available options.';
      const [, value] = command.split(' ');

      if (command === 'help') {
        botResponse =
          'Open a section with about, skills, projects, or contact. Use mode editor|showcase|zen, content classic|reference, or theme darkplus|dracula|monokai|nord|githubdark.';
      } else if (command === 'clear') {
        setMessages([]);
        setInput('');
        return;
      } else if (['about', 'skills', 'projects', 'contact'].includes(command)) {
        openTabById(command);
        botResponse = `Opening ${command}...`;
      } else if (command.startsWith('mode ') && ['editor', 'showcase', 'zen'].includes(value)) {
        setLayoutMode(value);
        botResponse = `Layout changed to ${value}.`;
      } else if (command.startsWith('content ') && ['classic', 'reference'].includes(value)) {
        setContentVariant(value);
        botResponse = `Content style changed to ${value}.`;
      } else if (command.startsWith('theme ')) {
        const normalizedTheme = value?.replace(/[^a-z]/g, '') ?? '';
        const matchedTheme = Object.keys(themePresets).find((themeKey) => themeKey.toLowerCase() === normalizedTheme);

        if (matchedTheme) {
          setThemeId(matchedTheme);
          botResponse = `Theme changed to ${themePresets[matchedTheme].label}.`;
        }
      }

      setMessages((previous) => [
        ...previous,
        {
          id: previous.length + 1,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }, 250);

    setInput('');
  };

  if (!terminalOpen) return null;

  return (
    <div
      className={`flex overflow-hidden border-t ${
        docked
          ? 'w-[320px] min-w-70 max-w-90 flex-col border-l border-t-0'
          : `w-full flex-col ${isMobile ? 'h-[40%]' : 'h-[35%]'}`
      }`}
      style={{
        backgroundColor: 'var(--panel-bg)',
        borderColor: 'var(--panel-border)',
        color: 'var(--text-main)',
      }}
    >
      <div
        className="flex items-center justify-between border-b px-3 py-2 text-[11px] uppercase tracking-[0.18em]"
        style={{ borderColor: 'var(--panel-border)', color: 'var(--text-muted)' }}
      >
        <span>Terminal<span className='p-1'>{docked ? 'Side Dock' : 'Panel'} 
        </span></span>
        
        <button onClick={toggleTerminal} className="rounded px-1 transition group-hover:opacity-100"
                style={{ color: 'var(--text-muted)' }}
                title="Close tab">x</button>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-3 font-mono text-xs md:text-[13px]">
        {messages.map((message) => (
          <div
            key={message.id}
            style={{ color: message.sender === 'user' ? 'var(--accent)' : 'var(--accent-strong)' }}
          >
            {message.sender === 'user' ? '> ' : '$ '} {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2 border-t p-2 md:p-3" style={{ borderColor: 'var(--panel-border)' }}>
        <span className="font-mono text-xs md:text-sm" style={{ color: 'var(--accent-strong)' }}>
          $
        </span>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && handleSend()}
          className="flex-1 bg-transparent font-mono text-xs outline-none placeholder:text-(--text-muted) md:text-sm"
          style={{ color: 'var(--text-main)' }}
          placeholder="Try: projects or mode showcase"
          autoFocus
        />
      </div>
    </div>
  );
}
