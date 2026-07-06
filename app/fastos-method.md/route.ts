import { fastOSMethodMarkdown } from "@/lib/fastos-method-ai";

export const dynamic = "force-static";

export function GET() {
  return new Response(`${fastOSMethodMarkdown}\n`, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Link": '<https://www.mybiggreekfasting.com/fastos-method>; rel="canonical"',
      "X-Robots-Tag": "index, follow",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
