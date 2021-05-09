import clsx from "clsx";
import styles from "src/styles/components/modal/Backdrop.module.scss";

type Props = {
  opacity?: 10 | 70;
};

const Backdrop: React.VFC<Props> = ({ opacity = 10 }) => {
  return (
    <div
      className={clsx({
        [styles.backdrop_70]: opacity === 70,
        [styles.backdrop]: opacity === 10,
      })}
    ></div>
  );
};

export default Backdrop;
