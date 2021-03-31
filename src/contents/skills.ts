export type Skill = Readonly<{
  id: string;
  head: string;
  data: string;
}>;

export const skills: Skill[] = [
  { id: "markUp", head: "マークアップ", data: "HTML5, CSS3" },
  { id: "frontEnd", head: "フロントエンド", data: "JavaScript(ES10), TypeScript, Sass, Webpack, Babel" },
  { id: "backEnd", head: "バックエンド", data: "PHP, MySQL, Node.js, Firebase, Vercel" },
  { id: "frameWork", head: "フレームワーク・ライブラリ", data: "jQuery, WordPress, React, Redux, Next.js, Express.js" },
  { id: "tools", head: "その他ツール", data: "Git, npm, Dockerなど" },
];
