# Andrej Karpathy：观点复核

复核日期：2026-10-04。状态：已复核 · 限定范围。

补齐模型边界、教育与实验、自动研究、视觉化输出、知识库和专业 Agent 编程；区分长期主题与近期探索。

## 方法与范围

按主题选择本人文章、项目说明或原始访谈，对照观点与具体章节；不是全部作品普查。

优先正文和本人项目；用不同材料验证主题重复，保留主题演变与反例，不以热度决定代表性。

未完整观看 YouTube 或播客音视频；未运行项目或逐一核验嵌入演示。代表性为编辑在所列材料范围内的判断。

复用 2026-10-03 的 100 条主页样本；本轮核对与观点相关的指定帖子文字，未重新采集或声称逐条深读全部样本。


## 模型能力不均衡，不能用一个总分概括

LLM 在部分任务很强，在另一些任务仍脆弱。训练方式与可验证领域影响这种形状；应用要按真实任务找边界。

代表性判断：年度回顾与官方访谈都强调认知缺口和能力差异。

边界：“Agent 的十年”是其 2025 个人估计，不是确认的时间表。

- [2025 LLM Year in Review](https://karpathy.bearblog.dev/year-in-review-2025/) · 2025-12-19；位置：第 2、3、5、6 节；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。
- [Andrej Karpathy — AGI is still a decade away](https://www.dwarkesh.com/p/andrej-karpathy) · 2025-10-17；位置：00:00–约 00:14：Agent、持续学习、预训练与认知核心；阅读范围：已阅读节目官方逐字稿开头相关段落；未观看完整视频，未概括未读的后半场。

## 先建立可信实验，再增加复杂度

先检查数据、简单基线和评估，再逐步改模型。nanochat 把训练、评估与推理放进可修改的实验框架。

代表性判断：2019 方法与当前实验项目体现持续的可理解、可验证实践。

边界：旧文章的具体优化器等建议有年代；这里提炼方法，未复验项目性能。

- [A Recipe for Training Neural Networks](https://karpathy.github.io/2019/04/25/recipe/) · 2019-04-25；位置：第 1–3 节：数据、训练评估骨架、过拟合；阅读范围：已阅读训练方法正文；这是 2019 年材料，具体技术选择不视为当前通用建议。
- [nanochat](https://github.com/karpathy/nanochat) · README 快照 · 2026-10-04；位置：README：项目介绍、Leaderboard、Getting started；阅读范围：已阅读本人项目 README 的介绍与实验结构；未训练模型或复验性能数据。

## 最小实现帮助理解算法核心

microgpt 用小型、无依赖实现展示模型机制。它与 nanochat 的完整流程形成不同尺度的学习入口。

代表性判断：本人文章明确描述长期简化模型的教育实践，项目提供结构依据。

边界：这是教学与实验入口，不等于生产模型只需相同规模。

- [microgpt](https://karpathy.github.io/2026/02/12/microgpt/) · 2026-02-12；位置：开头；Dataset、Tokenizer、Autograd；阅读范围：已阅读文章介绍与数据、分词、自动微分章节；未运行代码或观看关联课程。
- [nanochat](https://github.com/karpathy/nanochat) · README 快照 · 2026-10-04；位置：README：项目介绍、Leaderboard、Getting started；阅读范围：已阅读本人项目 README 的介绍与实验结构；未训练模型或复验性能数据。

## 人设计研究循环，Agent 执行可比较实验

autoresearch 固定时间预算和指标，让 Agent 修改、训练、比较并保留结果；人改实验指令和范围。

代表性判断：当前本人项目把长期实验纪律落实为自动循环。

边界：项目针对有限训练环境；不证明所有科学研究都可无人完成。

- [autoresearch](https://github.com/karpathy/autoresearch) · 2026-03 · README 核验于 2026-10-04；位置：README：How it works；Design choices；阅读范围：已阅读本人 README；未运行 GPU 实验，未将开头科幻设想当作已实现能力。
- [A Recipe for Training Neural Networks](https://karpathy.github.io/2019/04/25/recipe/) · 2019-04-25；位置：第 1–3 节：数据、训练评估骨架、过拟合；阅读范围：已阅读训练方法正文；这是 2019 年材料，具体技术选择不视为当前通用建议。

## 应用层要组织上下文、工具和人的控制

模型之外，具体应用还要协调调用、专属界面、反馈和自动化程度，才能完成领域工作。

代表性判断：年度回顾谈应用层，访谈明确 Agent 仍有未解决的工作能力。

边界：描述产品方向，不能直接证明某个应用已经可靠。

- [2025 LLM Year in Review](https://karpathy.bearblog.dev/year-in-review-2025/) · 2025-12-19；位置：第 2、3、5、6 节；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。
- [Andrej Karpathy — AGI is still a decade away](https://www.dwarkesh.com/p/andrej-karpathy) · 2025-10-17；位置：00:00–约 00:14：Agent、持续学习、预训练与认知核心；阅读范围：已阅读节目官方逐字稿开头相关段落；未观看完整视频，未概括未读的后半场。

## 便宜的软件打开以前不值得做的任务

个人可以制作定制、一次性的工具与解释。模型能力扩大可做的事情，而不只是加快原有步骤。

代表性判断：个人赋能文章与年度回顾的小型软件实践相互印证。

边界：个人与组织的约束不同；低制作成本不代表零运行和维护成本。

- [Power to the people](https://karpathy.bearblog.dev/power-to-the-people/) · 2025-04-07；位置：个人与组织采用差异；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。
- [2025 LLM Year in Review](https://karpathy.bearblog.dev/year-in-review-2025/) · 2025-12-19；位置：第 2、3、5、6 节；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。

## 生成之后，要帮助人理解

简洁语言、图示、交互网页和讲解视频，是不同的理解入口；随着执行自动化，人仍需监督与判断。

代表性判断：2026 年两篇本人长帖重复提出视觉与交互输出，年度回顾也讨论视觉交互。

边界：视频和神经交互的未来形态包含个人展望；本站只有教学交互和视频脚本，没有生成完整视频。

- [让模型输出更容易理解](https://x.com/karpathy/status/2105819303471976479) · Fri Oct 02 00:37:00 +0000 2026；位置：Writing、Diagrams / images、Web pages、Explainer videos；总结；阅读范围：已核对采集到的本人帖子全文；样本采于 2026-10-03。未逐一查看媒体和外链，X 原页可能需要登录。
- [HTML 与视觉输出的方向](https://x.com/karpathy/status/2053872850101285137) · Mon May 11 16:20:21 +0000 2026；位置：HTML 建议；输出格式序列；未来技术的限定；阅读范围：已核对采集到的本人帖子全文；样本采于 2026-10-03。未逐一查看媒体和外链，X 原页可能需要登录。
- [2025 LLM Year in Review](https://karpathy.bearblog.dev/year-in-review-2025/) · 2025-12-19；位置：第 2、3、5、6 节；阅读范围：已阅读本人网站公开正文；未将嵌入视频视为已观看。

## 让知识积累，而不是只得到一次回答

把来源保存在原始资料层，让 LLM 编译链接、概念和摘要；把查询结果回写知识库，并检查矛盾与缺口。

代表性判断：这是本人详述的近期研究工作流，补充其代码实践之外的知识工作。

边界：单篇近期实践，暂不视为长期共识；他对小规模 wiki 的经验不等于所有场景都无需 RAG。

- [LLM Knowledge Bases](https://x.com/karpathy/status/2039805659525644595) · Thu Apr 02 20:42:21 +0000 2026；位置：Data ingest、Q&A、Output、Linting；阅读范围：已核对采集到的本人帖子全文；样本采于 2026-10-03。未逐一查看媒体和外链，X 原页可能需要登录。

## 专业 Agent 编程需要监督与质量要求

他从一次性、探索性的 vibe coding，转向强调编排 Agent、检查结果和保持软件质量的 agentic engineering。

代表性判断：本人周年回顾明确区分两类工作方式；自动研究项目也给出受控循环。

边界：这是作者对工作方式的命名和判断；文中的使用比例不是行业统计。

- [从 vibe coding 到 agentic engineering](https://x.com/karpathy/status/2019137879310836075) · Wed Feb 04 19:55:58 +0000 2026；位置：Today (1 year later)；agentic / engineering 两点；阅读范围：已核对采集到的本人帖子全文；样本采于 2026-10-03。未逐一查看媒体和外链，X 原页可能需要登录。
- [autoresearch](https://github.com/karpathy/autoresearch) · 2026-03 · README 核验于 2026-10-04；位置：README：How it works；Design choices；阅读范围：已阅读本人 README；未运行 GPU 实验，未将开头科幻设想当作已实现能力。
