# Builder Atlas / AI 建造者阅读档案

中文：AI 建造者观点研究工作台，30 个研究对象。本轮深入复核 Zara Zhang、Matt Pocock、Emil Kowalski 与 Andrej Karpathy；其余 26 个对象标为 TODO。逐条展示观点、本人材料出处、具体章节、阅读范围、代表性理由与适用边界。文章、项目 README 和节目文字稿分别标注；不声称完整看过视频或穷尽作者思想。Zara、Matt 各补采 100 条 X 主页帖子；Karpathy 使用已有样本，Emil 本轮未采集 X。支持搜索、阅读路线、手机阅读、本地收藏与练习笔记。旧观点保留在数据的 legacyDraft 中供追溯，撤出当前展示。

English: A research workbench for 30 AI builders and official sources. Four profiles have been re-reviewed against selected first-person materials: Zara Zhang, Matt Pocock, Emil Kowalski, and Andrej Karpathy. The other 26 are marked TODO. Each claim links to source sections, access scope, editorial selection reasons, and limitations. Videos are not represented as fully watched. New X snapshots contain 100 timeline posts each for Zara and Matt; Karpathy reuses the earlier sample, while Emil has no new X collection. Original, quoted, and reposted timeline entries are distinguished. Search, reading paths, responsive layouts, local bookmarks, and exercise notes are supported. Superseded drafts remain in legacyDraft for traceability.

![Project screenshot](./assets/screenshot.png)

## 在线体验 / Live Demo

- [GitHub Pages Demo](https://holynova.github.io/builder-atlas/)
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

Version: **1.3.0**. Source and deployment configuration use the same `main` branch. Deploy manually from that commit; no Cloudflare release branch or deployment workflow.

页面包含统一 Umami 统计。原文版权属于各作者；此项目提供原创中文转述与来源链接。

GitHub Pages publishes the static `dist/` directory from `main` using `.github/workflows/pages.yml`. Cloudflare remains a separate manual deployment.

## 研究维护 / Research maintenance

Canonical data lives in `dist/research.json`, `dist/learning.json`, and `dist/x-insights.json`. Run `npm run sync:data` after editing, then `npm run check`. Per-profile research notes live in `research/`. A reviewed label applies only to the listed materials, not the author’s entire output.
