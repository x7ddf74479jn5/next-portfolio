import styles from "src/styles/layouts/Spacer.module.scss";

const Spacer: React.VFC<Props> = ({ size }) => {
  let style: string | undefined;
  switch (size) {
    case "sm":
      style = styles.sm;
      break;
    case "md":
      style = styles.md;
      break;
    case "lg":
      style = styles.lg;
      break;
  }
  return <div className={style}></div>;
};

export default Spacer;

type Props = {
  size: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
};
