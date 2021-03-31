type Image = {
  [key: string]: { path: string; alt: string };
};

export const images: Image = {
  pandasharkIcon: { path: "/img/icons/pandashark_icon.png", alt: "Pandashark's icon" },
  pandasharkRectangle: { path: "/img/icons/pandashark_logo_rectangle.webp", alt: "Pandashark's icon" },
  ec: { path: "/img/samples/ec-app-eyecatch.webp", alt: "eye catch of EC app" },
  chat: { path: "/img/samples/chat-bot-eyecatch.webp", alt: "eye catch chat" },
  portfolio: { path: "/img/samples/portfolio-eyecatch.webp", alt: "eye catch portfolio" },
  twitter: { path: "/img/icons/twitter_logo.png", alt: "twitter" },
  robot: { path: "/img/icons/robot.png", alt: "chat bot" },
  websiteProduction: { path: "/img/services/website-production.jpeg", alt: "Website Production" },
  wordPress: { path: "/img/services/wordpress-icon.png", alt: "WordPress" },
  webApp: { path: "/img/services/web-app.jpeg", alt: "Chat APP" },
  favicon: { path: "/img/icons/favicon.ico", alt: "" },
  appleTouchIcon: { path: "/img/icons/apple-touch-icon.png", alt: "" },
} as const;
