/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  font-src 'self';
  style-src 'unsafe-inline';
  img-src 'self' data: https:;  
`;

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
};

module.exports = nextConfig;
