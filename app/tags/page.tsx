import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Tag } from "@/components/Tag";
import { getAllPosts, type PostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "标签",
  description: "按标签浏览芒果AI科技的 AI 前沿、原理解剖和实验内容。"
};

function getTagId(tag: string) {
  return `tag-${encodeURIComponent(tag)}`;
}

function groupPostsByTag(posts: PostMeta[]) {
  const tagMap = new Map<string, PostMeta[]>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      const taggedPosts = tagMap.get(tag) || [];
      tagMap.set(tag, [...taggedPosts, post]);
    });
  });

  return Array.from(tagMap.entries()).sort((a, b) => {
    if (b[1].length !== a[1].length) {
      return b[1].length - a[1].length;
    }

    return a[0].localeCompare(b[0], "zh-CN");
  });
}

export default function TagsPage() {
  const posts = getAllPosts();
  const tagGroups = groupPostsByTag(posts);

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionTitle
          description="自动聚合所有文章标签，适合从主题而不是栏目进入内容。"
          eyebrow="Tags"
          title="标签"
        />

        <div className="rounded-2xl border border-[#ece3d3] bg-white p-5 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {tagGroups.map(([tag, taggedPosts]) => (
              <a className="focus-ring rounded-full" href={`#${getTagId(tag)}`} key={tag}>
                <Tag tone={taggedPosts.length > 1 ? "mango" : "gray"}>
                  {tag} · {taggedPosts.length}
                </Tag>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-10">
          {tagGroups.map(([tag, taggedPosts]) => (
            <section className="scroll-mt-24" id={getTagId(tag)} key={tag}>
              <div className="mb-4 flex items-center gap-3">
                <h2 className="text-2xl font-black text-[#17223b]">{tag}</h2>
                <Tag tone="mango">{taggedPosts.length} 篇</Tag>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {taggedPosts.map((post) => (
                  <ArticleCard key={`${tag}-${post.slug}`} post={post} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
