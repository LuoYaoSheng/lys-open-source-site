// ── Site Metadata ──
export const siteMeta = {
  title: 'lys 开源项目集合',
  description: '开源 BLE、IoT 与开发者工具项目集合。',
  siteUrl: 'https://open.i2kai.com',
  siteName: 'lys Open Source',
  author: 'LuoYaoSheng',
  keywords: '开源, BLE, IoT, Smart BLE, Open IoT Platform, RedisPilot, MQTT, 开发者工具',
  themeColor: '#016FFF',
  repo: 'https://gitee.com/luoyaosheng',
  github: 'https://github.com/LuoYaoSheng',
};

// ── Navigation ──
export const navItems = [
  { label: '文档', href: '/docs/getting-started' },
  { label: '项目', href: '/projects' },
  { label: '更新日志', href: '/changelog' },
  { label: '路线图', href: '/roadmap' },
  { label: '关于', href: '/about' },
];

// ── Sidebar Configuration ──
export const sidebarConfig = [
  {
    group: '文档',
    items: [
      { label: '快速开始', href: '/docs/getting-started' },
      { label: '技术指南', href: '/docs/guides' },
    ],
  },
  { group: '项目', items: [{ label: '全部项目', href: '/projects' }] },
  {
    group: '社区',
    items: [
      { label: '更新日志', href: '/changelog' },
      { label: '路线图', href: '/roadmap' },
      { label: '关于', href: '/about' },
    ],
  },
];

// ── Features（3 个核心项目） ──
export const features = [
  {
    title: 'Smart BLE',
    description: '跨平台 BLE 调试工具，包含多分支、多模式的实现。是学习 BLE 协议和平台差异的主入口。',
    href: 'https://gitee.com/luoyaosheng/lys-smart-ble',
    tag: '核心',
  },
  {
    title: 'Open IoT Platform',
    description: '端到端 IoT 平台，覆盖服务端、移动端、固件和发布包装。包含 BLE 配网、MQTT 和设备管理。',
    href: 'https://gitee.com/luoyaosheng/lys-iot-platform',
    tag: '核心',
  },
  {
    title: '开发者工具',
    description: 'RedisPilot、QueryLab、TermForge 等 — 数据库管理、SSH 运维和开发流程的桌面工具。',
    href: '/projects',
    tag: '工具',
  },
];

// ── Quick Start ──
export const quickStart = {
  steps: [
    {
      title: '体验 Smart BLE',
      description: '从微信小程序（BLE Toolkit+）开始，直接体验 BLE 扫描、连接和数据交换。',
      href: 'https://gitee.com/luoyaosheng/lys-smart-ble',
    },
    {
      title: '阅读文档',
      description: '了解 BLE 抽象层设计、平台对比和 ESP32 硬件集成等技术指南。',
      href: '/docs/getting-started',
    },
    {
      title: '探索源码',
      description: '深入了解跨平台实现模式和架构设计决策。',
      href: '/projects',
    },
  ],
};

// ── Guide Collections ──
export const guideCollections = [
  {
    title: '入门阅读',
    intro: '了解每个项目在做什么，判断是否符合你的需求。',
    items: [
      {
        title: '为什么选择 Smart BLE？',
        summary: '快速了解 Smart BLE 解决了什么问题，为什么值得探索。',
        level: '入门',
        readTime: '5-8 分钟',
        tag: '概览',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/008-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9SmartBLE.md',
      },
      {
        title: '5 分钟快速上手',
        summary: '在五分钟内跑通 Smart BLE，理解核心工作流。',
        level: '入门',
        readTime: '5 分钟',
        tag: '快速上手',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/005-5%E5%88%86%E9%92%9F%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.md',
      },
      {
        title: 'Smart BLE 的项目故事',
        summary: '从一个简单的 BLE 工具到多平台学习参考的演进历程。',
        level: '入门',
        readTime: '8-10 分钟',
        tag: '背景',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/003-%E9%A1%B9%E7%9B%AE%E6%95%85%E4%BA%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E5%81%9ASmartBLE.md',
      },
    ],
  },
  {
    title: '深入理解',
    intro: '深入实现细节和架构设计的技术文章。',
    items: [
      {
        title: '跨平台 BLE 抽象层设计',
        summary: 'Smart BLE 如何将平台差异抽象为统一接口。',
        level: '进阶',
        readTime: '12-15 分钟',
        tag: '架构',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/001-%E8%B7%A8%E5%B9%B3%E5%8F%B0BLE%E6%8A%BD%E8%B1%A1%E5%B1%82%E8%AE%BE%E8%AE%A1.md',
      },
      {
        title: 'ESP32 BLE 实战：从零搭建蓝牙设备',
        summary: '使用 ESP32 进行硬件端 BLE 开发的实践指南。',
        level: '进阶',
        readTime: '15-20 分钟',
        tag: '硬件',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/002-ESP32%E5%AE%9E%E6%88%98%E4%BB%8E%E9%9B%B6%E6%90%AD%E5%BB%BA.md',
      },
      {
        title: '8 种跨平台 BLE 方案对比',
        summary: '评估不同跨平台 BLE 开发方案的优劣。',
        level: '进阶',
        readTime: '12-18 分钟',
        tag: '对比',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/004-8%E7%A7%8D%E5%B9%B3%E5%8F%B0%E5%AF%B9%E6%AF%94%E8%AF%84%E6%B5%8B.md',
      },
    ],
  },
];

// ── Project Groups ──
export const projectGroups = [
  {
    title: '核心项目',
    intro: '学习 BLE 和 IoT 开发的主要入口项目。',
    items: [
      {
        name: 'Smart BLE',
        id: 'smart-ble',
        status: '活跃',
        summary: '跨平台 BLE 调试工具，包含多分支、多模式的实现。',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
      },
      {
        name: 'Open IoT Platform',
        id: 'open-iot-platform',
        status: '活跃',
        summary: '端到端 IoT 平台 — 服务端、移动端、固件和发布包装。',
        repo: 'https://gitee.com/luoyaosheng/lys-iot-platform',
      },
      {
        name: 'SerialTool',
        id: 'serial-tool',
        status: '规划中',
        summary: '串口调试工具，补齐 IoT 硬件开发链路。',
        repo: 'https://gitee.com/luoyaosheng/lys-serial-tool',
      },
    ],
  },
  {
    title: '开发者工具',
    intro: '数据库管理、SSH 运维和开发流程的桌面应用。',
    items: [
      {
        name: 'RedisPilot',
        id: 'redispilot',
        status: '活跃',
        summary: '本地优先的 Redis 桌面管理工具。',
        repo: 'https://gitee.com/luoyaosheng/lys-redis-pilot',
      },
      {
        name: 'QueryLab',
        id: 'querylab',
        status: '活跃',
        summary: '本地优先的数据库客户端，当前聚焦 MySQL / MariaDB。',
        repo: 'https://gitee.com/luoyaosheng/lys-query-lab',
      },
      {
        name: 'TermForge',
        id: 'termforge',
        status: '活跃',
        summary: '跨平台 SSH / SFTP / Runbook 运维工作台。',
        repo: 'https://gitee.com/luoyaosheng/lys-term-forge',
      },
      {
        name: 'MCP DB Gateway',
        id: 'db-gateway',
        status: '活跃',
        summary: '数据库网关服务，提供更安全的数据库访问链路。',
        repo: 'https://gitee.com/luoyaosheng/lys-db-gateway',
      },
    ],
  },
  {
    title: '创作与效率',
    intro: '写作、发布和资产生产工具。',
    items: [
      {
        name: 'PaperMD',
        id: 'papermd',
        status: '活跃',
        summary: '原生 macOS Markdown 编辑器，强调输入体验。',
        repo: 'https://gitee.com/luoyaosheng/lys-paper-md',
      },
      {
        name: 'Batch Image Studio',
        id: 'image-studio',
        status: '活跃',
        summary: 'AI 驱动的图片批量处理工具，用于项目素材生产。',
        repo: 'https://gitee.com/luoyaosheng/lys-image-studio',
        github: 'https://github.com/LuoYaoSheng/batch-image-studio',
        docs: 'https://batch.open.i2kai.com',
      },
      {
        name: 'Icon Gen',
        id: 'icon-gen',
        status: '活跃',
        summary: '图标生成工具，服务项目资产生成。',
        repo: 'https://gitee.com/luoyaosheng/lys-icon-gen',
      },
      {
        name: 'Log Clean',
        id: 'log-clean',
        status: '活跃',
        summary: '日志清理工具，面向开发和 AI 协作场景。',
        repo: 'https://gitee.com/luoyaosheng/lys-log-clean',
      },
    ],
  },
  {
    title: '归档',
    intro: '保留用于参考和迁移说明的历史仓库。',
    items: [
      {
        name: 'LightBLE',
        id: 'lightble',
        status: '已归档',
        summary: 'Smart BLE 的历史命名与旧 uni-app 分支。',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
      },
      {
        name: 'SmartBLE-iOS',
        id: 'smartble-ios',
        status: '已归档',
        summary: 'Smart BLE 的历史 iOS 仓库，保留作参考。',
        repo: 'https://gitee.com/luoyaosheng/smart-ble-i-os',
      },
      {
        name: 'IoT SmartLink Hub',
        id: 'iot-smartlink-hub',
        status: '已归档',
        summary: '旧 SmartLink 包装层仓库，已迁移到平台主仓库。',
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
    title: '站点重构 & Smart BLE 集成',
    changes: [
      '将站点从学习平台风格重构为标准开源文档站',
      '补充 Smart BLE 命名指南和文档骨架',
      '准备素材清单和周更草稿',
    ],
  },
  {
    version: 'W13',
    date: '2026-03-31',
    title: '仓库入口收口',
    changes: [
      '主线仓库统一到 lys 前缀路径',
      '明确访问入口和路径',
      '补充历史仓库与主入口之间的关系说明',
    ],
  },
  {
    version: 'W13',
    date: '2026-03-31',
    title: '文档对齐',
    changes: [
      '更新 QueryLab、TermForge、Smart BLE、Open IoT Platform 的入口文档',
      '使文档与当前工程现状保持一致',
    ],
  },
  {
    version: 'W13',
    date: '2026-03-31',
    title: '第一轮构建整理',
    changes: [
      '通过 QueryLab、RedisPilot、TermForge 前端检查',
      '恢复 open-iot-platform/server 测试套件',
    ],
  },
];

// ── Roadmap ──
export const roadmap = {
  quarter: '2026 Q2',
  theme: '把能用的工具、能读的文档、能跟进的更新都放到同一个入口。',
  inProgress: [
    '独立文档站上线',
    'Smart BLE 主入口强化',
    '历史仓库迁移说明',
  ],
  planned: [
    '项目详情页',
    '更新日志归档',
    '更多历史仓库整理',
  ],
  done: [
    'lys 前缀命名规范',
    'Gitee 主线仓库路径收口',
    '第一轮文档与构建整理',
  ],
};

// ── About ──
export const aboutContent = {
  mission: '这个站点存在的目的是让开源项目可发现、可理解、可用 — 而不是展示路线图或兜售愿景。',
  principles: [
    {
      title: '真实项目，不是演示',
      description: '这里列出的每个项目都是为了解决具体问题 — BLE 调试、设备配网、数据库管理、SSH 运维或内容创作。',
    },
    {
      title: '文档是一等公民',
      description: '文档不是附属物。技术指南、对比分析和架构文章是项目的一部分，不是补充材料。',
    },
    {
      title: '保留历史',
      description: '历史仓库和迁移路径都会保留。理解项目如何演进和理解项目当前状态同样重要。',
    },
    {
      title: '用户优先的开源',
      description: '站点应该先告诉你什么能用、去哪里下载、下一步去哪 — 而不是先谈规划和路线图。',
    },
  ],
};
