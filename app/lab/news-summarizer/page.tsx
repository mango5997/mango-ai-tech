import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { NewsSummarizerDemo } from "@/components/NewsSummarizerDemo";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "AI资讯摘要器 Demo",
  description: "一个前端本地模拟的 AI 新闻结构化摘要 Demo。"
};

export default function NewsSummarizerPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <Link
          className="focus-ring mb-8 inline-flex rounded-full border border-[#eadfca] bg-white px-4 py-2 text-sm font-bold text-[#475467] transition hover:-translate-y-0.5 hover:border-[#f7b731] hover:text-[#17223b]"
          href="/lab"
        >
          返回AI实验室
        </Link>
        <SectionTitle
          description="输入一段 AI 新闻，前端会用本地规则模拟生成结构化摘要。第一版不接真实 API，重点展示产品流程和输出结构。"
          eyebrow="AI Lab Demo"
          title="AI资讯摘要器 Demo"
        />
        <NewsSummarizerDemo />
      </Container>
    </section>
  );
}
