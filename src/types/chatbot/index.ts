export interface Dataset {
  init: ChatData;
  job_offer: ChatData;
  website: ChatData;
  webapp: ChatData;
  wordpress: ChatData;
  other_jobs: ChatData;
  about: ChatData;
  job: ChatData;
  favorite: ChatData;
  sns: ChatData;
  detail: ChatData;
  menu: ChatData;
  recipe_sites: ChatData;
  japanese: ChatData;
  jp_simple: ChatData;
  jp_normal: ChatData;
  western: ChatData;
  we_simple: ChatData;
  we_normal: ChatData;
  chinese: ChatData;
  ch_simple: ChatData;
  ch_normal: ChatData;
  other: ChatData;
  [k: string]: ChatData;
}

export interface ChatData {
  answers: Answer[];
  question: string;
}

export interface Answer {
  content: string;
  nextId: string;
}

export type NextQuestionId = keyof Dataset | "contact";

export type Chat = { text: string; type: "question" | "answer" };

export interface SelectAnswer {
  (selectedAnswer: Answer["content"], nextQuestionId: NextQuestionId): void;
}
