# Matt Pocock：观点复核

复核日期：2026-10-04。状态：已复核 · 限定范围。

补齐长期 TypeScript 教学主线，并区分 LLM 应用评估与近期 Agent 编程方法。

## 方法与范围

按主题选择本人文章、项目说明或原始访谈，对照观点与具体章节；不是全部作品普查。

优先正文和本人项目；用不同材料验证主题重复，保留主题演变与反例，不以热度决定代表性。

未完整观看 YouTube 或播客音视频；未运行项目或逐一核验嵌入演示。代表性为编辑在所列材料范围内的判断。

2026-10-04 采集 100 条主页样本，其中非纯转推 91 条；阅读文字并选择主题，不声称完整回复或媒体覆盖。


## 通过练习理解 TypeScript 的原则

用逐步问题和真实应用练习建立类型系统的心智模型。返回类型、推断和抽象的选择要看应用与库的具体需要。

代表性判断：长期课程的教学方法与本人技术文章相互印证；这是其 AI 内容之外的基础主线。

边界：课程页面说明教学理念，不证明课程学习效果；返回类型的取舍不宜改写成无条件规则。

- [Total TypeScript：以练习建立理解](https://www.totaltypescript.com/) · 页面未标日期 · 核验于 2026-10-04；位置：Become the TypeScript Wizard；An exercise-driven approach；Hi, I’m Matt Pocock；阅读范围：已阅读本人课程官网的教学方法与个人介绍；未观看或完成付费课程。
- [Should You Declare Return Types?](https://www.totaltypescript.com/should-you-declare-return-types) · 页面未标日期 · 核验于 2026-10-04；位置：Return Types 规则与例外；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。

## LLM 应用靠评估走向生产

先定义任务成功标准，用真实输入和失败案例衡量变化。模型评分、人工评估与确定性检查各有作用。

代表性判断：2024 评估文章与 2025 工程心态文章构成连续主线。

边界：这是 LLM 应用质量问题；不能与生成代码的单元测试混为一谈。

- [The AI Engineer Mindset](https://www.aihero.dev/the-ai-engineer-mindset) · 更新于 2025-03-24；位置：Defining Your Success Criteria；Data Is Your Most Valuable Asset；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。
- [Your App Is Only As Good As Its Evals](https://www.aihero.dev/what-are-evals) · 更新于 2024-11-18；位置：Three Types Of Evals；The Data Flywheel；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。

## 用最小端到端功能获得反馈

先打通一条真实路径并测试，再扩展。不要各层全部写完后才检查能否连接。

代表性判断：Tracer Bullets、Ralph 指南与本人技能项目反复强调小步反馈。

边界：最小切片要验证关键假设，并非把每个任务机械拆到一行代码。

- [Tracer Bullets: Keeping AI Slop Under Control](https://www.aihero.dev/tracer-bullets) · 更新于 2026-01-22；位置：The Solution: Tracer Bullets；个人 Reveal in File System 案例；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。
- [11 Tips For AI Coding With Ralph Wiggum](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum) · 更新于 2026-01-08；位置：第 2–8 节：HITL、范围、进度、反馈、小步、风险、质量；阅读范围：已阅读第 2–8 节及循环说明；未实际运行文中脚本。
- [Skills For Real Engineers](https://github.com/mattpocock/skills) · 仓库快照 · 2026-10-04；位置：README：Why These Skills Exist，四类失败模式；阅读范围：已阅读本人仓库 README；未逐一执行技能。

## 好的环境比更多提示更可靠

给 Agent 类型检查、测试和可操作的应用环境，让它观察结果；把重复错误变成确定性检查。

代表性判断：工程指南、项目 README 与近期环境和 retro 推文一致。

边界：返回类型规则是具体约定，不能概括成所有场景越严格越好。

- [11 Tips For AI Coding With Ralph Wiggum](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum) · 更新于 2026-01-08；位置：第 2–8 节：HITL、范围、进度、反馈、小步、风险、质量；阅读范围：已阅读第 2–8 节及循环说明；未实际运行文中脚本。
- [Skills For Real Engineers](https://github.com/mattpocock/skills) · 仓库快照 · 2026-10-04；位置：README：Why These Skills Exist，四类失败模式；阅读范围：已阅读本人仓库 README；未逐一执行技能。
- [Should You Declare Return Types?](https://www.totaltypescript.com/should-you-declare-return-types) · 页面未标日期 · 核验于 2026-10-04；位置：Return Types 规则与例外；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。

## 上下文按需提供，并保持新鲜

AGENTS.md 保留少量普遍必要信息，细节按需查阅。共同语言和可导航文档有用，矛盾与过期内容会干扰 Agent。

代表性判断：指令指南与项目共同语言实践互相支持。

边界：他近期也接受维护良好的导航文档；重点是有效维护，不是文档越少越好。

- [A Complete Guide To AGENTS.md](https://www.aihero.dev/a-complete-guide-to-agents-md) · 更新于 2026-01-18；位置：Instruction Budget；Stale Documentation；Progressive Disclosure；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。
- [Skills For Real Engineers](https://github.com/mattpocock/skills) · 仓库快照 · 2026-10-04；位置：README：Why These Skills Exist，四类失败模式；阅读范围：已阅读本人仓库 README；未逐一执行技能。

## 自动化从有人参与的小循环开始

先观察并调整，再扩大低风险任务的自动化。明确完成条件、停止上限和检查反馈。

代表性判断：Ralph 的 HITL→AFK 路线与近期软件工厂推文一致。

边界：不能把无人值守视为质量证明；架构等高风险决定需要更强审查。

- [11 Tips For AI Coding With Ralph Wiggum](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum) · 更新于 2026-01-08；位置：第 2–8 节：HITL、范围、进度、反馈、小步、风险、质量；阅读范围：已阅读第 2–8 节及循环说明；未实际运行文中脚本。
- [Skills For Real Engineers](https://github.com/mattpocock/skills) · 仓库快照 · 2026-10-04；位置：README：Why These Skills Exist，四类失败模式；阅读范围：已阅读本人仓库 README；未逐一执行技能。

## 工程结构和审查证据仍然重要

Agent 加快实现，也会加快复杂度增长。保留简单接口、共同领域语言，并交付便于核对的结果与证据。

代表性判断：当前技能项目同时处理结构和反馈；近期推文补充 PR 审查与抽象取舍。

边界：可组合技能是个人工作流，不是所有团队必须采用的唯一流程。

- [Skills For Real Engineers](https://github.com/mattpocock/skills) · 仓库快照 · 2026-10-04；位置：README：Why These Skills Exist，四类失败模式；阅读范围：已阅读本人仓库 README；未逐一执行技能。
- [A Complete Guide To AGENTS.md](https://www.aihero.dev/a-complete-guide-to-agents-md) · 更新于 2026-01-18；位置：Instruction Budget；Stale Documentation；Progressive Disclosure；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。
