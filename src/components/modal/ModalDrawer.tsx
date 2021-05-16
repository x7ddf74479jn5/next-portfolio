import styles from "src/styles/components/modal/ModalContainer.module.scss";

// type Props = { data: any };

// const ModalDrawer: React.FC<Props> = (props) => {
//   return <ModalPopup formData={props.data} />;
// };

const ModalDrawer: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <button
        onClick={() => {
          return alert("modal");
        }}
      >
        close
      </button>
    </div>
  );
};

export default ModalDrawer;
