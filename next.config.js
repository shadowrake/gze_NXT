/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        serverActions: false,
      },
    reactStrictMode: true,
    images: {
        domains: ['hermankristiansen.no', 'i.bo3.no' ],
    },
}

module.exports = nextConfig
