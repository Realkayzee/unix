/** @type {import('next').NextConfig} */
const nextConfig = {
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
