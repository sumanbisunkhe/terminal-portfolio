'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './IDEInterface.module.css';

export function Terminal() {
  const [history, setHistory] = useState<string[]>([
    '$ npm run dev',
    '> portfolio@1.0.0 dev',
    '> next dev',
    '  ▲ Next.js 16.0.1',
    '  - Local:        http://localhost:3000',
    '  - Environments: .env.local',
    '',
    '✓ Ready in 2.5s',
  ]);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-focus input when terminal is shown
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const newHistory = [...history, `$ ${input}`];
      
      // Simple command responses
      if (input === 'clear') {
        setHistory([]);
      } else if (input === 'help') {
        newHistory.push('Available commands: clear, help, status, build');
      } else if (input === 'status') {
        newHistory.push('✓ All systems operational');
      } else if (input === 'build') {
        newHistory.push('> Building...');
        newHistory.push('✓ Build complete in 3.2s');
      } else if (input.trim()) {
        newHistory.push('Command not found: ' + input);
      }
      
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className={styles.terminal}>
      <div ref={terminalRef} className={styles.terminalOutput}>
        {history.map((line, i) => (
          <div key={i} className={styles.terminalLine}>
            {line}
          </div>
        ))}
      </div>
      <div className={styles.terminalInput}>
        <span className={styles.terminalPrompt}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className={styles.terminalInputField}
          spellCheck="false"
        />
      </div>
    </div>
  );
}
