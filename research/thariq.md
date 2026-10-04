# Thariq Shihipar：初步观点整理

整理日期：2026-10-04。状态：初步整理，待扩展复核。

本人署名文章与原始访谈指定段落支持工具设计主题；其他嘉宾观点分开归属。

## 阅读范围

本轮依据 2 条来源材料建立初步主题。只阅读每份材料 access 字段注明的正文、章节或公开摘要；不是全作品普查。

优先本人署名正文、本人帖子、原始节目方文字稿或官方团队文章。每条归纳绑定位置，并写明选入理由和适用边界。

材料为主题选择，不是随机抽样，不能据篇数或频率推断作者全部立场。未完整观看音视频，未运行产品；访谈归纳保留发言者，联名与官方材料保留团队归属。后续需补跨时期材料及反例。

本轮研究没有新增本人 X 时间线采集。主档案只使用“研究材料”中列明的帖子；旧 X 总结另留作待复核线索，不表示本轮已核对全部样本。

## 工具设计要匹配模型的能力

读执行输出、试验调用方式；结构化提问工具是否有效，取决于模型能否稳定使用。

选入理由：本人文章用多个失败尝试解释设计方法。

边界：不是工具越少越好；具体工具随任务和模型变化。

- [Seeing like an agent](https://claude.com/blog/seeing-like-an-agent) · 2026-04-10；归属：Thariq Shihipar；定位：AskUserQuestion；tasks 与 todos；search；progressive disclosure；阅读范围：已读工具设计正文至渐进披露案例；未运行工具实验。

## 让 Agent 按需找到上下文

用搜索、技能与专门文档检索，逐步获取需要的信息，避免一次塞进所有说明。

选入理由：文章在搜索与渐进披露案例中重复论证。

边界：是 Claude Code 的经验，不证明所有检索系统都应弃用 RAG。

- [Seeing like an agent](https://claude.com/blog/seeing-like-an-agent) · 2026-04-10；归属：Thariq Shihipar；定位：AskUserQuestion；tasks 与 todos；search；progressive disclosure；阅读范围：已读工具设计正文至渐进披露案例；未运行工具实验。

## 能力变了，就重新检查原有工具和约束

旧 todo、提醒与提示可能限制更强模型；重写仍要有测试和验证支撑。

选入理由：署名文章与访谈给出两个具体语境。

边界：重写不是普遍无风险；缺少测试与代码理解时不能照搬。

- [Seeing like an agent](https://claude.com/blog/seeing-like-an-agent) · 2026-04-10；归属：Thariq Shihipar；定位：AskUserQuestion；tasks 与 todos；search；progressive disclosure；阅读范围：已读工具设计正文至渐进披露案例；未运行工具实验。
- [A Fireside Chat with Cat and Thariq](https://simonwillison.net/2026/Jul/21/cat-and-thariq/) · 2026-07-21；归属：Thariq Shihipar；Simon Willison 主持；定位：03:39 与 14:20 的 Thariq 回答；阅读范围：只读指定 Thariq 回答；未观看完整视频，Cat 与主持人评论不算他的主张。

