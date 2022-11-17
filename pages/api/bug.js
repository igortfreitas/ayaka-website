const axios = require("axios");

// npm install form-data
const FormData = require("form-data");
const url =
  "https://ptb.discord.com/api/webhooks/1042678742960582696/sdkHjmH99z7GgQ5ScgjKewrUMPnxPUHDRXzK2MMrJcfuJomST_wqu7KY3bSaqQ-2kDqo";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { title, email, message, attachment } = req.body;
    if (attachment) {
      const buffer = Buffer.from(attachment.split(",")[1], "base64");
      const formData = new FormData();
      formData.append("file", buffer, "attachment.png");
      formData.append(
          "content",
          `Bug report title:\n${title}\nBug report description:\n${message}\nEmail: ${email}`
      );
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          },
        })
        .then((response) => {
          res.status(200).json({ success: true });
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    } else {
      axios
        .post(url, {
          "embeds": [{
            "fields": [
              {
                "name": "Bug title",
                "value": title,
                "inline": true
              },
              {
                "name": "Bug reporter's email",
                "value": email,
                "inline": true
              },
              {
                "name": "Bug desc",
                "value": message
              }
            ],
            "color": "14177041"
          }]
        })
        .then((response) => {
          res.status(200).json({ success: true });
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    }
  } else {
    res.status(405).json({ success: false });
  }
}