import bundleAnalyzer from "@next/bundle-analyzer";
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"]
      }
    );
    config.module.rules.push({
      test: /\.lottie$/,
      type: "asset/resource"
    });
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  images: {
    domains: ["d1j05o5l6xx0ft.cloudfront.net", "openweathermap.org"]
  },
  compiler: {
    styledComponents: true
  }
};

export default withBundleAnalyzer(nextConfig);
