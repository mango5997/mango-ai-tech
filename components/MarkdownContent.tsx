import type { ReactNode } from "react";

type MarkdownBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function parseMarkdown(content: string) {
  const blocks: MarkdownBlock[] = [];
  const lines = content.split(/\r?\n/);
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length > 0) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      return;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 2, text: line.slice(3) });
      return;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 3, text: line.slice(4) });
      return;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2));
      return;
    }

    flushList();
    paragraph.push(line);
  });

  flushParagraph();
  flushList();

  return blocks;
}

export function MarkdownContent({ content }: { content: string }) {
  const blocks = parseMarkdown(content);

  return (
    <div className="article-content">
      {blocks.map((block, index) => {
        if (block.type === "heading" && block.level === 2) {
          return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
        }

        if (block.type === "heading" && block.level === 3) {
          return <h3 key={`${block.text}-${index}`}>{block.text}</h3>;
        }

        if (block.type === "list") {
          return (
            <ul key={`list-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }

        return <p key={`${block.text}-${index}`}>{renderInline(block.text)}</p>;
      })}
    </div>
  );
}
