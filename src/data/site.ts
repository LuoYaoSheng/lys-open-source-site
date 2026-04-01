export const siteMeta = {
  title: '从真实开源项目学习 BLE 与 IoT',
  subtitle: '这里不是仓库目录，而是一条围绕真实开源项目展开的学习入口。',
  heroNote: '先体验，再看教程，再读源码。让学习路径比仓库结构更清楚。'
};

export const featuredProjects = [
  {
    name: 'Smart BLE',
    slug: 'smart-ble',
    category: '核心主线',
    summary: '跨平台 BLE 调试工具，也是学习 BLE、对比多平台实现和理解协议最合适的入口。',
    repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
    docs: '/projects#smart-ble',
    status: '先从这里学',
    bestFor: 'BLE 扫描、连接、读写、广播、小程序体验、多实现对照'
  },
  {
    name: 'Open IoT Platform',
    slug: 'open-iot-platform',
    category: '核心主线',
    summary: '从设备接入、配网到控制管理的一体化 IoT 平台主系统，适合往完整工程链路继续深入。',
    repo: 'https://gitee.com/luoyaosheng/lys-iot-platform',
    docs: '/projects#open-iot-platform',
    status: '继续深入',
    bestFor: '设备接入、BLE 配网、MQTT、服务端、App、固件协作'
  }
];

export const startHere = [
  {
    title: '我想先体验 BLE 工具',
    text: '先从 Smart BLE 小程序码开始。它最适合先体验，再反过来理解 BLE 扫描、连接和协议。',
    href: 'https://gitee.com/luoyaosheng/lys-smart-ble'
  },
  {
    title: '我想系统学习 IoT 链路',
    text: '再从 Open IoT Platform 往下走，去看配网、设备接入、MQTT 和服务端是怎么串起来的。',
    href: 'https://gitee.com/luoyaosheng/lys-iot-platform'
  },
  {
    title: '我想看更多可学项目',
    text: '去 Projects 页面挑你最感兴趣的公开项目，再决定是先看文档、先运行，还是直接读代码。',
    href: '/projects'
  }
];

export const trustSignals = [
  '不是 PPT 式示例，而是真实在维护的项目',
  '不是只给代码，还保留教程、历史分支和硬件示例',
  '重点项目已经能构建，学习链路不是空壳',
  '你可以先体验，再决定要不要继续读源码'
];

export const learningHighlights = [
  {
    title: '先体验',
    text: '先扫码或打开项目，感受它到底在解决什么问题。'
  },
  {
    title: '再学原理',
    text: '再去看教程、平台对照、协议说明，理解为什么要这样设计。'
  },
  {
    title: '最后看源码',
    text: '等你知道问题和目标后，再读源码，会比直接看仓库更容易学进去。'
  }
];

export const learnerSections = [
  {
    title: '学 BLE',
    summary: '从扫描、连接、读写、广播开始，理解 BLE 调试的核心动作。',
    emphasis: '先从 Smart BLE 开始'
  },
  {
    title: '学 IoT 链路',
    summary: '从配网、设备接入、MQTT、服务端到 App 协作，理解完整主链路。',
    emphasis: '再看 Open IoT Platform'
  },
  {
    title: '学真实工具工程',
    summary: '从 RedisPilot、QueryLab、TermForge 这些项目里看实际工具是怎么做出来的。',
    emphasis: '最后回到工具项目'
  }
];

export const learnTracks = [
  {
    title: '从 Smart BLE 开始学 BLE',
    audience: '第一次接触 BLE、想先跑通扫描/连接/读写的人',
    level: '入门',
    duration: '30-90 分钟',
    outcome: '理解 BLE 调试最基本的扫描、连接、读写与多平台实现差异。',
    steps: [
      '先扫码体验 Smart BLE 小程序',
      '再看 5 分钟快速上手',
      '再看 BLE FAQ 和平台对比',
      '最后回到仓库看实现'
    ],
    links: [
      { label: 'Smart BLE 仓库', href: 'https://gitee.com/luoyaosheng/lys-smart-ble' },
      { label: '5 分钟上手', href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/005-5%E5%88%86%E9%92%9F%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.md' },
      { label: 'BLE FAQ', href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/007-BLE%E5%BC%80%E5%8F%91%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94.md' }
    ]
  },
  {
    title: '从 Open IoT Platform 学完整链路',
    audience: '想看设备、配网、MQTT、服务端和 App 是如何协作的人',
    level: '进阶',
    duration: '2-4 小时',
    outcome: '理解从设备接入、BLE 配网到 MQTT 和服务端协作的完整工程链路。',
    steps: [
      '先看平台 README',
      '再看仓库架构与边界',
      '再看本地联调 Runbook',
      '最后看服务端和移动端实现'
    ],
    links: [
      { label: '平台仓库', href: 'https://gitee.com/luoyaosheng/lys-iot-platform' },
      { label: '仓库架构文档', href: 'https://gitee.com/luoyaosheng/lys-iot-platform/blob/master/docs/REPOSITORY_ARCHITECTURE.md' },
      { label: '本地联调 Runbook', href: 'https://gitee.com/luoyaosheng/lys-iot-platform/blob/master/docs/LOCAL_EMULATOR_RUNBOOK.md' }
    ]
  },
  {
    title: '从工具项目学桌面应用和工程方法',
    audience: '已经会基础开发，想看真实工具项目如何落地的人',
    level: '进阶',
    duration: '2-3 小时',
    outcome: '理解桌面工具项目如何组织 README、工作区、构建链路和实际功能边界。',
    steps: [
      '先看 RedisPilot 和 QueryLab',
      '再看 TermForge',
      '观察它们如何组织 README、工作区和构建链路',
      '最后再进入代码和构建配置'
    ],
    links: [
      { label: 'RedisPilot', href: 'https://gitee.com/luoyaosheng/lys-redis-pilot' },
      { label: 'QueryLab', href: 'https://gitee.com/luoyaosheng/lys-query-lab' },
      { label: 'TermForge', href: 'https://gitee.com/luoyaosheng/lys-term-forge' }
    ]
  }
];

export const articleCollections = [
  {
    title: '适合第一次阅读的文章',
    intro: '先理解项目是什么，再决定要不要继续深挖实现。',
    items: [
      {
        title: '为什么选择 Smart BLE？',
        summary: '帮助第一次接触项目的人快速理解它为什么值得先看。',
        level: '入门',
        readTime: '5-8 分钟',
        tag: '项目认知',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/008-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9SmartBLE.md'
      },
      {
        title: '5 分钟上手 Smart BLE',
        summary: '快速知道 Smart BLE 到底怎么用、怎么开始。',
        level: '入门',
        readTime: '5 分钟',
        tag: '快速入门',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/005-5%E5%88%86%E9%92%9F%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.md'
      },
      {
        title: '项目故事：为什么我要做 Smart BLE？',
        summary: '从动机和演进背景理解这个项目为什么会保留多实现。',
        level: '入门',
        readTime: '8-10 分钟',
        tag: '项目故事',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/003-%E9%A1%B9%E7%9B%AE%E6%95%85%E4%BA%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E5%81%9ASmartBLE.md'
      }
    ]
  },
  {
    title: '适合深入学习的文章',
    intro: '当你已经开始理解项目之后，再去看这些技术和实战内容。',
    items: [
      {
        title: '如何设计一个跨平台 BLE 抽象层？',
        summary: '从接口抽象和多平台差异理解 Smart BLE 的实现思路。',
        level: '进阶',
        readTime: '12-15 分钟',
        tag: '抽象设计',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/001-%E8%B7%A8%E5%B9%B3%E5%8F%B0BLE%E6%8A%BD%E8%B1%A1%E5%B1%82%E8%AE%BE%E8%AE%A1.md'
      },
      {
        title: 'ESP32 BLE 实战：从零搭建蓝牙设备',
        summary: '适合和 App 调试一起看，理解硬件侧是如何配合的。',
        level: '进阶',
        readTime: '15-20 分钟',
        tag: '硬件实战',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/002-ESP32%E5%AE%9E%E6%88%98%E4%BB%8E%E9%9B%B6%E6%90%AD%E5%BB%BA.md'
      },
      {
        title: '8 种跨平台 BLE 方案对比评测',
        summary: '适合已经学到一定程度后，看不同路线该怎么选。',
        level: '进阶',
        readTime: '12-18 分钟',
        tag: '平台对比',
        href: 'https://gitee.com/luoyaosheng/lys-smart-ble/blob/refactor/multi-platform/docs/promotion/articles/004-8%E7%A7%8D%E5%B9%B3%E5%8F%B0%E5%AF%B9%E6%AF%94%E8%AF%84%E6%B5%8B.md'
      }
    ]
  }
];

export const articlePlan = [
  '每周至少一篇公开更新',
  '每月 1-2 篇教学实战文章',
  '阶段性补平台对比与实现取舍文章',
  '围绕 Smart BLE 和 Open IoT Platform 两条主线持续产出'
];

export const learnerPromises = [
  '先给你体验入口，不要求先读懂架构图',
  '每条路线都告诉你适合谁、学多久、最终能得到什么',
  '文章不是附属物，而是进入真实项目的跳板'
];

export const downloadEntries = [
  {
    title: 'Smart BLE 小程序体验',
    label: '微信小程序码',
    summary: '直接扫码体验 Smart BLE 小程序。最适合先感受 BLE 调试工具到底解决了什么问题。',
    image: '/placeholders/smart-ble-qr.jpg',
    href: 'https://gitee.com/luoyaosheng/lys-smart-ble',
    action: 'Open Smart BLE'
  },
  {
    title: 'Open IoT Platform 体验入口',
    label: '项目二维码',
    summary: '这里先放现成的二维码入口，后续再继续补真实 APK、固件和发布页下载位。',
    image: '/placeholders/open-iot-platform-qr.jpg',
    href: 'https://gitee.com/luoyaosheng/lys-iot-platform',
    action: 'Open Platform'
  },
  {
    title: 'PaperMD / RedisPilot 下载位',
    label: '下载入口预留',
    summary: '桌面工具后续可以在这里给出 dmg、zip、安装包或 Release 页面入口。',
    image: '/placeholders/releases-stack.svg',
    href: '/projects',
    action: 'Browse Releases'
  }
];

export const projectGroups = [
  {
    title: '核心主线',
    intro: '如果你第一次来到这里，先看这组项目。它们最适合作为学习 BLE 与 IoT 的主入口。',
    items: [
      {
        name: 'Smart BLE',
        id: 'smart-ble',
        status: '主入口',
        summary: '跨平台 BLE 调试工具，也是一套多分支多模式的实践样板。',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
        bestFor: '想学 BLE 调试、协议、平台差异和硬件联动的人'
      },
      {
        name: 'Open IoT Platform',
        id: 'open-iot-platform',
        status: '主入口',
        summary: 'IoT 平台主系统，连接服务端、移动端、固件和发布包装层。',
        repo: 'https://gitee.com/luoyaosheng/lys-iot-platform',
        bestFor: '想把设备、App、MQTT、服务端串成完整链路的人'
      },
      {
        name: 'SerialTool',
        id: 'serial-tool',
        status: '占位',
        summary: '串口调试工具，补齐 IoT 硬件开发链路里的基础能力。',
        repo: 'https://gitee.com/luoyaosheng/lys-serial-tool',
        bestFor: '想补齐串口调试和基础硬件开发能力的人'
      }
    ]
  },
  {
    title: '支撑工具',
    intro: '这些项目更像扩展阅读和工具箱。它们可以独立使用，也能帮你从不同角度理解真实工程。 ',
    items: [
      {
        name: 'RedisPilot',
        id: 'redispilot',
        status: '公开中',
        summary: '本地优先 Redis 桌面管理工具。',
        repo: 'https://gitee.com/luoyaosheng/lys-redis-pilot',
        bestFor: '想学 Redis 数据查看、Key 浏览和桌面工具实现的人'
      },
      {
        name: 'QueryLab',
        id: 'querylab',
        status: '公开中',
        summary: '本地优先数据库客户端，当前聚焦 MySQL / MariaDB。',
        repo: 'https://gitee.com/luoyaosheng/lys-query-lab',
        bestFor: '想学数据库工作台、Schema 浏览和表数据操作的人'
      },
      {
        name: 'TermForge',
        id: 'termforge',
        status: '公开中',
        summary: '跨平台 SSH / SFTP / Runbook 运维工作台。',
        repo: 'https://gitee.com/luoyaosheng/lys-term-forge',
        bestFor: '想学 SSH 工作台、SFTP、端口转发和 Runbook 的人'
      },
      {
        name: 'MCP DB Gateway',
        id: 'db-gateway',
        status: '公开中',
        summary: '数据库网关服务，服务于更安全的数据库访问链路。',
        repo: 'https://gitee.com/luoyaosheng/lys-db-gateway',
        bestFor: '想研究数据库网关和更安全访问链路的人'
      }
    ]
  },
  {
    title: '创作与效率工具',
    intro: '这些项目不属于 IoT 主线，但它们展示了这套系统背后的写作、发布和资产生产方式。',
    items: [
      {
        name: 'PaperMD',
        id: 'papermd',
        status: '公开中',
        summary: '原生 macOS Markdown 编辑器，强调极致输入体验。',
        repo: 'https://gitee.com/luoyaosheng/lys-paper-md',
        bestFor: '想学技术写作工具和原生输入体验的人'
      },
      {
        name: 'Batch Image Studio',
        id: 'image-studio',
        status: '公开中',
        summary: '图片批量处理工具，用于项目素材与发布图生产。',
        repo: 'https://gitee.com/luoyaosheng/lys-image-studio',
        bestFor: '想学素材制作和图片批处理的人'
      },
      {
        name: 'Icon Gen',
        id: 'icon-gen',
        status: '公开中',
        summary: '图标生成工具，服务项目资产生成。',
        repo: 'https://gitee.com/luoyaosheng/lys-icon-gen',
        bestFor: '想学图标导出和资产生成的人'
      },
      {
        name: 'Log Clean',
        id: 'log-clean',
        status: '公开中',
        summary: '日志清理工具，面向开发和 AI 协作场景。',
        repo: 'https://gitee.com/luoyaosheng/lys-log-clean',
        bestFor: '想学日志整理和 AI 协作前清洗的人'
      }
    ]
  },
  {
    title: '归档与历史入口',
    intro: '这些仓库保留历史价值和迁移路径，适合看项目怎么演进，而不是作为当前主入口使用。',
    items: [
      {
        name: 'LightBLE',
        id: 'lightble',
        status: '历史入口',
        summary: 'Smart BLE 的历史 uni-app / LightBLE 线。',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
        bestFor: '查看项目历史与教学演进'
      },
      {
        name: 'SmartBLE-iOS',
        id: 'smartble-ios',
        status: '历史入口',
        summary: 'Smart BLE 的历史 iOS 仓库，现作为历史参考保留。',
        repo: 'https://gitee.com/luoyaosheng/smart-ble-i-os',
        bestFor: '查看历史 iOS 实现与迁移背景'
      },
      {
        name: 'IoT SmartLink Hub',
        id: 'iot-smartlink-hub',
        status: '历史包装层',
        summary: '旧 SmartLink 打包与落地页仓库，主入口已回到平台主仓库。',
        repo: 'https://gitee.com/luoyaosheng/iot-smartlink-hub',
        bestFor: '查看发布包装层与旧入口结构'
      }
    ]
  }
];

export const weeklyEntries = [
  {
    title: '仓库入口收口',
    date: '2026-03-31',
    summary: '主线仓库已经切到统一的 lys 前缀路径，访问入口开始变得清晰。',
    next: '继续把历史仓库和主入口之间的关系补齐。'
  },
  {
    title: '项目文档现实对齐',
    date: '2026-03-31',
    summary: '整理 QueryLab、TermForge、Smart BLE、Open IoT Platform 的入口文档，使它们和当前工程现实一致。',
    next: '继续把这些内容转成面向用户的网站入口。'
  },
  {
    title: '第一轮构建整理',
    date: '2026-03-31',
    summary: '打通 QueryLab、RedisPilot、TermForge 的前端检查，并恢复 open-iot-platform/server 的测试。',
    next: '把“能运行”的事实同步到首页信任区块里。'
  }
];

export const roadmap = {
  quarter: '2026 Q2',
  theme: '把能用的工具、能读的教程、能跟进的更新都放进同一个入口。',
  inProgress: [
    '独立网站 MVP',
    'Smart BLE 主入口强化',
    '历史仓库迁移说明'
  ],
  planned: [
    '项目详情页',
    '周更归档页',
    '更多历史仓库整理'
  ],
  done: [
    'lys 前缀命名规范',
    'Gitee 主线仓库 path 收口',
    '第一轮文档与构建整理'
  ]
};
