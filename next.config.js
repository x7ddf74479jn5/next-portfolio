// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  future: { webpack5: true },
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
