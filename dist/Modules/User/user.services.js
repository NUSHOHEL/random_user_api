"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getAUser = exports.allUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createUser = async (user) => {
    const newUser = await user_model_1.default.create(user);
    return newUser;
};
exports.createUser = createUser;
const allUser = async () => {
    const result = await user_model_1.default.find().select("username fullName age email address");
    return result;
};
exports.allUser = allUser;
const getAUser = async (id) => {
    const user = await user_model_1.default.isUserExist(id);
    if (user) {
        return user;
    }
    else {
        throw new Error("user Dosen't exist");
    }
};
exports.getAUser = getAUser;
const updateUser = async (data, id) => {
    const user = await user_model_1.default.isUserExist(id);
    if (user) {
        const updatedUser = await user_model_1.default.findOneAndUpdate({ userId: id }, { $set: data }, { new: true }).select("-password");
        return updatedUser;
    }
    else {
        throw new Error("user doesn't exist");
    }
};
exports.updateUser = updateUser;
