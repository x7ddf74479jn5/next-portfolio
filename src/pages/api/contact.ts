const sendgrid = require("@sendgrid/mail");

import type { NowRequest, NowResponse } from "@vercel/node";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

module.exports = async (req: NowRequest, res: NowResponse) => {
  if (req.method === "POST") {
    // Process a POST request
    sendgrid.setApiKey(SENDGRID_API_KEY);
    const message = {
      to: req.body.email,
      from: "x7ddf74479jn5@gmail.com",
      subject: req.body.subject,
      html: req.body.html,
    };
    await sendgrid.send(message);
    return res.json({ message: "ok" });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", "POST");
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
};
