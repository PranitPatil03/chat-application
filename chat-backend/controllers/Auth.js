import { emailRegex, passwordRegex } from "../constants/constants.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

const formatDataToSend = (user) => {
  const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_ACCESS_KEY);
  return {
    accessToken,
    profile_img: user.personal_info.profile_img,
    firstName: user.personal_info.firstName,
    userName: user.personal_info.userName,
  };
};

const generateUserName = async (email) => {
  let userName = email.split("@")[0];

  const isUserNameUnique = await User.exists({
    "personal_info.userName": userName,
  }).then((res) => res);

  isUserNameUnique ? (userName += nanoid().substring(0, 5)) : "";

  return userName;
};

export const createUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (firstName.length < 3) {
    return res
      .status(403)
      .json({ error: "firstName must be at least 3 Letters long" });
  }

  if (lastName.length < 3) {
    return res
      .status(403)
      .json({ error: "firstName must be at least 3 Letters long" });
  }

  if (!email.length) {
    return res.status(403).json({ error: "Email is required" });
  }

  if (!emailRegex.test(email)) {
    return res.status(403).json({ error: "Email is Invalid" });
  }

  if (!passwordRegex.test(password)) {
    return res.status(403).json({ error: "Password is Invalid" });
  }

  bcrypt.hash(password, 10, async (err, hash_password) => {
    const userName = await generateUserName(email);

    const user = new User({
      personal_info: {
        firstName,
        lastName,
        userName,
        password: hash_password,
        email,
      },
    });

    user
      .save()
      .then((user) => {
        return res.status(200).json({ User: formatDataToSend(user) });
      })
      .catch((err) => {
        if (err.code == 11000) {
          return res.status(500).json({ error: "This mail is already exits" });
        }
        return res.status(500).json({ error: err.message });
      });
  });
};
