/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "starknet.quest"
            },
            {
                hostname: "raw.githubusercontent.com"
            },
            {
                hostname: "assets.coingecko.com"
            },
            {
                hostname: "etherscan.io"
            },
            {
                hostname: "static.starkscan.co"
            },
            {
                hostname: "zklend.gitbook.io"
            }
        ]
    },
    webpack: (config) => {
        // ignore formidable warnings
        config.ignoreWarnings = [
            // { module: /node_modules\/pino\/lib\/tools\.js/ },
            // { file: /node_modules\/pino\/pino\.js/ },
        ];

        return config;
    },
};

export default nextConfig;
