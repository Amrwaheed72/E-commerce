/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/seed/**',
            },
            // {
            //     protocol: 'https',
            //     hostname: 'cdn.dummyjson.com',
            //     pathname: '/product-images/fragrances/**',
            // },
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                pathname: '/product-images/**',
            },
        ],
    },
};

export default nextConfig;
