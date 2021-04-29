import type { UseFormReturn } from "react-hook-form";
import TextField from "src/components/contact/TextField";
import styles from "src/styles/components/contact/ContactForm.module.scss";

// import type { FormData } from "./ContactFormContainer";
import { Select, TextArea } from "./TextField";

export type FormData = {
  name: string;
  email: string;
  category?: string;
  description: string;
};

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
          <TextField type="text" id="name" {...register("name")} />
        </p>
      </div>
      <div className={styles.formsInput}>
        <p>
          <label htmlFor="email">メールアドレス *</label>
          <TextField type="email" id="email" {...register("email", { required: true })} />
        </p>
        {errors.email && <span>This field is required</span>}
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
      </div>
      <div className={styles.formsInput}>
        <p>
          <label htmlFor="description">お問い合わせ内容 *</label>
          <TextArea id="description" rows={10} {...register("description")} />
        </p>
      </div>
    </>
  );
};

export default ContactFormBody;
