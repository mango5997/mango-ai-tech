import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "原理解剖室",
  description: "用通俗但不浅薄的方式拆解 AI 技术、产品架构、Agent、RAG 和私有化部署。"
};

export default function PrinciplesPage() {
  const posts = getPostsByCategory("principles");

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionTitle
          description="用通俗但不浅薄的方式拆解 AI 技术、产品架构、Agent、RAG、私有化部署等内容。"
          eyebrow="Principles"
          title="原理解剖室"
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
