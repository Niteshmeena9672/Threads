/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActionsTs: true,
        serverComponentsExternalPackages: ['mongoose'],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com'
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.dev'
            },
            {
                protocol: 'https',
                hostname: 'uploadthing.com'
            },
            {
                protocol: 'https',
                hostname :  'placehold.co'
            }
        ]
    }
}

module.exports = nextConfig
