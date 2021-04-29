import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import PrimaryButton from "src/components/common/PrimaryButton";
// import type { FormData } from "src/components/contact/ContactFormBody";
import ContactFormBody from "src/components/contact/ContactFormBody";
import FormButton from "src/components/contact/FormButton";
import { GridRow } from "src/components/layouts/Grid";
import s from "src/styles/components/contact/ContactForm.module.scss";
import styles from "src/styles/components/modal/ConfirmModal.module.scss";
import * as yup from "yup";

import { useModalDispatch } from "../../hooks/useModalDispatch";
import { useModalState } from "../../hooks/useModalState";
import type { FormData } from "./ContactFormBody";

const schema = yup.object().shape({
  name: yup.string().required("お名前が未入力です。"),
  email: yup
    .string()
    .required("メールアドレスが未入力です。")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "メールアドレスの形式に誤りがあります。"
    ),
  category: yup.string(),
  describe: yup.string().required("お問い合わせ内容が未入力です。"),
});
// export type FormData = yup.InferType<typeof schema>;

export const ContactFormContainer = () => {
  const methods = useForm<FormData>();
  // const methods = useForm<FormData>({ mode: "onBlur", resolver: yupResolver(schema) });
  const { handleSubmit, watch } = methods;
  const watcher = watch();

  const { isModalOpen } = useModalState();
  const { openModal, closeModal } = useModalDispatch();
  const [isFetching, setIsFetching] = React.useState(false);

  const isApplyButtonDisabled = React.useMemo(() => {
    if (isFetching) {
      return true;
    }

    return false;
  }, [isFetching]);

  const isConfirmButtonDisabled = React.useMemo(() => {
    if (isModalOpen || isFetching) {
      return true;
    }

    return false;
  }, [isModalOpen, isFetching]);

  const onSubmit = React.useCallback<SubmitHandler<FormData>>(
    (formData: FormData) => {
      openModal("CONTACT", { formData, cancel, apply, isApplyButtonDisabled });
    },
    [openModal]
  );

  const sendMessage = async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_CONTACT_API_URL;
    if (!url) return;
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const apply = async (data: FormData) => {
    setIsFetching(true);
    await sendMessage(data)
      .then(() => {
        alert(
          "お問い合わせありがとうございました。入力いただいたメールアドレスに自動返信メールが届いたことをご確認ください。"
        );
      })
      .catch(() => {
        alert("エラーが発生しました。恐れ入りますが再度送信してください。");
      });
    setIsFetching(false);
    closeModal();
  };

  const cancel = () => {
    closeModal();
  };

  return (
    <form className="p-forms" name="contactForm" onSubmit={handleSubmit(onSubmit)}>
      <ContactFormBody methods={methods} />

      <PrimaryButton id="confirm-btn" type="submit" disabled={isConfirmButtonDisabled}>
        内容を確認する
      </PrimaryButton>
    </form>
  );
};

const ModalCloseButton: React.VFC = () => {
  const { closeModal } = useModalDispatch();
  return (
    <button
      className={styles.closeButton}
      onClick={() => {
        return closeModal();
      }}
    >
      ×
    </button>
  );
};
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

export const ModalPopup: React.VFC<Props> = ({ formData, cancel, apply, isApplyButtonDisabled }) => {
  return (
    <div className="c-modal-popup" id="popup">
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
      <ModalCloseButton />
    </div>
  );
};

export default ContactFormContainer;
