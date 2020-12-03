import { convertCrlfToBr } from "./commonFunc";

// export const confirmApplication = () => {
//   document.getElementById("modal-switch").checked = true;
//   const form = document.forms.contactForm;
//   const description = convertCrlfToBr(form.description.value);
//   const html = `<div id="mail-content">
//                             <p>お名前：<br>${form.name.value}</p>
//                             <p>メールアドレス：<br>${form.email.value}</p>
//                             <p>お問い合わせ種別：<br>${form.category.value}</p>
//                             <p>お問い合わせ内容：<br>${description}</p>
//                           </div>`;

//   document.getElementById("popup-main").innerHTML = html;
// };

// export const application = () => {
//   document.getElementById("apply-btn").disabled = true;
//   const form = document.forms.contactForm;

//   if (form.email.value === "" || form.name.value === "" || form.description.value === "") {
//     alert("必須項目が未入力です。");
//     document.getElementById("apply-btn").disabled = false;
//     return false;
//   }

//   // Verify email
//   const regexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (!regexp.test(form.email.value)) {
//     alert("メールアドレスの形式に誤りがあります。");
//     document.getElementById("apply-btn").disabled = false;
//     return false;
//   }

//   const html = document.getElementById("mail-content").innerHTML;
//   // const sendMail = firebase.functions().httpsCallable("sendgridEmail");

//   const sendMail = async (message) => {
//     // const URL = "https://next-portfolio-livid.vercel.app/api/contact";
//     const URL = "http://localhost:3000/api/contact";
//     await fetch(URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(message),
//     });
//   };

//   // Mail content for replying to the applicant
//   const autoReply = {
//     email: form.email.value,
//     subject: "お問い合わせいただきありがとうございます【自動返信】",
//     html: `<p>${form.name.value}様</p>
//                        <p>
//                         お問い合わせいただきありがとうございます。<br>
//                         追って、当メールアドレスからご連絡いたします。
//                        </p>
//                        ${html}`,
//   };

//   // Mail content for notifying the application to admin
//   const notifyApplication = {
//     email: "x7ddf74479jn5@gmail.com",
//     subject: "【自動転送】お問い合わせがありました",
//     html: `<p>以下の内容でお問い合わせがありました。</p>` + html,
//   };

//   return Promise.all([sendMail(autoReply), sendMail(notifyApplication)])
//     .then((result) => {
//       console.log(result);
//       alert(
//         "お問い合わせありがとうございました。入力いただいたメールアドレスに自動返信メールが届いたことをご確認ください。"
//       );
//       return window.location.replace("/");
//     })
//     .catch((error) => {
//       console.error(error);
//       alert(
//         "お問い合わせありがとうございました。i入力いただいたメールアドレスに自動返信メールが届いたことをご確認ください。"
//       );
//       return window.location.replace("/");
//     });
// };

// export const cancel = () => {
//   document.getElementById("apply-btn").disabled = false;
//   document.getElementById("modal-switch").checked = false;
// };

export const contactModule = (() => {
  return {
    confirmApplication: () => {
      document.getElementById("modal-switch").checked = true;
      const form = document.forms.contactForm;
      const description = convertCrlfToBr(form.description.value);
      const html = `<div id="mail-content">
                            <p>お名前：<br>${form.name.value}</p>
                            <p>メールアドレス：<br>${form.email.value}</p>
                            <p>お問い合わせ種別：<br>${form.category.value}</p>
                            <p>お問い合わせ内容：<br>${description}</p>
                          </div>`;

      document.getElementById("popup-main").innerHTML = html;
    },
    application: () => {
      document.getElementById("apply-btn").disabled = true;
      const form = document.forms.contactForm;

      if (form.email.value === "" || form.name.value === "" || form.description.value === "") {
        alert("必須項目が未入力です。");
        document.getElementById("apply-btn").disabled = false;
        return false;
      }

      // Verify email
      const regexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!regexp.test(form.email.value)) {
        alert("メールアドレスの形式に誤りがあります。");
        document.getElementById("apply-btn").disabled = false;
        return false;
      }

      const html = document.getElementById("mail-content").innerHTML;
      // const sendMail = firebase.functions().httpsCallable("sendgridEmail");

      const sendMail = async (message) => {
        // const URL = "https://next-portfolio-livid.vercel.app/api/contact";
        const URL = "http://localhost:3000/api/contact";
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        });
      };

      // Mail content for replying to the applicant
      const autoReply = {
        email: form.email.value,
        subject: "お問い合わせいただきありがとうございます【自動返信】",
        html: `<p>${form.name.value}様</p>
                       <p>
                        お問い合わせいただきありがとうございます。<br>
                        追って、当メールアドレスからご連絡いたします。
                       </p>
                       ${html}`,
      };

      // Mail content for notifying the application to admin
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
    },
    cancel: () => {
      document.getElementById("apply-btn").disabled = false;
      document.getElementById("modal-switch").checked = false;
    },
  };
})();
