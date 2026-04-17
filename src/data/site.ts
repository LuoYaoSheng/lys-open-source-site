// ── Site Metadata ──
export const siteMeta = {
  title: 'lys 开源项目集合',
  description: '围绕 BLE、IoT、开发者工具与微信小程序构建的开源项目集合，包含跨平台蓝牙调试、端到端物联网平台和实用工具。',
  siteUrl: 'https://open.i2kai.com',
  siteName: 'lys Open Source',
  author: 'LuoYaoSheng',
  keywords: '开源, BLE, IoT, Smart BLE, Open IoT Platform, RedisPilot, MQTT, 微信小程序, 恋恋决定, 开发者工具, 蓝牙调试, 桌面工具',
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

// ── Features（首页 3 个核心项目卡片） ──
export const features = [
  {
    title: 'Smart BLE',
    description: '跨平台 BLE 调试工具，支持 Flutter、微信小程序和原生 iOS 多端实现。适合学习蓝牙协议、对比平台差异和理解设备通信。',
    href: 'https://gitee.com/luoyaosheng/lys-smart-ble',
    tag: '核心',
  },
  {
    title: 'Open IoT Platform',
    description: '从设备接入、BLE 配网到 MQTT 通信的端到端 IoT 平台，覆盖 Go 服务端、Flutter 移动端和 ESP32 固件。',
    href: 'https://gitee.com/luoyaosheng/lys-iot-platform',
    tag: '核心',
  },
  {
    title: '开发者工具集',
    description: 'RedisPilot（Redis 管理）、QueryLab（数据库客户端）、TermForge（SSH 运维台）等 Tauri 桌面应用。',
    href: '/projects',
    tag: '工具',
  },
];

// ── Quick Start ──
export const quickStart = {
  steps: [
    {
      title: '体验 Smart BLE',
      description: '用微信扫小程序码（BLE Toolkit+），直接体验 BLE 扫描、连接、读写和广播功能，无需安装。',
      href: 'https://gitee.com/luoyaosheng/lys-smart-ble',
    },
    {
      title: '阅读技术指南',
      description: '从 BLE 抽象层设计、8 种跨平台方案对比到 ESP32 硬件实战，逐步深入理解。',
      href: '/docs/guides',
    },
    {
      title: '浏览全部项目',
      description: '按核心项目、开发者工具、创作效率等分类，找到你感兴趣的开源仓库。',
      href: '/projects',
    },
  ],
};

// ── Guide Collections ──
export const guideCollections = [
  {
    title: '入门阅读',
    intro: '快速了解项目定位和核心功能，判断是否适合你的需求。',
    items: [
      {
        title: '为什么选择 Smart BLE？',
        summary: 'Smart BLE 解决了什么问题、与其他 BLE 工具有什么不同。',
        level: '入门',
        readTime: '5-8 分钟',
        tag: '概览',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/008-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9SmartBLE.md',
      },
      {
        title: '5 分钟快速上手',
        summary: '从扫码体验开始，5 分钟内理解 Smart BLE 的核心工作流。',
        level: '入门',
        readTime: '5 分钟',
        tag: '快速上手',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/005-5%E5%88%86%E9%92%9F%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.md',
      },
      {
        title: 'Smart BLE 的项目故事',
        summary: '从一次 BLE 调试需求到多平台开源项目的演进过程。',
        level: '入门',
        readTime: '8-10 分钟',
        tag: '背景',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/003-%E9%A1%B9%E7%9B%AE%E6%95%85%E4%BA%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E5%81%9ASmartBLE.md',
      },
    ],
  },
  {
    title: '深入理解',
    intro: '面向已了解项目基础的开发者，探讨架构设计和实现细节。',
    items: [
      {
        title: '跨平台 BLE 抽象层设计',
        summary: 'Smart BLE 如何通过统一接口抹平 Flutter、小程序和原生平台的 BLE 差异。',
        level: '进阶',
        readTime: '12-15 分钟',
        tag: '架构',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/001-%E8%B7%A8%E5%B9%B3%E5%8F%B0BLE%E6%8A%93%E8%B1%A1%E5%B1%82%E8%AE%BE%E8%AE%A1.md',
      },
      {
        title: 'ESP32 BLE 实战：从零搭建蓝牙设备',
        summary: '使用 ESP32 开发板搭建 BLE 外设，配合 Smart BLE App 进行端到端联调。',
        level: '进阶',
        readTime: '15-20 分钟',
        tag: '硬件',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/002-ESP32%E5%AE%9E%E6%88%98%E4%BB%8E%E9%9B%B6%E6%90%AD%E5%BB%BA.md',
      },
      {
        title: '8 种跨平台 BLE 方案对比',
        summary: 'Flutter、React Native、uni-app、原生等 8 种 BLE 开发方案的横向对比和选型建议。',
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
    intro: 'BLE 调试和 IoT 开发的主线项目，是了解这套开源体系最直接的入口。',
    items: [
      {
        name: 'Smart BLE',
        id: 'smart-ble',
        status: '活跃',
        summary: '跨平台 BLE 调试工具，支持 Flutter、微信小程序和原生 iOS，提供统一的蓝牙调试和多平台实现参考。',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
      },
      {
        name: 'Open IoT Platform',
        id: 'open-iot-platform',
        status: '活跃',
        summary: '端到端 IoT 平台 — Go 服务端 + Flutter 移动端 + ESP32 固件，覆盖设备接入、BLE 配网、MQTT 通信和设备管理。',
        repo: 'https://gitee.com/luoyaosheng/lys-iot-platform',
      },
      {
        name: 'SerialTool',
        id: 'serial-tool',
        status: '规划中',
        summary: '串口调试工具，补齐 IoT 硬件开发链路中的基础能力。',
        repo: 'https://gitee.com/luoyaosheng/lys-serial-tool',
      },
    ],
  },
  {
    title: '开发者工具',
    intro: '基于 Tauri + SvelteKit 构建的本地优先桌面应用，覆盖数据库管理、SSH 运维和开发工作流。',
    items: [
      {
        name: 'RedisPilot',
        id: 'redispilot',
        status: '活跃',
        summary: '本地优先的 Redis 桌面管理工具，支持 Key 浏览、数据查看和常用操作。',
        repo: 'https://gitee.com/luoyaosheng/lys-redis-pilot',
      },
      {
        name: 'QueryLab',
        id: 'querylab',
        status: '活跃',
        summary: '本地优先的数据库客户端，当前聚焦 MySQL / MariaDB，支持 Schema 浏览和表数据操作。',
        repo: 'https://gitee.com/luoyaosheng/lys-query-lab',
      },
      {
        name: 'TermForge',
        id: 'termforge',
        status: '活跃',
        summary: '跨平台 SSH / SFTP / Runbook 运维工作台，支持端口转发和命令自动化。',
        repo: 'https://gitee.com/luoyaosheng/lys-term-forge',
      },
      {
        name: 'MCP DB Gateway',
        id: 'db-gateway',
        status: '活跃',
        summary: '基于 MCP 协议的数据库网关服务，为 AI 辅助开发提供安全的数据库访问。',
        repo: 'https://gitee.com/luoyaosheng/lys-db-gateway',
      },
    ],
  },
  {
    title: '创作与效率',
    intro: '服务于写作、发布和资产生成的独立工具。',
    items: [
      {
        name: '50 Apps Progress',
        id: 'apps-progress',
        status: '活跃',
        summary: '2026 年 50 个应用计划的公开进度站，记录应用从想法、设计、开发到发布的年度交付过程。',
        repo: 'https://gitee.com/luoyaosheng/lys-apps-progress',
        github: 'https://github.com/LuoYaoSheng/lys-apps-progress',
        docs: 'https://apps.open.i2kai.com',
      },
      {
        name: 'PaperMD',
        id: 'papermd',
        status: '活跃',
        summary: '原生 macOS Markdown 编辑器，追求极致输入体验。',
        repo: 'https://gitee.com/luoyaosheng/lys-paper-md',
      },
      {
        name: 'Batch Image Studio',
        id: 'image-studio',
        status: '活跃',
        summary: 'AI 驱动的图片批量处理工具，用于项目素材和发布图生产。基于 Tauri + Vue 构建。',
        repo: 'https://gitee.com/luoyaosheng/lys-image-studio',
        github: 'https://github.com/LuoYaoSheng/batch-image-studio',
        docs: 'https://batch.open.i2kai.com',
      },
      {
        name: 'Icon Gen',
        id: 'icon-gen',
        status: '活跃',
        summary: '图标生成工具，服务于项目多尺寸图标和资产生成。',
        repo: 'https://gitee.com/luoyaosheng/lys-icon-gen',
        github: 'https://github.com/LuoYaoSheng/lys-icon-gen',
        docs: 'https://icon.open.i2kai.com',
      },
      {
        name: 'Log Clean',
        id: 'log-clean',
        status: '活跃',
        summary: '日志清理工具，面向开发日志整理和 AI 协作前的数据清洗场景。',
        repo: 'https://gitee.com/luoyaosheng/lys-log-clean',
      },
    ],
  },
  {
    title: '轻应用与小程序',
    intro: '面向真实生活场景的轻量产品，用小程序形态验证完整体验。',
    items: [
      {
        name: '恋恋决定',
        id: 'lianlian-jueding',
        status: '已上架',
        summary: '情侣互动决策微信小程序，支持抽签、转盘、石头剪刀布、掷骰子、猜数字、猜颜色、任务清单和历史记录。',
        repo: 'https://gitee.com/luoyaosheng/lianlian-jueding',
      },
    ],
  },
  {
    title: '归档',
    intro: '保留用于参考和迁移说明的历史仓库，不建议作为当前入口使用。',
    items: [
      {
        name: 'LightBLE',
        id: 'lightble',
        status: '已归档',
        summary: 'Smart BLE 的历史命名与旧 uni-app 分支，主入口已迁移到 lys-smart-ble。',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
      },
      {
        name: 'SmartBLE-iOS',
        id: 'smartble-ios',
        status: '已归档',
        summary: 'Smart BLE 的历史独立 iOS 仓库，当前实现已整合到主仓库。',
        repo: 'https://gitee.com/luoyaosheng/smart-ble-i-os',
      },
      {
        name: 'IoT SmartLink Hub',
        id: 'iot-smartlink-hub',
        status: '已归档',
        summary: '旧 SmartLink 打包与落地页仓库，功能已迁移到 IoT Platform 主仓库。',
        repo: 'https://gitee.com/luoyaosheng/iot-smartlink-hub',
      },
    ],
  },
];

// ── Changelog ──
export const changelog = [
  {
    version: 'W16',
    date: '2026-04-17',
    title: '恋恋决定 v1.0.0 上架',
    changes: [
      '新增恋恋决定微信小程序项目入口',
      '首个正式版聚焦情侣互动决策：抽签、转盘、石头剪刀布、掷骰子、猜数字和猜颜色',
      '补齐任务清单、历史记录、音效反馈和全页面分享能力',
    ],
  },
  {
    version: 'W16',
    date: '2026-04-16',
    title: '站点重构为标准开源文档站',
    changes: [
      '从学习平台/营销落地页风格重构为标准开源文档站（侧边栏 + 内容区布局）',
      '拆分三层布局：BaseLayout / LandingLayout / DocLayout',
      'CSS 拆分为 global / doc / landing 三个文件',
      '导航从中文改为英文风格，增加 GitHub/Gitee 图标链接',
      '新增 /docs/getting-started、/docs/guides、/changelog 页面',
      '配置旧路径重定向：/learn → /docs/getting-started 等',
    ],
  },
  {
    version: 'W14',
    date: '2026-04-01',
    title: 'Smart BLE 文档整合',
    changes: [
      '补充 Smart BLE 命名指南和文档骨架',
      '准备素材清单和周更草稿',
      '整理技术文章入口',
    ],
  },
  {
    version: 'W13',
    date: '2026-03-31',
    title: '仓库入口收口',
    changes: [
      '主线仓库统一到 lys 前缀命名路径',
      '明确各项目的访问入口和仓库关系',
      '补充历史仓库与主入口之间的迁移说明',
    ],
  },
  {
    version: 'W13',
    date: '2026-03-31',
    title: '第一轮构建整理',
    changes: [
      '通过 QueryLab、RedisPilot、TermForge 前端构建检查',
      '恢复 open-iot-platform/server 测试套件',
      '更新各项目入口文档，对齐工程现状',
    ],
  },
];

// ── Roadmap ──
export const roadmap = {
  quarter: '2026 Q2',
  theme: '让每个项目都有可用的工具、可读的文档和可跟进的更新。',
  inProgress: [
    'Smart BLE 主入口体验优化',
    '历史仓库迁移说明文档',
    '项目详情页设计',
  ],
  planned: [
    '项目独立详情页（替代当前仓库直接跳转）',
    '更新日志时间线归档',
    '更多历史仓库整理和迁移',
    '搜索功能',
  ],
  done: [
    '独立文档站上线',
    'lys 前缀命名规范',
    'Gitee 主线仓库路径收口',
    '第一轮文档与构建整理',
  ],
};

// ── About ──
export const aboutContent = {
  mission: '这个站点是 lys 开源项目集合的统一入口。目标是让每个项目可发现、可理解、可用 — 而不是堆砌仓库列表或展示路线图。',
  author: {
    name: 'LuoYaoSheng',
    bio: '独立开发者，关注 BLE、IoT 和开发工具。用 Gitee 和 GitHub 维护所有开源项目。',
    links: [
      { label: 'GitHub', href: 'https://github.com/LuoYaoSheng' },
      { label: 'Gitee', href: 'https://gitee.com/luoyaosheng' },
      { label: '个人站', href: 'https://i2kai.com' },
    ],
  },
  principles: [
    {
      title: '真实项目，不是演示',
      description: '这里列出的每个项目都解决过实际问题 — BLE 调试、设备配网、数据库管理、SSH 运维、图片批处理。它们不是为展示而写的 Demo。',
    },
    {
      title: '文档是一等公民',
      description: '技术指南、架构解析和对比评测是项目的一部分，不是上线后补的附属品。好的文档能让项目真正可用。',
    },
    {
      title: '保留历史演进',
      description: '历史仓库和迁移路径都会保留。理解一个项目如何演化和理解它当前能做什么同样重要。',
    },
    {
      title: '用户优先',
      description: '站点应该先告诉你什么能用、去哪里下载、下一步去哪 — 而不是先谈愿景和计划。',
    },
  ],
};
