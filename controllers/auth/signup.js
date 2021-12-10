const { User } = require("../../models");

const signup = async (req, res) => {
  const { password, email, subscription = "starter", token } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json({ message: "Email in use" });
  }
  const newUser = new User({
    email,
    subscription,
    token,
  });
  newUser.setPassword(password);
  newUser.save();
  res.json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = signup;
