import clsx from "clsx";
import styles from "src/styles/components/layouts/Spacer.module.scss";

type Props = {
  size?: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
};

const Spacer: React.VFC<Props> = ({ size = "md" }) => {
  return <div className={clsx(styles[size])}></div>;
};

export default Spacer;
