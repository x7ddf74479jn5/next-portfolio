import { AriaTitle } from "src/components/AriaTitle";
// import { contactModule } from "src/functions/contact";
import { confirmApplication, cancel, application } from "src/lib/contact";
import { Layout } from "src/layout/layout";

const Contact: React.FC = () => {
  const handleConfirm = () => {
    confirmApplication();
  };
  const handleCancel = () => {
    cancel();
  };
  const handleApplication = () => {
    application();
  };
  // const Contact: React.FC = () => {
  //   const handleConfirm = () => {
  //     contactModule.confirmApplication();
  //   };
  //   const handleCancel = () => {
  //     contactModule.cancel();
  //   };
  //   const handleApplication = () => {
  //     contactModule.application();
  //   };

  return (
    <Layout>
      <section>
        <div className="module-spacer--medium"></div>
      </section>

      <AriaTitle title="Contact" caption="お問い合わせ" />

      <section className="c-section">
        <div className="c-section-wrapin">
          <form className="p-forms" name="contactForm">
            <div className="p-forms__input">
              <p>
                <label>お名前 *</label>
                <input type="text" name="name" placeholder="名無 太郎" required />
              </p>
            </div>
            <div className="p-forms__input">
              <p>
                <label>メールアドレス *</label>
                <input type="email" name="email" placeholder="your@example.com" required />
              </p>
            </div>
            <div className="p-forms__input">
              <p>
                <label>お問い合わせ種別</label>
                <select name="category">
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
                <textarea name="description" rows={10} required={true}></textarea>
              </p>
            </div>
            <button className="p-btn-round center" id="confirm-btn" type="button" onClick={() => handleConfirm()}>
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
            <button className="p-btn-cancel mr-2" id="cancel-btn" type="button" onClick={() => handleCancel()}>
              修正する
            </button>
            <button className="p-btn-apply" id="apply-btn" type="button" onClick={() => handleApplication()}>
              送信する
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// const Contact: React.FC = () => {
//   const ()=>handleApplication() = () => {
//     console.log("return contactModule.confirmApplication()");
//     console.log("return contactModule.cancel()");
//     console.log("return contactModule.application()");
//   };

//   return (
//     <Layout>
//       <section>
//         <div className="module-spacer--medium"></div>
//       </section>

//       <AriaTitle title="Contact" caption="お問い合わせ" />

//       <section className="c-section">
//         <div className="c-section-wrapin">
//           <form className="p-forms" name="contactForm">
//             <div className="p-forms__input">
//               <p>
//                 <label>お名前 *</label>
//                 <input type="text" name="name" placeholder="名無 太郎" required />
//               </p>
//             </div>
//             <div className="p-forms__input">
//               <p>
//                 <label>メールアドレス *</label>
//                 <input type="email" name="email" placeholder="your@example.com" required />
//               </p>
//             </div>
//             <div className="p-forms__input">
//               <p>
//                 <label>お問い合わせ種別</label>
//                 <select name="category">
//                   <option value=""></option>
//                   <option value="Webサイト制作について">Webサイト制作について</option>
//                   <option value="Webアプリ開発について">Webアプリ開発について</option>
//                   {/* <option value="自動化ツール開発について">自動化ツール開発について</option> */}
//                   <option value="Webサイト模写について">Webサイト模写について</option>
//                   <option value="その他">その他</option>
//                 </select>
//               </p>
//             </div>
//             <div className="p-forms__input">
//               <p>
//                 <label>お問い合わせ内容 *</label>
//                 <textarea name="description" rows={10} required={true}></textarea>
//               </p>
//             </div>
//             <button className="p-btn-round center" id="confirm-btn" type="button" onClick={handle}>
//               内容を確認する
//             </button>
//           </form>
//         </div>
//       </section>
//       <div className="c-modal-popup" id="popup">
//         <input type="radio" name="modalPop" id="modal-switch" />
//         <label className="u-display-none" htmlFor="modal-switch"></label>
//         <input type="radio" name="modalPop" id="close" />
//         <label htmlFor="close">CLOSE</label>
//         <input type="radio" name="modalPop" id="pop13" />
//         <label htmlFor="pop13">×</label>
//         <div className="c-modal-popup__body">
//           <h2 className="c-modal-popup__title mb-4" id="modal-title">
//             入力内容の確認
//           </h2>
//           <div className="c-modal-popup__main" id="popup-main"></div>
//           <div className="p-grid__row center">
//             <button className="p-btn-cancel mr-2" id="cancel-btn" type="button" onClick={handle}>
//               修正する
//             </button>
//             <button className="p-btn-apply" id="apply-btn" type="button" onClick={handle}>
//               送信する
//             </button>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

export default Contact;
