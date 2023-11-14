/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {serverActions: true},
    images: {
        domains: ['hermankristiansen.no', 'i.bo3.no' ],
    },
}

module.exports = nextConfig
