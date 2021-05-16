import styles from "src/styles/components/contact/ContactForm.module.scss";

type Props = {
  children?: React.ReactNode;
  message?: string;
};

const ErrorMessage: React.VFC<Props> = ({ children, message }) => {
  return <p className={styles.error}>{children || message}</p>;
};

export default ErrorMessage;
