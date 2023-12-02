"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("User", userSchema);
