export type Timeline = Readonly<{
  datetime: string;
  title: string;
  description: string;
}>;

export const timelines: Timeline[] = [
  {
    datetime: "2012-10",
    title: "新卒で大手外食チェーン店に入社",
    description:
      "店長候補として入社し、都内拠点で店舗オペレーションを学んでいました。従業員マネジメントに力を入れ、アルバイトの離職率改善へ取り組みました。",
  },
  {
    datetime: "2016-04",
    title: "地元に戻り、喫茶店の調理職へ",
    description:
      "地元食材を用いた付加価値の高い商品を提供しています。自分が独学したもののもうひとつが料理で、それが嵩じて調理職に。",
  },
  {
    datetime: "2016-07",
    title: "プログラミングを独学",
    description:
      "以前よりクラウドソーシングでWebライティングの経験があり、よりスキルアップするためプログラミングの勉強を始めました。Javascript > jQuery > PHP > WordPress > ...",
  },
  {
    datetime: "2017-01",
    title: "Web制作の仕事を開始",
    description: `クラウドソーシングを利用して案件を受注できるようになり、本格的にWeb制作の仕事を開始。`,
  },
  {
    datetime: "Now",
    title: "現在",
    description:
      "React及びモダンフロントエンド開発のエコシステム、応用情報技術者試験などの学習を継続しながら転職活動を進めています。",
  },
];
