import type { UseFormReturn } from "react-hook-form";
import ErrorMessage from "src/components/contact/ErrorMessage";
import styles from "src/styles/components/contact/ContactForm.module.scss";

import type { FormData } from "../../types/api/index";
import { Select, TextArea, TextField } from "./FormInputs";

type Props = {
  methods: UseFormReturn<FormData>;
};

const ContactFormBody: React.VFC<Props> = ({ methods }) => {
  const {
    register,
    formState: { errors },
  } = methods;
  const options = ["", "Webサイト制作について", "Webアプリ開発について", "Webサイト模写について", "その他"];

  return (
    <>
      <div className={styles.formsInput}>
        <p>
          <label htmlFor="name">お名前 *</label>
          <TextField type="text" id="name" placeholder="熊猫 鮫" {...register("name")} />
        </p>
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>
      <div className={styles.formsInput}>
        <p>
          <label htmlFor="email">メールアドレス *</label>
          <TextField
            type="email"
            id="email"
            placeholder="your@example.com"
            {...register("email", { required: true })}
          />
        </p>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
      <div className={styles.formsInput}>
        <p>
          <label htmlFor="category">お問い合わせ種別</label>
          <Select id="category" {...register("category")}>
            {options.map((option, index) => {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              );
            })}
          </Select>
        </p>
        {errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
      </div>
      <div className={styles.formsInput}>
        <p>
          <label htmlFor="description">お問い合わせ内容 *</label>
          <TextArea id="description" rows={10} {...register("description")} />
        </p>
        {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
      </div>
    </>
  );
};

export default ContactFormBody;
