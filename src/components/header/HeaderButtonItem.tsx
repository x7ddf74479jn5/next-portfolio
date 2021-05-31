import styles from "src/styles/components/header/HeaderButton.module.scss";

import type { ButtonType } from "../../types/utils/index";

type Props = ButtonType & {
  label: string;
  icon: {
    path: string;
    alt: string;
  };
};

const HeaderButtonItem: React.VFC<Props> = ({ onClick, icon, label }) => {
  return (
    <button className={styles.buttonItem} onClick={onClick}>
      <img src={icon?.path} alt={icon?.alt} />
      <span>{label}</span>
    </button>
  );
};

export default HeaderButtonItem;
