import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { IUser, staticMethos } from "./user.interface";

const userSchema = new mongoose.Schema<IUser>(
  {
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: {
      type: {
        firstName: String,
        lastName: String,
      },
      required: true,
      _id: false,
    },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: {
      type: {
        street: String,
        city: String,
        country: String,
      },
      required: true,
      _id: false,
    },
    orders: {
      type: [
        {
          _id: false,
          productName: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
      default: undefined,
    },
  },
  {
    statics: {
      async isUserExist(id) {
        return await this.findOne({ userId: id }).select("-password");
      },
    },
    versionKey: false,
  }
);
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.post("save", async (doc, next) => {
  doc.set("password", undefined);

  next();
});
export default mongoose.model<IUser, staticMethos>("User", userSchema);
