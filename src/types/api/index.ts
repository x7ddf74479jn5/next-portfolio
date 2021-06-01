import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "お名前が未入力です。"),
  email: z.string().email({ message: "メールアドレスの形式に誤りがあります。" }).min(1, "メールアドレスが未入力です。"),
  category: z.string(),
  description: z.string().min(1, "お問い合わせ内容が未入力です。"),
});

export type FormData = z.infer<typeof schema>;
