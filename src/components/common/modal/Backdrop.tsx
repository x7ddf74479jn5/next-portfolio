import clsx from "clsx";
import styles from "src/styles/components/modal/Backdrop.module.scss";

type Props = {
  opacity?: 10 | 70;
  handleClick: () => void;
};

const Backdrop: React.VFC<Props> = ({ handleClick, opacity = 10 }) => {
  return (
    <button
      className={clsx({
        [styles.backdrop_70]: opacity === 70,
        [styles.backdrop]: opacity === 10,
      })}
      onKeyDown={() => {return handleClick()}}
      onClick={() => {return handleClick()}}
    ></button>
  );
};

export default Backdrop;
