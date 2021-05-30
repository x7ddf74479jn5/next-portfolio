import clsx from "clsx";
import styles from "src/styles/components/contact/FormButton.module.scss";

import type { ButtonType } from "../../types/utils/index";

type Props = ButtonType & {
  buttonType: "apply" | "cancel";
  label?: string;
};

const FormButton: React.FC<Props> = ({ children, buttonType, label, disabled = false, ...rest }) => {
  return (
    <button
      className={clsx({
        [styles.btnApply]: buttonType === "apply",
        [styles.btnCancel]: buttonType === "cancel",
      })}
      disabled={disabled}
      {...rest}
    >
      {children || label}
    </button>
  );
};

export default FormButton;
