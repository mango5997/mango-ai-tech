# 芒果AI科技 Mango AI Tech

一个静态优先的个人 AI 科技资讯与实验网站 MVP。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- Markdown 静态文章
- Vercel 友好部署

## 本地启动

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000`。

如果你更习惯 npm，也可以删除 `pnpm-lock.yaml` 后使用 `npm install && npm run dev`。

## 新增文章

在 `content/posts` 下新增一个 `.md` 文件，文件名会成为文章 slug，例如：

```text
content/posts/my-new-ai-note.md
```

文章需要包含 frontmatter：

```md
---
title: "文章标题"
date: "2026-05-11"
category: "frontier"
tags: ["AI前沿", "产品观察"]
excerpt: "文章摘要"
---

## 一句话总结

这里写总结。

## 它是什么

这里写正文。

## 为什么有意思

这里写正文。

## 能用在哪里

这里写正文。

## 我的判断

这里写正文。
```

`category` 可选值：

- `frontier`：AI前沿
- `principles`：原理解剖室
- `lab`：AI实验室

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 在 Vercel 导入该仓库。
3. Framework Preset 选择 Next.js。
4. Build Command 使用 `pnpm build`。
5. Output Directory 保持默认。
6. 在 Vercel Domains 中绑定 `www.mangoaitech.cn`。

## 部署到自己的服务器

如果你要先部署到自己的服务器，可以使用：

```bash
pnpm install
pnpm build
pnpm start
```

然后用 Nginx 将 80 端口反向代理到 Next.js 服务端口。当前 `sitemap` 和 Open Graph 域名已经配置为 `https://www.mangoaitech.cn`。

## 后续扩展方向

- 接入 MDX，支持更丰富的文章组件。
- 增加搜索、标签页和文章归档。
- 将 AI 实验室从静态卡片升级为可交互 Demo。
- 增加 RSS、Newsletter 和自动生成周报。
- 接入 Dify、工作流或大模型 API，形成真实实验闭环。
