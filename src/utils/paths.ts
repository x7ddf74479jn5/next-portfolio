import { identity } from "./helper";

export const links = identity({
  siteURL: "https://next-portfolio-livid.vercel.app/",
  siteRoot:
    process.env.NODE_ENV === "production" ? "https://next-portfolio-livid.vercel.app/" : "http://localhost:3000",
  home: "/",
  about: "/about/",
  contact: "/contact/",
  terms: "/terms/",
  privacy: "/privacy/",
  samples: "/samples/",
  portfolio: "/samples/portfolio/",
  chat: "/samples/chat/",
  ec: "/samples/ec/",
} as const);

export const externalLinks = identity({
  chat: "https://chatbot-demo-70752.web.app/",
  ec: "https://ec-app-a2f5e.web.app/",
  twitter: "https://twitter.com/pandashark6",
  github: "https://github.com/x7ddf74479jn5",
} as const);