// Theme-aware color schemes
const getColors = (theme: 'dark' | 'light' = 'dark') => {
  if (theme === 'light') {
    return {
      keyword: '#0000ff',
      type: '#267f99',
      string: '#a31515',
      comment: '#008000',
      function: '#795e26',
      variable: '#001080',
      tag: '#800000',
      attribute: '#ff0000',
      value: '#0451a3',
      operator: '#000000',
      number: '#098658',
      import: '#af00db'
    };
  }
  return {
    keyword: '#ff6b9d',
    type: '#c792ea',
    string: '#c3e88d',
    comment: '#546e7a',
    function: '#ffcb6b',
    variable: '#82aaff',
    tag: '#f07178',
    attribute: '#c792ea',
    value: '#eaeaea',
    operator: '#89ddff',
    number: '#f78c6c',
    import: '#ff6b9d'
  };
};

export function getFileContent(fileId: string, theme: 'dark' | 'light' = 'dark'): string {
  const c = getColors(theme);
  
  const contents: Record<string, string> = {
    home: `<span style="color: ${c.import}; font-weight: bold">import</span> <span style="color: ${c.type}">React</span> <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'react'</span>;
<span style="color: ${c.import}; font-weight: bold">import</span> { <span style="color: ${c.type}">Hero</span>, <span style="color: ${c.type}">StatsGrid</span> } <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'@/components'</span>;
<span style="color: ${c.import}; font-weight: bold">import</span> <span style="color: ${c.variable}">styles</span> <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'./Home.module.css'</span>;

<span style="color: ${c.comment}; font-style: italic">/**
 * Home Page Component
 * Portfolio landing page for Suman Bisunkhe
 */</span>
<span style="color: ${c.keyword}; font-weight: bold">export default function</span> <span style="color: ${c.function}; font-weight: bold">Home</span>()<span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">JSX.Element</span> {
  <span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.variable}; font-weight: bold">stats</span> = [
    { <span style="color: ${c.variable}">label</span>: <span style="color: ${c.string}">'Projects'</span>, <span style="color: ${c.variable}">value</span>: <span style="color: ${c.number}; font-weight: bold">10</span><span style="color: ${c.string}">'+'</span>, <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">'Successfully Completed'</span> },
    { <span style="color: ${c.variable}">label</span>: <span style="color: ${c.string}">'Contributions'</span>, <span style="color: ${c.variable}">value</span>: <span style="color: ${c.number}; font-weight: bold">200</span><span style="color: ${c.string}">'+'</span>, <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">'On GitHub'</span> },
    { <span style="color: ${c.variable}">label</span>: <span style="color: ${c.string}">'Skills'</span>, <span style="color: ${c.variable}">value</span>: <span style="color: ${c.number}; font-weight: bold">13</span><span style="color: ${c.string}">'+'</span>, <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">'Technical Expertise'</span> },
    { <span style="color: ${c.variable}">label</span>: <span style="color: ${c.string}">'Year'</span>, <span style="color: ${c.variable}">value</span>: <span style="color: ${c.number}; font-weight: bold">1</span><span style="color: ${c.string}">'+'</span>, <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">'Professional Experience'</span> },
  ];

  <span style="color: ${c.keyword}; font-weight: bold">return</span> (
    <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">section</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">styles</span>.<span style="color: ${c.variable}">hero</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"hero-content"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"greeting"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Hi, I'm</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h1</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">styles</span>.<span style="color: ${c.variable}">title</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">Suman Bisunkhe</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span>
        
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h2</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">styles</span>.<span style="color: ${c.variable}">subtitle</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">Java Developer</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
        
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">styles</span>.<span style="color: ${c.variable}">description</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">Passionate Java enthusiast crafting robust and scalable solutions.</span>
          <span style="color: ${c.value}">Transforming complex problems into elegant, efficient code.</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
        
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"cta-buttons"</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">button</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"primary"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">View My Work</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">button</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">button</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"secondary"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Contact Me</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">button</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Statistics Grid</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">StatsGrid</span> <span style="color: ${c.attribute}">stats</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">stats</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
    <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>
  );
}

<span style="color: ${c.comment}; font-style: italic">/**
 * Statistics Grid Component
 */</span>
<span style="color: ${c.keyword}; font-weight: bold">function</span> <span style="color: ${c.function}; font-weight: bold">StatsGrid</span>({ <span style="color: ${c.variable}">stats</span> }<span style="color: ${c.operator}">:</span> { <span style="color: ${c.variable}">stats</span><span style="color: ${c.operator}">:</span> <span style="color: ${c.keyword}; font-weight: bold">any</span>[] }) {
  <span style="color: ${c.keyword}; font-weight: bold">return</span> (
    <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"stats-grid"</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">stats</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">stat</span>, <span style="color: ${c.variable}">index</span><span style="color: ${c.value}">)</span> <span style="color: ${c.keyword}">=&gt;</span> (
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">index</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"stat-card"</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">stat</span>.<span style="color: ${c.variable}">value</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"label"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">stat</span>.<span style="color: ${c.variable}">label</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"description"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">stat</span>.<span style="color: ${c.variable}">description</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
      ))<span style="color: ${c.value}">}</span>
    <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
  );
}`,

    about: `<span style="color: ${c.import}; font-weight: bold">import</span> <span style="color: ${c.type}">React</span> <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'react'</span>;

<span style="color: ${c.comment}; font-style: italic">/**
 * About Page - Suman Bisunkhe
 * Personal background and education
 */</span>
<span style="color: ${c.keyword}; font-weight: bold">export default function</span> <span style="color: ${c.function}; font-weight: bold">About</span>()<span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">JSX.Element</span> {
  <span style="color: ${c.keyword}; font-weight: bold">return</span> (
    <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">section</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"about-section"</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Get to Know Me</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span>
      
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"profile-header"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Suman Bisunkhe</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"tagline"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Java Developer</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"bio"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">Hi there! I'm Suman Bisunkhe, a passionate Java enthusiast</span>
          <span style="color: ${c.value}">currently pursuing a BSc.CSIT in my sixth semester. With a</span>
          <span style="color: ${c.value}">keen interest in building robust and scalable applications,</span>
          <span style="color: ${c.value}">I am driven by an unwavering desire to learn and innovate</span>
          <span style="color: ${c.value}">throughout my software development journey.</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>

        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">I started my programming journey with a fascination for how</span>
          <span style="color: ${c.value}">software could solve real-world problems. Currently, I'm</span>
          <span style="color: ${c.value}">pursuing my B.Sc. CSIT at Texas International College while</span>
          <span style="color: ${c.value}">gaining practical experience through my Java development</span>
          <span style="color: ${c.value}">internship.</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>

        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">I believe in writing clean, maintainable code that stands</span>
          <span style="color: ${c.value}">the test of time. My approach combines technical excellence</span>
          <span style="color: ${c.value}">with a deep understanding of business needs, resulting in</span>
          <span style="color: ${c.value}">solutions that deliver real value.</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"education"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Education</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
        
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"education-card"</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">BSc.CSIT</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"institution"</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.value}">Texas International College, Kathmandu</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"duration"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">2022 - Present</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
    <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>
  );
}`,

    work: `<span style="color: ${c.import}; font-weight: bold">import</span> <span style="color: ${c.type}">React</span> <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'react'</span>;
<span style="color: ${c.import}; font-weight: bold">import</span> { <span style="color: ${c.type}">Github</span> } <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'lucide-react'</span>;

<span style="color: ${c.comment}; font-style: italic">/**
 * Projects Portfolio - Suman Bisunkhe
 * Backend, Full Stack, and Frontend Development
 */</span>

<span style="color: ${c.keyword}; font-weight: bold">interface</span> <span style="color: ${c.type}; font-weight: bold">Project</span> {
  <span style="color: ${c.variable}">name</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">description</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">features</span>: <span style="color: ${c.type}">string</span>[];
  <span style="color: ${c.variable}">technologies</span>: <span style="color: ${c.type}">string</span>[];
  <span style="color: ${c.variable}">github</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">frontendRepo</span>?: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">backendRepo</span>?: <span style="color: ${c.type}">string</span>;
}

<span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.variable}; font-weight: bold">backendProjects</span><span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">Project</span>[] = [
  {
    <span style="color: ${c.variable}">name</span>: <span style="color: ${c.string}">'URL Shortener'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">'High-performance, full-stack web application'</span>,
    <span style="color: ${c.variable}">features</span>: [
      <span style="color: ${c.string}">'Secure Link Generation with unique short codes'</span>,
      <span style="color: ${c.string}">'Spring Security authentication & JWT tokens'</span>,
      <span style="color: ${c.string}">'Link Management Dashboard'</span>,
      <span style="color: ${c.string}">'Efficient redirection engine'</span>
    ],
    <span style="color: ${c.variable}">technologies</span>: [<span style="color: ${c.string}">'Spring Boot'</span>, <span style="color: ${c.string}">'JWT'</span>, <span style="color: ${c.string}">'MySQL'</span>],
    <span style="color: ${c.variable}">github</span>: <span style="color: ${c.string}">'https://github.com/sumanbisunkhe/url-shortner-thymeleaf'</span>
  },
  {
    <span style="color: ${c.variable}">name</span>: <span style="color: ${c.string}">'Content Management System'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">'Enterprise-grade CMS with Spring Boot'</span>,
    <span style="color: ${c.variable}">features</span>: [
      <span style="color: ${c.string}>'Role-Based Access Control (RBAC)'</span>,
      <span style="color: ${c.string}>'RESTful API for CRUD operations'</span>,
      <span style="color: ${c.string}>'Content organization & categorization'</span>,
      <span style="color: ${c.string}>'Audit logging for modifications'</span>
    ],
    <span style="color: ${c.variable}">technologies</span>: [<span style="color: ${c.string}">'Java 17'</span>, <span style="color: ${c.string}">'Spring Boot'</span>, <span style="color: ${c.string}">'PostgreSQL'</span>],
    <span style="color: ${c.variable}">github</span>: <span style="color: ${c.string}">'https://github.com/sumanbisunkhe/content-mgmt-system'</span>
  },
  {
    <span style="color: ${c.variable}">name</span>: <span style="color: ${c.string}>'KURAKANI: Chat Application'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}>'Real-time chat with WebSockets'</span>,
    <span style="color: ${c.variable}">features</span>: [
      <span style="color: ${c.string}>'Real-time messaging with WebSockets'</span>,
      <span style="color: ${c.string}>'Connection request system'</span>,
      <span style="color: ${c.string}>'Private chat rooms'</span>,
      <span style="color: ${c.string}>'User presence tracking'</span>
    ],
    <span style="color: ${c.variable}">technologies</span>: [<span style="color: ${c.string}">'Spring Boot'</span>, <span style="color: ${c.string}">'WebSocket'</span>, <span style="color: ${c.string}">'PostgreSQL'</span>],
    <span style="color: ${c.variable}">github</span>: <span style="color: ${c.string}">'https://github.com/sumanbisunkhe/Kurakani'</span>
  }
];

<span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.variable}; font-weight: bold">fullStackProjects</span><span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">Project</span>[] = [
  {
    <span style="color: ${c.variable}">name</span>: <span style="color: ${c.string}>'Room Finder System'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}>'Digital marketplace for property seekers'</span>,
    <span style="color: ${c.variable}">features</span>: [
      <span style="color: ${c.string}>'Dual user roles system'</span>,
      <span style="color: ${c.string}>'Advanced search & filtering'</span>,
      <span style="color: ${c.string}>'Property management'</span>,
      <span style="color: ${c.string}>'RESTful backend API'</span>
    ],
    <span style="color: ${c.variable}">technologies</span>: [<span style="color: ${c.string}">'Spring Boot'</span>, <span style="color: ${c.string}">'PostgreSQL'</span>],
    <span style="color: ${c.variable}">frontendRepo</span>: <span style="color: ${c.string}">'https://github.com/sumanbisunkhe/room-finder-system-frontend'</span>,
    <span style="color: ${c.variable}">backendRepo</span>: <span style="color: ${c.string}">'https://github.com/sumanbisunkhe/room-finder-system-backend'</span>,
    <span style="color: ${c.variable}">github</span>: <span style="color: ${c.string}">''</span>
  }
];

<span style="color: ${c.keyword}; font-weight: bold">export default function</span> <span style="color: ${c.function}; font-weight: bold">Work</span>()<span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">JSX.Element</span> {
  <span style="color: ${c.keyword}; font-weight: bold">return</span> (
    <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"projects-container"</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">My Projects</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Backend Development Section</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Backend Development</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"projects-grid"</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">backendProjects</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">project</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">ProjectCard</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">name</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">project</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
          ))<span style="color: ${c.value}">}</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Full Stack Development Section</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Full Stack Development</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"projects-grid"</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">fullStackProjects</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">project</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">ProjectCard</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">name</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">project</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
          ))<span style="color: ${c.value}">}</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>
    <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
  );
}

<span style="color: ${c.comment}; font-style: italic">/**
 * Project Card Component
 */</span>
<span style="color: ${c.keyword}; font-weight: bold">function</span> <span style="color: ${c.function}; font-weight: bold">ProjectCard</span>({ <span style="color: ${c.variable}">project</span> }<span style="color: ${c.operator}">:</span> { <span style="color: ${c.variable}">project</span><span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">Project</span> }) {
  <span style="color: ${c.keyword}; font-weight: bold">return</span> (
    <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"project-card"</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"card-header"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">name</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">frontendRepo</span> ? (
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">a</span> <span style="color: ${c.attribute}">href</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">frontendRepo</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">Github</span> <span style="color: ${c.operator}">/&gt;</span> <span style="color: ${c.value}">FE</span>
            <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">a</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">a</span> <span style="color: ${c.attribute}">href</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">backendRepo</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">Github</span> <span style="color: ${c.operator}">/&gt;</span> <span style="color: ${c.value}">BE</span>
            <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">a</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
        ) : (
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">a</span> <span style="color: ${c.attribute}">href</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">github</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">Github</span> <span style="color: ${c.operator}">/&gt;</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">a</span><span style="color: ${c.operator}">&gt;</span>
        )<span style="color: ${c.value}">}</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">description</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
      
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h4</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Key Features:</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h4</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">ul</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">features</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">feature</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">li</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">feature</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">feature</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">li</span><span style="color: ${c.operator}">&gt;</span>
        ))<span style="color: ${c.value}">}</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">ul</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"tech-stack"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">project</span>.<span style="color: ${c.variable}">technologies</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">tech</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">tech</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"tag"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">tech</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
        ))<span style="color: ${c.value}">}</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
    <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
  );
}`,

    experience: `<span style="color: ${c.import}; font-weight: bold">import</span> <span style="color: ${c.type}">React</span> <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'react'</span>;

<span style="color: ${c.comment}; font-style: italic">/**
 * Experience Page - Professional Journey
 * Work experience and educational background
 */</span>

<span style="color: ${c.keyword}; font-weight: bold">interface</span> <span style="color: ${c.type}; font-weight: bold">WorkExperience</span> {
  <span style="color: ${c.variable}">role</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">company</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">period</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">description</span>: <span style="color: ${c.type}">string</span>;
}

<span style="color: ${c.keyword}; font-weight: bold">interface</span> <span style="color: ${c.type}; font-weight: bold">Education</span> {
  <span style="color: ${c.variable}">degree</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">institution</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">period</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">description</span>: <span style="color: ${c.type}">string</span>;
}

<span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.variable}; font-weight: bold">workExperience</span><span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">WorkExperience</span>[] = [
  {
    <span style="color: ${c.variable}">role</span>: <span style="color: ${c.string}">'Java Developer'</span>,
    <span style="color: ${c.variable}">company</span>: <span style="color: ${c.string}">'Qpixel'</span>,
    <span style="color: ${c.variable}">period</span>: <span style="color: ${c.string}">'July 2025 - Present'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">\`Developing and maintaining production-ready Java applications,
    contributing to backend services, and API development. Working with
    modern Java frameworks and technologies to deliver scalable solutions.\`</span>
  },
  {
    <span style="color: ${c.variable}">role</span>: <span style="color: ${c.string}>'Java Developer Intern'</span>,
    <span style="color: ${c.variable}">company</span>: <span style="color: ${c.string}">'Qpixel'</span>,
    <span style="color: ${c.variable}">period</span>: <span style="color: ${c.string}">'April 2025 - June 2025'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">\`Worked on Spring Boot applications and gained hands-on experience
    with real-world Java development. Contributed to backend services and
    API development, learning industry best practices and coding standards.\`</span>
  }
];

<span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.variable}; font-weight: bold">education</span><span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">Education</span>[] = [
  {
    <span style="color: ${c.variable}">degree</span>: <span style="color: ${c.string}">'B.Sc. CSIT'</span>,
    <span style="color: ${c.variable}">institution</span>: <span style="color: ${c.string}">'Texas International College'</span>,
    <span style="color: ${c.variable}">period</span>: <span style="color: ${c.string}">'2023 - Present'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">\`Pursuing a Bachelor's degree in Computer Science and Information
    Technology, focusing on software development, algorithms, and data
    structures. Building a strong foundation in computer science principles
    and practical programming skills.\`</span>
  },
  {
    <span style="color: ${c.variable}">degree</span>: <span style="color: ${c.string}">'Higher Secondary Education (+2)'</span>,
    <span style="color: ${c.variable}">institution</span>: <span style="color: ${c.string}">'St. Xavier\\'s College'</span>,
    <span style="color: ${c.variable}">period</span>: <span style="color: ${c.string}">'2019 - 2022'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">\`Completed higher secondary education with a focus on science and
    mathematics, building a strong foundation for further studies in
    computer science. Developed analytical and problem-solving skills
    that form the basis of software development.\`</span>
  }
];

<span style="color: ${c.keyword}; font-weight: bold">export default function</span> <span style="color: ${c.function}; font-weight: bold">Experience</span>()<span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">JSX.Element</span> {
  <span style="color: ${c.keyword}; font-weight: bold">return</span> (
    <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"experience-container"</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Professional Journey</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Work Experience Section</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Work Experience</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
        
        <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">workExperience</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">exp</span>, <span style="color: ${c.variable}">index</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">index</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"experience-card"</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"exp-header"</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">exp</span>.<span style="color: ${c.variable}">role</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"period"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">exp</span>.<span style="color: ${c.variable}">period</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"company"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">exp</span>.<span style="color: ${c.variable}">company</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"description"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">exp</span>.<span style="color: ${c.variable}">description</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
        ))<span style="color: ${c.value}">}</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Education Section</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Education</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
        
        <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">education</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">edu</span>, <span style="color: ${c.variable}">index</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">index</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"education-card"</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"edu-header"</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">edu</span>.<span style="color: ${c.variable}">degree</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"period"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">edu</span>.<span style="color: ${c.variable}">period</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"institution"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">edu</span>.<span style="color: ${c.variable}">institution</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"description"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">edu</span>.<span style="color: ${c.variable}">description</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
        ))<span style="color: ${c.value}">}</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Key Highlights Summary</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"highlights-card"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Key Highlights</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">ul</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">li</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Current Role: Java Developer at Qpixel (since July 2025)</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">li</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">li</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Previous Role: Java Developer Intern at Qpixel (3 months internship)</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">li</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">li</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Education Status: Currently pursuing B.Sc. CSIT (started 2023)</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">li</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">li</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Background: Science stream in +2 level from St. Xavier\\'s College</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">li</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">ul</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
    <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
  );
}`,

    resume: `<span style="color: ${c.import}; font-weight: bold">import</span> <span style="color: ${c.type}">React</span> <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'react'</span>;

<span style="color: ${c.comment}; font-style: italic">/**
 * Resume Component - Suman Bisunkhe
 * Professional summary, skills, and downloadable resume
 */</span>

<span style="color: ${c.keyword}; font-weight: bold">export default function</span> <span style="color: ${c.function}; font-weight: bold">Resume</span>()<span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">JSX.Element</span> {
  <span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.function}; font-weight: bold">handleViewResume</span> = () <span style="color: ${c.keyword}">=&gt;</span> {
    <span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.variable}">pdfWindow</span> = <span style="color: ${c.variable}">window</span>.<span style="color: ${c.function}">open</span>();
    <span style="color: ${c.keyword}; font-weight: bold">if</span> (<span style="color: ${c.variable}">pdfWindow</span>) {
      <span style="color: ${c.variable}">pdfWindow</span>.<span style="color: ${c.variable}">location</span>.<span style="color: ${c.variable}">href</span> = <span style="color: ${c.string}">'/sumanbisunkhe-resume.pdf'</span>;
    }
  };

  <span style="color: ${c.keyword}; font-weight: bold">return</span> (
    <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">section</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"resume-section"</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Resume</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"resume-intro"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">Here's my resume! Take a look at my professional experience,</span>
          <span style="color: ${c.value}">education, and technical expertise. Feel free to download it</span>
          <span style="color: ${c.value}">for your records or open it in a new tab to view the full</span>
          <span style="color: ${c.value}">document.</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Action Buttons</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"resume-actions"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">button</span>
          <span style="color: ${c.attribute}">onClick</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">handleViewResume</span><span style="color: ${c.value}">}</span>
          <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"btn-primary"</span>
        <span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">👁️ View Resume</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">button</span><span style="color: ${c.operator}">&gt;</span>

        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">a</span>
          <span style="color: ${c.attribute}">href</span>=<span style="color: ${c.string}">"/sumanbisunkhe-resume.pdf"</span>
          <span style="color: ${c.attribute}">download</span>=<span style="color: ${c.string}">"Suman-Bisunkhe-Resume.pdf"</span>
          <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"btn-secondary"</span>
        <span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.value}">⬇️ Download Resume</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">a</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
  );
}`,

    contact: `<span style="color: ${c.import}; font-weight: bold">import</span> <span style="color: ${c.type}">React</span> <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'react'</span>;
<span style="color: ${c.import}; font-weight: bold">import</span> { <span style="color: ${c.type}">Mail</span>, <span style="color: ${c.type}">Github</span>, <span style="color: ${c.type}">Linkedin</span>, <span style="color: ${c.type}">Instagram</span>, <span style="color: ${c.type}">MapPin</span>, <span style="color: ${c.type}">Globe</span>, <span style="color: ${c.type}">Clock</span> } <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'lucide-react'</span>;

<span style="color: ${c.comment}; font-style: italic">/**
 * Contact Page - Get in Touch
 * Social links and contact information
 */</span>

<span style="color: ${c.keyword}; font-weight: bold">interface</span> <span style="color: ${c.type}; font-weight: bold">ContactLink</span> {
  <span style="color: ${c.variable}">icon</span>: <span style="color: ${c.type}">React.ComponentType</span>;
  <span style="color: ${c.variable}">title</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">value</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">href</span>: <span style="color: ${c.type}">string</span>;
}

<span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.variable}; font-weight: bold">contactLinks</span><span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">ContactLink</span>[] = [
  {
    <span style="color: ${c.variable}">icon</span>: <span style="color: ${c.type}">Mail</span>,
    <span style="color: ${c.variable}">title</span>: <span style="color: ${c.string}">'Email'</span>,
    <span style="color: ${c.variable}">value</span>: <span style="color: ${c.string}">'sumanbisunkhe@gmail.com'</span>,
    <span style="color: ${c.variable}">href</span>: <span style="color: ${c.string}">'mailto:sumanbisunkhe@gmail.com'</span>
  },
  {
    <span style="color: ${c.variable}">icon</span>: <span style="color: ${c.type}">Github</span>,
    <span style="color: ${c.variable}">title</span>: <span style="color: ${c.string}">'GitHub'</span>,
    <span style="color: ${c.variable}">value</span>: <span style="color: ${c.string}">'@sumanbisunkhe'</span>,
    <span style="color: ${c.variable}">href</span>: <span style="color: ${c.string}">'https://github.com/sumanbisunkhe'</span>
  },
  {
    <span style="color: ${c.variable}">icon</span>: <span style="color: ${c.type}">Linkedin</span>,
    <span style="color: ${c.variable}">title</span>: <span style="color: ${c.string}">'LinkedIn'</span>,
    <span style="color: ${c.variable}">value</span>: <span style="color: ${c.string}">'Suman Bisunkhe'</span>,
    <span style="color: ${c.variable}">href</span>: <span style="color: ${c.string}">'https://linkedin.com/in/sumanbisunkhe'</span>
  },
  {
    <span style="color: ${c.variable}">icon</span>: <span style="color: ${c.type}">Instagram</span>,
    <span style="color: ${c.variable}">title</span>: <span style="color: ${c.string}">'Instagram'</span>,
    <span style="color: ${c.variable}">value</span>: <span style="color: ${c.string}">'@suman_bisunkhe'</span>,
    <span style="color: ${c.variable}">href</span>: <span style="color: ${c.string}">'https://www.instagram.com/suman_bisunkhe/'</span>
  }
];

<span style="color: ${c.keyword}; font-weight: bold">export default function</span> <span style="color: ${c.function}; font-weight: bold">Contact</span>()<span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">JSX.Element</span> {
  <span style="color: ${c.keyword}; font-weight: bold">return</span> (
    <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">section</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"contact-section"</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Let's Connect</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span>
      
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"intro-text"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.value}">I'm always interested in hearing about new projects and</span>
        <span style="color: ${c.value}">opportunities. Whether you have a question or just want to</span>
        <span style="color: ${c.value}">say hi, feel free to reach out!</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Contact Links Grid</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"contact-grid"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">contactLinks</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">link</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">a</span>
            <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">link</span>.<span style="color: ${c.variable}">title</span><span style="color: ${c.value}">}</span>
            <span style="color: ${c.attribute}">href</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">link</span>.<span style="color: ${c.variable}">href</span><span style="color: ${c.value}">}</span>
            <span style="color: ${c.attribute}">target</span>=<span style="color: ${c.string}">"_blank"</span>
            <span style="color: ${c.attribute}">rel</span>=<span style="color: ${c.string}">"noopener noreferrer"</span>
            <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"contact-card"</span>
          <span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">link</span>.<span style="color: ${c.variable}">icon</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">size</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.number}; font-weight: bold">32</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">link</span>.<span style="color: ${c.variable}">title</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">link</span>.<span style="color: ${c.variable}">value</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">a</span><span style="color: ${c.operator}">&gt;</span>
        ))<span style="color: ${c.value}">}</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Additional Information</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"info-grid"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"info-card"</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">Clock</span> <span style="color: ${c.attribute}">size</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.number}; font-weight: bold">20</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
            <span style="color: ${c.value}">Response Time</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.value}">I typically respond to emails and messages within</span>
            <span style="color: ${c.value}">24-48 hours. For urgent matters, feel free to reach</span>
            <span style="color: ${c.value}">out via phone.</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

        <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"info-card"</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">MapPin</span> <span style="color: ${c.attribute}">size</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.number}; font-weight: bold">20</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
            <span style="color: ${c.value}">Location</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h2</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">MapPin</span> <span style="color: ${c.attribute}">size</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.number}; font-weight: bold">16</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
              <span style="color: ${c.value}">Kathmandu, Nepal</span>
            <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">Globe</span> <span style="color: ${c.attribute}">size</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.number}; font-weight: bold">16</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
              <span style="color: ${c.value}">Available for remote opportunities worldwide</span>
            <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
    <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">section</span><span style="color: ${c.operator}">&gt;</span>
  );
}`,

    blogs: `<span style="color: ${c.import}; font-weight: bold">import</span> <span style="color: ${c.type}">React</span> <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'react'</span>;
<span style="color: ${c.import}; font-weight: bold">import</span> { <span style="color: ${c.type}">FileText</span>, <span style="color: ${c.type}">Eye</span>, <span style="color: ${c.type}">MessageCircle</span>, <span style="color: ${c.type}">BookOpen</span> } <span style="color: ${c.import}; font-weight: bold">from</span> <span style="color: ${c.string}">'lucide-react'</span>;

<span style="color: ${c.comment}; font-style: italic">/**
 * Technical Blog - Suman Bisunkhe
 * Articles on Spring Boot, Java, and Backend Development
 */</span>

<span style="color: ${c.keyword}; font-weight: bold">interface</span> <span style="color: ${c.type}; font-weight: bold">BlogPost</span> {
  <span style="color: ${c.variable}">title</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">date</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">description</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">tags</span>: <span style="color: ${c.type}">string</span>[];
  <span style="color: ${c.variable}">readTime</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">views</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">comments</span>: <span style="color: ${c.type}">number</span>;
}

<span style="color: ${c.keyword}; font-weight: bold">interface</span> <span style="color: ${c.type}; font-weight: bold">BlogStats</span> {
  <span style="color: ${c.variable}">icon</span>: <span style="color: ${c.type}">React.ComponentType</span>;
  <span style="color: ${c.variable}">value</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">label</span>: <span style="color: ${c.type}">string</span>;
  <span style="color: ${c.variable}">description</span>: <span style="color: ${c.type}">string</span>;
}

<span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.variable}; font-weight: bold">blogStats</span><span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">BlogStats</span>[] = [
  {
    <span style="color: ${c.variable}">icon</span>: <span style="color: ${c.type}">FileText</span>,
    <span style="color: ${c.variable}">value</span>: <span style="color: ${c.string}">'3'</span>,
    <span style="color: ${c.variable}">label</span>: <span style="color: ${c.string}">'Articles'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">'Published'</span>
  },
  {
    <span style="color: ${c.variable}">icon</span>: <span style="color: ${c.type}">Eye</span>,
    <span style="color: ${c.variable}">value</span>: <span style="color: ${c.string}">'5.1K'</span>,
    <span style="color: ${c.variable}">label</span>: <span style="color: ${c.string}">'Total Views'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">'All Time'</span>
  },
  {
    <span style="color: ${c.variable}">icon</span>: <span style="color: ${c.type}">MessageCircle</span>,
    <span style="color: ${c.variable}">value</span>: <span style="color: ${c.string}">'99'</span>,
    <span style="color: ${c.variable}">label</span>: <span style="color: ${c.string}">'Comments'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">'Community'</span>
  }
];

<span style="color: ${c.keyword}; font-weight: bold">const</span> <span style="color: ${c.variable}; font-weight: bold">blogPosts</span><span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">BlogPost</span>[] = [
  {
    <span style="color: ${c.variable}">title</span>: <span style="color: ${c.string}">'Building Scalable Spring Boot Applications'</span>,
    <span style="color: ${c.variable}">date</span>: <span style="color: ${c.string}">'Dec 15, 2024'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">\`Learn best practices for building production-ready 
    Spring Boot applications with proper architecture and design patterns.\`</span>,
    <span style="color: ${c.variable}">tags</span>: [<span style="color: ${c.string}">'Spring Boot'</span>, <span style="color: ${c.string}">'Java'</span>, <span style="color: ${c.string}">'Backend'</span>],
    <span style="color: ${c.variable}">readTime</span>: <span style="color: ${c.string}">'8 min read'</span>,
    <span style="color: ${c.variable}">views</span>: <span style="color: ${c.string}">'1,250'</span>,
    <span style="color: ${c.variable}">comments</span>: <span style="color: ${c.number}; font-weight: bold">23</span>
  },
  {
    <span style="color: ${c.variable}">title</span>: <span style="color: ${c.string}">'Understanding JWT Authentication'</span>,
    <span style="color: ${c.variable}">date</span>: <span style="color: ${c.string}">'Dec 1, 2024'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">\`Deep dive into JWT tokens and how to implement 
    secure authentication in your Spring Boot applications.\`</span>,
    <span style="color: ${c.variable}">tags</span>: [<span style="color: ${c.string}">'Security'</span>, <span style="color: ${c.string}">'JWT'</span>, <span style="color: ${c.string}">'Authentication'</span>],
    <span style="color: ${c.variable}">readTime</span>: <span style="color: ${c.string}">'12 min read'</span>,
    <span style="color: ${c.variable}">views</span>: <span style="color: ${c.string}">'2,100'</span>,
    <span style="color: ${c.variable}">comments</span>: <span style="color: ${c.number}; font-weight: bold">45</span>
  },
  {
    <span style="color: ${c.variable}">title</span>: <span style="color: ${c.string}>'PostgreSQL Performance Optimization'</span>,
    <span style="color: ${c.variable}">date</span>: <span style="color: ${c.string}">'Nov 20, 2024'</span>,
    <span style="color: ${c.variable}">description</span>: <span style="color: ${c.string}">\`Tips and tricks for optimizing database queries, 
    creating efficient indexes, and improving overall PostgreSQL performance.\`</span>,
    <span style="color: ${c.variable}">tags</span>: [<span style="color: ${c.string}">'PostgreSQL'</span>, <span style="color: ${c.string}">'Database'</span>, <span style="color: ${c.string}">'Performance'</span>],
    <span style="color: ${c.variable}">readTime</span>: <span style="color: ${c.string}">'15 min read'</span>,
    <span style="color: ${c.variable}">views</span>: <span style="color: ${c.string}">'1,800'</span>,
    <span style="color: ${c.variable}">comments</span>: <span style="color: ${c.number}; font-weight: bold">31</span>
  }
];

<span style="color: ${c.keyword}; font-weight: bold">export default function</span> <span style="color: ${c.function}; font-weight: bold">Blogs</span>()<span style="color: ${c.operator}">:</span> <span style="color: ${c.type}">JSX.Element</span> {
  <span style="color: ${c.keyword}; font-weight: bold">return</span> (
    <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"blogs-container"</span><span style="color: ${c.operator}">&gt;</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">Technical Blog</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h1</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Blog Statistics</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"stats-grid"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">blogStats</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">stat</span>, <span style="color: ${c.variable}">index</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">index</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"stat-card"</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">stat</span>.<span style="color: ${c.variable}">icon</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">size</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.number}; font-weight: bold">24</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">stat</span>.<span style="color: ${c.variable}">value</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"label"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">stat</span>.<span style="color: ${c.variable}">label</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"description"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">stat</span>.<span style="color: ${c.variable}">description</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
        ))<span style="color: ${c.value}">}</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

      <span style="color: ${c.comment}; font-style: italic">// Blog Posts Grid</span>
      <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"blog-grid"</span><span style="color: ${c.operator}">&gt;</span>
        <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">blogPosts</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">post</span>, <span style="color: ${c.variable}">index</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
          <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">article</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">index</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"blog-card"</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"blog-header"</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">post</span>.<span style="color: ${c.variable}">title</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">h3</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"date"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">post</span>.<span style="color: ${c.variable}">date</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">p</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"description"</span><span style="color: ${c.operator}">&gt;</span><span style="color: ${c.value}">{</span><span style="color: ${c.variable}">post</span>.<span style="color: ${c.variable}">description</span><span style="color: ${c.value}">}</span><span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">p</span><span style="color: ${c.operator}">&gt;</span>

            <span style="color: ${c.comment}; font-style: italic">// Tags</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"tags"</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">post</span>.<span style="color: ${c.variable}">tags</span>.<span style="color: ${c.function}">map</span><span style="color: ${c.value}">((</span><span style="color: ${c.variable}">tag</span><span style="color: ${c.value}>)</span> <span style="color: ${c.keyword}">=&gt;</span> (
                <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span> <span style="color: ${c.attribute}">key</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.variable}">tag</span><span style="color: ${c.value}">}</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"tag"</span><span style="color: ${c.operator}">&gt;</span>
                  <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">tag</span><span style="color: ${c.value}">}</span>
                <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
              ))<span style="color: ${c.value}">}</span>
            <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>

            <span style="color: ${c.comment}; font-style: italic">// Blog Metadata</span>
            <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">div</span> <span style="color: ${c.attribute}">className</span>=<span style="color: ${c.string}">"blog-meta"</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
                <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">BookOpen</span> <span style="color: ${c.attribute}">size</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.number}; font-weight: bold">14</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
                <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">post</span>.<span style="color: ${c.variable}">readTime</span><span style="color: ${c.value}">}</span>
              <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
                <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">Eye</span> <span style="color: ${c.attribute}">size</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.number}; font-weight: bold">14</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
                <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">post</span>.<span style="color: ${c.variable}">views</span><span style="color: ${c.value}">}</span> <span style="color: ${c.value}">views</span>
              <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
              <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
                <span style="color: ${c.operator}">&lt;</span><span style="color: ${c.tag}">MessageCircle</span> <span style="color: ${c.attribute}">size</span>=<span style="color: ${c.value}">{</span><span style="color: ${c.number}; font-weight: bold">14</span><span style="color: ${c.value}">}</span> <span style="color: ${c.operator}">/&gt;</span>
                <span style="color: ${c.value}">{</span><span style="color: ${c.variable}">post</span>.<span style="color: ${c.variable}">comments</span><span style="color: ${c.value}">}</span> <span style="color: ${c.value}">comments</span>
              <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">span</span><span style="color: ${c.operator}">&gt;</span>
            <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
          <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">article</span><span style="color: ${c.operator}">&gt;</span>
        ))<span style="color: ${c.value}">}</span>
      <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
    <span style="color: ${c.operator}">&lt;/</span><span style="color: ${c.tag}">div</span><span style="color: ${c.operator}">&gt;</span>
  );
}`
  };

  return contents[fileId] || '<span style="color: ' + c.comment + '">// File not found</span>';
}
