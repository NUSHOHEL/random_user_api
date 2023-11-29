import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema({
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
    {
      productName: String,
      price: Number,
      quantity: Number,
    },
  ],
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
