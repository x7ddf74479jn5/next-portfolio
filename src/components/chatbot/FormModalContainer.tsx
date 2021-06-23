import React from "react";
import FormDialog from "src/components/chatbot/FormDialog";
import Backdrop from "src/components/modal/Backdrop";
import styles from "src/styles/components/chatbot/FormModalContainer.module.scss";

type Props = {
  handleClose: () => void;
};
const FormModalContainer: React.VFC<Props> = ({ handleClose }) => {
  return (
    <div className={styles.modalContainer}>
      <Backdrop opacity={10} />
      <FormDialog handleClose={handleClose} />
    </div>
  ); // TODO: TEST
};

export default FormModalContainer;
