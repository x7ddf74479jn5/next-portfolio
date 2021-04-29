// import styles from "src/styles/components/modal/ModalContainer.module.scss";
import { ModalPopup } from "../../contact/ContactFormContainer";

type Props = { data: any };

const ModalDrawer: React.FC<Props> = (props) => {
  return <ModalPopup formData={props.data} />;
};

// const ModalDrawer: React.FC = () => {
//   return (
//     <div className={styles.modalContent}>
//       <button onClick={(): void => console.log("close")}>close</button>
//     </div>
//   );
// };

export default ModalDrawer;
