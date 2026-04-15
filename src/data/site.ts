// ── Site Metadata ──
export const siteMeta = {
  title: 'lys Open Source System',
  description: 'A collection of open-source projects for BLE, IoT, and developer tools.',
  siteUrl: 'https://open.i2kai.com',
  siteName: 'lys Open Source System',
  author: 'LuoYaoSheng',
  keywords: 'open source, BLE, IoT, Smart BLE, Open IoT Platform, RedisPilot, MQTT, developer tools',
  themeColor: '#016FFF',
  repo: 'https://gitee.com/luoyaosheng',
  github: 'https://github.com/LuoYaoSheng',
};

// ── Navigation (English) ──
export const navItems = [
  { label: 'Docs', href: '/docs/getting-started' },
  { label: 'Projects', href: '/projects' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'About', href: '/about' },
];

// ── Sidebar Configuration ──
export const sidebarConfig = [
  {
    group: 'Documentation',
    items: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Guides', href: '/docs/guides' },
    ],
  },
  { group: 'Project', items: [{ label: 'All Projects', href: '/projects' }] },
  {
    group: 'Community',
    items: [
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'About', href: '/about' },
    ],
  },
];

// ── Features (3 core projects) ──
export const features = [
  {
    title: 'Smart BLE',
    description: 'Cross-platform BLE debugging tool with multi-branch, multi-mode implementations. The primary entry point for learning BLE protocols and platform differences.',
    href: 'https://gitee.com/luoyaosheng/lys-smart-ble',
    tag: 'Core',
  },
  {
    title: 'Open IoT Platform',
    description: 'End-to-end IoT platform connecting server, mobile app, firmware, and release packaging. Covers BLE provisioning, MQTT, and device management.',
    href: 'https://gitee.com/luoyaosheng/lys-iot-platform',
    tag: 'Core',
  },
  {
    title: 'Developer Tools',
    description: 'RedisPilot, QueryLab, TermForge, and more — desktop tools for database management, SSH operations, and development workflows.',
    href: '/projects',
    tag: 'Tools',
  },
];

// ── Quick Start ──
export const quickStart = {
  steps: [
    {
      title: 'Try Smart BLE',
      description: 'Start with the WeChat mini-program (BLE Toolkit+) to experience BLE scanning, connection, and data exchange firsthand.',
      href: 'https://gitee.com/luoyaosheng/lys-smart-ble',
    },
    {
      title: 'Read the docs',
      description: 'Explore guides on BLE abstraction design, platform comparisons, and ESP32 hardware integration.',
      href: '/docs/getting-started',
    },
    {
      title: 'Explore the codebase',
      description: 'Dive into the source code to understand cross-platform implementation patterns and architecture decisions.',
      href: '/projects',
    },
  ],
};

// ── Guide Collections (formerly articleCollections) ──
export const guideCollections = [
  {
    title: 'Getting Started',
    intro: 'Understand what each project does and decide if it fits your needs.',
    items: [
      {
        title: 'Why Smart BLE?',
        summary: 'A quick overview of what Smart BLE solves and why it is worth exploring.',
        level: 'Beginner',
        readTime: '5-8 min',
        tag: 'Overview',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/008-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9SmartBLE.md',
      },
      {
        title: '5-Minute Quick Start',
        summary: 'Get Smart BLE running and understand its core workflows in under five minutes.',
        level: 'Beginner',
        readTime: '5 min',
        tag: 'Quick Start',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/005-5%E5%88%86%E9%92%9F%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.md',
      },
      {
        title: 'The Story Behind Smart BLE',
        summary: 'How the project evolved from a simple BLE tool to a multi-platform learning reference.',
        level: 'Beginner',
        readTime: '8-10 min',
        tag: 'Background',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/003-%E9%A1%B9%E7%9B%AE%E6%95%85%E4%BA%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E5%81%9ASmartBLE.md',
      },
    ],
  },
  {
    title: 'Deep Dives',
    intro: 'Technical articles for understanding implementation details and architecture.',
    items: [
      {
        title: 'Designing a Cross-Platform BLE Abstraction Layer',
        summary: 'How Smart BLE abstracts platform differences into a unified interface.',
        level: 'Advanced',
        readTime: '12-15 min',
        tag: 'Architecture',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/001-%E8%B7%A8%E5%B9%B3%E5%8F%B0BLE%E6%8A%BD%E8%B1%A1%E5%B1%82%E8%AE%BE%E8%AE%A1.md',
      },
      {
        title: 'ESP32 BLE in Practice: Building a Bluetooth Device from Scratch',
        summary: 'Hands-on guide covering hardware-side BLE implementation with ESP32.',
        level: 'Advanced',
        readTime: '15-20 min',
        tag: 'Hardware',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/002-ESP32%E5%AE%9E%E6%88%98%E4%BB%8E%E9%9B%B6%E6%90%AD%E5%BB%BA.md',
      },
      {
        title: 'Comparing 8 Cross-Platform BLE Frameworks',
        summary: 'An evaluation of different approaches to cross-platform BLE development.',
        level: 'Advanced',
        readTime: '12-18 min',
        tag: 'Comparison',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/004-8%E7%A7%8D%E5%B9%B3%E5%8F%B0%E5%AF%B9%E6%AF%94%E8%AF%84%E6%B5%8B.md',
      },
    ],
  },
];

// ── Project Groups ──
export const projectGroups = [
  {
    title: 'Core Projects',
    intro: 'The primary projects for learning BLE and IoT development.',
    items: [
      {
        name: 'Smart BLE',
        id: 'smart-ble',
        status: 'Active',
        summary: 'Cross-platform BLE debugging tool with multiple implementation branches.',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
      },
      {
        name: 'Open IoT Platform',
        id: 'open-iot-platform',
        status: 'Active',
        summary: 'End-to-end IoT platform — server, mobile app, firmware, and release packaging.',
        repo: 'https://gitee.com/luoyaosheng/lys-iot-platform',
      },
      {
        name: 'SerialTool',
        id: 'serial-tool',
        status: 'Planned',
        summary: 'Serial port debugging tool for IoT hardware development.',
        repo: 'https://gitee.com/luoyaosheng/lys-serial-tool',
      },
    ],
  },
  {
    title: 'Developer Tools',
    intro: 'Desktop applications for database management, SSH operations, and development workflows.',
    items: [
      {
        name: 'RedisPilot',
        id: 'redispilot',
        status: 'Active',
        summary: 'Local-first Redis desktop management tool.',
        repo: 'https://gitee.com/luoyaosheng/lys-redis-pilot',
      },
      {
        name: 'QueryLab',
        id: 'querylab',
        status: 'Active',
        summary: 'Local-first database client, currently focused on MySQL / MariaDB.',
        repo: 'https://gitee.com/luoyaosheng/lys-query-lab',
      },
      {
        name: 'TermForge',
        id: 'termforge',
        status: 'Active',
        summary: 'Cross-platform SSH / SFTP / Runbook operations workbench.',
        repo: 'https://gitee.com/luoyaosheng/lys-term-forge',
      },
      {
        name: 'MCP DB Gateway',
        id: 'db-gateway',
        status: 'Active',
        summary: 'Database gateway service for secure database access.',
        repo: 'https://gitee.com/luoyaosheng/lys-db-gateway',
      },
    ],
  },
  {
    title: 'Content & Productivity',
    intro: 'Tools for writing, publishing, and asset production.',
    items: [
      {
        name: 'PaperMD',
        id: 'papermd',
        status: 'Active',
        summary: 'Native macOS Markdown editor with focus on input experience.',
        repo: 'https://gitee.com/luoyaosheng/lys-paper-md',
      },
      {
        name: 'Batch Image Studio',
        id: 'image-studio',
        status: 'Active',
        summary: 'AI-powered batch image processing tool for project assets.',
        repo: 'https://gitee.com/luoyaosheng/lys-image-studio',
        github: 'https://github.com/LuoYaoSheng/batch-image-studio',
        docs: 'https://batch.open.i2kai.com',
      },
      {
        name: 'Icon Gen',
        id: 'icon-gen',
        status: 'Active',
        summary: 'Icon generation tool for project asset pipelines.',
        repo: 'https://gitee.com/luoyaosheng/lys-icon-gen',
      },
      {
        name: 'Log Clean',
        id: 'log-clean',
        status: 'Active',
        summary: 'Log cleaning tool for development and AI collaboration workflows.',
        repo: 'https://gitee.com/luoyaosheng/lys-log-clean',
      },
    ],
  },
  {
    title: 'Archived',
    intro: 'Historical repositories preserved for reference and migration context.',
    items: [
      {
        name: 'LightBLE',
        id: 'lightble',
        status: 'Archived',
        summary: 'Historical naming and legacy uni-app branch of Smart BLE.',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
      },
      {
        name: 'SmartBLE-iOS',
        id: 'smartble-ios',
        status: 'Archived',
        summary: 'Historical iOS repository of Smart BLE, kept as reference.',
        repo: 'https://gitee.com/luoyaosheng/smart-ble-i-os',
      },
      {
        name: 'IoT SmartLink Hub',
        id: 'iot-smartlink-hub',
        status: 'Archived',
        summary: 'Legacy SmartLink packaging repository, replaced by the main platform repo.',
        repo: 'https://gitee.com/luoyaosheng/iot-smartlink-hub',
      },
    ],
  },
];

// ── Changelog ──
export const changelog = [
  {
    version: 'W14',
    date: '2026-04-01',
    title: 'Site Restructure & Smart BLE Integration',
    changes: [
      'Restructured the site from a learning platform to a standard open-source documentation site',
      'Added Smart BLE naming guide and documentation skeleton',
      'Prepared asset checklist and weekly update drafts',
    ],
  },
  {
    version: 'W13',
    date: '2026-03-31',
    title: 'Repository Entry Consolidation',
    changes: [
      'Unified main repositories under the lys prefix',
      'Clarified access paths and entry points',
      'Documented relationships between historical and current repositories',
    ],
  },
  {
    version: 'W13',
    date: '2026-03-31',
    title: 'Documentation Alignment',
    changes: [
      'Updated QueryLab, TermForge, Smart BLE, and Open IoT Platform entry docs',
      'Aligned documentation with current engineering reality',
    ],
  },
  {
    version: 'W13',
    date: '2026-03-31',
    title: 'First Build Pass',
    changes: [
      'Passed frontend checks for QueryLab, RedisPilot, and TermForge',
      'Restored open-iot-platform/server test suite',
    ],
  },
];

// ── Roadmap ──
export const roadmap = {
  quarter: '2026 Q2',
  theme: 'Ship usable tools, readable docs, and trackable updates in one place.',
  inProgress: [
    'Standalone documentation site',
    'Smart BLE entry point enhancement',
    'Historical repository migration notes',
  ],
  planned: [
    'Project detail pages',
    'Changelog archive',
    'Additional historical repository cleanup',
  ],
  done: [
    'lys prefix naming convention',
    'Gitee main repository path consolidation',
    'First documentation and build pass',
  ],
};

// ── About ──
export const aboutContent = {
  mission: 'This site exists to make open-source projects discoverable, understandable, and usable — not to showcase roadmaps or pitch visions.',
  principles: [
    {
      title: 'Real projects, not demos',
      description: 'Every project listed here was built to solve a specific problem — BLE debugging, device provisioning, database management, SSH operations, or content creation.',
    },
    {
      title: 'Docs as first-class citizens',
      description: 'Documentation is not an afterthought. Guides, comparisons, and architecture articles are part of the project, not supplementary material.',
    },
    {
      title: 'Preserve history',
      description: 'Historical repositories and migration paths are retained. Understanding how a project evolved is as valuable as understanding its current state.',
    },
    {
      title: 'User-first open source',
      description: 'The site should tell you what works, where to download, and where to go next — before talking about plans and roadmaps.',
    },
  ],
};
