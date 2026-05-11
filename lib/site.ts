export const siteConfig = {
  name: "芒果AI科技",
  englishName: "Mango AI Tech",
  title: "芒果AI科技 Mango AI Tech",
  description: "用产品经理视角，发现、解读和实验最有意思的 AI 前沿。",
  slogan: "发现有意思的 AI，拆解能落地的科技。",
  url: "https://www.mangoaitech.cn"
};

export const navItems = [
  { href: "/", label: "首页" },
  { href: "/frontier", label: "AI前沿" },
  { href: "/principles", label: "原理解剖室" },
  { href: "/lab", label: "AI实验室" },
  { href: "/about", label: "关于我" }
];

export const categoryLabels = {
  frontier: "AI前沿",
  principles: "原理解剖室",
  lab: "AI实验室"
} as const;

export const labItems = [
  {
    title: "AI资讯摘要器",
    description:
      "把多来源 AI 新闻整理成一页摘要，保留事件、影响、适合谁关注和下一步动作。",
    scenario: "适合产品经理、创业者和 AI 爱好者快速追踪前沿变化。",
    status: "Demo中",
    href: "/posts/ai-news-summarizer-design"
  },
  {
    title: "产品需求文档生成器",
    description:
      "输入产品想法、用户场景和约束条件，生成结构化 PRD 草稿与验收标准。",
    scenario: "适合把模糊需求快速整理成可评审、可执行的产品文档。",
    status: "规划中",
    href: "/lab"
  },
  {
    title: "AI周报生成器",
    description:
      "把收藏链接、会议记录和项目进展整合成面向团队的 AI 周报。",
    scenario: "适合团队内部知识同步、项目复盘和趋势观察。",
    status: "规划中",
    href: "/lab"
  }
];
