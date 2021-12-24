const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const reVerefication = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: "missing required field email" });
  }
  const user = await User.findOne({ email });
  if (user.verify) {
    res.status(400).json({ message: "Verification has already been passed" });
  }
  const mail = {
    to: email,
    subject: "Подтверждение email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Подтвердить email</a>`,
  };
  await sendEmail(mail);
  res.status(200).json({ message: "Verification email sent" });
};

module.exports = reVerefication;
