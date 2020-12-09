const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/app");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //search the user
    const user = await User.findOne({
      where: {
        email,
      },
    });

    //check if user found
    if (!user) return res.status(404).json({ message: "User NOT Found" });

    //check if password provided matches
    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ message: "Incorrect Password" });

    // generate auth tokern (jwt)
    const userWithToken = generateToken(user.get({ raw: true }));
    return res.send(userWithToken);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }

  // return res.send([email,password]);
};

exports.register = async (req, res) => {

  try {
      //create the user
      const user = await User.create(req.body)

        // generate auth tokern (jwt)
        const userWithToken = generateToken(user.get({ raw: true }));
        return res.send(userWithToken);

  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const generateToken = (user)=> {
//   delete user.password;
  const token = jwt.sign(user, config.appKey, { expiresIn: 86400 }); // one week
  return { ...user, token };
//   return { ...user,...{token} };
};
