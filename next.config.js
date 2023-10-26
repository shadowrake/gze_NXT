/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
        serverActions: true,
      },
    reactStrictMode: true,
    images: {
        domains: ['hermankristiansen.no', 'i.bo3.no' ],
    },
}

module.exports = nextConfig
