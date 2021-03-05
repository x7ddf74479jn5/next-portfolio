const path = require("path");

module.exports = {
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  env: {
    CONTACT_API_URL: process.env.CONTACT_API_URL,
  },
  experimental: {
    optimizeFonts: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
