import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { IUser, userModel } from "./user.interface";

const userSchema = new mongoose.Schema<IUser, userModel>(
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
      {
        productName: String,
        price: Number,
        quantity: Number,
      },
    ],
  },
  {
    statics: {
      async isUserExist(id) {
        const user = await this.findOne({ userId: id });
        return user;
      },
    },
  }
);
userSchema.pre("save",async function () {
  this.password = await bcrypt.hash(this.password,20);
})
userSchema.post("save",function(doc,next){
 doc.updateOne({$unset:{password:1}})
next()

})
export default mongoose.model<IUser, userModel>("User", userSchema);
