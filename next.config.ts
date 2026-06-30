/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // Tambahkan konfigurasi lain di sini jika ada domain eksternal lain
    ],
  },
};

export default nextConfig;