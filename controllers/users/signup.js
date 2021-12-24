const { nanoid } = require("nanoid");
const gravatar = require("gravatar");

const { sendEmail } = require("../../helpers");
const { User } = require("../../models");

const signup = async (req, res) => {
  const { password, email, subscription = "starter", token } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json({ message: "Email in use" });
  }
  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);
  const newUser = new User({
    email,
    subscription,
    token,
    avatarURL,
    verificationToken,
  });
  newUser.setPassword(password);
  await newUser.save();
  const mail = {
    to: email,
    subject: "Подтверждение email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтвердить email</a>`,
  };

  await sendEmail(mail);

  res.json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = signup;
