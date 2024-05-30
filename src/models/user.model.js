import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    username: {
      type: "String",
      required: true,
      unique: true,
    },
    rol: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      trim: true,
      unique: true,
    },
    password: {
      type: "String",
      requierd: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
