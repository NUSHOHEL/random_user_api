"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    userId: { type: Number, required: true, },
    username: { type: String, required: true },
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
    orders: [
        { _id: false, productName: String, price: Number, quantity: Number },
    ],
}, {
    statics: {
        async isUserExist(id) {
            return await this.findOne({ userId: id }).select("-password");
        },
    },
    versionKey: false,
});
userSchema.pre("save", async function () {
    this.password = await bcrypt_1.default.hash(this.password, 10);
});
// userSchema.post('save',(doc,next)=>{
//     const user = doc.toObject()
//     delete user.password
// })
exports.default = mongoose_1.default.model("User", userSchema);
