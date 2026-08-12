import type { Project } from "../components/portfolio/ProjectCard";

export const projects = [
  {
    number: "01",
    title: "Lerro",
    type: { en: "macOS app", zh: "macOS 应用" },
    summary: {
      en: "Open-source voice typing built on Apple’s on-device speech and translation.",
      zh: "基于 Apple 端侧语音与翻译能力的开源语音输入工具。",
    },
    detail: {
      en: "One Fn shortcut turns speech into text, translation, or app-aware commands on macOS 26.",
      zh: "在 macOS 26 上，用一个 Fn 快捷键完成听写、翻译与结合当前应用的指令。",
    },
    focus: {
      en: "Swift · Apple Speech · Local-first",
      zh: "Swift · Apple Speech · 本地优先",
    },
    href: "https://lerroapp.com/",
    details: {
      overview: {
        en: "A native voice-writing app for Apple silicon Macs that keeps its core Dictate and Translate paths on the device.",
        zh: "面向 Apple 芯片 Mac 的原生语音写作应用，核心听写与翻译链路都在设备上完成。",
      },
      highlights: [
        {
          en: "Quick Dictate delivers after a short silence; press-and-hold and follow-up voice edits remain available.",
          zh: "Quick Dictate 会在短暂停顿后自动写入，同时支持按住说话与连续语音修改。",
        },
        {
          en: "Command can use an optional local MLX model or an OpenAI-compatible API configured by the user.",
          zh: "Command 可选用本地 MLX 模型，或由用户配置的 OpenAI 兼容 API。",
        },
        {
          en: "No account, subscription, telemetry, or server-side transcript storage is required.",
          zh: "无需账号与订阅，不含遥测，也不会在服务器存储转写内容。",
        },
      ],
      resource: {
        href: "https://github.com/Ryan-yang125/lerro#readme",
        label: { en: "View the source", zh: "查看源码" },
      },
    },
  },
  {
    number: "02",
    title: "ChatLLM Web",
    type: { en: "Local AI", zh: "本地 AI" },
    summary: {
      en: "A private local model studio, AI chat, and agent workspace powered by WebGPU.",
      zh: "由 WebGPU 驱动的私有本地模型工作室、AI 对话与 Agent 工作区。",
    },
    detail: {
      en: "It runs model inference, local tools, and approval-gated artifacts while conversations and files stay in the browser.",
      zh: "它在浏览器中运行模型推理、本地工具与需确认的产物写入，同时让会话和文件留在设备上。",
    },
    focus: { en: "WebGPU · Local models · PWA", zh: "WebGPU · 本地模型 · PWA" },
    href: "https://chatllm-web.pages.dev/",
    details: {
      overview: {
        en: "A browser-native Chat, Local Agent Workspace, and Local Model Studio built on WebLLM, with no application backend or account.",
        zh: "基于 WebLLM 的浏览器原生对话、本地 Agent 工作区与本地模型工作室，无应用后端与账号系统。",
      },
      highlights: [
        {
          en: "The curated catalog covers 20 models, including three Hermes models with native function calling.",
          zh: "精选目录包含 20 个模型，其中三个 Hermes 模型支持原生函数调用。",
        },
        {
          en: "Sandboxed local tools can inspect selected files, search context, calculate, and create artifacts after diff approval.",
          zh: "沙箱化本地工具可检查选定文件、搜索上下文、计算，并在差异确认后创建产物。",
        },
        {
          en: "The advanced catalog groups 163 official WebLLM records into 65 logical models and selects compatible quantization.",
          zh: "高级目录将 163 个官方 WebLLM 记录整理为 65 个逻辑模型，并自动选择兼容量化版本。",
        },
      ],
      resource: {
        href: "https://github.com/Ryan-yang125/ChatLLM-Web#readme",
        label: { en: "View the source", zh: "查看源码" },
      },
    },
  },
  {
    number: "03",
    title: "Motion Lexicon",
    type: { en: "Component system", zh: "组件系统" },
    summary: {
      en: "Copy-ready React page blocks, product components, and motion primitives.",
      zh: "可直接使用的 React 页面区块、产品组件与动效原语。",
    },
    detail: {
      en: "Every preview connects to production TypeScript, a shadcn registry entry, and a reduced-motion path.",
      zh: "每个预览都连接到生产级 TypeScript、shadcn registry 条目与减少动态效果方案。",
    },
    focus: {
      en: "React · Motion · shadcn registry",
      zh: "React · Motion · shadcn registry",
    },
    href: "https://motion-lexicon.pages.dev/en/",
    details: {
      overview: {
        en: "An open component system for moving from a complete product page to a focused interaction or precise motion behavior.",
        zh: "一个开源组件系统，覆盖完整产品页面、聚焦式交互与精确动效行为。",
      },
      highlights: [
        {
          en: "The registry publishes 4 complete page blocks, 48 product components, and 44 motion primitives and guides.",
          zh: "Registry 发布 4 个完整页面区块、48 个产品组件，以及 44 个动效原语与指南。",
        },
        {
          en: "Motion, GSAP, Three.js, WebGL, SVG, and CSS implementations share one install path.",
          zh: "Motion、GSAP、Three.js、WebGL、SVG 与 CSS 实现共用一套安装路径。",
        },
        {
          en: "The Agent Skill supports page building, recommendation, composition, implementation, review, and contribution.",
          zh: "配套 Agent Skill 支持页面构建、推荐、组合、实现、评审与贡献。",
        },
      ],
      resource: {
        href: "https://github.com/Ryan-yang125/motion-lexicon#readme",
        label: { en: "View the source", zh: "查看源码" },
      },
    },
  },
  {
    number: "04",
    title: "CheckHere",
    type: { en: "Release QA", zh: "发布验收" },
    summary: {
      en: "Free local-first browser release checks for AI-built websites.",
      zh: "面向 AI 构建网站的免费、本地优先浏览器发布检查。",
    },
    detail: {
      en: "It turns a local or deployed URL into reproducible evidence and agent-readable fixes.",
      zh: "它把本地或线上网址转化为可复核证据与 Agent 可读的修复建议。",
    },
    focus: {
      en: "Playwright · Lighthouse · Release gates",
      zh: "Playwright · Lighthouse · 发布门禁",
    },
    href: "https://checkhere.page/",
    details: {
      overview: {
        en: "A CLI, Agent Skill, and GitHub Action that runs Chromium and Lighthouse where the check is invoked and keeps reports local.",
        zh: "一套 CLI、Agent Skill 与 GitHub Action，在执行检查的位置运行 Chromium 和 Lighthouse，并将报告保留在本地。",
      },
      highlights: [
        {
          en: "Desktop and mobile evidence covers HTTP, page, console, asset, layout, metadata, and structured-data failures.",
          zh: "桌面端与移动端证据覆盖 HTTP、页面、控制台、资源、布局、元数据与结构化数据问题。",
        },
        {
          en: "One report model renders HTML, Markdown, and JSON for people, agents, and CI.",
          zh: "同一份报告模型可输出 HTML、Markdown 与 JSON，供人、Agent 与 CI 使用。",
        },
        {
          en: "Stable issue codes and severity thresholds let the CI command act as a release gate.",
          zh: "稳定的问题代码与严重级别阈值让 CI 命令可以直接充当发布门禁。",
        },
      ],
      resource: {
        href: "https://github.com/Ryan-yang125/checkhere#readme",
        label: { en: "View the source", zh: "查看源码" },
      },
    },
  },
  {
    number: "05",
    title: "Signature Visual",
    type: { en: "Design Skill", zh: "设计 Skill" },
    summary: {
      en: "A design Skill for original computational visuals on the web.",
      zh: "用于创造原创 Web 计算视觉的设计 Skill。",
    },
    detail: {
      en: "It turns ambiguous visual intent into a selected direction, production runtime, and deterministic review evidence.",
      zh: "它将模糊的视觉意图转化为明确方向、生产运行时与可重复的评审证据。",
    },
    focus: {
      en: "Canvas · Three.js · WebGL · SVG",
      zh: "Canvas · Three.js · WebGL · SVG",
    },
    href: "https://signature-visual.pages.dev/",
    details: {
      overview: {
        en: "A self-contained Agent Skill for giving products one ownable visual system with a disciplined creative and runtime process.",
        zh: "一个自包含的 Agent Skill，通过完整的创意与运行时流程，为产品构建具有辨识度的视觉系统。",
      },
      highlights: [
        {
          en: "Creative search, adversarial selection, and distance checks keep the chosen direction specific to the product.",
          zh: "创意搜索、对抗式筛选与距离检查让最终方向真正属于当前产品。",
        },
        {
          en: "The method chooses among Canvas 2D, Three.js, raw WebGL, and SVG after the experience is defined.",
          zh: "在体验方向确定后，再从 Canvas 2D、Three.js、原生 WebGL 与 SVG 中选择实现。",
        },
        {
          en: "Deterministic runtime QA captures responsive, reduced-motion, interaction, and lifecycle states for critique.",
          zh: "确定性运行时 QA 会捕捉响应式、减少动态效果、交互与生命周期状态用于评审。",
        },
      ],
      resource: {
        href: "https://github.com/Ryan-yang125/signature-visual#readme",
        label: { en: "View the source", zh: "查看源码" },
      },
    },
  },
  {
    number: "06",
    title: "Image2Studio",
    type: { en: "Live product", zh: "在线产品" },
    summary: {
      en: "A searchable GPT Image 2 library and generation workspace built from reusable scenes.",
      zh: "由可复用场景构成的 GPT Image 2 搜索库与生成工作区。",
    },
    detail: {
      en: "A public prompt library, agent search Skill, and production generator connect discovery to finished images.",
      zh: "公开提示词库、Agent 搜索 Skill 与生产级生成器将灵感发现连接到最终图像。",
    },
    focus: {
      en: "GPT Image 2 · Prompt search · Agent Skill",
      zh: "GPT Image 2 · 提示词搜索 · Agent Skill",
    },
    href: "https://image2studio.com/prompts",
    details: {
      overview: {
        en: "An image-making system that combines a searchable public reference library with reusable scene inputs and asynchronous generation.",
        zh: "一套图像创作系统，将可搜索的公开参考库、可复用场景输入与异步生成连接在一起。",
      },
      highlights: [
        {
          en: "The public gallery contains 1,000 curated prompt-image pairs for visual search and adaptation.",
          zh: "公开图库包含 1,000 组精选提示词与图像，可用于视觉搜索与改写。",
        },
        {
          en: "The open gpt-image-2-search Skill lets agents find references without an API key.",
          zh: "开源 gpt-image-2-search Skill 让 Agent 无需 API key 即可搜索参考。",
        },
        {
          en: "The product carries selected scenes through account, credit, queue, storage, and result workflows.",
          zh: "产品将选定场景连接到账户、点数、队列、存储与结果工作流。",
        },
      ],
      resource: {
        href: "https://github.com/Ryan-yang125/gpt-image-2-skills#readme",
        label: { en: "Open the Agent Skill", zh: "打开 Agent Skill" },
      },
    },
  },
] as const satisfies readonly Project[];
