/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async headers() {
  //   return [
  //     {
  //       source: "/about",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "s-maxage=60, stale-while-revalidate=59",
  //         },
  //       ],
  //     },
  //   ];
  // },
}

module.exports = nextConfig
