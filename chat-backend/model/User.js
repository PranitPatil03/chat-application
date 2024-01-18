import mongoose from "mongoose";
import {
  profile_imgs_name_list,
  profile_imgs_collections_list,
} from "../constants/constants.js";

const userSchema = mongoose.Schema({
  personal_info: {
    firstName: {
      type: String,
      lowercase: true,
      required: true,
      minlength: [3, "fullName must be 3 letters long"],
    },
    lastName: {
      type: String,
      lowercase: true,
      required: true,
      minlength: [3, "fullName must be 3 letters long"],
    },
    userName: {
      type: String,
      lowercase: true,
      required: true,
      minlength: [3, "fullName must be 3 letters long"],
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    bio: {
      type: String,
      maxLength: [200, "fullName must be 200 letters long"],
      default: "",
    },
    profile_img: {
      type: String,
      default: () => {
        return `https://api.dicebear.com/6.x/${
          profile_imgs_collections_list[
            Math.floor(Math.random() * profile_imgs_collections_list.length)
          ]
        }/svg?seed=${
          profile_imgs_name_list[
            Math.floor(Math.random() * profile_imgs_name_list.length)
          ]
        }`;
      },
    },
  },
  userStatus: {
    type: Boolean,
    default: false
  },
  // messages: {
  //   // TODO:Change the Type of messages
  //   type: String,
  //   default: {},
  //   lowercase: true,
  // },
  google_auth: {
    type: Boolean,
    default: false,
  },
  timestamps: {
    joinedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
  },
});

export default mongoose.model("users", userSchema);
