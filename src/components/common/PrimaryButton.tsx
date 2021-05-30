import styles from "src/styles/components/common/PrimaryButton.module.scss";

import type { ButtonType } from "../../types/utils/index";

type Props = ButtonType & {
  label?: string;
};

const PrimaryButton: React.FC<Props> = ({ children, disabled = false, label, ...rest }) => {
  return (
    <button className={styles.btnRound} disabled={disabled} {...rest}>
      {children || label}
    </button>
  );
};

export default PrimaryButton;
