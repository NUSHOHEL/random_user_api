"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
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
        {
            productName: String,
            price: Number,
            quantity: Number,
        },
    ],
}, {
    statics: {
        async isUserExist(id) {
            const user = await this.findOne({ userId: id });
            return user;
        },
    },
});
userSchema.pre("save", async function () {
    this.password = await bcrypt_1.default.hash(this.password, 20);
});
userSchema.post("save", function (doc, next) {
    doc.updateOne({ $unset: { password: 1 } });
    next();
});
exports.default = mongoose_1.default.model("User", userSchema);
