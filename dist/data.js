const BUILDERS = [
  {
    "id": "karpathy",
    "name": "Andrej Karpathy",
    "short": "模型理解 · 编程范式",
    "category": "Agent 与模型",
    "origin": "仓库名单",
    "role": "AI 研究者与教育者；Eureka Labs、Zero to Hero 的创建者",
    "home": "https://karpathy.ai",
    "x": "https://x.com/karpathy",
    "tags": [
      "Software 3.0",
      "LLM",
      "教育"
    ],
    "thesis": "当代码变得充裕，人更需要理解、监督和判断。",
    "summary": "Karpathy 擅长把模型机制转化为工程师能操作的心智模型。他的 Software 3.0 演讲讨论如何用自然语言驱动 LLM；近期公开分享则把关注点推向如何理解模型输出。",
    "ideas": [
      {
        "title": "自然语言成为可编程接口",
        "text": "Software 3.0 把 LLM 看作能通过自然语言编程的系统。工程师要在传统代码、模型能力与语言指令之间选择合适的边界。",
        "source": 0
      },
      {
        "title": "生成之后，还要帮助人理解",
        "text": "当 AI 承担更多执行工作，人会把更多精力用于监督与理解。图解、交互网页和定制讲解视频可以帮助人消化模型输出。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Software Is Changing (Again)",
        "type": "演讲",
        "date": "2025-06-17",
        "author": "Andrej Karpathy · YC AI Startup School",
        "url": "https://www.youtube.com/watch?v=LCEmiRjPEtQ",
        "summary": "从传统软件、神经网络到用自然语言编程的 LLM，解释 Software 3.0 与新的软件交互方式。",
        "why": "先建立模型与软件的关系，再理解 Agent 工具为何改变开发流程。"
      },
      {
        "title": "如何更好地理解语言模型输出",
        "type": "推文",
        "date": "2026-10-02",
        "author": "@karpathy",
        "url": "https://x.com/karpathy/status/2105819303471976479",
        "summary": "分享从受控语言、图示、HTML 网页到定制视频的表达方式，提出人的工作将更偏向监督和理解。",
        "why": "对学习陌生概念和做可交互的解释材料很直接。",
        "access": "依据 Zara 维护的公开 feed；X 原页可能需要登录。"
      }
    ],
    "note": "把编程范式的描述与工程可靠性分开阅读。降低制作门槛，并不能替代对产品结果的检验。"
  },
  {
    "id": "swyx",
    "name": "Swyx / Shawn Wang",
    "short": "AI Engineer · 公开学习",
    "category": "学习与创作",
    "role": "Latent Space 与 AI Engineer 的建设者；开发者、作者与社区组织者",
    "home": "https://swyx.io",
    "x": "https://x.com/swyx",
    "tags": [
      "AI Engineer",
      "Learn in Public",
      "开发者社区"
    ],
    "thesis": "把模型能力变成可用软件，是一门独立的工程实践。",
    "summary": "他的两条主线相互连接：AI Engineer 讨论如何把模型产品化，Learn in Public 则讨论如何通过公开笔记和作品建立学习反馈。重点是实际产出，而不只是积累资料。",
    "ideas": [
      {
        "title": "不训练模型，也能做 AI 工程",
        "text": "基础模型通过 API 与开源进入应用层，让更多工程师能围绕评估、工具、产品数据和用户体验构建软件。AI 工程不等于提示词写作。",
        "source": 0
      },
      {
        "title": "产品专属的评估属于工程工作",
        "text": "模型通用能力之外，应用自己的数据与评估同样重要；调用模型成功不等于产品任务完成。",
        "source": 0
      },
      {
        "title": "把学习变成公开的小作品",
        "text": "笔记、教程、演示和开源项目让学习有输出，也让他人的反馈进入过程。先帮助过去的自己，不必等到成为专家。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "The Rise of the AI Engineer",
        "type": "个人文章",
        "date": "2023-06-30",
        "author": "Swyx · Latent Space",
        "url": "https://www.latent.space/p/ai-engineer",
        "summary": "提出 AI Engineer 这一应用层角色，讨论基础模型的可用性如何改变开发者的工作边界。",
        "why": "理解研究、模型工程和应用工程各自解决什么问题。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Learn in Public",
        "type": "个人文章",
        "date": "2018（长期维护）",
        "author": "Swyx",
        "url": "https://swyx.io/learn-in-public",
        "summary": "通过持续发布小型学习成果获得反馈，建立知识、作品与同行关系。",
        "why": "可立即实践的学习方法，也解释他为何建设社区。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "先读 AI Engineer，再用 Learn in Public 做一个小项目的公开复盘。它不是要求你每天追新闻。",
    "origin": "仓库名单"
  },
  {
    "id": "josh",
    "name": "Josh Woodward",
    "short": "Google Labs · AI 产品",
    "category": "产品与设计",
    "role": "Google Labs、Gemini app 与 AI Studio 产品负责人（官方作者页）",
    "home": "https://blog.google/authors/josh-woodward/",
    "x": "https://x.com/joshwoodward",
    "tags": [
      "Gemini",
      "AI Studio",
      "Google Labs"
    ],
    "thesis": "AI 助手要进入人的实际生活，而不只停留在一个聊天窗口。",
    "summary": "从他的署名产品文章看，主线是个性化、主动帮助、多模态交互和降低使用门槛。Google Labs 的实验产品提供观察新交互的窗口；这里把发布主张与已经证明的效果分开阅读。",
    "ideas": [
      {
        "title": "更有用的助手需要用户语境",
        "text": "2025 年 Gemini 产品文章将方向描述为更个人、更主动：理解用户的世界，再帮助完成创建、学习和探索。",
        "source": 0
      },
      {
        "title": "多模态扩大实际使用场景",
        "text": "摄像头、屏幕共享、图像和视频让助手能围绕眼前的材料交互，而不是要求用户把一切先翻译成文字。",
        "source": 0
      },
      {
        "title": "降低试用与创作门槛",
        "text": "开发者文章通过 AI Studio、模型 API 与示例资源让新能力可尝试；模型能力需要通过工具进入开发流程。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Gemini gets more personal, proactive and powerful",
        "type": "署名产品文章",
        "date": "2025-05-20",
        "author": "Josh Woodward · Google",
        "url": "https://blog.google/products-and-platforms/products/gemini/gemini-app-updates-io-2025/",
        "summary": "围绕 Gemini Live、创作能力和个性化发布产品更新，展示 Google 对助手体验的构想。",
        "why": "沿着具体交互，观察“更主动的助手”如何被产品化。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Gemini 1.5 Pro updates, 1.5 Flash debut and 2 new Gemma models",
        "type": "联合署名文章",
        "date": "2024-05-14",
        "author": "Mat Velloso、Josh Woodward · Google",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-gemma-developer-updates-may-2024/",
        "summary": "结合模型质量、速度、长上下文和开发工具说明能力如何开放给开发者。",
        "why": "了解模型能力、开发者入口与成本选择如何一起影响产品。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "发布文是产品意图的一手材料。是否形成长期价值，需要自己持续使用来检验。",
    "origin": "仓库名单"
  },
  {
    "id": "boris",
    "name": "Boris Cherny",
    "short": "Claude Code · 开发工作流",
    "category": "Agent 与模型",
    "role": "Claude Code 创建者；Programming TypeScript 作者",
    "home": "https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny",
    "x": "https://x.com/bcherny",
    "tags": [
      "Claude Code",
      "并行工作",
      "验证循环"
    ],
    "thesis": "工程师的价值，从逐行写代码转向设计工作与检验结果。",
    "summary": "Boris 的代表材料把 Claude Code 的内部建设与个人工作方式联系起来：先形成足够清晰的计划，运行多个 Agent，把反复出现的问题沉淀为可执行的检查。",
    "ideas": [
      {
        "title": "计划质量影响执行质量",
        "text": "在 Pragmatic Engineer 访谈中，他描述先迭代计划，再交给 Agent 实现；并行会话让等待模型不再阻塞所有工作。",
        "source": 0
      },
      {
        "title": "一致的代码库同时帮助人和模型",
        "text": "未完成的迁移与混杂的框架增加理解成本。他强调把迁移做完，并把重复审查意见自动化成检查。",
        "source": 0
      },
      {
        "title": "搜索机制要用实际结果选择",
        "text": "Claude Code 团队比较过多种代码搜索方式，模型驱动的 glob 与 grep 在他们的情境下比复杂索引更有效。这个结论有具体适用范围。",
        "source": 0
      }
    ],
    "works": [
      {
        "title": "Building Claude Code with Boris Cherny",
        "type": "原始访谈",
        "date": "2026-03-04",
        "author": "Boris Cherny · The Pragmatic Engineer",
        "url": "https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny",
        "summary": "讨论 Claude Code 从内部工具到产品的过程，以及计划、并行、代码库质量、搜索与原型的取舍。",
        "why": "比工具小技巧更能解释一套开发系统为什么这样设计。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Claude Code 个人工作流：13 条分享",
        "type": "推文串",
        "date": "2026-01-02",
        "author": "@bcherny",
        "url": "https://x.com/bcherny/status/2007179832300581177",
        "summary": "介绍多会话、共享项目知识、重复流程与验证环节，是理解其日常用法的补充入口。",
        "why": "配合完整访谈阅读，区分个人配置与普遍原则。",
        "access": "X 原页拒绝抓取；链接与主题由公开转载交叉确认，未逐条转述全文。",
        "evidence": ""
      }
    ],
    "note": "别把“跑几个 Agent”当成目标。先定义每个任务的完成条件和验证方式，再考虑并行。",
    "origin": "仓库名单"
  },
  {
    "id": "thibault",
    "name": "Thibault Sottiaux",
    "short": "Codex · 产品与平台",
    "category": "Agent 与模型",
    "role": "OpenAI 产品与平台建设者；所引公告中为 Codex Lead",
    "home": "https://openai.com/build-week/",
    "x": "https://x.com/thsottiaux",
    "tags": [
      "Codex",
      "开发工具",
      "完整工作流"
    ],
    "thesis": "Coding Agent 的目标，是参与整个软件开发生命周期。",
    "summary": "可核验的官方引述指向一个明确方向：Codex 不只生成代码，还需要使用现有工具、验证结果和长期维护软件。这里使用官方公告与个人演示，避免把团队路线全部归为个人独创。",
    "ideas": [
      {
        "title": "把 Agent 接入现有开发生态",
        "text": "在 Astral 收购公告的个人引述中，他强调让 Codex 跨越完整开发生命周期；开发工具生态是这个目标的一部分。",
        "source": 0
      },
      {
        "title": "从代码片段走向可执行的工作流",
        "text": "公告描述规划改动、修改代码库、运行工具、验证结果与维护软件。以上是团队公开路线，不能等同于已经全部实现。",
        "source": 0
      },
      {
        "title": "用实际任务观察工作 Agent",
        "text": "他的公开推文展示整理大量未读邮件的任务。这是个人使用案例，不是成功率或通用可靠性证明。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "OpenAI to acquire Astral",
        "type": "官方公告／个人引述",
        "date": "2026-03-19",
        "author": "OpenAI；含 Thibault Sottiaux 引述",
        "url": "https://openai.com/index/openai-to-acquire-astral/",
        "summary": "解释将 Python 开发工具生态与 Codex 结合，推动 Agent 参与更多软件开发环节的方向。",
        "why": "看清工具生态为何与模型能力同样重要。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "用工作 Agent 整理未读邮件",
        "type": "推文／使用演示",
        "date": "2026-10-02",
        "author": "@thsottiaux",
        "url": "https://x.com/thsottiaux/status/2105899634032025682",
        "summary": "分享减少未读邮件、继续向 inbox zero 推进的个人使用任务。",
        "why": "把“Agent 做知识工作”还原成可观察的具体案例。",
        "access": "依据 Zara 的公开 feed；未独立复验演示效果。",
        "evidence": ""
      }
    ],
    "note": "先读生命周期方向，再看一次真实任务。区分愿景、演示和可靠交付的证据。",
    "origin": "仓库名单"
  },
  {
    "id": "peter-yang",
    "name": "Peter Yang",
    "short": "实战教程 · Builder 访谈",
    "category": "学习与创作",
    "role": "Behind the Craft 作者与主持人；AI 教程与个人工作系统的制作人",
    "home": "https://creatoreconomy.so",
    "x": "https://x.com/petergyang",
    "tags": [
      "Agent-first",
      "教程",
      "知识工作"
    ],
    "thesis": "产品的使用者，正在从只有人扩展到人和 Agent。",
    "summary": "Peter 的特色是把抽象变化拆成可看、可做的工作流程。个人观点以署名文章为依据，访谈中的技术主张保留给嘉宾，不把整期节目都当成他的观点。",
    "ideas": [
      {
        "title": "产品需要给 Agent 可操作的接口",
        "text": "他提出，用户会让 Agent 从多个产品取信息、执行动作，因此 API、Skills 与 MCP 逐渐成为重要入口。",
        "source": 0
      },
      {
        "title": "人仍要负责判断与监督",
        "text": "他的 agent-first 文章保留了人类判断的讨论：把执行交给 Agent，并不意味着所有产品价值都归结为自动生成。",
        "source": 0
      },
      {
        "title": "用具体工作流建立学习路径",
        "text": "AI Learning Path 将教程与一线访谈组织成逐步学习材料；他的内容定位是让忙碌的人能拿走一个可执行的方法。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Why You Need to Build Your Product for AI Agents First",
        "type": "个人文章",
        "date": "2026-02-25",
        "author": "Peter Yang",
        "url": "https://creatoreconomy.so/p/why-you-need-to-build-your-product-for-ai-agents-first",
        "summary": "讨论 Agent 通过接口使用产品后，产品入口、文档和用户体验为何需要重新考虑。",
        "why": "适合正在做工具、服务或 API 的人建立接口意识。",
        "access": "已读取公开部分；完整后半部分为付费内容。",
        "evidence": ""
      },
      {
        "title": "Introducing My New AI Learning Path and Co-Pilot",
        "type": "个人文章／学习目录",
        "date": "2025-08-27",
        "author": "Peter Yang",
        "url": "https://creatoreconomy.so/p/introducing-my-new-ai-learning-path-and-co-pilot",
        "summary": "把教程、访谈与 AI 学习助手组织成学习路线，并标记视频与付费内容。",
        "why": "作为他代表教程和访谈的导航入口。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "教程可以当起点，但别跳过产品自己的文档。遇到嘉宾建议，回到嘉宾原话与适用情境。",
    "origin": "仓库名单"
  },
  {
    "id": "nan",
    "name": "Nan Yu",
    "short": "Linear · 产品实践",
    "category": "产品与设计",
    "role": "Linear 产品实践者；所引访谈为 Linear 产品负责人及 Linear Agent 参与者",
    "home": "https://linear.app/now/how-we-run-projects-at-linear",
    "x": "https://x.com/thenanyu",
    "tags": [
      "Linear",
      "速度与质量",
      "生产 Agent"
    ],
    "thesis": "好产品的速度，来自理解和熟练，而不是少做质量工作。",
    "summary": "他的材料兼具传统产品纪律与 AI 实践：限制软件膨胀，让团队理解项目为什么做；在 Agent 项目中则强调真实工作流、按需取上下文和评估。",
    "ideas": [
      {
        "title": "速度与质量可以同时提高",
        "text": "Lenny 访谈把速度归因于专业能力、明确判断和快速反馈。熟练团队做得快，不意味着随意省略必要工作。",
        "source": 0
      },
      {
        "title": "需求文档提供情境，而不是代替判断",
        "text": "Linear 团队文章中，Nan 强调解释为什么做项目、解决什么问题及其关联影响，让执行者有足够的情境意识。",
        "source": 1
      },
      {
        "title": "Agent 要融入工作发生的地方",
        "text": "Nan 与 Jacob 的访谈从实际流程出发，界定上下文在哪、哪些动作完成工作、何时需要人工复核。具体工具建议来自两位嘉宾共同实践。",
        "source": 2
      }
    ],
    "works": [
      {
        "title": "Linear’s secret to building beloved B2B products",
        "type": "原始访谈",
        "date": "2025-01-30",
        "author": "Nan Yu · Lenny’s Podcast",
        "url": "https://www.lennysnewsletter.com/p/linears-secret-to-building-beloved-b2b-products-nan-yu",
        "summary": "讨论速度与质量、避免功能膨胀、创造性探索和慎用截止日期。",
        "why": "理解 AI 产品建设仍然需要的基本功。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "How we run projects at Linear",
        "type": "团队访谈",
        "date": "2023-10-05",
        "author": "Nan Yu 与 Linear 工程团队",
        "url": "https://linear.app/now/how-we-run-projects-at-linear",
        "summary": "解释项目完成标准、简短规格、工程师负责项目以及沟通方法。",
        "why": "看看好的产品纪律怎样落在日常协作中。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "5 Rules for Building AI Agents That Work in Production",
        "type": "原始访谈",
        "date": "2026-08-09",
        "author": "Nan Yu、Jacob Shumway · Peter Yang",
        "url": "https://creatoreconomy.so/p/5-rules-for-building-ai-agents-in-production-linear-nan-jacob",
        "summary": "从内部备忘录到 Linear Agent，讨论工作流、取上下文工具和评估。",
        "why": "从“做一个 Agent”转到“嵌入一段能验收的工作”。",
        "access": "已读取公开节目说明与前两项要点；完整文章付费。",
        "evidence": ""
      }
    ],
    "note": "先读速度与质量，再读 Agent 案例，观察哪些产品原则保持不变。不要把 Jacob 的具体技术意见单独归给 Nan。",
    "origin": "仓库名单"
  },
  {
    "id": "madhu",
    "name": "Madhu Guru",
    "short": "AI 产品 · 评估方法",
    "category": "Agent 与模型",
    "role": "AI 产品实践者；公开撰写 How to build great evals 系列",
    "home": "https://x.com/realmadhuguru",
    "x": "https://x.com/realmadhuguru",
    "tags": [
      "Evals",
      "失败定位",
      "产品演进"
    ],
    "thesis": "评估要告诉你哪里该改，而不只是给产品一个总分。",
    "summary": "他的代表性推文把 eval 从一次发布前的测试，变成随真实使用演进的产品机制。这里侧重可读取的评估系列，不采用未充分核验的最新职务说法。",
    "ideas": [
      {
        "title": "评估要随使用方式升级",
        "text": "从短报告总结走向多材料综合，再到主动监测，每一步都需要不同能力。用户已经升级，评估仍留在旧场景，就会漏掉问题。",
        "source": 0
      },
      {
        "title": "结果相同，执行质量也可能不同",
        "text": "两个 Agent 最后给出同一答案，一个路径简洁，另一个反复搜索和恢复错误。过程评估能揭示这些差异。",
        "source": 1
      },
      {
        "title": "先分解工作，再决定评估粒度",
        "text": "定义每一步的任务，以及典型和困难案例，才能决定是单独评估还是作为整体评估的切片。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "How to build great evals — Part 9: The Eval Roadmap Problem",
        "type": "推文",
        "date": "2026-08-26",
        "author": "@realmadhuguru",
        "url": "https://x.com/realmadhuguru/status/2092426017118028266",
        "summary": "主张 eval 需要随产品和用户行为的变化形成路线图。",
        "why": "把产品未来将承担的任务提前写进评估计划。",
        "access": "原 X 页无法读取；基于作者推文的公开镜像转述，镜像年份元数据不一致，日期采用正文与摘要交叉核对。",
        "evidence": "https://zamantika.com/vi/realmadhuguru/status/2092426017118028266"
      },
      {
        "title": "How to build great evals — Part 10: Measure the steps, not just the result",
        "type": "推文",
        "date": "2026-09-10",
        "author": "@realmadhuguru",
        "url": "https://x.com/realmadhuguru/status/2098064969464217720",
        "summary": "把最终正确性与执行步骤分开评估，关注工具使用和恢复过程。",
        "why": "适合用来设计可诊断的 Agent 测试。",
        "access": "原 X 页无法读取；基于作者推文的公开镜像。",
        "evidence": "https://zamantika.com/realmadhuguru/status/2098064969464217720"
      }
    ],
    "note": "从自己的实际失败案例开始做评估。镜像不是原站，重要细节应回到原推文确认。",
    "origin": "仓库名单"
  },
  {
    "id": "amanda",
    "name": "Amanda Askell",
    "short": "Claude Character · 价值与行为",
    "category": "Agent 与模型",
    "role": "Anthropic Character 工作负责人；Claude’s Constitution 主要作者",
    "home": "https://www.anthropic.com/constitution",
    "x": "https://x.com/AmandaAskell",
    "tags": [
      "Character",
      "模型行为",
      "Constitution"
    ],
    "thesis": "让模型理解行为背后的理由，而不只记住一张规则清单。",
    "summary": "她的代表作品不是 App，而是训练与指导 Claude 行为的价值文档。宪法描述的是期望的模型品格；Anthropic 明确承认真实模型行为可能与这些理想存在差距。",
    "ideas": [
      {
        "title": "价值文档需要帮助模型泛化",
        "text": "新版宪法解释行为背后的理由，希望模型能把原则用于未见过的情境；高风险行为仍有明确边界。",
        "source": 1
      },
      {
        "title": "“有帮助”涉及多方关系",
        "text": "文档分别讨论 Anthropic、应用运营者与最终用户的关系，帮助模型处理服务不同主体时的取舍。",
        "source": 0
      },
      {
        "title": "意图透明，不等于行为保证",
        "text": "公开宪法让外部读者知道哪些行为是设计意图；真正的遵循程度还需要训练、评估和系统报告。",
        "source": 0
      }
    ],
    "works": [
      {
        "title": "Claude’s Constitution",
        "type": "主要作者作品",
        "date": "2026-01-21（PDF 署期）",
        "author": "Amanda Askell 与多位共同贡献者",
        "url": "https://www.anthropic.com/constitution",
        "summary": "说明 Claude 的价值、帮助性、诚实、安全和多方关系，直接参与训练过程。",
        "why": "观察“模型人格”如何成为可讨论、可修订的工程材料。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Claude’s new constitution",
        "type": "官方解释文章",
        "date": "2026-01-22",
        "author": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-new-constitution",
        "summary": "解释从独立原则清单转向更充分的理由说明，以及宪法在训练中的用途。",
        "why": "先读这个较短版本，再阅读长篇宪法。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "这是一份目标与训练材料，不是对所有 Claude 回答的质量承诺。个人贡献与团队共同建设应一起看。",
    "origin": "仓库名单"
  },
  {
    "id": "cat",
    "name": "Cat Wu",
    "short": "Claude Code · AI 产品组织",
    "category": "产品与设计",
    "role": "Claude Code 与 Cowork 产品建设者（所引访谈语境）",
    "home": "https://www.youtube.com/watch?v=PplmzlgE0kg",
    "x": "https://x.com/_catwu",
    "tags": [
      "产品判断",
      "快速迭代",
      "Claude Code"
    ],
    "thesis": "写代码越来越便宜，决定该写什么越来越重要。",
    "summary": "Cat 的访谈从产品职能谈 AI 团队如何运转：明确用户和任务，减少从想法到发布的摩擦，并在当前模型能力与未来能力之间选择产品形态。",
    "ideas": [
      {
        "title": "PM 要缩短想法到用户的距离",
        "text": "当交付周期缩短，跨季度路线图协调不再占据全部重心。清楚定义开箱即用的关键任务、降低发布阻力变得更重要。",
        "source": 0
      },
      {
        "title": "原则与指标让团队自主判断",
        "text": "每周看指标、共享团队原则，让工程师理解核心用户和取舍；模糊或基础设施项目仍可能需要简短文档。",
        "source": 0
      },
      {
        "title": "在模型当前边界上建设",
        "text": "只为极强的未来模型设计很容易；难的是判断当前模型能做什么、如何最大限度发挥它，以及下一阶段能力将打开哪些场景。",
        "source": 0
      }
    ],
    "works": [
      {
        "title": "How Anthropic’s product team moves faster than anyone else",
        "type": "原始访谈",
        "date": "2026-04-23",
        "author": "Cat Wu · Lenny’s Podcast",
        "url": "https://www.youtube.com/watch?v=PplmzlgE0kg",
        "summary": "讨论 PM 的变化、清晰目标、发布流程、产品判断和模型能力边界。",
        "why": "看技术变快后，组织和产品岗位如何随之改变。",
        "access": "视频抓取受限；已读取节目官方 GitHub 转录。",
        "evidence": "https://github.com/LennysNewsletter/lennys-newsletterpodcastdata/blob/main/podcasts/cat-wu.md"
      },
      {
        "title": "Claude Code’s product lead talks usage limits, transparency, and the “lean harness”",
        "type": "原始采访",
        "date": "2026-05",
        "author": "Cat Wu · Ars Technica",
        "url": "https://arstechnica.com/ai/2026/05/claude-codes-product-lead-talks-usage-limits-transparency-and-the-lean-harness/",
        "summary": "补充讨论不同使用界面、使用限制与精简 Agent 外层设计。",
        "why": "与产品组织访谈对照，继续追问产品取舍的代价。",
        "access": "基于公开可见采访节选；本档案未概括全文。",
        "evidence": ""
      }
    ],
    "note": "“快速发布”有适用边界。读她如何界定用户、成功任务和预览承诺，而不是只记住速度。",
    "origin": "仓库名单"
  },
  {
    "id": "thariq",
    "name": "Thariq Shihipar",
    "short": "Claude Code · 工具设计",
    "category": "Agent 与模型",
    "origin": "仓库名单",
    "role": "Claude Code 团队；Seeing like an agent 署名作者",
    "home": "https://claude.com/blog/seeing-like-an-agent",
    "x": "https://x.com/trq212",
    "tags": [
      "工具设计",
      "上下文",
      "Claude Code"
    ],
    "thesis": "设计 Agent 工具，要从模型看得见、用得好的接口出发。",
    "summary": "他通过 Claude Code 的具体迭代说明：工具不只是 API 的集合。工具的粒度、提问机制、搜索方式和信息呈现，都要与模型能力配合。",
    "ideas": [
      {
        "title": "把自己放到模型的位置",
        "text": "读模型输出、做实验，判断哪些工具真正帮助它。随着模型能力变化，曾经有用的工具也可能变成限制。",
        "source": 0
      },
      {
        "title": "渐进披露比塞满上下文更有效",
        "text": "通过搜索和按需加载，让模型在需要时得到信息；工具数量与说明长度都不是越多越好。",
        "source": 0
      }
    ],
    "works": [
      {
        "title": "Seeing like an agent: how we design tools in Claude Code",
        "type": "署名文章",
        "date": "2026-04-10",
        "author": "Thariq Shihipar · Claude",
        "url": "https://claude.com/blog/seeing-like-an-agent",
        "summary": "以提问工具、任务机制、搜索和渐进披露为例，解释 Claude Code 如何测试和调整工具。",
        "why": "文章包含失败尝试，适合直接用来检查自己的 Agent 接口。"
      },
      {
        "title": "How I plan, build, and run loops with Claude Code",
        "type": "访谈",
        "date": "2026-07-19",
        "author": "Peter Yang 访谈 Thariq Shihipar",
        "url": "https://creatoreconomy.so/p/how-i-plan-build-and-run-loops-with-claude-code-thariq-shihipar",
        "summary": "讨论计划如何消除未知、模型升级后重新审视旧指令，以及用可验证目标运行循环。",
        "why": "从工具设计进一步看到个人实际使用方式。",
        "access": "已读公开部分；完整访谈可能需要订阅。",
        "evidence": ""
      }
    ],
    "note": "先读失败尝试，再看最终设计；具体工具选择依赖模型能力，不宜照抄成永久规则。"
  },
  {
    "id": "google-labs",
    "name": "Google Labs",
    "short": "实验产品 · 创作工具",
    "category": "官方信息源",
    "role": "Google 实验性产品官方信息源；非个人账号",
    "home": "https://labs.google",
    "x": "https://x.com/GoogleLabs",
    "tags": [
      "Stitch",
      "原型",
      "创作工具"
    ],
    "thesis": "用真实实验产品，观察 AI 如何改变创作的入口。",
    "summary": "官方账号提供一手发布信息。以 Stitch 为例，产品从静态界面生成扩展到交互原型与设计画布；这里总结官方内容主线，不把它拟人化成个人哲学。",
    "ideas": [
      {
        "title": "从意图开始设计",
        "text": "Stitch 的官方介绍允许用户先描述业务目标、期待的体验或参考材料，再逐步探索界面，而不必先画线框图。",
        "source": 0
      },
      {
        "title": "设计单位从单屏扩展到流程",
        "text": "原型功能将多个画面连接起来，尝试从静态屏幕生成走向可运行的交互流程。",
        "source": 1
      },
      {
        "title": "实验状态需要实际反馈",
        "text": "官方文章明确标记部分功能的实验性质，并邀请反馈；发布说明不能代替跨场景的独立测试。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Introducing “vibe design” with Stitch",
        "type": "官方产品文章",
        "date": "2026-03-18",
        "author": "Rustin Banks · Google Labs",
        "url": "https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/",
        "summary": "介绍 AI 原生设计画布，从自然语言、图像、文字和代码探索高保真界面。",
        "why": "观察 AI 设计工具如何围绕意图和迭代组织工作。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Bring your app ideas to life with Gemini 3 in Stitch",
        "type": "官方产品文章",
        "date": "2025-12-10",
        "author": "Rustin Banks · Google",
        "url": "https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-gemini-3/",
        "summary": "增加 Gemini 3 与 Prototypes，尝试连接多个屏幕并设计交互。",
        "why": "对照后续版本，理解工具演进而不只看单次发布。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "这是官方发布源。搭配 Josh Woodward 的产品文章和自己的使用记录，更容易形成判断。",
    "origin": "仓库名单",
    "official": true
  },
  {
    "id": "amjad",
    "name": "Amjad Masad",
    "short": "Replit · 软件创作普及",
    "category": "软件与创业",
    "role": "Replit 联合创始人；长期建设在线编程与软件创作平台",
    "home": "https://replit.com",
    "x": "https://x.com/amasad",
    "tags": [
      "Replit",
      "创作门槛",
      "计算能力"
    ],
    "thesis": "让更多人成为软件的创作者，是一个长期的产品方向。",
    "summary": "在生成式 AI 之前，他就强调让普通人拥有计算能力、玩中学习、快速发布和与人协作。AI Agent 是这条产品方向的延伸，不应把后来全部团队功能都算成他的个人作品。",
    "ideas": [
      {
        "title": "让计算机为用户服务",
        "text": "早期联合署名文章提出易接近但有能力的工具，让人创造软件，而不是只消费软件。",
        "source": 0
      },
      {
        "title": "把想法到分享的路缩短",
        "text": "在线环境、协作编辑、发布与托管在同一流程内，减少准备环境的成本，让试验更容易发生。",
        "source": 0
      },
      {
        "title": "学习可以来自有趣的制作",
        "text": "他在 The Internet of Fun 中从用户的自发创造讨论平台社区；玩、修改和分享能够形成学习的动力。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Series A to Revolutionize Computing",
        "type": "联合署名文章",
        "date": "2021-02-17",
        "author": "Amjad Masad、Haya Odeh · Replit",
        "url": "https://blog.replit.com/seriesa",
        "summary": "阐述普及计算能力、在线协作、易学且可扩展的产品方向。",
        "why": "读 AI 热潮之前的长期信念，避免只依据新发布理解创始人。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "The Internet of Fun",
        "type": "个人署名文章",
        "date": "2021-02-01",
        "author": "Amjad Masad · Replit",
        "url": "https://blog.replit.com/internet-of-fun",
        "summary": "通过社区成员自发制作聊天工具的故事，说明平台的可编程性与玩中学习。",
        "why": "从真实用户行为理解“人人能造软件”的产品基础。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "先读创始人的早期方向，再亲自试 Replit Agent；不要把一次成功演示当作所有生产软件都可靠。",
    "origin": "仓库名单"
  },
  {
    "id": "guillermo",
    "name": "Guillermo Rauch",
    "short": "Vercel · AI Cloud",
    "category": "软件与创业",
    "role": "Vercel 创始人；Socket.IO、Mongoose 等开源项目建设者",
    "home": "https://rauchg.com",
    "x": "https://x.com/rauchg",
    "tags": [
      "Vercel",
      "AI Cloud",
      "部署体验"
    ],
    "thesis": "云平台应该交付可运行的结果，并逐渐承担解决问题的工作。",
    "summary": "他的主线从让 Web 开发和部署更顺畅，扩展到 Agent 所需的推理、运行、连接和执行基础设施。个人博客把产品路线与开发体验联系起来。",
    "ideas": [
      {
        "title": "Agent 改变云的工作负载",
        "text": "Agent 可以长时间执行、动态调用工具甚至生成代码，云需要支持新的执行模式，而不只快速返回一个页面。",
        "source": 0
      },
      {
        "title": "从报问题走向提供解决方案",
        "text": "AI Cloud 的愿景包括诊断、建议、修复和自动操作；让运行平台承接原本靠人处理的部分工作。",
        "source": 0
      },
      {
        "title": "可访问的预览改变协作",
        "text": "Vercel 文章强调部署 URL 帮助团队在真实环境讨论与测试，开发体验需要包括交付与验证。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "The AI Cloud",
        "type": "个人文章",
        "date": "2025-10-17",
        "author": "Guillermo Rauch",
        "url": "https://rauchg.com/2025/the-ai-cloud",
        "summary": "从页面到 Agent、从问题到方案、从封闭到开放，解释他对 AI 云平台的方向。",
        "why": "连接 Agent 架构与基础设施需求，而不只讨论模型。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Vercel",
        "type": "个人文章",
        "date": "2020",
        "author": "Guillermo Rauch",
        "url": "https://rauchg.com/2020/vercel",
        "summary": "讨论前端开发体验、预览 URL、云服务与协作如何组合成平台。",
        "why": "看到 AI Cloud 背后的长期开发体验思路。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "这些文章也在解释作者公司的产品路线。把通用洞察与具体厂商的商业定位一起阅读。",
    "origin": "仓库名单"
  },
  {
    "id": "alex",
    "name": "Alex Albert",
    "short": "模型产品 · Claude",
    "category": "Agent 与模型",
    "role": "Anthropic 的模型产品建设者；曾从事开发者关系",
    "home": "https://www.anthropic.com",
    "x": "https://x.com/alexalbert__",
    "tags": [
      "模型产品",
      "评估",
      "用户反馈"
    ],
    "thesis": "模型也需要产品判断：选择哪些能力进步，以及怎样让用户真正用上。",
    "summary": "他的访谈把研究、模型行为、产品体验和评估连接起来；团队工程文章则补充了检索系统的具体实践。",
    "ideas": [
      {
        "title": "从用户反馈选择能力方向",
        "text": "模型能力并非均匀增长，产品团队需要把用户需求和使用中的阻塞转成研究与产品的优先级。",
        "source": 0
      },
      {
        "title": "模型与运行环境一起设计",
        "text": "模型和围绕它的工具、上下文与执行框架相互影响，不能只比较裸模型分数。",
        "source": 0
      },
      {
        "title": "检索要保留片段的上下文",
        "text": "团队的 Contextual Retrieval 给文本片段补充来源语境，配合关键词与向量检索改善检索质量。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Inside how Anthropic is building the next Claude",
        "type": "访谈",
        "date": "2026-05-17",
        "author": "Peter Yang 访谈 Alex Albert",
        "url": "https://creatoreconomy.so/p/inside-how-anthropic-is-building-the-next-claude",
        "summary": "讨论模型产品团队如何挑选能力方向，以及模型与产品环境如何配合。",
        "why": "理解研究与产品之间的具体工作。",
        "access": "已读公开部分；完整内容可能需要订阅。",
        "evidence": ""
      },
      {
        "title": "Introducing Contextual Retrieval",
        "type": "团队技术文章",
        "date": "2024-09-19",
        "author": "Anthropic 团队；Alex 参与文稿",
        "url": "https://www.anthropic.com/engineering/contextual-retrieval",
        "summary": "介绍给检索片段补上下文，再组合检索与重排的技术方案。",
        "why": "把抽象的上下文质量落到具体系统设计。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "区分他的访谈观点与 Anthropic 团队成果；参与文稿不等于独立提出或实现整套方法。",
    "origin": "仓库名单"
  },
  {
    "id": "aaron",
    "name": "Aaron Levie",
    "short": "Box · 企业工作流",
    "category": "企业与组织",
    "role": "Box 联合创始人；关注企业内容、业务流程与 AI",
    "home": "https://www.box.com",
    "x": "https://x.com/levie",
    "tags": [
      "企业 AI",
      "工作流",
      "组织变革"
    ],
    "thesis": "企业 AI 的价值，需要从个人提效走到业务流程的重建。",
    "summary": "他频繁讨论企业采用 AI 的组织阻力。关键不是买到模型，而是找到流程负责人、接通数据和系统，并建立真正承担落地工作的角色。",
    "ideas": [
      {
        "title": "把能力变成新工作方式",
        "text": "Box 的 AI-first 文章引用他关于能力扩展的观点：AI 不只是节省已有工作的时间，也可能提高目标和改变工作内容。",
        "source": 0
      },
      {
        "title": "流程需要有人负责落地",
        "text": "Agent 能力强，并不会自动让企业流程跑通；内部懂技术、AI 和业务的实施人员仍然重要。",
        "source": 1
      },
      {
        "title": "组织与治理也需要更新",
        "text": "团队文章讨论使用习惯、治理和人机分工；模型采购不能替代这些组织工作。",
        "source": 0
      }
    ],
    "works": [
      {
        "title": "Building an AI-first enterprise: Part 1",
        "type": "团队文章／个人引语",
        "date": "2025-12-04",
        "author": "Box 团队；引用 Aaron Levie",
        "url": "https://blog.box.com/ai-first-part-1",
        "summary": "从能力扩展、组织工作方式和治理解释 AI-first 企业。",
        "why": "把个人提效与企业转型分开观察。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "企业内部需要自己的 FDE",
        "type": "个人推文",
        "date": "2026-10-01／02 feed 快照",
        "author": "Aaron Levie",
        "url": "https://x.com/levie/status/2105695329513504976",
        "summary": "强调需要把技术、AI 与业务流程结合起来的内部实施角色。",
        "why": "看到“谁负责把 Agent 接到业务”这个经常被忽略的问题。",
        "access": "依据 Zara 的公开 feed 摘要核对；未独立读取 X 原帖全文。",
        "evidence": ""
      }
    ],
    "note": "他的企业视角与 Box 的商业位置有关。阅读时追问：谁接系统、谁评估结果、谁承担流程责任。",
    "origin": "仓库名单"
  },
  {
    "id": "ryo",
    "name": "Ryo Lu",
    "short": "Cursor · 在代码里设计",
    "category": "产品与设计",
    "role": "Cursor 设计建设者；ryOS 创作者",
    "home": "https://ryo.lu",
    "x": "https://x.com/ryolu_",
    "tags": [
      "设计系统",
      "Cursor",
      "可塑界面"
    ],
    "thesis": "设计的材料可以是运行中的软件，系统比孤立的屏幕更重要。",
    "summary": "他的访谈强调直接在工作代码里塑造体验，并通过一致的基础模块构成产品；个人作品展示了这种方法的探索性与趣味。",
    "ideas": [
      {
        "title": "在可运行的代码里雕刻体验",
        "text": "代码让设计者直接感受到行为与状态，设计不必完全停留在静态稿再交给工程师。",
        "source": 0
      },
      {
        "title": "先形成一致的系统",
        "text": "工具、交互与模式需要共享基础逻辑；持续增加页面和局部选项，容易让产品失去整体感。",
        "source": 0
      },
      {
        "title": "可塑性需要结构",
        "text": "让界面适应用户，不等于随意生成所有 UI；稳定的模块和交互原则提供可塑性的基础。",
        "source": 0
      }
    ],
    "works": [
      {
        "title": "Designing Cursor with Ryo Lu",
        "type": "访谈",
        "date": "2025-07-11",
        "author": "Dive Club · Ryo Lu",
        "url": "https://dive-club.beehiiv.com/p/new-post-e3a65bcf546dbdba",
        "summary": "讨论代码作为设计材料、产品系统和 AI 时代的界面可塑性。",
        "why": "适合想从画界面转向塑造实际产品的人。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "ryOS",
        "type": "个人作品",
        "date": "持续更新项目",
        "author": "Ryo Lu",
        "url": "https://os.ryo.lu/",
        "summary": "一个可交互的个人操作系统风格作品。",
        "why": "把访谈里的设计方法与实际交互作品对照。",
        "access": "作品入口；不以项目演示证明通用产品效果。",
        "evidence": ""
      }
    ],
    "note": "建议先读访谈，再体验作品。关注交互的一致性，而不仅是视觉效果。",
    "origin": "仓库名单"
  },
  {
    "id": "garry",
    "name": "Garry Tan",
    "short": "YC · 用户与行动力",
    "category": "软件与创业",
    "role": "Y Combinator 总裁与 CEO；软件创作者",
    "home": "https://blog.garrytan.com",
    "x": "https://x.com/garrytan",
    "tags": [
      "创业",
      "用户需求",
      "行动力"
    ],
    "thesis": "造软件更容易之后，选对用户问题和持续行动仍是创业的核心。",
    "summary": "他的演讲把 AI 工具、小团队和创始人的判断联系起来。技术门槛下降，反而让用户理解、品味与执行成为更明显的差异。",
    "ideas": [
      {
        "title": "先找人真正想要的东西",
        "text": "他强调接触用户和理解实际痛点，尤其是从用户的日常工作中寻找问题。",
        "source": 0
      },
      {
        "title": "工具放大主动解决问题的人",
        "text": "更强的工具给小团队更多能力，但真正的行动力还包括自己寻找信息、联系用户、验证假设。",
        "source": 0
      },
      {
        "title": "团队规模的观察需要语境",
        "text": "他分享小团队建设公司的案例；这些观察提示可能性，并不保证每家公司都适用同样的人数与增长路径。",
        "source": 0
      }
    ],
    "works": [
      {
        "title": "Why the next unicorns are built by AI",
        "type": "演讲／公开逐字稿",
        "date": "2025-05-21",
        "author": "Vanta 活动 · Garry Tan",
        "url": "https://www.vanta.com/resources/why-the-next-unicorns-are-built-by-ai",
        "summary": "讨论 AI 创业、小团队、主动性、用户接触与产品品味。",
        "why": "把工具能力与创业的长期原则连接起来。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Dylan Field and Garry Tan on design, AI, and locking in",
        "type": "联合对谈",
        "date": "2025-03-14",
        "author": "Figma · Garry Tan 对谈 Dylan Field",
        "url": "https://www.figma.com/blog/in-conversation-dylan-field-and-garry-tan/",
        "summary": "围绕 AI、设计、早期用户与产品探索展开对话。",
        "why": "观察 Garry 如何提问；设计论述主要来自受访者 Dylan。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "对谈里提问者与回答者的观点不同。不要把 Dylan 关于设计的回答全部归给 Garry。",
    "origin": "仓库名单"
  },
  {
    "id": "matt",
    "name": "Matt Turck",
    "short": "MAD · 产业地图",
    "category": "产业与判断",
    "role": "FirstMark 投资人；MAD 数据与 AI 产业地图建设者",
    "home": "https://www.mattturck.com",
    "x": "https://x.com/mattturck",
    "tags": [
      "MAD",
      "产业地图",
      "商业化"
    ],
    "thesis": "理解 AI 产业，要把技术、采用情况与商业结构放在同一张图里。",
    "summary": "他的长篇年度报告梳理数据、基础设施、模型和应用之间的关系，也讨论资本热度与真实企业需求可以同时存在。",
    "ideas": [
      {
        "title": "泡沫与基本面可以并存",
        "text": "融资热度并不能直接否定技术变化；同样，真实进步也不代表所有公司都值得同样的估值。",
        "source": 0
      },
      {
        "title": "看实际采用与付费动机",
        "text": "企业数据、工作流和真实使用决定商业价值，不能只从演示或用户注册量判断。",
        "source": 0
      },
      {
        "title": "模型选择应服务产品",
        "text": "开源、闭源和多模型的取舍，需结合能力、成本、客户需求与供应商风险，而不是立场。",
        "source": 0
      }
    ],
    "works": [
      {
        "title": "The 2025 MAD landscape",
        "type": "联合署名产业报告",
        "date": "2025-10-28",
        "author": "Matt Turck、Aman Kabeer",
        "url": "https://api.mattturck.com/mad2025/",
        "summary": "系统梳理数据与 AI 产业，讨论模型、应用、企业采用和商业结构。",
        "why": "适合建立全局地图，再定位自己关注的产品层。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "MAD Landscapes",
        "type": "长期研究项目",
        "date": "历年地图／持续更新",
        "author": "Matt Turck · FirstMark",
        "url": "https://www.mattturck.com/mad-landscapes",
        "summary": "历年数据、机器学习与 AI 产业地图索引。",
        "why": "比较几年间分类与公司分布的变化。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "这是一位投资人的产业分析。报告的趋势判断不等于确定事实，也不是投资建议。",
    "origin": "仓库名单"
  },
  {
    "id": "zara",
    "name": "Zara Zhang",
    "short": "信息筛选 · 独立制作",
    "category": "学习与创作",
    "origin": "仓库名单",
    "role": "独立 Builder 与作者；Follow Builders 项目维护者",
    "home": "https://github.com/zarazhangrui",
    "x": "https://x.com/zarazhangrui",
    "tags": [
      "信息源",
      "持续使用",
      "Follow Builders"
    ],
    "thesis": "先找到会反复使用的产品，再追溯造它的人。",
    "summary": "这份名单的起点是一种学习方法：广泛发现产品，亲自持续使用，把使用经验带进创始人访谈，而不是只在发布新闻中寻找答案。",
    "ideas": [
      {
        "title": "持续使用比演示更有信号",
        "text": "一次演示说明工具可能做什么；自己反复打开它，更能说明产品是否解决了真实问题。",
        "source": 0
      },
      {
        "title": "使用经验让访谈更有意义",
        "text": "先熟悉产品，再阅读作者如何做取舍，才能把抽象建议与实际体验对应起来。",
        "source": 0
      },
      {
        "title": "建设自己的源头信息流",
        "text": "Follow Builders 把研究者、创始人、PM 和工程师纳入来源，并维护原始内容的链接。它是一份动态信息源，不是固定权威排名。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "How I filter signal from noise in the AI world",
        "type": "个人文章",
        "date": "2025-05-07",
        "author": "Zara Zhang",
        "url": "https://zarazhang.substack.com/p/how-i-filter-signal-from-noise-in",
        "summary": "解释如何从产品使用追溯到作者，并点名 Christopher Pedregal、Josh Woodward、Kevin Weil。",
        "why": "读名单之前先读方法，理解为何选择这些人。"
      },
      {
        "title": "Follow Builders, Not Influencers",
        "type": "开源项目",
        "date": "核验于 2026-10-02",
        "author": "Zara Zhang",
        "url": "https://github.com/zarazhangrui/follow-builders",
        "summary": "收集 26 个 X 信息源、播客与官方博客，提供公开内容的摘要与来源链接。",
        "why": "名单的源头，可继续沿链接扩展自己的阅读。"
      },
      {
        "title": "把前端代码当作叙事媒介",
        "type": "个人推文",
        "date": "2026-10-02 feed 快照",
        "author": "Zara Zhang",
        "url": "https://x.com/zarazhangrui/status/2105753728183828692",
        "summary": "讨论代码用于表达与讲故事的可能性，而不只用于 SaaS 落地页。",
        "why": "连接她的信息筛选方法与自己的创作实践。",
        "access": "依据作者公开 feed；未独立读取 X 原帖全文。",
        "evidence": ""
      }
    ],
    "note": "不要把“builder”视为身份认证。对每篇内容仍要判断作者是否在讲自己真正参与的事情。"
  },
  {
    "id": "nikunj",
    "name": "Nikunj Kothari",
    "short": "判断力 · AI 原生个人",
    "category": "产业与判断",
    "role": "FPV Ventures 投资人；产品与运营背景的作者",
    "home": "https://www.nikunjk.com",
    "x": "https://x.com/nikunjk",
    "tags": [
      "判断数据",
      "主动性",
      "商业模式"
    ],
    "thesis": "AI 的放大效应来自工具与人的主动性、专业判断共同作用。",
    "summary": "他的文章从应用护城河写到个人如何重新学习：上下文不够，纠错和决策同样重要；经验也可能成为限制新方法的旧习惯。",
    "ideas": [
      {
        "title": "上下文之外还需要判断数据",
        "text": "Decisions and Dollars 关注纠正、决策和业务反馈如何形成价值；拥有资料不等于知道怎样做对。",
        "source": 0
      },
      {
        "title": "价格应连接实际业务价值",
        "text": "文章讨论 Agent 应用价值与决策、资金流的联系，提示传统按席位收费未必总能表达价值。",
        "source": 0
      },
      {
        "title": "主动性与 AI 一起放大",
        "text": "The Amplification Gap 通过创始人招聘观察讨论主动学习与深领域能力，并反思自己的产品经验。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Decisions and Dollars",
        "type": "个人文章",
        "date": "2026-06-12",
        "author": "Nikunj Kothari",
        "url": "https://writing.nikunjk.com/p/decisions-and-dollars",
        "summary": "讨论应用的判断能力、数据价值与 Agent 时代商业模式。",
        "why": "把“有数据”进一步拆成上下文与纠错判断。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "The Amplification Gap",
        "type": "个人文章",
        "date": "2026-09-23",
        "author": "Nikunj Kothari",
        "url": "https://writing.nikunjk.com/p/the-amplification-gap",
        "summary": "通过招聘见闻与个人反思讨论主动性、领域能力和 AI 的相互放大。",
        "why": "适合思考个人工作方式，而不只是产品选型。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "招聘判断来自作者见闻，不是统计结论。把它当作反思工具，不宜据此断言一类人必然失业。",
    "origin": "仓库名单"
  },
  {
    "id": "steinberger",
    "name": "Peter Steinberger",
    "short": "OpenClaw · 快速交付",
    "category": "Agent 与模型",
    "role": "OpenClaw 创建者；长期软件与开源建设者",
    "home": "https://steipete.me",
    "x": "https://x.com/steipete",
    "tags": [
      "Agent 编程",
      "交付速度",
      "CLI"
    ],
    "thesis": "工程师的注意力转向架构、反馈与验证，Agent 承接更多实现工作。",
    "summary": "他的个人实践记录非常具体：如何给 Agent 工作、怎样并行、怎样保持代码易理解。速度来自工具与工程习惯的组合，而不是完全放弃判断。",
    "ideas": [
      {
        "title": "真正的瓶颈逐渐转向思考",
        "text": "Shipping at Inference-Speed 讨论模型执行加快之后，选择方向、设计架构和组织任务的重要性。",
        "source": 0
      },
      {
        "title": "让 Agent 能自己验证",
        "text": "可调用的 CLI、明确的反馈和可检查结果帮助形成实现与验证循环。",
        "source": 0
      },
      {
        "title": "简单交流和代码卫生有价值",
        "text": "Just Talk To It 分享直接沟通、并行任务与小提交的个人经验；复杂编排不应先于实际需求。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Shipping at Inference-Speed",
        "type": "个人实践文章",
        "date": "2025-12-28",
        "author": "Peter Steinberger",
        "url": "https://steipete.me/posts/2025/shipping-at-inference-speed",
        "summary": "总结 Agent 编程带来的工程注意力变化，以及 CLI、反馈与判断的作用。",
        "why": "读一位有经验工程师如何调整实际工作流。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Just Talk To It",
        "type": "个人实践文章",
        "date": "2025-10-14",
        "author": "Peter Steinberger",
        "url": "https://steipete.me/posts/just-talk-to-it",
        "summary": "讨论直接与 Agent 交流、并行任务和日常工程习惯。",
        "why": "用具体经验评估自己的工具复杂度。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "这是作者在特定项目中的工作方式。并行数量与检查力度应按项目性质调整。",
    "origin": "仓库名单"
  },
  {
    "id": "dan",
    "name": "Dan Shipper",
    "short": "Every · 人机协作",
    "category": "学习与创作",
    "role": "Every 联合创始人；AI & I 节目主持人和作者",
    "home": "https://every.to",
    "x": "https://x.com/danshipper",
    "tags": [
      "知识工作",
      "人机协作",
      "AI & I"
    ],
    "thesis": "自动化可能增加需要人来理解、判断与整合的工作。",
    "summary": "他的文章与节目关注知识工作者怎样实际使用 AI。重点不是只追问替代多少任务，而是研究自动化之后的新任务和新的工作组织。",
    "ideas": [
      {
        "title": "自动化之后仍有人的工作",
        "text": "After Automation 讨论自动化与新增需求、人类判断和整合之间的关系。",
        "source": 0
      },
      {
        "title": "看真实工作材料",
        "text": "节目展示围绕文件、工具和实际任务的 AI 使用，比只比较抽象模型能力更贴近日常工作。",
        "source": 1
      },
      {
        "title": "区分工具效果与通用结论",
        "text": "不同知识工作任务、执行环境与检查方式，决定哪种工具适合；一个团队的切换不代表统一最优选择。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "After automation: There will be more human work than ever",
        "type": "个人文章",
        "date": "页面未显示明确发布日期",
        "author": "Dan Shipper · Every",
        "url": "https://every.to/thesis-statements/dan-shipper",
        "summary": "讨论自动化之后，人的理解、判断与整合工作如何改变。",
        "why": "思考 AI 能做更多之后，人应把注意力放在哪里。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Why we switched from Claude Code to Codex",
        "type": "播客逐字稿",
        "date": "2026-05-06",
        "author": "Dan Shipper 主持；Austin Tedesco 受访",
        "url": "https://every.to/podcast/transcript-why-we-switched-from-claude-code-to-codex",
        "summary": "围绕实际知识工作和工具使用经验讨论一次工具切换。",
        "why": "看任务、材料和反馈如何影响选择。",
        "access": "公开逐字稿；具体经验需区分主持人与受访者。",
        "evidence": ""
      }
    ],
    "note": "AI & I 是访谈平台，不是所有嘉宾观点都代表 Dan。阅读时关注任务背景和发言人。",
    "origin": "仓库名单"
  },
  {
    "id": "aditya",
    "name": "Aditya Agarwal",
    "short": "SPC · 重新学习",
    "category": "企业与组织",
    "role": "South Park Commons 建设者；长期工程与技术团队背景",
    "home": "https://www.southparkcommons.com",
    "x": "https://x.com/adityaag",
    "tags": [
      "工程转型",
      "好奇心",
      "-1 到 0"
    ],
    "thesis": "当实现能力迅速变便宜，重新学习和选择问题变得更重要。",
    "summary": "他以工程师的个人感受写技术变化，也从 SPC 社区解释探索期的价值：先找到值得投入的方向，再组织建设公司。",
    "ideas": [
      {
        "title": "承认旧能力价值正在变化",
        "text": "When Your Life’s Work Becomes Free 直接写出工程师面对代码生成的震动、失落与兴奋，而不是只重复效率叙事。",
        "source": 0
      },
      {
        "title": "好奇心与适应能力值得观察",
        "text": "他通过招聘与合作见闻强调试验、学习和改变方法；这些是个人观察，不是普遍的人才公式。",
        "source": 0
      },
      {
        "title": "给方向探索留出空间",
        "text": "SPC 的 -1 到 0 阶段强调与高质量同行共同探索，找到真正愿意长期解决的问题。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "When Your Life’s Work Becomes Free",
        "type": "个人文章",
        "date": "2026-03-13",
        "author": "Aditya Agarwal",
        "url": "https://blog.southparkcommons.com/p/when-your-lifes-work-becomes-free",
        "summary": "一位资深工程师对 AI 编程改变职业能力价值的坦诚反思。",
        "why": "适合认真理解兴奋之外的职业转型感受。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Announcing SPC’s $575M Fund IV",
        "type": "署名机构文章",
        "date": "2026-08-05",
        "author": "Aditya Agarwal · SPC",
        "url": "https://www.southparkcommons.com/news/announcing-spc-575m-fund-iv/",
        "summary": "借机构发展说明社区、探索期和创始人选择方向的理念。",
        "why": "理解他为何重视探索与人才环境。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "个人反思与机构宣传有不同目的。更值得借鉴的是学习和探索的方法，而不是基金规模。",
    "origin": "仓库名单"
  },
  {
    "id": "sam",
    "name": "Sam Altman",
    "short": "智能成本 · 长期预测",
    "category": "产业与判断",
    "role": "OpenAI 联合创始人；个人博客作者",
    "home": "https://blog.samaltman.com",
    "x": "https://x.com/sama",
    "tags": [
      "智能成本",
      "Agent",
      "长期预测"
    ],
    "thesis": "如果智能成本持续下降，软件、工作和社会制度都需要重新适应。",
    "summary": "他的个人文章结合技术趋势与宏观预测，强调智能的经济影响、Agent 的可能角色和个人主动性。阅读时要把作者的预测与已经发生的事实分开。",
    "ideas": [
      {
        "title": "智能的成本与供给可能重塑产品",
        "text": "Three Observations 讨论能力、资源投入、使用成本与潜在经济影响之间的关系。",
        "source": 0
      },
      {
        "title": "Agent 的作用仍是渐进扩展",
        "text": "他以初级协作者类比 Agent：可以承担工作，但会有局限，仍需要人的判断和监督。",
        "source": 0
      },
      {
        "title": "技术收益如何分配也是问题",
        "text": "文章涉及广泛受益与人的主动性；这些制度与未来判断不由模型能力本身自动决定。",
        "source": 0
      }
    ],
    "works": [
      {
        "title": "Three Observations",
        "type": "个人预测文章",
        "date": "2025-02-09",
        "author": "Sam Altman",
        "url": "https://blog.samaltman.com/three-observations",
        "summary": "围绕智能能力、成本、Agent 与经济影响提出三条观察和推演。",
        "why": "理解作者解释 AI 经济变化的框架。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "The Gentle Singularity",
        "type": "个人预测文章",
        "date": "2025-06-10",
        "author": "Sam Altman",
        "url": "https://blog.samaltman.com/the-gentle-singularity",
        "summary": "描绘智能持续进步之后，工作、科学与社会可能怎样变化。",
        "why": "对照实际进展阅读长期预测。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "作者同时是 AI 公司的领导者。文中的时间表和未来图景是预测，不能当作已经实现的能力。",
    "origin": "仓库名单"
  },
  {
    "id": "claude",
    "name": "Claude",
    "short": "官方账号 · Agent 工程",
    "category": "官方信息源",
    "role": "Claude 官方账号；这里整理 Anthropic 团队公开内容",
    "home": "https://claude.ai",
    "x": "https://x.com/claudeai",
    "tags": [
      "Agent",
      "上下文工程",
      "工具接口"
    ],
    "thesis": "从简单、可评估的系统开始，再增加真正需要的自主性。",
    "summary": "这不是个人 builder 档案。它用于跟踪 Claude 背后团队的技术方法、产品方向与公开说明，并明确文章作者或团队署名。",
    "ideas": [
      {
        "title": "工作流与自主 Agent 要区分",
        "text": "Building Effective Agents 区分预先定义的执行路径与模型动态决定的执行过程，强调按任务选择复杂度。",
        "source": 0
      },
      {
        "title": "简单且可组合的设计更易检查",
        "text": "先用简单方法，评估成本与延迟；工具描述、接口和反馈同样是工程的一部分。",
        "source": 0
      },
      {
        "title": "上下文是一项有限资源",
        "text": "Context Engineering 强调每一步选择进入模型的信息，并用整理、摘要与检索维持长期任务质量。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Building Effective Agents",
        "type": "团队技术文章",
        "date": "2024-12-19",
        "author": "Anthropic 工程团队",
        "url": "https://www.anthropic.com/engineering/building-effective-agents",
        "summary": "讨论工作流、Agent、自主性与简单可组合模式。",
        "why": "搭建 Agent 系统之前的基础读物。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Effective context engineering for AI agents",
        "type": "团队技术文章",
        "date": "2025-09-29",
        "author": "Anthropic 团队",
        "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
        "summary": "把指令、工具、外部信息与历史记录作为有限上下文统一管理。",
        "why": "理解为什么更多上下文不总能带来更好结果。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "官方文章提供可复用方法，也带有平台语境。这里不把团队文章拟人化为某个作者的个人观点。",
    "origin": "仓库名单",
    "official": true
  },
  {
    "id": "christopher",
    "name": "Christopher Pedregal",
    "short": "Granola · 无感 AI",
    "category": "产品与设计",
    "role": "Granola 联合创始人；关注 AI 与会议工作流",
    "home": "https://www.granola.ai",
    "x": "https://x.com/chrispedregal",
    "tags": [
      "Granola",
      "工作习惯",
      "产品打磨"
    ],
    "thesis": "好的 AI 产品融入已有习惯，让人保有控制，并减少额外操作。",
    "summary": "他的访谈反复连接增强人的能力、顺应习惯与精细的产品形状。探索可以快，但最后的体验仍需要一致性与打磨。",
    "ideas": [
      {
        "title": "增强，而不是拿走人的控制",
        "text": "Granola 的产品思路把用户自己的笔记与 AI 相结合，利用已有的会议习惯。",
        "source": 0
      },
      {
        "title": "先找到正确的产品形状",
        "text": "访谈讨论探索与打磨的不同阶段；确定方向后，需要让体验的细节形成整体。",
        "source": 1
      },
      {
        "title": "反馈不等于照单实现功能",
        "text": "频繁接触用户是为了理解底层需要，产品仍需自己的方向和一致判断。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Granola: The Art of Invisible AI",
        "type": "访谈逐字稿",
        "date": "2025-01-24",
        "author": "Hallway Chat · Christopher Pedregal",
        "url": "https://www.hallwaychat.co/granola-the-art-of-invisible-ai-christopher-pedregal/",
        "summary": "讨论无感的 AI、增强用户与顺应已有习惯。",
        "why": "理解为什么低操作成本可以成为产品差异。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "Granola · Christopher Pedregal",
        "type": "访谈",
        "date": "2026-01-14",
        "author": "EO Magazine · Hyeri Jo 访谈",
        "url": "https://www.eomag.io/article/granola-christopher-pedregal",
        "summary": "讨论产品形状、快速反馈与探索之后的精细打磨。",
        "why": "适合研究早期产品怎样形成自己的体验。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      }
    ],
    "note": "把“无感”理解为融入工作，而不是没有可见性或没有用户控制。",
    "origin": "原对话补充"
  },
  {
    "id": "kevin",
    "name": "Kevin Weil",
    "short": "产品交付 · 快速试验",
    "category": "产品与设计",
    "role": "OpenAI 产品领导者；以下职务与观点以所列 2025 年访谈为语境",
    "home": "https://forum.openai.com",
    "x": "https://x.com/kevinweil",
    "tags": [
      "产品交付",
      "开发者",
      "快速试验"
    ],
    "thesis": "能力变化很快，产品团队需要保持试验速度，并让开发者用得起、用得上。",
    "summary": "他在公开活动与访谈中解释模型能力怎样进入产品、开发者 API 与新的交互形式。这里不根据旧访谈推断其 2026 年现职。",
    "ideas": [
      {
        "title": "变化中的团队需要保持敏捷",
        "text": "OpenAI Forum 对话中，他讨论快速变化的技术与产品环境，以及团队试验和推进的节奏。",
        "source": 0
      },
      {
        "title": "降低开发者试验的成本",
        "text": "论坛对话涉及 API 成本与开发者可获得的能力，让更多应用有条件实际尝试。",
        "source": 0
      },
      {
        "title": "从模型进步走到产品形态",
        "text": "与 Azeem Azhar 的节目围绕 Agent、模型与硬件交互展开；这里仅依据公开节目说明列出议题，不替代完整访谈。",
        "source": 1
      }
    ],
    "works": [
      {
        "title": "Making AI Work for Everyone",
        "type": "公开论坛对话",
        "date": "2025-04-08",
        "author": "Kevin Weil、Erik Brynjolfsson · OpenAI Forum",
        "url": "https://forum.openai.com/public/blogs/making-ai-work-for-everyone-2025",
        "summary": "从产品与经济研究的不同视角讨论 AI 采用、开发者与组织。",
        "why": "比较产品领导者和经济学家的问题意识。",
        "access": "已读取公开原文／节目说明。",
        "evidence": ""
      },
      {
        "title": "OpenAI’s CPO on what’s coming next",
        "type": "访谈视频",
        "date": "2025-06-10",
        "author": "Azeem Azhar 访谈 Kevin Weil",
        "url": "https://www.youtube.com/watch?v=OhbhSscjmt0",
        "summary": "公开节目说明列出模型、Agent、硬件和产品方向等讨论议题。",
        "why": "作为进一步收听原访谈的入口。",
        "access": "已核验节目标题与公开说明；未取得完整逐字稿，不概括未读取部分。",
        "evidence": ""
      }
    ],
    "note": "论坛中关于生产力 J 曲线的论述主要来自 Erik，不能直接算作 Kevin 的观点。",
    "origin": "原对话补充"
  },
  {
    "id": "matt-pocock",
    "name": "Matt Pocock",
    "short": "AI Hero · 工程反馈循环",
    "category": "Agent 与模型",
    "origin": "用户补充",
    "role": "AI Hero、Total TypeScript 作者；工程教育者；曾任 Vercel 开发者倡导者",
    "home": "https://www.mattpocock.com/",
    "x": "https://x.com/mattpocockuk",
    "tags": [
      "AI Hero",
      "TypeScript",
      "反馈循环",
      "AGENTS.md"
    ],
    "thesis": "AI 编程速度越快，工程纪律、反馈和代码质量越重要。",
    "summary": "Matt 的教学从 TypeScript 延伸到 AI 工程与编码 Agent。他一方面讲怎样构建可靠的 LLM 应用，另一方面把传统软件方法重新应用到 Agent：定义成功、减少上下文噪声、用小而完整的功能验证假设，再逐步扩大自主执行。",
    "ideas": [
      {
        "title": "先定义成功，再用真实数据迭代",
        "text": "LLM 应用不是只在几个例子上看起来可用就能上线。明确任务的成功标准、收集真实使用与失败案例，才能判断一次修改是改善还是退步。",
        "source": 0
      },
      {
        "title": "先跑通一个完整的小功能",
        "text": "Tracer Bullets 主张先做贯穿系统各层的最小功能，立即验证关键路径。避免先生成大量独立层次的代码，最后才发现基础连接或假设有误。",
        "source": 1
      },
      {
        "title": "给 Agent 精简、按需获取的上下文",
        "text": "AGENTS.md 应聚焦普遍必要的信息，把领域规则放进可导航的文档。不断追加规则、矛盾指令和过期路径，会让上下文成为负担。",
        "source": 2
      },
      {
        "title": "自主循环也需要明确边界与反馈",
        "text": "Ralph 文章建议先观察并调整有人参与的执行，再尝试无人值守；定义完成条件、限制迭代，并用类型检查、测试与进度记录反馈结果。",
        "source": 3
      }
    ],
    "works": [
      {
        "title": "The AI Engineer Mindset",
        "type": "个人署名文章",
        "date": "更新于 2025-03-24",
        "author": "Matt Pocock",
        "url": "https://www.aihero.dev/the-ai-engineer-mindset",
        "summary": "解释 LLM 应用为何需要明确成功标准、系统评估和真实用户数据驱动的改进。",
        "why": "先理解可靠 AI 应用的工作方式，再学习具体工具。",
        "access": "已读取作者网站公开原文。",
        "evidence": ""
      },
      {
        "title": "Tracer Bullets: Keeping AI Slop Under Control",
        "type": "个人署名文章",
        "date": "更新于 2026-01-22",
        "author": "Matt Pocock",
        "url": "https://www.aihero.dev/tracer-bullets",
        "summary": "把《The Pragmatic Programmer》的小型端到端功能方法用于控制 AI 生成代码的质量。",
        "why": "可直接用于改进 Agent 的任务拆分与早期验证。",
        "access": "已读取作者网站公开原文。",
        "evidence": ""
      },
      {
        "title": "A Complete Guide To AGENTS.md",
        "type": "个人署名文章",
        "date": "更新于 2026-01-18",
        "author": "Matt Pocock",
        "url": "https://www.aihero.dev/a-complete-guide-to-agents-md",
        "summary": "讨论指令膨胀、过期信息、渐进披露，以及根目录和局部文档如何分工。",
        "why": "检查自己的 Agent 指令是否重复、矛盾或不再适用。",
        "access": "已读取作者网站公开原文。",
        "evidence": ""
      },
      {
        "title": "11 Tips For AI Coding With Ralph Wiggum",
        "type": "个人署名文章",
        "date": "更新于 2026-01-08",
        "author": "Matt Pocock",
        "url": "https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum",
        "summary": "从任务范围、进度文件、反馈循环、小步执行与隔离环境讨论长时间运行的编码 Agent。",
        "why": "理解持续执行的工程条件，避免把“自动循环”当作可靠性的保证。",
        "access": "已读取作者网站公开原文。",
        "evidence": ""
      }
    ],
    "note": "推荐顺序：Mindset → Tracer Bullets → AGENTS.md → Ralph。文章中的具体工具行为以发表语境为准；工程原则比某个脚本或固定指令数量更值得借鉴。"
  },
  {
    "id": "emil-kowalski",
    "name": "Emil Kowalski",
    "short": "设计工程 · 有品味的 Agent",
    "category": "产品与设计",
    "origin": "用户补充",
    "role": "Linear Web 团队设计工程师；Sonner、Vaul 与 animations.dev 创建者；曾在 Vercel 设计团队工作",
    "home": "https://emilkowal.ski/",
    "x": "https://x.com/emilkowalski_",
    "tags": [
      "设计工程",
      "Taste",
      "动效",
      "Sonner"
    ],
    "thesis": "把好体验的原因说清楚，设计品味就能训练，也能传递给 Agent。",
    "summary": "Emil 的文章把视觉判断、动效和组件实现连接起来。他既讨论如何训练品味，也用 Sonner 等作品展示细节如何成为体验的一部分；在 AI 协作上，他尝试把经验写成具体的设计规则。",
    "ideas": [
      {
        "title": "品味是一种可以训练的判断",
        "text": "Developing Taste 建议接触优秀作品、分析为什么某个决定更好，再通过制作与有质量的批评校准判断。只收藏好看的参考图还不够。",
        "source": 1
      },
      {
        "title": "把品味转成有理由的规则",
        "text": "Agents with Taste 用起始缩放、缓动和时长等例子，说明怎样把设计经验写成按场景适用的规则，让 Agent 少猜测。创作方向和新的判断仍需要人参与。",
        "source": 0
      },
      {
        "title": "动效先服务目的和使用频率",
        "text": "动画可以解释关系、提供反馈或带来愉悦，也可能拖慢高频操作。判断是否添加动画时，要看用户目标、出现频率与响应速度。",
        "source": 2
      },
      {
        "title": "组件质量同时来自体验与易用接口",
        "text": "Sonner 的文章连接可中断动效、手势、不可见页面的计时处理与简洁 API；交互示例和清楚文档也属于产品体验。",
        "source": 3
      }
    ],
    "works": [
      {
        "title": "Agents with Taste",
        "type": "个人署名文章",
        "date": "页面未标明确日期 · 核验于 2026-10-02",
        "author": "Emil Kowalski",
        "url": "https://emilkowal.ski/ui/agents-with-taste",
        "summary": "演示如何把设计决定背后的理由、动效准则和排版经验封装成 Agent 可使用的规则。",
        "why": "理解“让 AI 有品味”需要哪些可表达的知识。",
        "access": "已读取作者网站公开原文。",
        "evidence": ""
      },
      {
        "title": "Developing Taste",
        "type": "个人署名文章",
        "date": "页面未标明确日期 · 核验于 2026-10-02",
        "author": "Emil Kowalski",
        "url": "https://emilkowal.ski/ui/developing-taste",
        "summary": "从优秀作品、分析选择、实践和批评讨论如何训练设计判断。",
        "why": "为 Agent 写规则之前，先建立自己的判断来源。",
        "access": "已读取作者网站公开原文。",
        "evidence": ""
      },
      {
        "title": "You Don't Need Animations",
        "type": "个人署名文章",
        "date": "页面未标明确日期 · 核验于 2026-10-02",
        "author": "Emil Kowalski",
        "url": "https://emilkowal.ski/ui/you-dont-need-animations",
        "summary": "通过交互示例讨论动效目的、使用频率与速度，解释何时不加动画更合适。",
        "why": "避免把精致界面简单等同于更多动效。",
        "access": "已读取作者网站公开原文。",
        "evidence": ""
      },
      {
        "title": "Building a Toast Component",
        "type": "个人署名文章",
        "date": "页面未标明确日期 · 文中回顾 2023 年创建项目",
        "author": "Emil Kowalski",
        "url": "https://emilkowal.ski/ui/building-a-toast-component",
        "summary": "拆解 Sonner 的堆叠、手势、计时、API 和文档，展示组件细节怎样形成整体体验。",
        "why": "把抽象的品味和具体代码、交互决定对照阅读。",
        "access": "已读取作者网站公开原文。",
        "evidence": ""
      }
    ],
    "note": "推荐顺序：Developing Taste → Agents with Taste → 动效文章 → Sonner。规则是作者在具体界面中的经验；套用后仍应观察自己的用户、设备与交互反馈。"
  }
];
