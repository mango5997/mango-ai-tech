import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "AI前沿",
  description: "聚焦最值得关注的 AI 模型、工具、产品、开源项目和行业动态。"
};

export default function FrontierPage() {
  const posts = getPostsByCategory("frontier");

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionTitle
          description="聚焦最值得关注的 AI 模型、工具、产品、开源项目和行业动态，用产品和落地视角筛掉无效噪音。"
          eyebrow="Frontier"
          title="AI前沿"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
