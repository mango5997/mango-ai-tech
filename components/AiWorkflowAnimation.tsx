const workflowSteps = [
  { title: "用户输入", detail: "新闻、需求、链接、文档" },
  { title: "任务识别", detail: "判断意图与输出目标" },
  { title: "输入清洗与结构化", detail: "去噪、分段、抽取字段" },
  { title: "补充上下文/知识库/示例", detail: "加入资料、规则与样例" },
  { title: "Prompt构造", detail: "组合角色、约束与格式" },
  { title: "AI模型调用", detail: "模型推理与工具协同", featured: true },
  { title: "结果解析", detail: "拆解为可用字段" },
  { title: "校验/重试/格式化", detail: "检查质量并修正输出", retry: true },
  { title: "结构化输出", detail: "摘要、周报、PRD、看板" }
];

export function AiWorkflowAnimation() {
  return (
    <section className="mb-10 rounded-3xl border border-[#ece3d3] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e58e26]">
            Workflow
          </p>
          <h2 className="mt-2 text-2xl font-black text-[#17223b]">AI工具背后的任务链</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#667085]">
          把看起来神奇的 AI 工具拆开，本质上是一条从输入、上下文、模型到校验输出的工程流程。
        </p>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="ai-workflow-track relative flex min-w-[1450px] items-center gap-4 rounded-2xl border border-[#eef0f3] bg-[#fffdf8] p-5">
          {workflowSteps.map((step, index) => (
            <div className="flex items-center gap-4" key={step.title}>
              <article
                className={`ai-workflow-card relative flex h-36 w-36 shrink-0 flex-col justify-between overflow-hidden rounded-2xl border p-4 shadow-sm ${
                  step.featured
                    ? "ai-workflow-core border-[#f7b731] bg-[#17223b] text-white shadow-xl shadow-[#f7b731]/25"
                    : "border-[#eadfca] bg-white text-[#17223b]"
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span
                  className={`grid size-8 place-items-center rounded-xl text-xs font-black ${
                    step.featured ? "bg-[#f7b731] text-[#17223b]" : "bg-[#fff3cc] text-[#7a4d00]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-black leading-snug">{step.title}</h3>
                  <p
                    className={`mt-2 text-xs leading-5 ${
                      step.featured ? "text-[#dbe5f2]" : "text-[#667085]"
                    }`}
                  >
                    {step.detail}
                  </p>
                </div>
                {step.retry ? (
                  <span
                    aria-hidden="true"
                    className="ai-workflow-retry absolute right-3 top-3 text-lg font-black text-[#e58e26]"
                  >
                    ↻
                  </span>
                ) : null}
              </article>

              {index < workflowSteps.length - 1 ? (
                <div className="ai-flow-arrow relative h-1 w-12 shrink-0 rounded-full bg-[#f1dfb3]">
                  <span className="absolute -right-1 -top-[5px] size-3 rotate-45 border-r-2 border-t-2 border-[#f7b731]" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-2 rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm font-semibold leading-7 text-[#475467]">
        无论是资讯摘要、周报生成还是产品文档生成，背后都可以抽象为 Input → Context → Prompt →
        Model → Parse → Validate → Output 的任务链。
      </p>
    </section>
  );
}
