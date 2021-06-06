// const a = require("@testing-library/jest-dom");
import "@testing-library/jest-dom";

// a();
import fetch from "node-fetch";

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

// jest.mock("next/link", () => {
//   const Link = ({ href, children }) => {
//     return <a href={href}>{children}</a>;
//   };
//   return Link;
// });
