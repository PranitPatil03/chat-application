import User from "../model/User.js";

export const userStatus = (req, res) => {
  const user_id = req.user;

  User.findOne({ _id: user_id, userStatus: false })
    .then((user) => {
      if (user) {
        return res.status(200).json({ userStatus: false });
      } else {
        return res.status(200).json({ userStatus: true });
      }
    })
    .catch((err) => {
      console.log(err.message);
      return res.status(500).json({ error: err.message });
    });
};
