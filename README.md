# Builder Atlas / AI 建造者阅读档案

中文：从 Zara Zhang 的名单出发，整理 30 份 AI 建造者与官方信息源档案、66 条代表文章、推文和访谈。支持人物、产品与观点搜索、主题筛选及手机阅读。中文总结链接到原始依据，并标注付费、转存和未读取全文的资料。研究快照为 2026 年 10 月 2 日。

English: A source-linked reading atlas with 30 AI builder and official-source profiles and 66 representative articles, posts, talks and interviews. Search people, products or ideas, filter topics, and read on mobile. Chinese summaries distinguish personal views, team work and access limitations. Research snapshot: October 2, 2026.

![Project screenshot](./assets/screenshot.jpg)

## 在线体验 / Live Demo

- [Cloudflare Demo](https://builder-atlas.xiaosang.cc/)
- [GitHub Repo](https://github.com/holynova/builder-atlas)

<img src="./assets/qr.png" width="180" alt="扫码访问 Cloudflare 在线体验">

## 本地运行 / Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:8765/.

## 发布 / Deploy

```bash
npm run check
npm run deploy:check
npm run deploy
```

Cloudflare Workers · Worker Route: `builder-atlas.xiaosang.cc`

Version: **1.0.0**. Source and deployment configuration use the same `main` branch. Deploy manually from that commit; no Cloudflare release branch or deployment workflow.

页面包含统一 Umami 统计。原文版权属于各作者；此项目提供原创中文转述与来源链接。

DNS prerequisite: proxied A record `builder-atlas` → `192.0.2.1` in the `xiaosang.cc` zone. The Worker handles requests; this reserved address is a placeholder, not a live origin. Worker Route preserves the same HTTPS Demo when Custom Domains reach the zone limit.
