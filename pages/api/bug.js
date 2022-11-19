const axios = require("axios");

// npm install form-data
const FormData = require("form-data");
const url = process.env.bugurl;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, email, message, attachment } = req.body;
    if (attachment) {
      const buffer = Buffer.from(attachment.split(",")[1], "base64");
      const formData = new FormData();
      formData.append("file", buffer, "attachment.png");
      formData.append(
          "content",
          `
          **Bug report title**:\n${title}
          \n\n**Email**: ${email}
          \n\n**Bug report description**:\n${message}`
      );
      await axios
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
      await axios
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
