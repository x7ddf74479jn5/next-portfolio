import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import PrimaryButton from "src/components/common/PrimaryButton";
import ContactFormBody from "src/components/contact/ContactFormBody";
import type { FormData } from "src/types/api";
import { schema } from "src/types/api";

import { useModalDispatch } from "../../hooks/useModalDispatch";
import { useModalState } from "../../hooks/useModalState";

export const ContactFormContainer = () => {
  const methods = useForm<FormData>({ mode: "onBlur", resolver: zodResolver(schema) });
  const { handleSubmit } = methods;

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

  const apply = React.useCallback(async (data: FormData) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cancel = React.useCallback(() => {
    closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = React.useCallback<SubmitHandler<FormData>>(
    (formData: FormData) => {
      openModal("CONTACT", { formData, cancel, apply, isApplyButtonDisabled });
    },
    [apply, cancel, isApplyButtonDisabled, openModal]
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

  return (
    <form className="p-forms" name="contactForm" onSubmit={handleSubmit(onSubmit)}>
      <ContactFormBody methods={methods} />
      <PrimaryButton id="confirm-btn" type="submit" disabled={isConfirmButtonDisabled}>
        内容を確認する
      </PrimaryButton>
    </form>
  );
};

export default ContactFormContainer;
