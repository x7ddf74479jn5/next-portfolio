import styles from "src/styles/components/common/PrimaryButton.module.scss";

type Props = {
  disabled: boolean;
  label?: string;
  id: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const PrimaryButton: React.FC<Props> = ({ children, disabled = false, label, ...rest }) => {
  return (
    <button className={styles.btnRound} disabled={disabled} {...rest}>
      {children || label}
    </button>
  );
};

export default PrimaryButton;
