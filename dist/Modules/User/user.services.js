"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalPrice = exports.findOrders = exports.updateOrder = exports.deleteAUser = exports.updateUser = exports.getAUser = exports.allUser = exports.createUser = void 0;
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
const deleteAUser = async (id) => {
    const user = await user_model_1.default.isUserExist(id);
    if (user) {
        return await user_model_1.default.deleteOne({ userId: id });
    }
    else {
        throw new Error("user doesn't exist");
    }
};
exports.deleteAUser = deleteAUser;
const updateOrder = async (id, updatedOrder) => {
    const user = await user_model_1.default.isUserExist(id);
    if (user) {
        return await user_model_1.default.updateOne({ userId: id }, { $push: { orders: updatedOrder } }, { runValidators: true });
    }
    else {
        throw new Error("user doesn't exist");
    }
};
exports.updateOrder = updateOrder;
const findOrders = async (id) => {
    const user = await user_model_1.default.isUserExist(id);
    if (user) {
        return await user_model_1.default.findOne({ userId: id }, "orders -_id");
    }
    else {
        throw new Error("user doesn't exist");
    }
};
exports.findOrders = findOrders;
const totalPrice = async (id) => {
    const user = await user_model_1.default.isUserExist(id);
    if (user) {
        const result = await user_model_1.default.aggregate([
            { $match: { userId: id } },
            { $unwind: "$orders" },
            {
                $group: {
                    _id: "$userId",
                    totalOrderPrice: {
                        $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
                    },
                },
            },
            { $project: { _id: 0 } },
        ]);
        return result;
    }
    else {
        throw new Error("user doesn't exist");
    }
};
exports.totalPrice = totalPrice;
