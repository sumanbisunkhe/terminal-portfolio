'use client';

import { useState } from 'react';

export function InteractiveNav() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'HOME', icon: '🏠' },
    { id: 'about', label: 'ABOUT', icon: '👤' },
    { id: 'projects', label: 'PROJECTS', icon: '💻' },
    { id: 'skills', label: 'SKILLS', icon: '⚡' },
    { id: 'contact', label: 'CONTACT', icon: '📧' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex gap-4 bg-black bg-opacity-80 px-8 py-4 rounded-full border-2 border-cyan-500 shadow-lg shadow-cyan-500/50 backdrop-blur-sm">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded transition-all duration-300 font-mono text-sm font-bold uppercase tracking-wider ${
              activeSection === section.id
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                : 'text-cyan-500 hover:text-magenta-500 hover:border-b-2 hover:border-cyan-500'
            }`}
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
