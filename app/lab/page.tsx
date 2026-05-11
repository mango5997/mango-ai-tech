import type { Metadata } from "next";
import { AiWorkflowAnimation } from "@/components/AiWorkflowAnimation";
import { Container } from "@/components/Container";
import { LabCard } from "@/components/LabCard";
import { SectionTitle } from "@/components/SectionTitle";
import { labItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI实验室",
  description: "展示用 AI 工具、Dify、Docker、大模型 API 和工作流搭建的小实验。"
};

export default function LabPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionTitle
          description="展示我用 AI 工具、Dify、Docker、大模型 API、工作流等搭建的小实验。第一版先做静态展示，后续逐步接入真实 Demo。"
          eyebrow="AI Lab"
          title="AI实验室"
        />
        <AiWorkflowAnimation />
        <div className="grid gap-5 md:grid-cols-3">
          {labItems.map((item) => (
            <LabCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
