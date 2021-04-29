import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("お名前が未入力です。"),
  email: yup
    .string()
    .required("メールアドレスが未入力です。")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "メールアドレスの形式に誤りがあります。"
    ),
  category: yup.string(),
  describe: yup.string().required("お問い合わせ内容が未入力です。"),
});

export type FormData = yup.InferType<typeof schema>;
