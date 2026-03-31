export const siteMeta = {
  title: 'lys Open Source System',
  subtitle: '围绕 IoT 开发工作流展开，同时延伸到开发者效率工具的个人开源系统。',
  heroNote: '主线是 IoT DevTools，入口从 Smart BLE 开始。'
};

export const featuredProjects = [
  {
    name: 'Smart BLE',
    slug: 'smart-ble',
    category: '核心主线',
    summary: '多分支多模式的跨平台 BLE 调试工具与实践样板项目。',
    repo: 'https://gitee.com/luoyaosheng/lys-smart-ble',
    docs: '/projects#smart-ble',
    status: 'Active'
  },
  {
    name: 'Open IoT Platform',
    slug: 'open-iot-platform',
    category: '核心主线',
    summary: '从设备接入、配网到控制管理的一体化 IoT 平台主系统。',
    repo: 'https://gitee.com/luoyaosheng/lys-iot-platform',
    docs: '/projects#open-iot-platform',
    status: 'Active'
  }
];

export const projectGroups = [
  {
    title: '核心主线',
    items: [
      {
        name: 'Smart BLE',
        id: 'smart-ble',
        status: '主入口',
        summary: '跨平台 BLE 调试工具、教学样板、多分支多模式产品家族。',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble'
      },
      {
        name: 'Open IoT Platform',
        id: 'open-iot-platform',
        status: '主入口',
        summary: 'IoT 平台主系统，连接服务端、移动端、固件和发布包装层。',
        repo: 'https://gitee.com/luoyaosheng/lys-iot-platform'
      },
      {
        name: 'SerialTool',
        id: 'serial-tool',
        status: '占位',
        summary: '串口调试工具，作为 IoT 硬件开发链路的基础补位。',
        repo: 'https://gitee.com/luoyaosheng/lys-serial-tool'
      }
    ]
  },
  {
    title: '支撑工具',
    items: [
      {
        name: 'RedisPilot',
        id: 'redispilot',
        status: '公开中',
        summary: '本地优先 Redis 桌面管理工具。',
        repo: 'https://gitee.com/luoyaosheng/lys-redis-pilot'
      },
      {
        name: 'QueryLab',
        id: 'querylab',
        status: '公开中',
        summary: '本地优先数据库客户端，当前聚焦 MySQL / MariaDB。',
        repo: 'https://gitee.com/luoyaosheng/lys-query-lab'
      },
      {
        name: 'TermForge',
        id: 'termforge',
        status: '公开中',
        summary: '跨平台 SSH / SFTP / Runbook 运维工作台。',
        repo: 'https://gitee.com/luoyaosheng/lys-term-forge'
      },
      {
        name: 'MCP DB Gateway',
        id: 'db-gateway',
        status: '公开中',
        summary: '数据库网关服务，服务于更安全的数据库访问链路。',
        repo: 'https://gitee.com/luoyaosheng/lys-db-gateway'
      }
    ]
  },
  {
    title: '创作与效率工具',
    items: [
      {
        name: 'PaperMD',
        id: 'papermd',
        status: '公开中',
        summary: '原生 macOS Markdown 编辑器，强调极致输入体验。',
        repo: 'https://gitee.com/luoyaosheng/lys-paper-md'
      },
      {
        name: 'Batch Image Studio',
        id: 'image-studio',
        status: '公开中',
        summary: '图片批量处理工具，用于项目素材与发布图生产。',
        repo: 'https://gitee.com/luoyaosheng/lys-image-studio'
      },
      {
        name: 'Icon Gen',
        id: 'icon-gen',
        status: '公开中',
        summary: '图标生成工具，服务项目资产生成。',
        repo: 'https://gitee.com/luoyaosheng/lys-icon-gen'
      },
      {
        name: 'Log Clean',
        id: 'log-clean',
        status: '公开中',
        summary: '日志清理工具，面向开发和 AI 协作场景。',
        repo: 'https://gitee.com/luoyaosheng/lys-log-clean'
      }
    ]
  },
  {
    title: '归档与历史入口',
    items: [
      {
        name: 'LightBLE',
        id: 'lightble',
        status: '历史入口',
        summary: 'Smart BLE 的历史 uni-app / LightBLE 线。',
        repo: 'https://gitee.com/luoyaosheng/lys-smart-ble'
      },
      {
        name: 'SmartBLE-iOS',
        id: 'smartble-ios',
        status: '历史入口',
        summary: 'Smart BLE 的历史 iOS 仓库，现作为历史参考保留。',
        repo: 'https://gitee.com/luoyaosheng/smart-ble-i-os'
      },
      {
        name: 'IoT SmartLink Hub',
        id: 'iot-smartlink-hub',
        status: '历史包装层',
        summary: '旧 SmartLink 打包与落地页仓库，主入口已回到平台主仓库。',
        repo: 'https://gitee.com/luoyaosheng/iot-smartlink-hub'
      }
    ]
  }
];

export const weeklyEntries = [
  {
    title: '仓库入口收口',
    date: '2026-03-31',
    summary: '完成主线仓库的 lys 前缀收口，并把 Smart BLE / Open IoT Platform 的入口关系拉平。',
    next: '继续把历史仓库 README 迁移说明补齐。'
  },
  {
    title: '项目文档现实对齐',
    date: '2026-03-31',
    summary: '修正 QueryLab、TermForge、Smart BLE、Open IoT Platform 的 README 和产品文档，使其匹配当前工程现实。',
    next: '开始用网站承接这些已经收口的内容。'
  },
  {
    title: '第一轮构建整理',
    date: '2026-03-31',
    summary: '打通 QueryLab、RedisPilot、TermForge 前端检查，并恢复 open-iot-platform/server 的 go test。',
    next: '把“可运行”状态同步到公开入口。'
  }
];

export const roadmap = {
  quarter: '2026 Q2',
  theme: '入口收口、网站上线、形成周更',
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
