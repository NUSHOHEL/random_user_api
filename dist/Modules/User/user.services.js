"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAUser = exports.allUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createUser = async (user) => {
    const newUser = await user_model_1.default.create(user);
    return newUser;
};
exports.createUser = createUser;
const allUser = async () => {
    const result = await user_model_1.default.find();
    return result;
};
exports.allUser = allUser;
const getAUser = async (id) => {
    const user = await user_model_1.default.isUserExist(id);
    if (user) {
        return user;
    }
    else {
        throw new Error("user doesn't exist");
    }
};
exports.getAUser = getAUser;
