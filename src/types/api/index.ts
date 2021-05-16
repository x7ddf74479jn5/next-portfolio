import * as z from "zod";

export const schema = z.object({
  name: z.string().nonempty({ message: "お名前が未入力です。" }),
  email: z
    .string()
    .email({ message: "メールアドレスの形式に誤りがあります。" })
    .nonempty({ message: "メールアドレスが未入力です。" }),
  category: z.union([
    z.literal(""),
    z.literal("Webサイト制作について"),
    z.literal("Webアプリ開発について"),
    z.literal("Webサイト模写について"),
    z.literal("その他"),
  ]),
  description: z.string().nonempty({ message: "お問い合わせ内容が未入力です。" }),
});

export type FormData = z.infer<typeof schema>;
