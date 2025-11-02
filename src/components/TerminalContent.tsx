"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './TerminalContent.module.css';

interface Tab {
  id: string;
  title: string;
  content: string[];
  isActive: boolean;
}

export function TerminalContent() {
  const [displayText, setDisplayText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 'portfolio',
      title: 'Portfolio',
      content: [],
      isActive: true
    }
  ]);
  const contentRef = useRef<HTMLDivElement>(null);

  const commands = [
    { type: 'command', text: '$ whoami' },
    { type: 'output', text: 'developer | designer | full-stack engineer' },
    { type: 'blank', text: '' },
    { type: 'command', text: '$ cat skills.json' },
    { type: 'output', text: '{\n  "frontend": ["React", "Next.js", "Three.js", "TypeScript"],\n  "backend": ["Node.js", "Express", "MongoDB"],\n  "design": ["Figma", "Blender", "Adobe Suite"],\n  "specialties": ["3D Graphics", "Interactive UI", "Performance"]\n}' },
    { type: 'blank', text: '' },
    { type: 'command', text: '$ ls -la projects/' },
    { type: 'output', text: 'total 42\ndrwx------ 8 developer staff  256 Nov 2024 .\ndrwx------ 15 developer staff  480 Nov 2024 ..\n-rw-r--r-- 1 developer staff 2048 Nov 2024 terminal-portfolio\n-rw-r--r-- 1 developer staff 1024 Nov 2024 interactive-3d-scene\n-rw-r--r-- 1 developer staff 3072 Nov 2024 ai-powered-app' },
    { type: 'blank', text: '' },
    { type: 'command', text: '$ echo "Let\'s build something amazing together"' },
    { type: 'output', text: 'Let\'s build something amazing together' },
  ];

  const closeTab = (tabId: string) => {
    if (tabs.length === 1) return; // Don't close the last tab
    
    setTabs(prevTabs => {
      const newTabs = prevTabs.filter(tab => tab.id !== tabId);
      const closedTab = prevTabs.find(tab => tab.id === tabId);
      
      if (closedTab?.isActive && newTabs.length > 0) {
        newTabs[0].isActive = true;
      }
      
      return newTabs;
    });
  };

  const closeAllTabs = () => {
    setTabs([{
      id: 'new',
      title: 'Terminal',
      content: [],
      isActive: true
    }]);
    setDisplayText('');
    setCommandIndex(0);
  };

  const switchTab = (tabId: string) => {
    setTabs(prevTabs => 
      prevTabs.map(tab => ({
        ...tab,
        isActive: tab.id === tabId
      }))
    );
  };

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    if (commandIndex < commands.length) {
      const timer = setTimeout(() => {
        const cmd = commands[commandIndex];
        setDisplayText((prev) => {
          const newText = prev + (prev ? '\n' : '') + cmd.text;
          setTimeout(() => {
            if (contentRef.current) {
              contentRef.current.scrollTop = contentRef.current.scrollHeight;
            }
          }, 0);
          return newText;
        });
        setCommandIndex((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [commandIndex, commands]);

  const lines = displayText.split('\n');
  const activeTab = tabs.find(tab => tab.isActive);

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.headerControls}>
          <div className={`${styles.dot} bg-red-500`}></div>
          <div className={`${styles.dot} bg-yellow-500`}></div>
          <div className={`${styles.dot} bg-green-500`}></div>
        </div>
        <div className={styles.title}>Terminal — Portfolio</div>
      </div>
      
      <div className={styles.tabBar}>
        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${styles.tab} ${tab.isActive ? styles.activeTab : ''}`}
              onClick={() => switchTab(tab.id)}
            >
              <span className={styles.tabLabel}>{tab.title}</span>
              <button
                className={styles.tabCloseBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
                title={`Close ${tab.title}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <button
          className={styles.closeAllBtn}
          onClick={closeAllTabs}
          title="Close All Tabs"
        >
          ✕
        </button>
      </div>

      <div ref={contentRef} className={styles.content}>
        <div className={styles.welcome}>
          {'>'} Terminal Portfolio v2.0 — Ultimate Edition
        </div>
        {lines.map((line, i) => {
          const cmd = commands.find((c) => c.text === line);
          return (
            <div
              key={i}
              className={`${
                cmd?.type === 'command'
                  ? styles.command
                  : cmd?.type === 'output'
                    ? styles.output
                    : ''
              }`}
            >
              {cmd?.type === 'command' && <span className={styles.prompt}>{'$ '}</span>}
              {line}
              {i === lines.length - 1 && commandIndex >= commands.length && (
                <span className={`${styles.cursor} ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                  ▋
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
