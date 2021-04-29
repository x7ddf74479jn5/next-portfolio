import type { NextApiRequest, NextApiResponse } from "next";
import type { FormData } from "src/types/api";
import { schema } from "src/types/api";

import { convertCrlfToBr } from "../../utils/helper";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sendgrid = require("@sendgrid/mail");

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    // Handle any other HTTP method
    res.setHeader("Allow", "POST");
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  if (!req.body) {
    return res.status(400).json({ message: `Request body is nothing` });
  }

  // Process a POST request
  const isNotNullish = (data: unknown): data is Record<string, unknown> => {
    return data != null;
  };

  const isFormData = (data: unknown): data is FormData => {
    if (!isNotNullish(data)) {
      return false;
    }

    return schema.isValidSync(data);
  };

  interface SendMail {
    email: string;
    subject: string;
    html: string;
  }

  const sendMail = async (data: SendMail) => {
    const apiKey = process.env.SENDGRID_API_KEY;
    sendgrid.setApiKey(apiKey);
    const message = {
      to: data.email,
      from: process.env.MY_EMAIL_ADDRESS,
      subject: data.subject,
      html: data.html,
    };
    await sendgrid.send(message);
  };

  const response = async () => {
    // if (!isFormData(req.body)) {
    //   return res.status(500).json({ message: "Validation Error" });
    // }

    const description = convertCrlfToBr(req.body.description);
    const html = `<div id="mail-content">
                          <p>お名前：<br>${req.body.name}</p>
                          <p>メールアドレス：<br>${req.body.email}</p>
                          <p>お問い合わせ種別：<br>${req.body.category}</p>
                          <p>お問い合わせ内容：<br>${description}</p>
                        </div>`;

    const autoReply = {
      email: req.body.email,
      subject: "お問い合わせいただきありがとうございます【自動返信】",
      html: `<p>${req.body.name}様</p>
                       <p>
                        お問い合わせいただきありがとうございます。<br>
                        追って、当メールアドレスからご連絡いたします。
                       </p>
                       ${html}`,
    };

    const myEmail = process.env.MY_EMAIL_ADDRESS;
    if (!myEmail) return;

    const notifyApplication = {
      email: myEmail,
      subject: "【自動転送】お問い合わせがありました",
      html: `<p>以下の内容でお問い合わせがありました。</p>` + html,
    };

    return await Promise.all([sendMail(autoReply), sendMail(notifyApplication)])
      .then(() => {
        return res.status(200).end();
      })
      .catch((e) => {
        res.status(500).send(e);
      });
  };

  await response();
};
