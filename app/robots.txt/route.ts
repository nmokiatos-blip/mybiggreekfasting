export const dynamic = "force-static";

const robots = `User-agent: *
Allow: /
Sitemap: https://www.mybiggreekfasting.com/sitemap.xml
`;

export function GET() {
  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
