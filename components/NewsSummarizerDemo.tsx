"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Tag } from "@/components/Tag";

type SummaryResult = {
  oneLine: string;
  highlights: string[];
  scenarios: string[];
  productJudgement: string;
};

const sampleNews =
  "某 AI 公司发布了一款新的多模态模型，支持长文本理解、图片分析和工具调用。官方表示该模型在企业知识库、客服自动化和内容生成场景中表现更稳定，并降低了调用成本。";

function splitSentences(text: string) {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[。！？.!?])\s*/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function includesAny(text: string, words: string[]) {
  return words.some((word) => text.toLowerCase().includes(word.toLowerCase()));
}

function createSummary(text: string): SummaryResult {
  const normalized = text.trim();
  const sentences = splitSentences(normalized);
  const firstSentence = sentences[0] || normalized.slice(0, 80);
  const isAgent = includesAny(normalized, ["Agent", "智能体", "工具调用", "自动执行"]);
  const isKnowledgeBase = includesAny(normalized, ["知识库", "RAG", "检索", "文档"]);
  const isMultimodal = includesAny(normalized, ["多模态", "图片", "视频", "语音", "视觉"]);
  const isCostRelated = includesAny(normalized, ["成本", "降价", "价格", "更便宜", "效率"]);

  const highlights = [
    isMultimodal ? "能力从纯文本扩展到图像、文档或更多模态，适合复杂信息处理。" : "信息里出现了新的 AI 能力或产品变化，值得观察真实效果。",
    isAgent ? "具备任务拆解或工具调用特征，可能改变原有软件操作流程。" : "目前更像能力升级，需要继续判断它是否能进入稳定工作流。",
    isCostRelated ? "成本或效率变化明显，可能让中小团队更容易试用。" : "短期亮点在能力表达，商业价值还需要结合具体场景验证。"
  ];

  const scenarios = [
    isKnowledgeBase ? "企业知识库问答、内部制度检索和销售资料助手。" : "AI 资讯整理、竞品观察和产品研究素材归档。",
    isAgent ? "跨系统任务处理、运营自动化和客服辅助执行。" : "内容摘要、会议记录整理和团队周报生成。",
    isMultimodal ? "商品图文理解、设计评审、客服截图诊断等多模态场景。" : "产品经理的趋势研判、需求灵感收集和方案预研。"
  ];

  return {
    oneLine: `${firstSentence.replace(/[。！？.!?]$/, "")}，核心价值在于它可能把 AI 能力推进到更具体的业务流程中。`,
    highlights,
    scenarios,
    productJudgement:
      "从产品经理视角看，第一步不应只看发布参数，而要验证三件事：目标用户是否高频需要、输出结果是否可信、接入成本是否低于人工流程。若三者成立，它就值得进入 Demo 验证。"
  };
}

export function NewsSummarizerDemo() {
  const [input, setInput] = useState(sampleNews);
  const [submittedText, setSubmittedText] = useState(sampleNews);

  const summary = useMemo(() => createSummary(submittedText), [submittedText]);
  const canGenerate = input.trim().length > 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-2xl border border-[#ece3d3] bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Tag tone="green">本地模拟</Tag>
          <Tag tone="mango">不接 API</Tag>
        </div>
        <label className="text-sm font-black text-[#17223b]" htmlFor="news-input">
          输入 AI 新闻文本
        </label>
        <textarea
          className="focus-ring mt-3 min-h-72 w-full resize-y rounded-2xl border border-[#eadfca] bg-[#fffdf8] p-4 text-sm leading-7 text-[#344054] shadow-inner outline-none transition focus:border-[#f7b731]"
          id="news-input"
          onChange={(event) => setInput(event.target.value)}
          placeholder="粘贴一段 AI 新闻、产品发布或模型更新内容..."
          value={input}
        />
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <button
            className="focus-ring inline-flex justify-center rounded-full bg-[#17223b] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
            disabled={!canGenerate}
            onClick={() => setSubmittedText(input)}
            type="button"
          >
            生成摘要
          </button>
          <button
            className="focus-ring inline-flex justify-center rounded-full border border-[#f1cf77] bg-white px-5 py-3 text-sm font-black text-[#7a4d00] transition hover:-translate-y-0.5 hover:bg-[#fff8e8]"
            onClick={() => {
              setInput(sampleNews);
              setSubmittedText(sampleNews);
            }}
            type="button"
          >
            使用示例
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-[#ece3d3] bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e58e26]">
            Demo Output
          </p>
          <h2 className="mt-2 text-2xl font-black text-[#17223b]">模拟摘要结果</h2>
        </div>

        <div className="space-y-4">
          <ResultBlock title="一句话总结">
            <p className="text-sm leading-7 text-[#475467]">{summary.oneLine}</p>
          </ResultBlock>

          <ResultBlock title="核心亮点">
            <ul className="space-y-2 text-sm leading-7 text-[#475467]">
              {summary.highlights.map((item) => (
                <li className="rounded-xl bg-[#fff8e8] px-3 py-2" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </ResultBlock>

          <ResultBlock title="可能应用场景">
            <ul className="space-y-2 text-sm leading-7 text-[#475467]">
              {summary.scenarios.map((item) => (
                <li className="rounded-xl bg-[#f8fafc] px-3 py-2" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </ResultBlock>

          <ResultBlock title="产品经理视角判断">
            <p className="text-sm leading-7 text-[#475467]">{summary.productJudgement}</p>
          </ResultBlock>
        </div>
      </section>
    </div>
  );
}

function ResultBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-[#edf0f3] bg-white p-4">
      <h3 className="mb-3 text-base font-black text-[#17223b]">{title}</h3>
      {children}
    </section>
  );
}
