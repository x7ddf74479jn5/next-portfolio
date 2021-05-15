// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
