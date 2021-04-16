import styles from "src/styles/components/modal/ModalContainer.module.scss";

const ModalDrawer: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <button onClick={(): void => console.log("close")}>close</button>
    </div>
  );
};

export default ModalDrawer;
