import React, { useRef } from "react";
import FormButton from "src/components/contact/FormButton";
import { GridRow } from "src/components/layouts/Grid";
import useClickAway from "src/hooks/useClickAway";
import { useModalDispatch } from "src/hooks/useModalDispatch";
import styles from "src/styles/components/modal/ConfirmModal.module.scss";

import type { FormData } from "../../types/api/index";

export type ModalPopup = FormData & ModalPopupAction;
type ModalPopupAction = {
  cancel: () => void;
  apply: (formData: FormData) => Promise<unknown>;
};
type Props = {
  formData: FormData;
  cancel: ModalPopupAction["cancel"];
  apply: ModalPopupAction["apply"];
  isApplyButtonDisabled: boolean;
};

const ModalPopup: React.VFC<Props> = ({ formData, cancel, apply, isApplyButtonDisabled }) => {
  const ref = useRef(null);
  const { closeModal } = useModalDispatch();
  useClickAway(ref, closeModal);
  return (
    <div className="c-modal-popup" id="popup" ref={ref}>
      <div className={styles.modalPopupBody}>
        <h2 className={styles.modalPopupTitle} id="modal-title">
          入力内容の確認
        </h2>
        <div className={styles.modalPopupMain} id="popup-main">
          <div id="mail-content">
            <p>お名前：</p>
            <p>{formData.name}</p>
            <p>メールアドレス：</p>
            <p>{formData.email}</p>
            <p>お問い合わせ種別：</p>
            <p>{formData.category}</p>
            <p>お問い合わせ内容：</p>
            <p>{formData.description}</p>
          </div>
        </div>
        <GridRow>
          <FormButton
            buttonType="cancel"
            id="cancel-btn"
            type="button"
            onClick={() => {
              return cancel();
            }}
          >
            修正する
          </FormButton>
          <FormButton
            buttonType="apply"
            id="apply-btn"
            type="button"
            disabled={isApplyButtonDisabled}
            onClick={() => {
              return apply(formData);
            }}
          >
            送信する
          </FormButton>
        </GridRow>
      </div>
      {/* <ModalCloseButton onClick={closeModal} /> */}
    </div>
  );
};

export default ModalPopup;
