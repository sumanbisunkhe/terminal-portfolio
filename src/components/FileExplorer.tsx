'use client';

import { useState, useEffect } from 'react';
import styles from './IDEInterface.module.css';
import { ChevronDown, ChevronRight, Folder, FolderOpen, FileCode } from 'lucide-react';
import type { MenuItem } from './IDEInterface';

interface FileExplorerProps {
  menuItems: MenuItem[];
  onSelectFile: (id: string) => void;
  searchQuery?: string;
}

export function FileExplorer({ menuItems, onSelectFile, searchQuery = '' }: FileExplorerProps) {
  const [expandedFolders, setExpandedFolders] = useState(['terminal-portfolio', 'src', 'src/pages']);

  // Auto-expand folders when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      setExpandedFolders(['terminal-portfolio', 'src', 'src/pages']);
    }
  }, [searchQuery]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev =>
      prev.includes(folder)
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    );
  };

  const isExpanded = (folder: string) => expandedFolders.includes(folder);

  // Filter menu items based on search query
  const filteredItems = searchQuery.trim()
    ? menuItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : menuItems;

  const hasMatchingFiles = filteredItems.length > 0;

  return (
    <div className={styles.fileExplorer}>
      {/* Project Root */}
      <div>
        <div
          className={styles.folderItem}
          onClick={() => toggleFolder('terminal-portfolio')}
          style={{ paddingLeft: '4px', fontWeight: '600' }}
        >
          {isExpanded('terminal-portfolio') ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          {isExpanded('terminal-portfolio') ? <FolderOpen size={14} className={styles.folderIcon} /> : <Folder size={14} className={styles.folderIcon} />}
          <span>terminal-portfolio</span>
        </div>

        {isExpanded('terminal-portfolio') && (
          <div>
            {/* .idea folder */}
            <div>
              <div
                className={styles.folderItem}
                onClick={() => toggleFolder('.idea')}
                style={{ paddingLeft: '20px' }}
              >
                {isExpanded('.idea') ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                {isExpanded('.idea') ? <FolderOpen size={14} className={styles.folderIcon} /> : <Folder size={14} className={styles.folderIcon} />}
                <span style={{ color: '#7c7c7c' }}>.idea</span>
              </div>
            </div>

            {/* .mvn folder */}
            <div>
              <div
                className={styles.folderItem}
                onClick={() => toggleFolder('.mvn')}
                style={{ paddingLeft: '20px' }}
              >
                {isExpanded('.mvn') ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                {isExpanded('.mvn') ? <FolderOpen size={14} className={styles.folderIcon} /> : <Folder size={14} className={styles.folderIcon} />}
                <span style={{ color: '#7c7c7c' }}>.mvn</span>
              </div>
            </div>

            {/* src folder */}
            <div>
              <div
                className={styles.folderItem}
                onClick={() => toggleFolder('src')}
                style={{ paddingLeft: '20px' }}
              >
                {isExpanded('src') ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                {isExpanded('src') ? <FolderOpen size={14} className={styles.folderIcon} /> : <Folder size={14} className={styles.folderIcon} />}
                <span>src</span>
              </div>

              {isExpanded('src') && (
                <div>
                  {/* src/pages folder */}
                  <div>
                    <div
                      className={styles.folderItem}
                      onClick={() => toggleFolder('src/pages')}
                      style={{ paddingLeft: '36px' }}
                    >
                      {isExpanded('src/pages') ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      {isExpanded('src/pages') ? <FolderOpen size={14} className={styles.folderIcon} /> : <Folder size={14} className={styles.folderIcon} />}
                      <span>pages</span>
                      {searchQuery.trim() && hasMatchingFiles && (
                        <span style={{ marginLeft: '8px', color: '#888', fontSize: '11px' }}>
                          ({filteredItems.length})
                        </span>
                      )}
                    </div>

                    {isExpanded('src/pages') && (
                      <div className={styles.folderContents}>
                        {filteredItems.length > 0 ? (
                          filteredItems.map(item => (
                            <div
                              key={item.id}
                              className={styles.fileItem}
                              onClick={() => onSelectFile(item.id)}
                              style={{ paddingLeft: '52px' }}
                            >
                              <FileCode size={14} style={{ color: '#00d9ff' }} />
                              <span>{item.label}</span>
                            </div>
                          ))
                        ) : searchQuery.trim() ? (
                          <div
                            className={styles.fileItem}
                            style={{ paddingLeft: '52px', color: '#888', cursor: 'default' }}
                          >
                            <span>No files found</span>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* target folder */}
            <div>
              <div
                className={styles.folderItem}
                onClick={() => toggleFolder('target')}
                style={{ paddingLeft: '20px' }}
              >
                {isExpanded('target') ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                {isExpanded('target') ? <FolderOpen size={14} className={styles.folderIcon} /> : <Folder size={14} className={styles.folderIcon} />}
                <span>target</span>
              </div>
            </div>

            {/* Root files */}
            <div
              className={styles.fileItem}
              style={{ paddingLeft: '20px', cursor: 'default' }}
            >
              <FileCode size={14} style={{ color: '#ff6b6b' }} />
              <span style={{ color: '#7c7c7c' }}>.gitattributes</span>
            </div>

            <div
              className={styles.fileItem}
              style={{ paddingLeft: '20px', cursor: 'default' }}
            >
              <FileCode size={14} style={{ color: '#7c7c7c' }} />
              <span style={{ color: '#7c7c7c' }}>.gitignore</span>
            </div>

            <div
              className={styles.fileItem}
              style={{ paddingLeft: '20px', cursor: 'default' }}
            >
              <FileCode size={14} style={{ color: '#ff9800' }} />
              <span style={{ color: '#a8dadc' }}>HELP.md</span>
            </div>

            <div
              className={styles.fileItem}
              style={{ paddingLeft: '20px', cursor: 'default' }}
            >
              <FileCode size={14} style={{ color: '#9575cd' }} />
              <span style={{ color: '#a8dadc' }}>mvnw</span>
            </div>

            <div
              className={styles.fileItem}
              style={{ paddingLeft: '20px', cursor: 'default' }}
            >
              <FileCode size={14} style={{ color: '#64b5f6' }} />
              <span style={{ color: '#a8dadc' }}>mvnw.cmd</span>
            </div>

            <div
              className={styles.fileItem}
              style={{ paddingLeft: '20px', cursor: 'default' }}
            >
              <FileCode size={14} style={{ color: '#ff6b9d' }} />
              <span style={{ color: '#a8dadc' }}>pom.xml</span>
            </div>
          </div>
        )}
      </div>

      {/* External Libraries */}
      <div style={{ marginTop: '8px' }}>
        <div
          className={styles.folderItem}
          onClick={() => toggleFolder('external-libraries')}
          style={{ paddingLeft: '4px' }}
        >
          {isExpanded('external-libraries') ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <Folder size={14} className={styles.folderIcon} style={{ color: '#9575cd' }} />
          <span style={{ color: '#9575cd' }}>External Libraries</span>
        </div>
      </div>

      {/* Scratches and Consoles */}
      <div style={{ marginTop: '4px' }}>
        <div
          className={styles.folderItem}
          onClick={() => toggleFolder('scratches')}
          style={{ paddingLeft: '4px' }}
        >
          {isExpanded('scratches') ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <Folder size={14} className={styles.folderIcon} style={{ color: '#ff9800' }} />
          <span style={{ color: '#ff9800' }}>Scratches and Consoles</span>
        </div>
      </div>
    </div>
  );
}
