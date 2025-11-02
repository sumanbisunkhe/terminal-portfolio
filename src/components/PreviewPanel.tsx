'use client';

import styles from './PreviewPanel.module.css';
import { Github, Mail, Linkedin, Instagram, MapPin, Globe, Clock, BookOpen, Eye, MessageCircle, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';

interface PreviewPanelProps {
  activeTab: string;
  theme?: 'dark' | 'light';
}

export function PreviewPanel({ activeTab, theme = 'dark' }: PreviewPanelProps) {
  const getThemeColors = () => {
    if (theme === 'light') {
      return {
        primary: '#0066cc',
        accent: '#0099ff',
        text: '#1a1a1a',
        textSecondary: '#333333',
        textTertiary: '#666666',
        bgCard: '#f5f5f5',
        borderColor: '#e0e0e0',
        highlightBg: 'rgba(0, 99, 255, 0.1)',
        highlightBorder: '#0066cc'
      };
    }
    return {
      primary: '#00d9ff',
      accent: '#00ffff',
      text: '#eaeaea',
      textSecondary: '#a8dadc',
      textTertiary: '#7a9ca3',
      bgCard: 'rgba(0, 217, 255, 0.05)',
      borderColor: '#00d9ff',
      highlightBg: 'rgba(0, 217, 255, 0.1)',
      highlightBorder: '#00ffff'
    };
  };

  const colors = getThemeColors();

  const getPreviewContent = (tabId: string) => {
    switch (tabId) {
      case 'home':
        return (
          <div className={styles.previewContent}>
            <div className={styles.heroSection}>
              <p className={styles.greeting}>Hi, I'm</p>
              <h1 className={styles.name}>Suman Bisunkhe</h1>
              <h2 className={styles.role}>Java Developer</h2>
              <p className={styles.tagline}>
                Passionate Java enthusiast crafting robust and scalable solutions.
                Transforming complex problems into elegant, efficient code.
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.primaryBtn}>View My Work</button>
                <button className={styles.secondaryBtn}>Contact Me</button>
              </div>
            </div>

            <div className={styles.statsGrid}>
              {[
                {
                  value: '10+',
                  label: 'Projects',
                  desc: 'Successfully Completed',
                  icon: Briefcase
                },
                {
                  value: '200+',
                  label: 'Contributions',
                  desc: 'On GitHub',
                  icon: Github
                },
                {
                  value: '13+',
                  label: 'Skills',
                  desc: 'Technical Expertise',
                  icon: Award
                },
                {
                  value: '1+',
                  label: 'Year',
                  desc: 'Professional Experience',
                  icon: Clock
                }
              ].map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <stat.icon size={24} style={{ color: colors.accent, marginBottom: '8px' }} />
                  <h3 className={styles.statValue}>{stat.value}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                  <p className={styles.statDesc}>{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          <div className={styles.previewContent}>
            <h1 className={styles.sectionTitle}>Get to Know Me</h1>
{/* 
            <div className={styles.profileHeader}>
              <h3 className={styles.name}>Suman Bisunkhe</h3>
              <p className={styles.profileTagline}>Java Developer</p>
            </div> */}

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}>
              <div style={{
                padding: '24px',
                background: colors.bgCard,
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <MapPin size={24} style={{ color: colors.accent }} />
                  <h3 style={{ margin: 0, fontSize: '18px', color: colors.text }}>Location</h3>
                </div>
                <p style={{ margin: 0, color: colors.textSecondary, lineHeight: '1.6' }}>
                  Kathmandu, Nepal<br />
                  Available for remote opportunities
                </p>
              </div>

              <div style={{
                padding: '24px',
                background: colors.bgCard,
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Briefcase size={24} style={{ color: colors.accent }} />
                  <h3 style={{ margin: 0, fontSize: '18px', color: colors.text }}>Current Role</h3>
                </div>
                <p style={{ margin: 0, color: colors.textSecondary, lineHeight: '1.6' }}>
                  Java Developer at Qpixel<br />
                  Building scalable backend solutions
                </p>
              </div>

              <div style={{
                padding: '24px',
                background: colors.bgCard,
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <GraduationCap size={24} style={{ color: colors.accent }} />
                  <h3 style={{ margin: 0, fontSize: '18px', color: colors.text }}>Education</h3>
                </div>
                <p style={{ margin: 0, color: colors.textSecondary, lineHeight: '1.6' }}>
                  BSc.CSIT (6th Semester)<br />
                  Texas International College
                </p>
              </div>
            </div>

            <div className={styles.bioSection}>
              <h2 className={styles.sectionSubtitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={20} style={{ color: colors.accent }} />
                My Story
              </h2>
              <p className={styles.bioParagraph}>
                Hi there! I'm Suman Bisunkhe, a passionate Java enthusiast currently pursuing
                a BSc.CSIT in my sixth semester. With a keen interest in building robust and
                scalable applications, I am driven by an unwavering desire to learn and innovate
                throughout my software development journey.
              </p>

              <p className={styles.bioParagraph}>
                I started my programming journey with a fascination for how software could solve
                real-world problems. Currently, I'm pursuing my B.Sc. CSIT at Texas International
                College while working as a Java Developer at Qpixel, where I contribute to
                production-ready applications and backend services.
              </p>

              <p className={styles.bioParagraph}>
                I believe in writing clean, maintainable code that stands the test of time. My
                approach combines technical excellence with a deep understanding of business needs,
                resulting in solutions that deliver real value.
              </p>
            </div>

            <div style={{ marginTop: '48px' }}>
              <h2 className={styles.sectionSubtitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={20} style={{ color: colors.accent }} />
                What I Bring to the Table
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                marginTop: '24px'
              }}>
                <div style={{
                  padding: '20px',
                  background: colors.highlightBg,
                  border: `1px solid ${colors.borderColor}`,
                  borderRadius: '8px'
                }}>
                  <h4 style={{
                    margin: '0 0 12px 0',
                    color: colors.accent,
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>Backend Excellence</h4>
                  <p style={{ margin: 0, color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6' }}>
                    Expertise in Spring Boot, RESTful APIs, and microservices architecture with
                    a focus on scalability and performance.
                  </p>
                </div>

                <div style={{
                  padding: '20px',
                  background: colors.highlightBg,
                  border: `1px solid ${colors.borderColor}`,
                  borderRadius: '8px'
                }}>
                  <h4 style={{
                    margin: '0 0 12px 0',
                    color: colors.accent,
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>Security First</h4>
                  <p style={{ margin: 0, color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6' }}>
                    Strong understanding of Spring Security, JWT authentication, and best practices
                    for building secure applications.
                  </p>
                </div>

                <div style={{
                  padding: '20px',
                  background: colors.highlightBg,
                  border: `1px solid ${colors.borderColor}`,
                  borderRadius: '8px'
                }}>
                  <h4 style={{
                    margin: '0 0 12px 0',
                    color: colors.accent,
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>Database Design</h4>
                  <p style={{ margin: 0, color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6' }}>
                    Proficient in PostgreSQL and MySQL with experience in designing efficient
                    database schemas and optimizing queries.
                  </p>
                </div>

                <div style={{
                  padding: '20px',
                  background: colors.highlightBg,
                  border: `1px solid ${colors.borderColor}`,
                  borderRadius: '8px'
                }}>
                  <h4 style={{
                    margin: '0 0 12px 0',
                    color: colors.accent,
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>Problem Solving</h4>
                  <p style={{ margin: 0, color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6' }}>
                    Analytical mindset with a passion for solving complex problems through
                    elegant and efficient code solutions.
                  </p>
                </div>
              </div>
            </div>


          </div>
        );

      case 'work':
        return (
          <div className={styles.previewContent}>
            <h1 className={styles.sectionTitle}>My Projects</h1>

            <h2 className={styles.sectionSubtitle}>Backend Development</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>URL Shortener</h3>
                    <a href="https://github.com/sumanbisunkhe/url-shortner-thymeleaf" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  A high-performance, full-stack web application that efficiently condenses long URLs into short, manageable links.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Secure Link Generation with unique short codes</li>
                  <li>Spring Security authentication & JWT tokens</li>
                  <li>Link Management Dashboard</li>
                  <li>Efficient redirection engine</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>JWT</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>MySQL</span>
                </div>
              </div>

              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Content Management System</h3>
                    <a href="https://github.com/sumanbisunkhe/content-mgmt-system" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Enterprise-grade CMS built with Spring Boot for managing dynamic content across website sections.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Role-Based Access Control (RBAC)</li>
                  <li>RESTful API for CRUD operations</li>
                  <li>Content organization & categorization</li>
                  <li>Audit logging for modifications</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Java 17</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>PostgreSQL</span>
                </div>
              </div>

              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Inventory Control System</h3>
                    <a href="https://github.com/sumanbisunkhe/inventory-control-system" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Intelligent inventory management solution with real-time visibility and control over stock levels.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Real-time stock tracking</li>
                  <li>Supplier management database</li>
                  <li>Purchase order lifecycle</li>
                  <li>Low-stock automated alerts</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>JWT</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Hibernate</span>
                </div>
              </div>

              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Library Management System</h3>
                    <a href="https://github.com/sumanbisunkhe/library-management-system" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Comprehensive backend solution for automating library operations and managing resources digitally.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Member & profile management</li>
                  <li>Book catalog with search</li>
                  <li>Borrowing & returning system</li>
                  <li>Automatic fine calculation</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>PostgreSQL</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>JWT</span>
                </div>
              </div>

              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Pulse Application</h3>
                    <a href="https://github.com/sumanbisunkhe/pulse-sercure-api" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Secure backend application demonstrating robust user authentication and account management principles.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Spring Security integration</li>
                  <li>User registration & login</li>
                  <li>Profile management</li>
                  <li>Server-side rendering</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>PostgreSQL</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Thymeleaf</span>
                </div>
              </div>

              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>BlogEcho</h3>
                    <a href="https://github.com/sumanbisunkhe/BlogEcho" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Backend API for a modern blogging platform emphasizing secure and structured environment.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Blog post CRUD operations</li>
                  <li>JWT authentication</li>
                  <li>User management system</li>
                  <li>Extensible architecture</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>PostgreSQL</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>JWT</span>
                </div>
              </div>

              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>KURAKANI: Chat Application</h3>
                    <a href="https://github.com/sumanbisunkhe/Kurakani" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Real-time interactive chat application leveraging WebSockets with privacy-focused connection requests.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Real-time messaging with WebSockets</li>
                  <li>Connection request system</li>
                  <li>Private chat rooms</li>
                  <li>User presence tracking</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>WebSocket</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>PostgreSQL</span>
                </div>
              </div>

              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Expense Tracker</h3>
                    <a href="https://github.com/sumanbisunkhe/Expense-Tracker" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Personal finance management tool for recording, categorizing, and monitoring expenses effectively.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Expense logging & tracking</li>
                  <li>Category organization</li>
                  <li>User-specific data management</li>
                  <li>Dashboard & reporting</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>PostgreSQL</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Maven</span>
                </div>
              </div>

              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>User Registration System</h3>
                    <a href="https://github.com/sumanbisunkhe/User-Registration-System" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Classic CRUD web application for managing user accounts with form handling and validation.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Full user CRUD operations</li>
                  <li>Spring Security protection</li>
                  <li>Dynamic template rendering</li>
                  <li>Server-side form validation</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Security</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Thymeleaf</span>
                </div>
              </div>
            </div>

            <h2 className={styles.sectionSubtitle} style={{ marginTop: '48px' }}>Full Stack Development</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Room Finder System</h3>
                    <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                      <a href="https://github.com/sumanbisunkhe/room-finder-system-frontend" target="_blank" rel="noopener noreferrer"
                        style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '3px', textDecoration: 'none', fontSize: '12px' }}
                        title="Frontend Repository">
                        <Github size={16} />
                        <span>FE</span>
                      </a>
                      <a href="https://github.com/sumanbisunkhe/room-finder-system-backend" target="_blank" rel="noopener noreferrer"
                        style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '3px', textDecoration: 'none', fontSize: '12px' }}
                        title="Backend Repository">
                        <Github size={16} />
                        <span>BE</span>
                      </a>
                    </div>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Digital marketplace connecting property seekers with landlords with separate frontend and backend.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Dual user roles system</li>
                  <li>Advanced search & filtering</li>
                  <li>Property management</li>
                  <li>RESTful backend API</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>PostgreSQL</span>
                </div>
              </div>
            </div>

            <h2 className={styles.sectionSubtitle} style={{ marginTop: '48px' }}>Frontend Development</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Portfolio Website</h3>
                    <a href="https://github.com/sumanbisunkhe/portfolio" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Clean, responsive, and static portfolio website serving as a digital business card.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Fully responsive design</li>
                  <li>Project showcase section</li>
                  <li>Modern CSS3 styling</li>
                  <li>Icon integration</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>HTML5</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>CSS3</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>JavaScript</span>
                </div>
              </div>

              <div className={styles.projectCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Responsive Portfolio</h3>
                    <a href="https://github.com/sumanbisunkhe/professional-portfolio" target="_blank" rel="noopener noreferrer"
                      style={{ color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '13px', flexShrink: 0 }}
                      title="View on GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Modern, high-performance portfolio with cutting-edge technologies and smooth interactions.
                </p>
                <h4 style={{ color: colors.accent, fontSize: '14px', marginBottom: '10px', marginTop: 0 }}>Key Features:</h4>
                <ul style={{ color: colors.textSecondary, margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                  <li>Built with Next.js 13</li>
                  <li>TypeScript for reliability</li>
                  <li>Tailwind CSS styling</li>
                  <li>Dark/light mode toggle</li>
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Next.js</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>TypeScript</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className={styles.previewContent}>
            <h1 className={styles.sectionTitle}>Professional Journey</h1>

            <h2 className={styles.sectionSubtitle}>Work Experience</h2>

            <div className={styles.experienceCard} style={{ borderColor: colors.borderColor }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, color: colors.text }}>Java Developer</h3>
                <span style={{ color: colors.primary, fontSize: '14px', fontWeight: '600' }}>July 2025 - Present</span>
              </div>
              <p className={styles.company} style={{ color: colors.textSecondary }}>Qpixel</p>
              <p style={{ marginTop: '12px', color: colors.textSecondary }}>
                Developing and maintaining production-ready Java applications, contributing to backend services,
                and API development. Working with modern Java frameworks and technologies to deliver scalable solutions.
              </p>
            </div>

            <div className={styles.experienceCard} style={{ borderColor: colors.borderColor }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, color: colors.text }}>Java Developer Intern</h3>
                <span style={{ color: colors.primary, fontSize: '14px', fontWeight: '600' }}>April 2025 - June 2025</span>
              </div>
              <p className={styles.company} style={{ color: colors.textSecondary }}>Qpixel</p>
              <p style={{ marginTop: '12px', color: colors.textSecondary }}>
                Worked on Spring Boot applications and gained hands-on experience with real-world Java development.
                Contributed to backend services and API development, learning industry best practices and coding standards.
              </p>
            </div>

            <h2 className={styles.sectionSubtitle} style={{ marginTop: '48px' }}>Education</h2>

            <div className={styles.educationCard} style={{ borderColor: colors.borderColor }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h3 className={styles.degree} style={{ margin: 0, color: colors.text }}>B.Sc. CSIT</h3>
                <span style={{ color: colors.primary, fontSize: '14px', fontWeight: '600' }}>2023 - Present</span>
              </div>
              <p className={styles.institution} style={{ color: colors.textSecondary }}>Texas International College</p>
              <p style={{ marginTop: '12px', color: colors.textSecondary, lineHeight: '1.6' }}>
                Pursuing a Bachelor's degree in Computer Science and Information Technology, focusing on software
                development, algorithms, and data structures. Building a strong foundation in computer science principles
                and practical programming skills.
              </p>
            </div>

            <div className={styles.educationCard} style={{ borderColor: colors.borderColor }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h3 className={styles.degree} style={{ margin: 0, color: colors.text }}>Higher Secondary Education (+2)</h3>
                <span style={{ color: colors.primary, fontSize: '14px', fontWeight: '600' }}>2019 - 2022</span>
              </div>
              <p className={styles.institution} style={{ color: colors.textSecondary }}>St. Xavier's College</p>
              <p style={{ marginTop: '12px', color: colors.textSecondary, lineHeight: '1.6' }}>
                Completed higher secondary education with a focus on science and mathematics, building a strong
                foundation for further studies in computer science. Developed analytical and problem-solving skills
                that form the basis of software development.
              </p>
            </div>

            <div style={{ marginTop: '48px', padding: '24px', background: colors.highlightBg, border: `2px solid ${colors.highlightBorder}`, borderRadius: '12px' }}>
              <h3 style={{ color: colors.accent, marginTop: 0, marginBottom: '16px', fontSize: '20px' }}>Key Highlights</h3>
              <ul style={{ margin: 0, paddingLeft: '24px', color: colors.textSecondary }}>
                <li style={{ marginBottom: '8px' }}>Current Role: Java Developer at Qpixel (since July 2025)</li>
                <li style={{ marginBottom: '8px' }}>Previous Role: Java Developer Intern at Qpixel (3 months internship)</li>
                <li style={{ marginBottom: '8px' }}>Education Status: Currently pursuing B.Sc. CSIT (started 2023)</li>
                <li>Background: Science stream in +2 level from St. Xavier's College</li>
              </ul>
            </div>
          </div>
        );

      case 'resume':
        return (
          <div className={styles.previewContent}>
            <h1 className={styles.sectionTitle}>Resume</h1>

            <div style={{
              width: '100%',
              marginTop: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px'
            }}>
              <div style={{
                textAlign: 'center',
                maxWidth: '500px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontSize: '16px',
                  color: colors.textSecondary,
                  lineHeight: '1.8',
                  margin: '0'
                }}>
                  Here's my resume! Take a look at my professional experience, education, and technical expertise.
                  Feel free to download it for your records or open it in a new tab to view the full document.
                </p>
              </div>

              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={() => {
                    const pdfWindow = window.open();
                    if (pdfWindow) {
                      pdfWindow.location.href = '/sumanbisunkhe-resume.pdf';
                    }
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: theme === 'light' ? 'linear-gradient(135deg, #0066cc 0%, #0099ff 100%)' : 'linear-gradient(135deg, #00d9ff 0%, #00ffff 100%)',
                    color: theme === 'light' ? '#ffffff' : '#000000',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: 'none',
                    fontSize: '14px',
                    boxShadow: `0 4px 15px ${colors.highlightBg}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Eye size={18} /> View Resume
                </button>

                <a
                  href="/sumanbisunkhe-resume.pdf"
                  download="Suman-Bisunkhe-Resume.pdf"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'transparent',
                    color: colors.primary,
                    padding: '12px 28px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: `2px solid ${colors.primary}`,
                    fontSize: '14px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.accent;
                    e.currentTarget.style.background = colors.highlightBg;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.primary;
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FileText size={18} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        );

      case 'blogs':
        return (
          <div className={styles.previewContent}>
            <h1 className={styles.sectionTitle}>Technical Blog</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              <div className={styles.statCard}>
                <FileText size={24} style={{ color: colors.accent, marginBottom: '8px' }} />
                <h3 className={styles.statValue}>3</h3>
                <p className={styles.statLabel}>Articles</p>
                <p className={styles.statDesc}>Published</p>
              </div>
              <div className={styles.statCard}>
                <Eye size={24} style={{ color: colors.accent, marginBottom: '8px' }} />
                <h3 className={styles.statValue}>5.1K</h3>
                <p className={styles.statLabel}>Total Views</p>
                <p className={styles.statDesc}>All Time</p>
              </div>
              <div className={styles.statCard}>
                <MessageCircle size={24} style={{ color: colors.accent, marginBottom: '8px' }} />
                <h3 className={styles.statValue}>99</h3>
                <p className={styles.statLabel}>Comments</p>
                <p className={styles.statDesc}>Community</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              <div className={styles.blogCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Building Scalable Spring Boot Applications</h3>
                    <span style={{ color: colors.primary, fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>Dec 15, 2024</span>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Learn best practices for building production-ready Spring Boot applications with proper architecture and design patterns.
                </p>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>Spring Boot</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>Java</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>Backend</span>
                </div>
                <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: colors.textTertiary, borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><BookOpen size={14} /> 8 min read</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Eye size={14} /> 1,250 views</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MessageCircle size={14} /> 23 comments</span>
                </div>
              </div>

              <div className={styles.blogCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>Understanding JWT Authentication</h3>
                    <span style={{ color: colors.primary, fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>Dec 1, 2024</span>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Deep dive into JWT tokens and how to implement secure authentication in your Spring Boot applications.
                </p>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>Security</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>JWT</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>Authentication</span>
                </div>
                <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: colors.textTertiary, borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><BookOpen size={14} /> 12 min read</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Eye size={14} /> 2,100 views</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MessageCircle size={14} /> 45 comments</span>
                </div>
              </div>

              <div className={styles.blogCard} style={{ borderColor: colors.borderColor, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: colors.text, lineHeight: '1.4' }}>PostgreSQL Performance Optimization</h3>
                    <span style={{ color: colors.primary, fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>Nov 20, 2024</span>
                  </div>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: '16px', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>
                  Tips and tricks for optimizing database queries, creating efficient indexes, and improving overall PostgreSQL performance.
                </p>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>PostgreSQL</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>Database</span>
                  <span style={{ background: colors.highlightBg, color: colors.accent, padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>Performance</span>
                </div>
                <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: colors.textTertiary, borderTop: `1px solid ${colors.borderColor}`, paddingTop: '12px', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><BookOpen size={14} /> 15 min read</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Eye size={14} /> 1,800 views</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MessageCircle size={14} /> 31 comments</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className={styles.previewContent}>
            <h1 className={styles.sectionTitle}>Let's Connect</h1>

            <p style={{ textAlign: 'center', color: colors.textSecondary, opacity: 0.9, fontSize: '16px', marginBottom: '32px', lineHeight: '1.8' }}>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '48px' }}>
              <a
                href="mailto:sumanbisunkhe@gmail.com"
                className={styles.projectCard}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: 0,
                  borderColor: colors.borderColor
                }}
              >
                <Mail size={32} style={{ color: colors.accent }} />
                <h3 style={{ margin: 0, fontSize: '20px', color: colors.text }}>Email</h3>
                <p style={{ margin: 0, fontSize: '14px', textAlign: 'center', color: colors.textSecondary }}>sumanbisunkhe@gmail.com</p>
              </a>

              <a
                href="https://github.com/sumanbisunkhe"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: 0,
                  borderColor: colors.borderColor
                }}
              >
                <Github size={32} style={{ color: colors.accent }} />
                <h3 style={{ margin: 0, fontSize: '20px', color: colors.text }}>GitHub</h3>
                <p style={{ margin: 0, fontSize: '14px', textAlign: 'center', color: colors.textSecondary }}>@sumanbisunkhe</p>
              </a>

              <a
                href="https://linkedin.com/in/sumanbisunkhe"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: 0,
                  borderColor: colors.borderColor
                }}
              >
                <Linkedin size={32} style={{ color: colors.accent }} />
                <h3 style={{ margin: 0, fontSize: '20px', color: colors.text }}>LinkedIn</h3>
                <p style={{ margin: 0, fontSize: '14px', textAlign: 'center', color: colors.textSecondary }}>Suman Bisunkhe</p>
              </a>

              <a
                href="https://www.instagram.com/suman_bisunkhe/"
                className={styles.projectCard}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: 0,
                  borderColor: colors.borderColor
                }}
              >
                <Instagram size={32} style={{ color: colors.accent }} />
                <h3 style={{ margin: 0, fontSize: '20px', color: colors.text }}>Instagram</h3>
                <p style={{ margin: 0, fontSize: '14px', textAlign: 'center', color: colors.textSecondary }}>@suman_bisunkhe</p>
              </a>
            </div>

            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              <div>
                <h2 className={styles.sectionSubtitle} style={{ marginTop: 0, color: colors.text, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={20} style={{ color: colors.accent }} />
                  Response Time

                </h2>
                <p className={styles.bioParagraph} style={{ margin: 0, color: colors.textSecondary }}>
                  I typically respond to emails and messages within 24-48 hours.
                  For urgent matters, feel free to reach out via phone.
                </p>
              </div>

              <div>
                <h2 className={styles.sectionSubtitle} style={{ marginTop: 0, color: colors.text, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={20} style={{ color: colors.accent }} />
                  Location
                </h2>
                <p className={styles.bioParagraph} style={{ margin: 0, color: colors.textSecondary, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={16} /> Kathmandu, Nepal
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Globe size={16} /> Available for remote opportunities worldwide
                  </span>
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return <div className={styles.previewContent}>Preview not available</div>;
    }
  };

  return (
    <div
      className={styles.previewContainer}
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        color: theme === 'dark' ? '#eaeaea' : '#1a1a1a'
      }}
    >
      {getPreviewContent(activeTab)}
    </div>
  );
}
