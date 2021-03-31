type Image = {
  [key: string]: { path: string; alt: string };
};

export const images: Image = {
  pandasharkIcon: { path: "/img/icons/pandashark_icon.png", alt: "Pandashark's icon" },
  pandasharkRectangle: { path: "/img/icons/pandashark_logo_rectangle.webp", alt: "Pandashark's icon" },
  ec: { path: "/img/samples/ec-app-eyecatch.webp", alt: "eye catch of EC app" },
  chat: { path: "/img/samples/chat-bot-eyecatch.webp", alt: "eye catch chat" },
  portfolio: { path: "/img/samples/portfolio-eyecatch.webp", alt: "eye catch portfolio" },
  robot: { path: "/img/icons/robot.png", alt: "" },
  websiteProduction: { path: "/img/icons/website-production.jpeg", alt: "Website Production" },
  wordPress: { path: "/img/view/wordpress-icon.png", alt: "WordPress" },
  webApp: { path: "/img/view/web-app.jpeg", alt: "Chat APP" },
} as const;
