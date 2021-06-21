import styles from "src/styles/components/modal/ModalCloseButton.module.scss";
import type { ButtonType } from "src/types/utils";

type ModalCloseButtonProps = ButtonType;

const ModalCloseButton: React.VFC<ModalCloseButtonProps> = (props) => {
  return (
    <button className={styles.closeButton} {...props}>
      ×
    </button>
  );
};

export default ModalCloseButton;
// TODO: test
