import mongoose from "mongoose";

let profile_imgs_name_list = [
  "Garfield",
  "Tinkerbell",
  "Annie",
  "Loki",
  "Cleo",
  "Angel",
  "Bob",
  "Mia",
  "Coco",
  "Gracie",
  "Bear",
  "Bella",
  "Abby",
  "Harley",
  "Cali",
  "Leo",
  "Luna",
  "Jack",
  "Felix",
  "Kiki",
];

const userSchema = mongoose.Schema({
  personal_info: {
    fullName: {
      type: String,
      lowercase: true,
      required: true,
      minlength: [3, "fullName must be 3 letters long"],
    },
    LastName: {
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
  messages: {
    default: {},
    ref: "messages",
    lowercase: true,
    type: [Schema.Types.ObjectId],
  },
  google_auth: {
    type: Boolean,
    default: false,
  },
  timestamps: {
    createdAt: "joinedAt",
  },
});

export default mongoose.model("users", userSchema);
