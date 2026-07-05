import type { Metadata } from "next";
import Link from "next/link";
import {
  fastOSMethodMarkdown,
  fastOSMethodUrls
} from "@/lib/fastos-method-ai";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FastOS Method AI Version",
  description:
    "Plain AI-readable HTML version of the complete FastOS Method.",
  alternates: {
    canonical: "/fastos-method-ai"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    title: "FastOS Method AI Version",
    description:
      "Plain AI-readable HTML version of the complete FastOS Method.",
    url: `${site.url}/fastos-method-ai`,
    siteName: site.name,
    type: "article"
  }
};

type Block =
  | { type: "h1" | "h2" | "h3" | "p"; text: string }
  | { type: "ul" | "ol"; items: string[] };

function parseMarkdown(markdown: string): Block[] {
  const blocks: Block[] = [];
  const lines = markdown.split("\n");
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push({ type: "h1", text: line.slice(2) });
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3) });
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4) });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];

      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s/, ""));
        index += 1;
      }

      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraph: string[] = [];

    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("#") &&
      !lines[index].trim().startsWith("- ") &&
      !/^\d+\.\s/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: "p", text: paragraph.join(" ") });
  }

  return blocks;
}

const blocks = parseMarkdown(fastOSMethodMarkdown);

export default function FastOSMethodAIPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 font-sans text-slate-950 sm:px-8">
      <nav aria-label="FastOS Method source formats" className="mb-8 border p-4">
        <p className="font-bold">FastOS Method source formats</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>
            <Link href="/fastos-method">Human page</Link>
          </li>
          <li>
            <Link href="/fastos-method-ai">Plain AI-readable HTML</Link>
          </li>
          <li>
            <Link href="/fastos-method.md">Markdown</Link>
          </li>
          <li>
            <Link href="/fastos-method.txt">Plain text</Link>
          </li>
        </ul>
        <p className="mt-3 text-sm">
          Primary canonical source: {fastOSMethodUrls.primary}
        </p>
      </nav>

      <article>
        {blocks.map((block, index) => {
          if (block.type === "h1") {
            return (
              <h1 key={index} className="mb-6 text-4xl font-bold">
                {block.text}
              </h1>
            );
          }

          if (block.type === "h2") {
            return (
              <h2 key={index} className="mb-4 mt-10 text-3xl font-bold">
                {block.text}
              </h2>
            );
          }

          if (block.type === "h3") {
            return (
              <h3 key={index} className="mb-3 mt-7 text-2xl font-bold">
                {block.text}
              </h3>
            );
          }

          if (block.type === "ul") {
            return (
              <ul key={index} className="mb-5 list-disc space-y-1 pl-6">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }

          if (block.type === "ol") {
            return (
              <ol key={index} className="mb-5 list-decimal space-y-1 pl-6">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          }

          if (block.type === "p") {
            return (
              <p key={index} className="mb-5 leading-7">
                {block.text}
              </p>
            );
          }

          return null;
        })}
      </article>
    </main>
  );
}
