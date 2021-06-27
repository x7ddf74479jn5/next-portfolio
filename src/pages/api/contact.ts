import type { NextApiRequest, NextApiResponse } from "next";
import type { FormData } from "src/types/api";
import { schema } from "src/types/api";

import { convertCrlfToBr } from "../../utils/helper";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sendgrid = require("@sendgrid/mail");

const response = async ({ name, email, category, description }: FormData): Promise<[void, void]> => {
  const _description = convertCrlfToBr(description);
  const html = `<div id="mail-content">
                          <p>お名前：<br>${name}</p>
                          <p>メールアドレス：<br>${email}</p>
                          <p>お問い合わせ種別：<br>${category}</p>
                          <p>お問い合わせ内容：<br>${_description}</p>
                        </div>`;

  const autoReply = {
    email: email,
    subject: "お問い合わせいただきありがとうございます【自動返信】",
    html: `<p>${name}様</p>
                       <p>
                        お問い合わせいただきありがとうございます。<br>
                        追って、当メールアドレスからご連絡いたします。
                       </p>
                       ${html}`,
  };

  const myEmail = process.env.MY_EMAIL_ADDRESS;
  if (!myEmail) throw new Error("Server Error");

  const notifyApplication = {
    email: myEmail,
    subject: "【自動転送】お問い合わせがありました",
    html: `<p>以下の内容でお問い合わせがありました。</p>` + html,
  };

  const sendMail = async ({
    email,
    subject,
    html,
  }: {
    email: string;
    subject: string;
    html: string;
  }): Promise<void> => {
    const apiKey = process.env.SENDGRID_API_KEY;
    sendgrid.setApiKey(apiKey);
    const message = {
      to: email,
      from: process.env.MY_EMAIL_ADDRESS,
      subject: subject,
      html: html,
    };
    await sendgrid.send(message);
  };

  return await Promise.all([sendMail(autoReply), sendMail(notifyApplication)]);
};

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    // Handle any other HTTP method
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  if (!req.body) {
    return res.status(400).json({ message: `Request body is nothing` });
  }

  try {
    schema.parse(req.body);
  } catch (e) {
    return res.status(500).send(e);
  }

  await response(req.body)
    .then(() => {
      return res.status(200).end();
    })
    .catch((e) => {
      return res.status(500).send(e);
    });
};
