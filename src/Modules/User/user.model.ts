import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { IUser, staticMethos } from "./user.interface";

const userSchema = new mongoose.Schema<IUser>(
  {
    userId: Number,
    username: String,
    password: String,
    fullName: {
      firstName: String,
      lastName: String,
    },
    age: Number,
    email: String,
    isActive: Boolean,
    hobbies: [String],
    address: {
      street: String,
      city: String,
      country: String,
    },
    orders: [
      { _id: false, productName: String, price: Number, quantity: Number },
    ],
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

export default mongoose.model<IUser, staticMethos>("User", userSchema);
