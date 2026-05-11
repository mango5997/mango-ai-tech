import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { MarkdownContent } from "@/components/MarkdownContent";
import { Tag } from "@/components/Tag";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { categoryLabels } from "@/lib/site";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(post.date));

  const backHref =
    post.category === "frontier"
      ? "/frontier"
      : post.category === "principles"
        ? "/principles"
        : "/lab";

  return (
    <article className="py-14 sm:py-16">
      <Container className="max-w-4xl">
        <Link
          className="focus-ring inline-flex rounded-full border border-[#eadfca] bg-white px-4 py-2 text-sm font-bold text-[#475467] transition hover:-translate-y-0.5 hover:border-[#f7b731] hover:text-[#17223b]"
          href={backHref}
        >
          返回文章列表
        </Link>

        <header className="mt-8 rounded-3xl border border-[#ece3d3] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Tag tone={post.category === "frontier" ? "mango" : post.category === "lab" ? "green" : "blue"}>
              {categoryLabels[post.category]}
            </Tag>
            <span className="text-sm font-semibold text-[#98a2b3]">{formattedDate}</span>
          </div>
          <h1 className="text-3xl font-black leading-tight text-[#17223b] sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#667085]">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        <div className="mt-8 rounded-3xl border border-[#ece3d3] bg-white p-6 shadow-sm sm:p-8">
          <MarkdownContent content={post.content} />
        </div>
      </Container>
    </article>
  );
}
