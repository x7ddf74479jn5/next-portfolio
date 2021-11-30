export type Skill = Readonly<{
  id: string;
  head: string;
  data: string;
}>;

export const skills: Skill[] = [
  { id: "markUp", head: "マークアップ", data: "HTML Living Standard, CSS3, Sass, CSS in JS" },
  { id: "frontEnd", head: "フロントエンド", data: "JavaScript, TypeScript, webpack, Babel, Jest, Storybook" },
  { id: "backEnd", head: "バックエンド", data: "Firebase, Amplify" },
  { id: "frameWork", head: "フレームワーク・ライブラリ", data: "React, Redux, Next.js, Tailwind CSS, MUI, Chakra UI" },
  { id: "tools", head: "その他ツール", data: "Git, npm, Dockerなど" },
];
