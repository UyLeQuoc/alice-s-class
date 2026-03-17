const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        pathname: '**',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/landing.html',
        },
      ],
    };
  },
};

export default nextConfig;
