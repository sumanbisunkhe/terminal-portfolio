'use client';

import styles from './IDEInterface.module.css';
import { getFileContent } from '@/components/fileContent';
import { useMemo } from 'react';
import type { MenuItem } from './IDEInterface';

interface CodeEditorProps {
  activeTab: string;
  menuItems: MenuItem[];
  theme?: 'dark' | 'light';
}

export function CodeEditor({ activeTab, theme = 'dark' }: CodeEditorProps) {
  const content = getFileContent(activeTab, theme);

  // Count lines by creating a temporary element and parsing the HTML
  const lineCount = useMemo(() => {
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    // Get the text content and count newlines
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const lines = textContent.split('\n').filter(line => line.length > 0 || true); // Keep empty lines
    
    return lines.length;
  }, [content]);

  return (
    <div className={styles.editorArea}>
      <div className={styles.lineNumbers}>
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i} className={styles.lineNumber}>
            {i + 1}
          </div>
        ))}
      </div>
      <pre className={styles.codeEditor}>
        <code 
          className={styles.code}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </pre>
    </div>
  );
}
