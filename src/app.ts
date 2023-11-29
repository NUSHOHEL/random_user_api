import cors from "cors";

import express, { Request, Response } from "express";
import userRoute from "./Modules/User/user.routes";
// import mongoose, { Schema } from "mongoose";
// import UserModel from "./Modules/User/user.model";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
// const user = mongoose.model(
//   "users",
//   new Schema({
//     userId: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     fullName: {
//       firstName: { type: String, required: true },
//       lastName: { type: String, required: true },
//     },
//     age: Number,
//     email: {
//       type: String,
//       validate: {
//         validator: (email: string) => {
//           var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//           return re.test(email);
//         },
//         message: `{VALUE} IS NOT A VALID EMAIL`,
//       },
//       required: [true, "Email Address is required"],
//     },
//     isActive: Boolean,
//     hobbies: [String],
//     address: {
//       street: { type: String },
//       city: { type: String },
//       country: { type: String },
//     },
//     orders: {
//       type: [
//         {
//           productName: { type: String },
//           city: { type: String },
//           country: { type: String },
//         },
//       ],
//       required: true,
//     },
//   })
// );

// app.post("/users", (req: Request, res: Response) => {
//   console.log(req.body);
//   const newUser = new UserModel(req.body);
//   newUser.save();
//   res.send("got data");
// });

export default app;
