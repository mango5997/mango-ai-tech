import fs from "node:fs";
import path from "node:path";

export type PostCategory = "frontier" | "principles" | "lab";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  category: PostCategory;
};

export type Post = PostMeta & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function stripQuotes(value: string) {
  return value.trim().replace(/^["']|["']$/g, "");
}

function parseList(value: string) {
  const trimmed = value.trim();

  if (!trimmed.startsWith("[") || !trimmed.endsWith("]")) {
    return trimmed
      .split(",")
      .map(stripQuotes)
      .filter(Boolean);
  }

  return trimmed
    .slice(1, -1)
    .split(",")
    .map(stripQuotes)
    .filter(Boolean);
}

function parseFrontmatter(fileContent: string) {
  const match = fileContent.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);

  if (!match) {
    throw new Error("Post markdown is missing frontmatter.");
  }

  const data: Record<string, string | string[]> = {};
  const [, frontmatter, content] = match;

  frontmatter.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      return;
    }

    const [key, ...rest] = trimmed.split(":");
    const value = rest.join(":").trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      data[key.trim()] = parseList(value);
      return;
    }

    data[key.trim()] = stripQuotes(value);
  });

  return {
    data,
    content: content.trim()
  };
}

function assertCategory(value: string | string[] | undefined): PostCategory {
  if (value === "frontier" || value === "principles" || value === "lab") {
    return value;
  }

  throw new Error(`Invalid post category: ${String(value)}`);
}

function readPost(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontmatter(fileContent);

  return {
    slug,
    title: String(data.title),
    date: String(data.date),
    tags: Array.isArray(data.tags) ? data.tags : parseList(String(data.tags)),
    excerpt: String(data.excerpt),
    category: assertCategory(data.category),
    content
  };
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => readPost(fileName.replace(/\.md$/, "")))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      tags: post.tags,
      excerpt: post.excerpt,
      category: post.category
    }));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return readPost(slug);
}

export function getPostsByCategory(category: PostCategory) {
  return getAllPosts().filter((post) => post.category === category);
}

export function getLatestPosts(count = 4) {
  return getAllPosts().slice(0, count);
}
