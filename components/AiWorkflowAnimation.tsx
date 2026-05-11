const inputItems = [
  {
    label: "文本",
    desc: "AI 新闻、产品想法、用户需求",
    code: "TXT",
  },
  {
    label: "链接",
    desc: "网页、博客、论文、工具页面",
    code: "URL",
  },
  {
    label: "文档",
    desc: "报告、PRD、Markdown、PDF",
    code: "DOC",
  },
];

const engineLayers = [
  {
    title: "任务识别",
    desc: "判断用户意图与输出目标",
  },
  {
    title: "上下文补充",
    desc: "接入知识库、示例和业务规则",
  },
  {
    title: "Prompt 编排",
    desc: "组合角色、约束、格式与步骤",
  },
  {
    title: "模型推理",
    desc: "调用大模型完成理解与生成",
  },
  {
    title: "校验修正",
    desc: "解析字段、检查质量、自动重试",
  },
];

const outputs = [
  {
    title: "一句话总结",
    desc: "先给结论，降低理解成本",
  },
  {
    title: "核心亮点",
    desc: "提炼技术、产品与体验价值",
  },
  {
    title: "应用场景",
    desc: "连接真实业务和落地路径",
  },
  {
    title: "我的判断",
    desc: "加入产品经理视角分析",
  },
];

export function AiWorkflowAnimation() {
  return (
    <section className="ai-console relative mb-12 overflow-hidden rounded-[2rem] border border-[#eadfca] bg-[#fffdf8] p-5 shadow-sm sm:p-6 lg:p-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#f7b731]/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#2454d6]/15 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f7b731]/70 to-transparent" />
      </div>

      <div className="relative z-10 mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f7b731]/30 bg-[#fff3cc]/70 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#9a6400]">
            <span className="size-2 rounded-full bg-[#f7b731]" />
            Mango AI Workflow
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-[#17223b] sm:text-3xl lg:text-4xl">
            AI 工具背后的任务链
          </h2>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-[#667085] sm:text-base">
          每一个看似神奇的 AI 输出，背后都不是简单调一次模型，而是一套由
          <span className="font-bold text-[#17223b]"> 输入理解、上下文补充、Prompt 编排、模型推理、结果校验 </span>
          组成的可复用工作流。
        </p>
      </div>

      <div className="relative z-10 grid gap-5 lg:grid-cols-[0.9fr_1.35fr_0.95fr] lg:items-stretch">
        <div className="ai-console-stream hidden lg:block" aria-hidden="true">
          <span className="ai-console-packet ai-console-packet-one" />
          <span className="ai-console-packet ai-console-packet-two" />
        </div>

        <div className="rounded-3xl border border-[#f1e1c1] bg-white/85 p-5 shadow-sm backdrop-blur">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e58e26]">
                Step 01
              </p>
              <h3 className="mt-1 text-lg font-black text-[#17223b]">
                用户输入
              </h3>
            </div>

            <div className="rounded-2xl bg-[#fff3cc] px-3 py-2 text-xs font-black text-[#7a4d00]">
              Input
            </div>
          </div>

          <div className="space-y-3">
            {inputItems.map((item, index) => (
              <div
                key={item.label}
                className="ai-console-input rounded-2xl border border-[#f2e4c8] bg-[#fffaf0] p-4"
                style={{ animationDelay: `${index * 160}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-xs font-black text-[#e58e26] shadow-sm">
                    {item.code}
                  </div>

                  <div>
                    <p className="text-sm font-black text-[#17223b]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#667085]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-dashed border-[#f7b731]/50 bg-[#fff8e6] p-3 text-xs font-semibold leading-6 text-[#7a4d00]">
            输入可以很随意，但进入工作流后会被转化为可处理的任务对象。
          </div>
        </div>

        <div className="ai-console-engine relative overflow-hidden rounded-3xl border border-[#f7b731]/60 bg-[#17223b] p-5 text-white shadow-xl shadow-[#17223b]/20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-[#f7b731]/20 blur-3xl" />
            <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-[#f7b731]/80 to-transparent" />
            <div className="ai-console-orbit absolute left-1/2 top-[44%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7b731]/25" />
            <div className="ai-console-orbit ai-console-orbit-reverse absolute left-1/2 top-[44%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6ea8ff]/20" />
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f7b731]">
                Step 02
              </p>
              <h3 className="mt-1 text-lg font-black">
                AI Workflow Engine
              </h3>
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-[#dbe5f2]">
              <span className="ai-console-live-dot size-2 rounded-full bg-[#34d399]" />
              Running
            </div>
          </div>

          <div className="relative z-10 mt-7 grid place-items-center">
            <div className="ai-console-core relative grid size-32 place-items-center rounded-[2.1rem] border border-[#f7b731]/50 bg-[#0f1a31] text-center shadow-2xl shadow-[#f7b731]/20">
              <div>
                <p className="text-4xl font-black text-white">AI</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#f7b731]">
                  Engine
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-7 grid gap-3 sm:grid-cols-5 lg:grid-cols-5">
            {engineLayers.map((item, index) => (
              <div
                key={item.title}
                className="ai-console-layer rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-center backdrop-blur"
                style={{ animationDelay: `${index * 220}ms` }}
              >
                <div className="mx-auto mb-2 grid size-7 place-items-center rounded-full bg-[#f7b731] text-xs font-black text-[#17223b]">
                  {index + 1}
                </div>
                <p className="text-xs font-black leading-5 text-white">
                  {item.title}
                </p>
                <p className="mt-1 hidden text-[11px] leading-5 text-[#b9c7da] sm:block">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-5 rounded-2xl border border-white/10 bg-black/15 p-3">
            <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-[#9fb0c9]">
              <span>Runtime Log</span>
              <span>00:03s</span>
            </div>

            <div className="space-y-2 text-xs leading-5 text-[#dbe5f2]">
              <p className="ai-console-log">› 识别任务类型：AI 前沿资讯摘要</p>
              <p className="ai-console-log ai-console-log-delay-1">› 匹配输出结构：总结 / 亮点 / 场景 / 判断</p>
              <p className="ai-console-log ai-console-log-delay-2">› 完成校验：字段完整，格式可展示</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#dfe8f8] bg-white/90 p-5 shadow-sm backdrop-blur">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2454d6]">
                Step 03
              </p>
              <h3 className="mt-1 text-lg font-black text-[#17223b]">
                结构化输出
              </h3>
            </div>

            <div className="rounded-2xl bg-[#ecf3ff] px-3 py-2 text-xs font-black text-[#2454d6]">
              Output
            </div>
          </div>

          <div className="space-y-3">
            {outputs.map((item, index) => (
              <div
                key={item.title}
                className="ai-console-output rounded-2xl border border-[#e4eaf5] bg-[#f8fbff] p-4 shadow-sm"
                style={{ animationDelay: `${index * 240}ms` }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#f7b731]" />
                  <p className="text-sm font-black text-[#17223b]">
                    {item.title}
                  </p>
                </div>

                <p className="text-xs leading-5 text-[#667085]">{item.desc}</p>

                <div className="mt-3 space-y-1.5">
                  <div className="h-1.5 rounded-full bg-white" />
                  <div className="h-1.5 w-2/3 rounded-full bg-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-[#17223b] p-4 text-white">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f7b731]">
              PM View
            </p>
            <p className="mt-2 text-sm font-semibold leading-6">
              结果不是一段散文，而是可以直接阅读、复制、发布和二次加工的结构化内容。
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-5 grid gap-3 rounded-2xl border border-[#eef0f3] bg-white/80 p-4 text-sm leading-7 text-[#475467] shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
        <p>
          在芒果AI科技中，资讯摘要器、AI 周报生成器、产品需求文档生成器等工具，底层都可以复用这套任务链。
        </p>

        <p className="rounded-full bg-[#fff3cc] px-4 py-2 text-xs font-black text-[#7a4d00]">
          Input → Context → Prompt → Model → Parse → Validate → Output
        </p>
      </div>
    </section>
  );
}