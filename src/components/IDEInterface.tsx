'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './IDEInterface.module.css';
import { FileExplorer } from './FileExplorer';
import { CodeEditor } from './CodeEditor';
import { Terminal } from './Terminal';
import { PreviewPanel } from './PreviewPanel';
import {
  Minus,
  Maximize2,
  X,
  Sun,
  Moon,
  Search,
  Settings,
  ChevronLeft,
  ChevronRight,
  Play,
  Bug,
  Hammer,
  Eye,
  EyeOff,
  Monitor,
  FileCode,
  ChevronDown,
  RefreshCw,
  GitBranch,
  Box,
  Layers,
  Terminal as TerminalIcon,
  Zap,
  PanelLeft,
  PanelLeftClose,
  Home,
  User,
  Briefcase,
  Target,
  FileText,
  BookOpen,
  Mail,
  AlertTriangle,
  ClipboardList,
  MapPin,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  folder: string;
}

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Home.tsx', icon: Home, folder: 'src/pages' },
  { id: 'about', label: 'About.tsx', icon: User, folder: 'src/pages' },
  { id: 'work', label: 'Work.tsx', icon: Briefcase, folder: 'src/pages' },
  { id: 'experience', label: 'Experience.tsx', icon: Target, folder: 'src/pages' },
  { id: 'resume', label: 'Resume.tsx', icon: FileText, folder: 'src/pages' },
  { id: 'blogs', label: 'Blogs.tsx', icon: BookOpen, folder: 'src/pages' },
  { id: 'contact', label: 'Contact.tsx', icon: Mail, folder: 'src/pages' },
];

interface BottomPanelTab {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
}

export function IDEInterface() {
  const [activeTab, setActiveTab] = useState('home');
  const [openTabs, setOpenTabs] = useState(['home']);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [bottomPanelOpen, setBottomPanelOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [runConfig, setRunConfig] = useState('Development');
  const [viewMode, setViewMode] = useState<'split' | 'preview-only'>('split');
  const [bottomPanelTabs, setBottomPanelTabs] = useState<BottomPanelTab[]>([
    { id: 'terminal', label: 'Terminal', icon: TerminalIcon, isActive: true },
    { id: 'output', label: 'Output', icon: ClipboardList, isActive: false },
    { id: 'problems', label: 'Problems', icon: AlertTriangle, isActive: false },
  ]);
  const [activePanelTab, setActivePanelTab] = useState('terminal');
  const ideRef = useRef<HTMLDivElement>(null);
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      ideRef.current?.requestFullscreen().catch(() => {
        setIsFullScreen(true);
      });
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const closeTab = (tabId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    const tabIndex = openTabs.indexOf(tabId);
    const newTabs = openTabs.filter(t => t !== tabId);
    setOpenTabs(newTabs);

    // If closing the active tab, switch to adjacent tab
    if (activeTab === tabId) {
      if (newTabs.length > 0) {
        // Switch to the tab that was before the closed tab, or the first tab
        const newActiveIndex = tabIndex > 0 ? tabIndex - 1 : 0;
        setActiveTab(newTabs[newActiveIndex]);
      } else {
        setActiveTab('');
      }
    }
  };

  const closeAllTabs = () => {
    setOpenTabs([]);
    setActiveTab('');
  };

  const openTab = (tabId: string) => {
    if (!openTabs.includes(tabId)) {
      setOpenTabs([...openTabs, tabId]);
    }
    setActiveTab(tabId);
  };

  // Scroll to active tab when it changes
  useEffect(() => {
    if (activeTab && tabsScrollRef.current) {
      const activeTabIndex = openTabs.indexOf(activeTab);
      if (activeTabIndex !== -1) {
        // Calculate the position to scroll to
        const tabWidth = 120; // min-width of tab
        const scrollPosition = activeTabIndex * tabWidth;
        
        // Scroll to make the active tab visible
        setTimeout(() => {
          tabsScrollRef.current?.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }, 50);
      }
    }
  }, [activeTab, openTabs]);

  const closePanelTab = (tabId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    const tabIndex = bottomPanelTabs.findIndex(tab => tab.id === tabId);
    const newTabs = bottomPanelTabs.filter(tab => tab.id !== tabId);
    setBottomPanelTabs(newTabs);

    // If closing the active tab, switch to adjacent tab
    if (activePanelTab === tabId) {
      if (newTabs.length > 0) {
        const newActiveIndex = tabIndex > 0 ? tabIndex - 1 : 0;
        setActivePanelTab(newTabs[newActiveIndex].id);
        setBottomPanelTabs(prevTabs =>
          prevTabs.map(tab => ({
            ...tab,
            isActive: tab.id === newTabs[newActiveIndex].id
          }))
        );
      } else {
        setBottomPanelOpen(false);
      }
    }
  };

  const closeAllPanelTabs = () => {
    setBottomPanelTabs([]);
    setBottomPanelOpen(false);
  };

  const toggleBottomPanel = () => {
    if (!bottomPanelOpen) {
      // If panel is closed and no tabs exist, restore default tabs
      if (bottomPanelTabs.length === 0) {
        setBottomPanelTabs([
          { id: 'terminal', label: 'Terminal', icon: TerminalIcon, isActive: true },
          { id: 'output', label: 'Output', icon: ClipboardList, isActive: false },
          { id: 'problems', label: 'Problems', icon: AlertTriangle, isActive: false },
        ]);
        setActivePanelTab('terminal');
      }
      setBottomPanelOpen(true);
    } else {
      setBottomPanelOpen(false);
    }
  };

  const switchPanelTab = (tabId: string) => {
    setActivePanelTab(tabId);
    setBottomPanelTabs(prevTabs =>
      prevTabs.map(tab => ({
        ...tab,
        isActive: tab.id === tabId
      }))
    );
  };

  const handleRunClick = () => {
    // Open panel if closed
    if (!bottomPanelOpen) {
      if (bottomPanelTabs.length === 0) {
        setBottomPanelTabs([
          { id: 'terminal', label: 'Terminal', icon: TerminalIcon, isActive: true },
          { id: 'output', label: 'Output', icon: ClipboardList, isActive: false },
          { id: 'problems', label: 'Problems', icon: AlertTriangle, isActive: false },
        ]);
      }
      setBottomPanelOpen(true);
      setActivePanelTab('terminal');
    } else {
      // If already open, just switch to terminal
      switchPanelTab('terminal');
    }
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsScrollRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = tabsScrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      tabsScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      ref={ideRef}
      className={`${styles.ideContainer} ${isFullScreen ? styles.fullscreen : ''} ${theme === 'light' ? styles.lightTheme : ''}`}
    >
      {/* Menu Bar */}
      <div className={styles.menuBar}>
        <div className={styles.logo}>SUMAN BISUNKHE</div>
        <div className={styles.mainMenu}>
          <div className={styles.menu}>File</div>
          <div className={styles.menu}>Edit</div>
          <div className={styles.menu}>View</div>
          <div className={styles.menu}>Navigate</div>
          <div className={styles.menu}>Run</div>
          <div className={styles.menu}>Tools</div>
          <div className={styles.menu}>Help</div>
        </div>
        <div className={styles.menuActions}>
          <button
            className={styles.iconBtn}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
          </button>
          <button className={styles.iconBtn} title="Search">
            <Search size={13} />
          </button>
          <button className={styles.iconBtn} title="Settings">
            <Settings size={13} />
          </button>
          
        </div>
        <div className={styles.titleActions}>
            <button className={styles.titleBtn} title="Minimize">
              <Minus size={13} />
            </button>
            <button className={styles.titleBtn} onClick={toggleFullScreen} title={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}>
              <Maximize2 size={13} />
            </button>
            <button className={styles.titleBtn}>
              <X size={13} />
            </button>
          </div>
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarGroup}>
          <button
            className={styles.toolbarBtn}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Toggle Sidebar"
          >
            <Layers size={14} />
          </button>
          <div className={styles.toolbarSeparator}></div>
          <div className={styles.projectSelector}>
            <Box size={13} />
            <span>Portfolio</span>
            <ChevronDown size={12} />
          </div>
        </div>

        <div className={styles.toolbarGroup}>
          <div className={styles.runConfigSelector}>
            <Play size={13} className={styles.runIcon} />
            <span>{runConfig}</span>
            <ChevronDown size={12} />
          </div>
          <button
            className={styles.toolbarBtn}
            onClick={handleRunClick}
            title="Run 'Development'"
          >
            <Play size={13} />
          </button>
          <button className={styles.toolbarBtn} title="Debug 'Development'">
            <Bug size={13} />
          </button>
          <button className={styles.toolbarBtn} title="Run with Coverage">
            <Zap size={13} />
          </button>
          <div className={styles.toolbarSeparator}></div>
          <button className={styles.toolbarBtn} title="Build Project">
            <Hammer size={13} />
          </button>
          <button className={styles.toolbarBtn} title="Rebuild">
            <RefreshCw size={13} />
          </button>
        </div>

        <div className={styles.toolbarGroup}>
          <button className={styles.toolbarBtn} title="Version Control">
            <GitBranch size={13} />
            <span className={styles.branchName}>main</span>
          </button>
          <button
            className={styles.toolbarBtn}
            onClick={toggleBottomPanel}
            title="Terminal"
          >
            <TerminalIcon size={13} />
          </button>
          <button
            className={styles.toolbarBtn}
            onClick={() => setViewMode(viewMode === 'split' ? 'preview-only' : 'split')}
            title={viewMode === 'split' ? 'Preview Only' : 'Split View'}
          >
            {viewMode === 'split' ? <PanelLeftClose size={13} /> : <PanelLeft size={13} />}
          </button>
          <button
            className={styles.toolbarBtn}
            onClick={() => setPreviewOpen(!previewOpen)}
            title={previewOpen ? 'Hide Preview' : 'Show Preview'}
          >
            {previewOpen ? <Eye size={13} /> : <EyeOff size={13} />}
          </button>
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* Sidebar */}
        {sidebarOpen && (
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={14} className={styles.searchInputIcon} />
            </div>
            <FileExplorer menuItems={menuItems} onSelectFile={openTab} searchQuery={searchQuery} />
          </div>
        )}

        {/* Editor Area - Only show in split mode */}
        {viewMode === 'split' && (
          <div className={styles.editorContainer}>
            {/* Tab Bar */}
            <div className={styles.tabBar}>
              {openTabs.length > 0 && (
                <button
                  className={styles.tabScrollBtn}
                  onClick={() => scrollTabs('left')}
                  title="Scroll Left"
                >
                  <ChevronLeft size={14} />
                </button>
              )}
              <div className={styles.tabsScroll} ref={tabsScrollRef}>
                {openTabs.map(tabId => {
                  const item = menuItems.find(m => m.id === tabId);
                  const IconComponent = item?.icon;
                  return (
                    <div
                      key={tabId}
                      className={`${styles.tab} ${activeTab === tabId ? styles.activeTab : ''}`}
                      onClick={() => setActiveTab(tabId)}
                    >
                      {IconComponent && <IconComponent size={14} className={styles.tabIcon} />}
                      <span className={styles.tabLabel}>{item?.label}</span>
                      <button
                        className={styles.closeBtn}
                        onClick={(e) => closeTab(tabId, e)}
                        title="Close"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  );
                })}
              </div>
              {openTabs.length > 0 && (
                <button
                  className={styles.tabScrollBtn}
                  onClick={() => scrollTabs('right')}
                  title="Scroll Right"
                >
                  <ChevronRight size={14} />
                </button>
              )}
              <div className={styles.tabBarActions}>
                <button
                  className={styles.previewToggleBtn}
                  onClick={() => setPreviewOpen(!previewOpen)}
                  title={previewOpen ? 'Hide Preview' : 'Show Preview'}
                >
                  {previewOpen ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
                {openTabs.length > 0 && (
                  <button
                    className={styles.closeAllBtn}
                    onClick={closeAllTabs}
                    title="Close All Tabs"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Code Editor Only */}
            <div className={styles.editorSection}>
              {activeTab && (
                <CodeEditor activeTab={activeTab} menuItems={menuItems} theme={theme} />
              )}

              {!activeTab && (
                <div className={styles.welcomeScreen}>
                  <div className={styles.welcomeContent}>
                    <h1>Welcome to my Portfolio</h1>
                    <p>Select a file to get started</p>
                    <div className={styles.recentFiles}>
                      <h3>Recent Files:</h3>
                      {menuItems.map(item => {
                        const IconComponent = item.icon;
                        return (
                          <button
                            key={item.id}
                            className={styles.recentFile}
                            onClick={() => openTab(item.id)}
                          >
                            <IconComponent size={16} />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Preview Panel - Show in both modes */}
        {((previewOpen && activeTab && viewMode === 'split') || (viewMode === 'preview-only' && activeTab)) && (
          <div className={`${styles.previewSection} ${viewMode === 'preview-only' ? styles.previewFullWidth : ''}`}>
            <div className={styles.previewHeader}>
              <span className={styles.previewTitle}>
                {viewMode === 'preview-only' && (
                  <span className={styles.previewActiveFile}>
                    {(() => {
                      const item = menuItems.find(m => m.id === activeTab);
                      const IconComponent = item?.icon;
                      return IconComponent ? <IconComponent size={14} /> : null;
                    })()}
                    {menuItems.find(m => m.id === activeTab)?.label}
                  </span>
                )}
                {viewMode === 'split' && 'Preview'}
              </span>
              <button
                className={styles.previewClose}
                onClick={() => {
                  if (viewMode === 'preview-only') {
                    setViewMode('split');
                  } else {
                    setPreviewOpen(false);
                  }
                }}
                title={viewMode === 'preview-only' ? 'Switch to Split View' : 'Close Preview'}
              >
                <X size={14} />
              </button>
            </div>
            <PreviewPanel activeTab={activeTab} theme={theme} />
          </div>
        )}

        {/* Show message when preview-only mode but no tab selected */}
        {viewMode === 'preview-only' && !activeTab && (
          <div className={styles.previewOnlyEmpty}>
            <div className={styles.welcomeContent}>
              <h1>Preview Mode</h1>
              <p>Select a file from the sidebar to preview</p>
              <div className={styles.recentFiles}>
                <h3>Quick Access:</h3>
                {menuItems.map(item => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      className={styles.recentFile}
                      onClick={() => openTab(item.id)}
                    >
                      <IconComponent size={16} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Panel */}
      {bottomPanelOpen && (
        <div className={styles.bottomPanel}>
          {bottomPanelTabs.length > 0 ? (
            <>
              <div className={styles.panelTabs}>
                <div className={styles.panelTabsContainer}>
                  {bottomPanelTabs.map(tab => {
                    const IconComponent = tab.icon;
                    return (
                      <div
                        key={tab.id}
                        className={`${styles.panelTab} ${tab.isActive ? styles.activePanel : ''}`}
                        onClick={() => switchPanelTab(tab.id)}
                      >
                        <IconComponent size={14} className={styles.panelTabIcon} />
                        <span className={styles.panelTabLabel}>{tab.label}</span>
                        <button
                          className={styles.panelTabCloseBtn}
                          onClick={(e) => closePanelTab(tab.id, e)}
                          title={`Close ${tab.label}`}
                        >
                          <X size={12} />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.panelTabActions}>
                  <button
                    className={styles.panelCloseAll}
                    onClick={closeAllPanelTabs}
                    title="Close All Panel Tabs"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {activePanelTab === 'terminal' && <Terminal />}
              {activePanelTab === 'output' && (
                <div className={styles.panelContent}>
                  <div className={styles.outputContent}>
                    <div className={styles.outputLine}>Build completed successfully</div>
                    <div className={styles.outputLine}>✓ Compiled in 1.2s</div>
                    <div className={styles.outputLine}>No issues found</div>
                  </div>
                </div>
              )}
              {activePanelTab === 'problems' && (
                <div className={styles.panelContent}>
                  <div className={styles.problemsContent}>
                    <div className={styles.problemsEmpty}>No problems found</div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className={styles.panelEmpty}>
              <div className={styles.panelEmptyContent}>
                <h3>No panels open</h3>
                <p>All panel tabs have been closed.</p>
                <div className={styles.panelEmptyActions}>
                  <button
                    className={styles.panelRestoreBtn}
                    onClick={() => {
                      setBottomPanelTabs([
                        { id: 'terminal', label: 'Terminal', icon: TerminalIcon, isActive: true },
                        { id: 'output', label: 'Output', icon: ClipboardList, isActive: false },
                        { id: 'problems', label: 'Problems', icon: AlertTriangle, isActive: false },
                      ]);
                      setActivePanelTab('terminal');
                    }}
                  >
                    Restore Default Tabs
                  </button>
                  <button
                    className={styles.panelCloseBtn}
                    onClick={() => setBottomPanelOpen(false)}
                  >
                    Close Panel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Status Bar */}
      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusItem}>
            <FileCode size={12} className={styles.statusIcon} />
            {activeTab ? menuItems.find(m => m.id === activeTab)?.label || 'No file' : 'No file'}
          </span>
          <span className={styles.statusSeparator}>|</span>
          <span className={styles.statusItem}>
            <MapPin size={12} className={styles.statusIcon} />
            Ln 1, Col 1
          </span>
          <span className={styles.statusSeparator}>|</span>
          <span className={styles.statusItem}>UTF-8</span>
          <span className={styles.statusSeparator}>|</span>
          <span className={styles.statusItem}>LF</span>
          {activeTab && activeTab !== 'resume' && (
            <>
              <span className={styles.statusSeparator}>|</span>
              <span className={styles.statusItem}>TypeScript JSX</span>
            </>
          )}
        </div>

        <div className={styles.statusCenter}>
          <span className={styles.statusItem}>
            <CheckCircle2 size={12} className={styles.statusIcon} />
            Ready
          </span>
        </div>

        <div className={styles.statusRight}>
          <button
            className={styles.statusBtn}
            onClick={() => setPreviewOpen(!previewOpen)}
            title={previewOpen ? 'Hide Preview' : 'Show Preview'}
          >
            {previewOpen ? <Eye size={12} /> : <EyeOff size={12} />}
            <span>Preview: {previewOpen ? 'On' : 'Off'}</span>
          </button>
          <button
            className={styles.statusBtn}
            onClick={toggleBottomPanel}
            title={bottomPanelOpen ? 'Hide Panel' : 'Show Panel'}
          >
            <Monitor size={12} />
            <span>Panel: {bottomPanelOpen ? 'Open' : 'Closed'}</span>
          </button>
          <button
            className={styles.statusBtn}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Moon size={12} /> : <Sun size={12} />}
            <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
