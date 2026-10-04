'use strict';
const X_INSIGHTS = {
  "collectedDate": "2026-10-03",
  "scope": "User-profile timeline samples; includes original posts, quotes, reposts and some embedded thread replies; not a complete replies timeline",
  "requestedProfiles": 30,
  "targetPerProfile": 100,
  "profiles": [
    {
      "id": "karpathy",
      "name": "Andrej Karpathy",
      "handle": "karpathy",
      "count": 100,
      "status": "cached",
      "reposts": 14,
      "quotes": 32,
      "ownPosts": 86,
      "ownPostDateRange": [
        "2025-11-25",
        "2026-10-02"
      ],
      "insights": [
        {
          "title": "把模型输出变成理解工具",
          "summary": "模型执行更多工作后，人要把注意力放在理解和监督。用清楚的短句、关系图解、交互网页和定制讲解来降低理解成本，而不只是追求更多答案。",
          "ids": [
            "2105819303471976479",
            "2053872850101285137"
          ],
          "sources": [
            {
              "id": "2105819303471976479",
              "url": "https://x.com/karpathy/status/2105819303471976479",
              "published": "2026-10-02T08:37:00+08:00"
            },
            {
              "id": "2053872850101285137",
              "url": "https://x.com/karpathy/status/2053872850101285137",
              "published": "2026-05-12T00:20:21+08:00"
            }
          ]
        },
        {
          "title": "把知识库当成持续编译的作品",
          "summary": "保留原始资料，让模型逐步维护带摘要、反向链接和概念关系的 Markdown 知识库。把问答得到的图表与解释再归档，并检查冲突和缺失。复杂检索系统并非他在这个个人规模下的第一选择。",
          "ids": [
            "2039805659525644595"
          ],
          "sources": [
            {
              "id": "2039805659525644595",
              "url": "https://x.com/karpathy/status/2039805659525644595",
              "published": "2026-04-03T04:42:21+08:00"
            }
          ]
        },
        {
          "title": "用成功条件驱动执行，用反方论证检查判断",
          "summary": "他的编程实践强调先给可检查的成功条件，让 Agent 反复验证。与此同时，他发现模型能把相反立场都论证得很有说服力，所以不能把流畅的论证当作独立的真理判断。",
          "ids": [
            "2015883857489522876",
            "2037921699824607591"
          ],
          "sources": [
            {
              "id": "2015883857489522876",
              "url": "https://x.com/karpathy/status/2015883857489522876",
              "published": "2026-01-27T04:25:39+08:00"
            },
            {
              "id": "2037921699824607591",
              "url": "https://x.com/karpathy/status/2037921699824607591",
              "published": "2026-03-28T23:56:10+08:00"
            }
          ]
        }
      ]
    },
    {
      "id": "swyx",
      "name": "Swyx / Shawn Wang",
      "handle": "swyx",
      "count": 100,
      "status": "ok",
      "reposts": 73,
      "quotes": 19,
      "ownPosts": 27,
      "ownPostDateRange": [
        "2026-08-21",
        "2026-10-03"
      ],
      "insights": [
        {
          "title": "把安全放在 AI 工程中心",
          "summary": "他在 AI 安全活动介绍中认为，Agent、漏洞和攻击增多，让安全从理论议题变成工程核心。此处是他的判断与会议宣传，不是独立统计报告。",
          "ids": [
            "2106042773510177256"
          ],
          "sources": [
            {
              "id": "2106042773510177256",
              "url": "https://x.com/swyx/status/2106042773510177256",
              "published": "2026-10-02T23:25:00+08:00"
            }
          ]
        },
        {
          "title": "在真实工作流中比较模型的表达质量",
          "summary": "他用同一个 AINews 生产流程对比模型，把简洁、品味和减少空话作为选择依据。这提示评估不能只看通用分数；这个结果仍是他的具体工作流体验。",
          "ids": [
            "2102650014552182920"
          ],
          "sources": [
            {
              "id": "2102650014552182920",
              "url": "https://x.com/swyx/status/2102650014552182920",
              "published": "2026-09-23T14:43:23+08:00"
            }
          ]
        },
        {
          "title": "规模增长不能只靠低质量内容堆积",
          "summary": "他用自己的内容业务讨论保持质量同时扩大规模，并公开描述增长经历。可以借鉴目标与观察方法，不能把单个频道的增长直接视为普遍因果规律。",
          "ids": [
            "2103361254433993165"
          ],
          "sources": [
            {
              "id": "2103361254433993165",
              "url": "https://x.com/swyx/status/2103361254433993165",
              "published": "2026-09-25T13:49:36+08:00"
            }
          ]
        }
      ]
    },
    {
      "id": "josh",
      "name": "Josh Woodward",
      "handle": "joshwoodward",
      "count": 100,
      "status": "ok",
      "reposts": 13,
      "quotes": 43,
      "ownPosts": 87,
      "ownPostDateRange": [
        "2026-05-20",
        "2026-10-02"
      ],
      "insights": [
        {
          "title": "把用户痛点排成可追踪的改进清单",
          "summary": "他公开排序用户反馈，并持续更新进展。列表前两项是工作软件集成和工具调用的可靠性，随后才是组织聊天、增加接口和其他体验问题。",
          "ids": [
            "2075241749048401936",
            "2089520767281324112"
          ],
          "sources": [
            {
              "id": "2075241749048401936",
              "url": "https://x.com/joshwoodward/status/2075241749048401936",
              "published": "2026-07-09T23:32:43+08:00"
            },
            {
              "id": "2089520767281324112",
              "url": "https://x.com/joshwoodward/status/2089520767281324112",
              "published": "2026-08-18T09:12:26+08:00"
            }
          ]
        },
        {
          "title": "降低模式切换造成的使用负担",
          "summary": "他介绍 Notebook 时强调一个统一的输入入口，让用户围绕思考与任务操作，而不需要先选择一堆模式。具体产品是否做到，仍要实际体验。",
          "ids": [
            "2084746170576892342"
          ],
          "sources": [
            {
              "id": "2084746170576892342",
              "url": "https://x.com/joshwoodward/status/2084746170576892342",
              "published": "2026-08-05T04:59:54+08:00"
            }
          ]
        },
        {
          "title": "让用户参与尚未发布功能的验证",
          "summary": "通过高频用户试用群获得早期反馈，并持续招募新一批参与者。值得借鉴的是让反馈进入发布前的迭代，而不只在上线后收集意见。",
          "ids": [
            "2099558443078365287"
          ],
          "sources": [
            {
              "id": "2099558443078365287",
              "url": "https://x.com/joshwoodward/status/2099558443078365287",
              "published": "2026-09-15T01:58:35+08:00"
            }
          ]
        }
      ]
    },
    {
      "id": "boris",
      "name": "Boris Cherny",
      "handle": "bcherny",
      "count": 100,
      "status": "ok",
      "reposts": 47,
      "quotes": 28,
      "ownPosts": 53,
      "ownPostDateRange": [
        "2026-07-03",
        "2026-10-02"
      ],
      "insights": [
        {
          "title": "一次性原型和生产代码采用不同质量门槛",
          "summary": "低影响、会丢弃的原型可以容忍不完美；生产代码需要更高质量要求。他列举测试、端到端检查、模糊测试、代码审查和安全审查，强调工程师要守住标准。",
          "ids": [
            "2098217573276131577"
          ],
          "sources": [
            {
              "id": "2098217573276131577",
              "url": "https://x.com/bcherny/status/2098217573276131577",
              "published": "2026-09-11T09:10:27+08:00"
            }
          ]
        },
        {
          "title": "形式化方法用于找到困难局部的反例",
          "summary": "他说明流程是为状态机或并发部分建模、找反例、复现并修复。不能把这个案例转述成整个代码库已经得到形式化验证。",
          "ids": [
            "2102898067133595992"
          ],
          "sources": [
            {
              "id": "2102898067133595992",
              "url": "https://x.com/bcherny/status/2102898067133595992",
              "published": "2026-09-24T07:09:03+08:00"
            }
          ]
        },
        {
          "title": "看业务回报与新错误类型，而不只看 Token 用量",
          "summary": "用量表示活动，不表示回报；他建议比较原本需要投入的工程工作。同时，他观察模型错误更多涉及系统设计、交互和缺失语境，因而强调对抗式审查。",
          "ids": [
            "2077929397495959693",
            "2087284684103537011"
          ],
          "sources": [
            {
              "id": "2077929397495959693",
              "url": "https://x.com/bcherny/status/2077929397495959693",
              "published": "2026-07-17T09:32:29+08:00"
            },
            {
              "id": "2087284684103537011",
              "url": "https://x.com/bcherny/status/2087284684103537011",
              "published": "2026-08-12T05:07:03+08:00"
            }
          ]
        }
      ]
    },
    {
      "id": "thibault",
      "name": "Thibault Sottiaux",
      "handle": "thsottiaux",
      "count": 100,
      "status": "ok",
      "reposts": 1,
      "quotes": 26,
      "ownPosts": 99,
      "ownPostDateRange": [
        "2026-09-04",
        "2026-10-03"
      ],
      "insights": [
        {
          "title": "模型表现差，也可能是周围系统出了问题",
          "summary": "他报告一次质量修复涉及旧 Skills 过度触发、阻碍检查、上下文管理实验和配置异常。诊断 Agent 应同时检查模型、指令、上下文与执行配置。",
          "ids": [
            "2098612714704891959"
          ],
          "sources": [
            {
              "id": "2098612714704891959",
              "url": "https://x.com/thsottiaux/status/2098612714704891959",
              "published": "2026-09-12T11:20:36+08:00"
            }
          ]
        },
        {
          "title": "把持续工作的 Agent 接入完整环境",
          "summary": "他的发布介绍把长期运行、记忆、独立计算机、浏览器、应用连接和用户反馈放在一起。它表达的是产品方向与发布主张，不能仅凭帖子断言所有任务都可靠完成。",
          "ids": [
            "2104981170685616361",
            "2104987594719461796"
          ],
          "sources": [
            {
              "id": "2104981170685616361",
              "url": "https://x.com/thsottiaux/status/2104981170685616361",
              "published": "2026-09-30T01:06:34+08:00"
            },
            {
              "id": "2104987594719461796",
              "url": "https://x.com/thsottiaux/status/2104987594719461796",
              "published": "2026-09-30T01:32:06+08:00"
            }
          ]
        },
        {
          "title": "语音输入的价值在于能继续执行工作",
          "summary": "他分享用语音讨论工作、处理邮件、编程和日历的个人体验。值得观察的是语音能否连接到实际操作，而不只是把声音转成文字。",
          "ids": [
            "2102814202117411196"
          ],
          "sources": [
            {
              "id": "2102814202117411196",
              "url": "https://x.com/thsottiaux/status/2102814202117411196",
              "published": "2026-09-24T01:35:48+08:00"
            }
          ]
        }
      ]
    },
    {
      "id": "peter-yang",
      "name": "Peter Yang",
      "handle": "petergyang",
      "count": 100,
      "status": "ok",
      "reposts": 4,
      "quotes": 41,
      "ownPosts": 96,
      "ownPostDateRange": [
        "2026-09-20",
        "2026-10-03"
      ],
      "insights": [
        {
          "title": "Agent 产品不应把停留时间当作价值",
          "summary": "用户聊得久可能只是任务没有完成。他建议结合对话、响应、工具调用、评估与后续行为，判断 Agent 是否解决了需求。该帖包含产品推广，所引效果数字未在本报告中独立验证。",
          "ids": [
            "2103157654827000233"
          ],
          "sources": [
            {
              "id": "2103157654827000233",
              "url": "https://x.com/petergyang/status/2103157654827000233",
              "published": "2026-09-25T00:20:34+08:00"
            }
          ]
        },
        {
          "title": "先跑通一次，再沉淀为 Skill 和例行任务",
          "summary": "他整理访谈嘉宾 Lauren 与 Peng 的经验：先观察一次完整执行、纠正错误，把有效做法写成 Skill，再建立例行流程；同时让 bot 有办法检查自己的工作。这是嘉宾经验的转述。",
          "ids": [
            "2104575614263144794"
          ],
          "sources": [
            {
              "id": "2104575614263144794",
              "url": "https://x.com/petergyang/status/2104575614263144794",
              "published": "2026-09-28T22:15:02+08:00"
            }
          ]
        },
        {
          "title": "个人软件可以只重建自己真正需要的部分",
          "summary": "他分享重做研究工具核心功能的案例。可取之处是从实际需求裁剪产品复杂度；单个五分钟演示不能证明已经覆盖商业工具的可靠性与维护要求。",
          "ids": [
            "2106072698564874410"
          ],
          "sources": [
            {
              "id": "2106072698564874410",
              "url": "https://x.com/petergyang/status/2106072698564874410",
              "published": "2026-10-03T01:23:54+08:00"
            }
          ]
        }
      ]
    },
    {
      "id": "nan",
      "name": "Nan Yu",
      "handle": "thenanyu",
      "count": 100,
      "status": "ok",
      "reposts": 25,
      "quotes": 50,
      "ownPosts": 75,
      "ownPostDateRange": [
        "2026-08-01",
        "2026-10-03"
      ],
      "insights": [
        {
          "title": "让 Agent 少惹人烦，也是产品设计工作",
          "summary": "他认为用户因烦躁而放弃，会阻断价值实现；对话和修辞设计可能成为界面设计者的重要工作。这里不是单纯把文本改得更亲切，而是观察实际交互阻力。",
          "ids": [
            "2094928205753040999"
          ],
          "sources": [
            {
              "id": "2094928205753040999",
              "url": "https://x.com/thenanyu/status/2094928205753040999",
              "published": "2026-09-02T07:19:40+08:00"
            }
          ]
        },
        {
          "title": "已有 SaaS 需要同时服务内部和外部 Agent",
          "summary": "他主张既提供能操作应用的内置 Agent，也提供让外部 Agent 使用的 MCP 与事件接口。两类入口对应不同的用户习惯。",
          "ids": [
            "2091926179704135684"
          ],
          "sources": [
            {
              "id": "2091926179704135684",
              "url": "https://x.com/thenanyu/status/2091926179704135684",
              "published": "2026-08-25T00:30:42+08:00"
            }
          ]
        },
        {
          "title": "自动修复流程要能停下来收集证据",
          "summary": "他描述 Issue、Agent、PR、发布的流程，但要求先研究根因、收集监控证据，只在确信时修复。不足时向报告者索取复现资料，得到补充后再继续。文中的完成比例属于其团队观察。",
          "ids": [
            "2083230295206121807",
            "2083534333428580501"
          ],
          "sources": [
            {
              "id": "2083230295206121807",
              "url": "https://x.com/thenanyu/status/2083230295206121807",
              "published": "2026-08-01T00:36:21+08:00"
            },
            {
              "id": "2083534333428580501",
              "url": "https://x.com/thenanyu/status/2083534333428580501",
              "published": "2026-08-01T20:44:29+08:00"
            }
          ]
        }
      ]
    },
    {
      "id": "madhu",
      "name": "Madhu Guru",
      "handle": "realmadhuguru",
      "count": 100,
      "status": "ok",
      "reposts": 3,
      "quotes": 63,
      "ownPosts": 97,
      "ownPostDateRange": [
        "2026-05-17",
        "2026-10-03"
      ],
      "insights": [
        {
          "title": "评估执行路径，而不只评估最终答案",
          "summary": "相同答案可能来自简洁正确的路径，也可能来自反复搜索与错误恢复。先定义工作流、逐步任务和典型难例，再选择步骤评估或整体评估的切片。",
          "ids": [
            "2098064969464217720"
          ],
          "sources": [
            {
              "id": "2098064969464217720",
              "url": "https://x.com/realmadhuguru/status/2098064969464217720",
              "published": "2026-09-10T23:04:03+08:00"
            }
          ]
        },
        {
          "title": "一个总分会掩盖关键任务退步",
          "summary": "简单任务变好，可能掩盖最重要的复杂任务变差。加权平均也包含主观取舍，应保留按优先级排序的评估明细，理解失败分布后再决策。",
          "ids": [
            "2090930137885774324"
          ],
          "sources": [
            {
              "id": "2090930137885774324",
              "url": "https://x.com/realmadhuguru/status/2090930137885774324",
              "published": "2026-08-22T06:32:47+08:00"
            }
          ]
        },
        {
          "title": "拥有自己的评估，才能有模型选择权",
          "summary": "他建议企业建立覆盖实际业务结果的评估，并逐步形成定制模型的能力，便于比较质量、成本与延迟。新模型升级时也要审查旧提示词，避免不断追加补丁式规则。帖子里的删减比例是作者建议，不是通用标准。",
          "ids": [
            "2093143877087879377",
            "2087916590964851172"
          ],
          "sources": [
            {
              "id": "2093143877087879377",
              "url": "https://x.com/realmadhuguru/status/2093143877087879377",
              "published": "2026-08-28T09:09:23+08:00"
            },
            {
              "id": "2087916590964851172",
              "url": "https://x.com/realmadhuguru/status/2087916590964851172",
              "published": "2026-08-13T22:58:01+08:00"
            }
          ]
        }
      ]
    },
    {
      "id": "amanda",
      "name": "Amanda Askell",
      "handle": "AmandaAskell",
      "count": 37,
      "status": "ok",
      "reposts": 2,
      "quotes": 4,
      "ownPosts": 35,
      "ownPostDateRange": [
        "2026-04-24",
        "2026-10-02"
      ],
      "insights": [
        {
          "title": "对齐和无害是不同的判断轴",
          "summary": "模型可能遵循原则，却因拿到错误的情境信息而造成伤害。因此既要检查行为意图，也要检查输入信息与实际后果。",
          "ids": [
            "2084369056765989224"
          ],
          "sources": [
            {
              "id": "2084369056765989224",
              "url": "https://x.com/AmandaAskell/status/2084369056765989224",
              "published": "2026-08-04T04:01:23+08:00"
            }
          ]
        },
        {
          "title": "对齐训练也需要正面的行为愿景",
          "summary": "除了阻止令人担忧的行为，她强调让模型理解自己可以成为什么、为什么值得这样行动。这与单纯罗列禁令的思路不同。",
          "ids": [
            "2052928572810256748"
          ],
          "sources": [
            {
              "id": "2052928572810256748",
              "url": "https://x.com/AmandaAskell/status/2052928572810256748",
              "published": "2026-05-09T09:48:07+08:00"
            }
          ]
        },
        {
          "title": "核实作者身份，不要把人物传闻当作研究资料",
          "summary": "她提醒读者，关于自己的自信叙述可能是虚构，并在一条帖子中说明多年未写个人博客。研究应核对作品署名和原始入口，不能因为文字看起来像本人就归给本人。",
          "ids": [
            "2058994218484338726",
            "2050020603323904369"
          ],
          "sources": [
            {
              "id": "2058994218484338726",
              "url": "https://x.com/AmandaAskell/status/2058994218484338726",
              "published": "2026-05-26T03:30:50+08:00"
            },
            {
              "id": "2050020603323904369",
              "url": "https://x.com/AmandaAskell/status/2050020603323904369",
              "published": "2026-05-01T09:12:54+08:00"
            }
          ]
        }
      ]
    },
    {
      "id": "cat",
      "name": "Cat Wu",
      "handle": "_catwu",
      "count": 0,
      "status": "rate_limited"
    },
    {
      "id": "thariq",
      "name": "Thariq Shihipar",
      "handle": "trq212",
      "count": 0,
      "status": "rate_limited"
    },
    {
      "id": "google-labs",
      "name": "Google Labs",
      "handle": "GoogleLabs",
      "count": 0,
      "status": "rate_limited"
    },
    {
      "id": "amjad",
      "name": "Amjad Masad",
      "handle": "amasad",
      "count": 0,
      "status": "rate_limited"
    },
    {
      "id": "guillermo",
      "name": "Guillermo Rauch",
      "handle": "rauchg",
      "count": 0,
      "status": "rate_limited"
    },
    {
      "id": "alex",
      "name": "Alex Albert",
      "handle": "alexalbert__",
      "count": 0,
      "status": "rate_limited"
    },
    {
      "id": "aaron",
      "name": "Aaron Levie",
      "handle": "levie",
      "count": 0,
      "status": "rate_limited"
    },
    {
      "id": "ryo",
      "name": "Ryo Lu",
      "handle": "ryolu_",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "garry",
      "name": "Garry Tan",
      "handle": "garrytan",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "matt",
      "name": "Matt Turck",
      "handle": "mattturck",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "zara",
      "name": "Zara Zhang",
      "handle": "zarazhangrui",
      "count": 100,
      "status": "ok",
      "collectedDate": "2026-10-04",
      "reposts": 11,
      "quotes": 26,
      "ownPosts": 89,
      "ownPostDateRange": [
        "2026-07-17",
        "2026-10-03"
      ],
      "insights": [
        {
          "title": "分享正在做的工作与思考",
          "summary": "她建议展示已有的制作过程、原型和用户反馈，把真实取舍讲出来；画面制作精度不应遮住思考。",
          "ids": [
            "2078086930756202924",
            "2095416650401186288",
            "2083349919172313367"
          ],
          "sources": [
            {
              "id": "2078086930756202924",
              "url": "https://x.com/zarazhangrui/status/2078086930756202924",
              "published": "2026-07-17T11:58:27+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2095416650401186288",
              "url": "https://x.com/zarazhangrui/status/2095416650401186288",
              "published": "2026-09-03T07:40:35+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2083349919172313367",
              "url": "https://x.com/zarazhangrui/status/2083349919172313367",
              "published": "2026-08-01T00:31:42+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            }
          ]
        },
        {
          "title": "真实表达和软件表达相互连接",
          "summary": "近期继续把前端代码视为叙事媒介，也强调创作的非功利价值。技术来源不是判断内容是否有价值的唯一标准。",
          "ids": [
            "2105753728183828692",
            "2104253882025341231",
            "2093396989329469505"
          ],
          "sources": [
            {
              "id": "2105753728183828692",
              "url": "https://x.com/zarazhangrui/status/2105753728183828692",
              "published": "2026-10-01T20:16:26+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2104253882025341231",
              "url": "https://x.com/zarazhangrui/status/2104253882025341231",
              "published": "2026-09-27T16:56:35+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2093396989329469505",
              "url": "https://x.com/zarazhangrui/status/2093396989329469505",
              "published": "2026-08-28T17:55:10+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            }
          ]
        },
        {
          "title": "领域经验与传递标准是两种能力",
          "summary": "她区分长期积累的专业判断，以及通过背景、参考和迭代把标准传给 Agent 的能力。后者不能替代前者。",
          "ids": [
            "2092530911611101350",
            "2082705944782520462"
          ],
          "sources": [
            {
              "id": "2092530911611101350",
              "url": "https://x.com/zarazhangrui/status/2092530911611101350",
              "published": "2026-08-26T08:33:41+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2082705944782520462",
              "url": "https://x.com/zarazhangrui/status/2082705944782520462",
              "published": "2026-07-30T05:52:46+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            }
          ]
        },
        {
          "title": "个人任务比通用榜单更能检验模型",
          "summary": "用自己工作中的任务寻找能力边界，并按从用户需要到交付的时间观察 AI 使用成效。",
          "ids": [
            "2078666187026911488",
            "2081627581997269192"
          ],
          "sources": [
            {
              "id": "2078666187026911488",
              "url": "https://x.com/zarazhangrui/status/2078666187026911488",
              "published": "2026-07-19T02:20:13+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2081627581997269192",
              "url": "https://x.com/zarazhangrui/status/2081627581997269192",
              "published": "2026-07-27T06:27:44+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            }
          ]
        }
      ]
    },
    {
      "id": "nikunj",
      "name": "Nikunj Kothari",
      "handle": "nikunjk",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "steinberger",
      "name": "Peter Steinberger",
      "handle": "steipete",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "dan",
      "name": "Dan Shipper",
      "handle": "danshipper",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "aditya",
      "name": "Aditya Agarwal",
      "handle": "adityaag",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "sam",
      "name": "Sam Altman",
      "handle": "sama",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "claude",
      "name": "Claude",
      "handle": "claudeai",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "christopher",
      "name": "Christopher Pedregal",
      "handle": "chrispedregal",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "kevin",
      "name": "Kevin Weil",
      "handle": "kevinweil",
      "count": 0,
      "status": "not_attempted"
    },
    {
      "id": "matt-pocock",
      "name": "Matt Pocock",
      "handle": "mattpocockuk",
      "count": 100,
      "status": "ok",
      "collectedDate": "2026-10-04",
      "reposts": 9,
      "quotes": 26,
      "ownPosts": 91,
      "ownPostDateRange": [
        "2026-09-03",
        "2026-10-03"
      ],
      "insights": [
        {
          "title": "改善环境，让错误更难发生",
          "summary": "他强调可调试、可操作的应用环境，以及把模糊规则转成 lint、hooks 和其他确定性检查。",
          "ids": [
            "2105740664973775163",
            "2099859946053533933",
            "2102757952180686945"
          ],
          "sources": [
            {
              "id": "2105740664973775163",
              "url": "https://x.com/mattpocockuk/status/2105740664973775163",
              "published": "2026-10-01T19:24:31+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2099859946053533933",
              "url": "https://x.com/mattpocockuk/status/2099859946053533933",
              "published": "2026-09-15T13:56:39+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2102757952180686945",
              "url": "https://x.com/mattpocockuk/status/2102757952180686945",
              "published": "2026-09-23T13:52:17+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            }
          ]
        },
        {
          "title": "结构与导航要服务 Agent 的工作",
          "summary": "近期讨论用有效抽象约束设计空间，同时清除浅层、多余抽象；复盘会话中的导航困难和过期文档。",
          "ids": [
            "2106425743479546343",
            "2105563604384915639",
            "2105951409887949107"
          ],
          "sources": [
            {
              "id": "2106425743479546343",
              "url": "https://x.com/mattpocockuk/status/2106425743479546343",
              "published": "2026-10-03T16:46:47+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2105563604384915639",
              "url": "https://x.com/mattpocockuk/status/2105563604384915639",
              "published": "2026-10-01T07:40:57+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2105951409887949107",
              "url": "https://x.com/mattpocockuk/status/2105951409887949107",
              "published": "2026-10-02T09:21:57+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            }
          ]
        },
        {
          "title": "交付证据，并按风险安排审查",
          "summary": "让 PR 展示变化如何工作，再看可逆性和影响范围，把人的审查时间用在重要风险上。",
          "ids": [
            "2100521948786667822",
            "2100895593618907402"
          ],
          "sources": [
            {
              "id": "2100521948786667822",
              "url": "https://x.com/mattpocockuk/status/2100521948786667822",
              "published": "2026-09-17T09:47:13+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2100895593618907402",
              "url": "https://x.com/mattpocockuk/status/2100895593618907402",
              "published": "2026-09-18T10:31:56+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            }
          ]
        },
        {
          "title": "逐步扩大自动化，保留人的思考空间",
          "summary": "软件工厂从小任务建立信任；他也记录了课程规划时 Agent 过快生成和追问反而打断思考的经历。",
          "ids": [
            "2100178563362074889",
            "2101303255397494867"
          ],
          "sources": [
            {
              "id": "2100178563362074889",
              "url": "https://x.com/mattpocockuk/status/2100178563362074889",
              "published": "2026-09-16T11:02:43+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            },
            {
              "id": "2101303255397494867",
              "url": "https://x.com/mattpocockuk/status/2101303255397494867",
              "published": "2026-09-19T13:31:51+00:00",
              "access": "OpenCLI 本人主页样本；已阅读帖子文字，媒体与外链未核验。"
            }
          ]
        }
      ]
    },
    {
      "id": "emil-kowalski",
      "name": "Emil Kowalski",
      "handle": "emilkowalski_",
      "count": 0,
      "status": "not_attempted"
    }
  ],
  "lastUpdated": "2026-10-04"
};
