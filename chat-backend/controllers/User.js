import User from "../model/User.js";

export const fetchAllUsers = (req, res) => {
  const userId = req.user;

  User.find({ _id: { $ne: { _id: userId } } })
    .select("personal_info.userName personal_info.profile_img -_id")
    .then((data) => {
      console.log(data)
      return res.status(200).json({ user: data });
    })
    .catch((err) => {
      return res.status(500).json({ err: err.message });
    });
};
