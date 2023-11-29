"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./Modules/User/user.routes"));
// import mongoose, { Schema } from "mongoose";
// import UserModel from "./Modules/User/user.model";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/users", user_routes_1.default);
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
exports.default = app;
