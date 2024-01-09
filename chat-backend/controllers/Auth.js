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

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (firstName.length < 3) {
      return res
        .status(403)
        .json({ error: "firstName must be at least 3 letters long" });
    }

    if (lastName.length < 3) {
      return res
        .status(403)
        .json({ error: "lastName must be at least 3 letters long" });
    }

    if (!email.length) {
      return res.status(403).json({ error: "Email is required" });
    }

    if (!emailRegex.test(email)) {
      return res.status(403).json({ error: "Email is invalid" });
    }

    if (!passwordRegex.test(password)) {
      return res.status(403).json({ error: "Password is invalid" });
    }

    const hash_password = await bcrypt.hash(password, 10);
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

    const savedUser = await user.save();
    return res.status(200).json({ User: formatDataToSend(savedUser) });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(500).json({ error: "This email is already exists" });
    }
    return res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ "personal_info.email": email });

    if (!user) {
      return res.status(403).json({ error: "Email Not Found" });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.personal_info.password
    );

    if (!passwordMatch) {
      return res.status(403).json({ error: "Incorrect Password" });
    } else {
      return res.status(200).json(formatDataToSend(user));
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
