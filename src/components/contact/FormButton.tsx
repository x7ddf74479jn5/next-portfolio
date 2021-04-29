import clsx from "clsx";
import styles from "src/styles/components/contact/FormButton.module.scss";

type Props = {
  buttonType: "apply" | "cancel";
  disabled?: boolean;
  label?: string;
  id: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
};

const FormButton: React.FC<Props> = ({ children, buttonType, disabled = false, ...rest }) => {
  return (
    <button
      className={clsx({
        [styles.btnApply]: buttonType === "apply",
        [styles.btnCancel]: buttonType === "cancel",
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default FormButton;
