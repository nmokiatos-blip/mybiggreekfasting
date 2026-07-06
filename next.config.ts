import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/fastos-method.md",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8"
          },
          {
            key: "Link",
            value: '<https://www.mybiggreekfasting.com/fastos-method>; rel="canonical"'
          },
          {
            key: "X-Robots-Tag",
            value: "index, follow"
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
