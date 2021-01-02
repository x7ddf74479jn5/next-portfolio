import { NextPage } from "next";
import * as React from "react";
// import { convertCrlfToBr } from "src/functions/commonFunc";
import { useForm } from "react-hook-form";
import { AriaTitle } from "src/components/AriaTitle";
import { Layout } from "src/layout/layout";

type FormData = {
  name: string;
  email: string;
  category: "";
  description: string;
};
const convertCrlfToBr = (text: string) => {
  if (text === "") {
    return text;
  } else {
    return text.replace(/\r?\n/g, "<br>");
  }
};

const Contact: NextPage = () => {
  const { register, getValues, handleSubmit, watch } = useForm<FormData>();
  const watcher = watch();
  const onSubmit = () => {
    const values = getValues();
    confirmApplication(values);
  };

  // const [applyButton, setApplyButton] = React.useState<boolean>(false);
  // const [modalSwitchC, setModalSwitch] = React.useState<boolean>(false);

  const confirmApplication = (values: FormData) => {
    const modalSwitch = document.getElementById("modal-switch") as HTMLInputElement;
    if (modalSwitch) modalSwitch.checked = true;
    const description = convertCrlfToBr(values.description);
    const html = `<div id="mail-content">
                          <p>お名前：<br>${values.name}</p>
                          <p>メールアドレス：<br>${values.email}</p>
                          <p>お問い合わせ種別：<br>${values.category}</p>
                          <p>お問い合わせ内容：<br>${description}</p>
                        </div>`;
    const popupMain = document.getElementById("popup-main");
    if (popupMain) popupMain.innerHTML = html;
  };

  const application = (values: FormData) => {
    const applyButton = document.getElementById("apply-btn") as HTMLInputElement;
    if (applyButton) applyButton.disabled = true;
    if (watcher.email === "" || watcher.name === "" || watcher.description === "") {
      alert("必須項目が未入力です。");
      // const applyButton = document.getElementById("apply-btn") as HTMLInputElement
      if (applyButton) applyButton.disabled = false;
      return false;
    }
    const regexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexp.test(values.email)) {
      alert("メールアドレスの形式に誤りがあります。");
      applyButton.disabled = false;
      return false;
    }

    const mailContent = document.getElementById("mail-content");
    let html = "";
    if (mailContent) {
      html = mailContent.innerHTML;
    }
    const sendMail = async (message: { email: string; subject: string; html: string }) => {
      // const URL = "http://localhost:3000/api/contact";
      // const URL = "https://next-portfolio-livid.vercel.app/api/contact"
      const URL = process.env.CONTACT_API_URL as string;
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    };

    const autoReply = {
      email: values.email,
      subject: "お問い合わせいただきありがとうございます【自動返信】",
      html: `<p>${values.name}様</p>
                       <p>
                        お問い合わせいただきありがとうございます。<br>
                        追って、当メールアドレスからご連絡いたします。
                       </p>
                       ${html}`,
    };

    const notifyApplication = {
      email: "x7ddf74479jn5@gmail.com",
      subject: "【自動転送】お問い合わせがありました",
      html: `<p>以下の内容でお問い合わせがありました。</p>` + html,
    };

    return Promise.all([sendMail(autoReply), sendMail(notifyApplication)])
      .then((result) => {
        console.log(result);
        alert(
          "お問い合わせありがとうございました。入力いただいたメールアドレスに自動返信メールが届いたことをご確認ください。"
        );
        return window.location.replace("/");
      })
      .catch((error) => {
        console.error(error);
        alert(
          "お問い合わせありがとうございました。i入力いただいたメールアドレスに自動返信メールが届いたことをご確認ください。"
        );
        return window.location.replace("/");
      });
  };

  const cancel = () => {
    const modalSwitch = document.getElementById("modal-switch") as HTMLInputElement;
    if (modalSwitch) modalSwitch.checked = false;
    const applyButton = document.getElementById("apply-btn") as HTMLInputElement;
    if (applyButton) applyButton.disabled = false;
  };

  return (
    <Layout>
      <section>
        <div className="module-spacer--medium"></div>
      </section>

      <AriaTitle title="Contact" caption="お問い合わせ" />

      <section className="c-section">
        <div className="c-section-wrapin">
          <form className="p-forms" name="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-forms__input">
              <p>
                <label>お名前 *</label>
                <input type="text" name="name" placeholder="名無 太郎" required ref={register} />
              </p>
            </div>
            <div className="p-forms__input">
              <p>
                <label>メールアドレス *</label>
                <input type="email" name="email" placeholder="your@example.com" required ref={register} />
              </p>
            </div>
            <div className="p-forms__input">
              <p>
                <label>お問い合わせ種別</label>
                <select name="category" ref={register}>
                  <option value=""></option>
                  <option value="Webサイト制作について">Webサイト制作について</option>
                  <option value="Webアプリ開発について">Webアプリ開発について</option>
                  {/* <option value="自動化ツール開発について">自動化ツール開発について</option> */}
                  <option value="Webサイト模写について">Webサイト模写について</option>
                  <option value="その他">その他</option>
                </select>
              </p>
            </div>
            <div className="p-forms__input">
              <p>
                <label>お問い合わせ内容 *</label>
                <textarea name="description" rows={10} required={true} ref={register}></textarea>
              </p>
            </div>
            <button className="p-btn-round center" id="confirm-btn" type="submit" onClick={() => onSubmit()}>
              内容を確認する
            </button>
          </form>
        </div>
      </section>

      <div className="c-modal-popup" id="popup">
        <input type="radio" name="modalPop" id="modal-switch" />
        <label className="u-display-none" htmlFor="modal-switch"></label>
        <input type="radio" name="modalPop" id="close" />
        <label htmlFor="close">CLOSE</label>
        <input type="radio" name="modalPop" id="pop13" />
        <label htmlFor="pop13">×</label>
        <div className="c-modal-popup__body">
          <h2 className="c-modal-popup__title mb-4" id="modal-title">
            入力内容の確認
          </h2>
          <div className="c-modal-popup__main" id="popup-main"></div>
          <div className="p-grid__row center">
            <button className="p-btn-cancel mr-2" id="cancel-btn" type="button" onClick={() => cancel()}>
              修正する
            </button>
            <button className="p-btn-apply" id="apply-btn" type="button" onClick={() => application(getValues())}>
              送信する
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
