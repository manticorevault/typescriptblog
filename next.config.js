/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: [
        "media.tenor.com", 
        "media.licdn.com", 
        "cdn.sanity.io"
      ],
  }
}
