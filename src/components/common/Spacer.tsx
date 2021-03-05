import clsx from "clsx";
import styles from "src/styles/object/component/Spacer.module.scss";

const Spacer: React.VFC<Props> = ({ size }) => {
  return (
    <div
      className={clsx({
        [styles.xxxs]: size === "xxxs",
        [styles.xxs]: size === "xxs",
        [styles.xs]: size === "xs",
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
        [styles.xl]: size === "xl",
      })}
    ></div>
  );
};

export default Spacer;

type Props = {
  size: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
};
