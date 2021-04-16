import styles from "src/styles/components/modal/backdrop.module.scss";

type Props = {
  handleClick: () => void;
};

const Backdrop: React.VFC<Props> = ({ handleClick }) => {
  return (
    <button
      className={styles.backdrop}
      id="js-black-bg"
      onKeyDown={() => handleClick()}
      onClick={() => handleClick()}
    ></button>
  );
};

export default Backdrop;
