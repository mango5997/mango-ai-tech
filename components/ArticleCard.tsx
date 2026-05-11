import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { categoryLabels } from "@/lib/site";
import { Tag } from "@/components/Tag";

type ArticleCardProps = {
  post: PostMeta;
};

export function ArticleCard({ post }: ArticleCardProps) {
  const formattedDate = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(post.date));

  return (
    <Link
      className="focus-ring group flex h-full flex-col rounded-2xl border border-[#ece3d3] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#f7b731] hover:shadow-xl hover:shadow-[#17223b]/8"
      href={`/posts/${post.slug}`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Tag tone={post.category === "frontier" ? "mango" : post.category === "lab" ? "green" : "blue"}>
          {categoryLabels[post.category]}
        </Tag>
        <span className="text-xs font-semibold text-[#98a2b3]">{formattedDate}</span>
      </div>
      <h3 className="text-lg font-black leading-snug text-[#17223b] transition group-hover:text-[#9a5d00]">
        {post.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#667085]">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
