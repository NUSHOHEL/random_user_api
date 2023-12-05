"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalOrderPrice = exports.findUserOrders = exports.updateUserOrders = exports.deleteUser = exports.updateUserByid = exports.getUserById = exports.getAllUser = exports.postUser = void 0;
const userservice = __importStar(require("./user.services"));
const user_validation_1 = require("./user.validation");
const postUser = async (req, res, next) => {
    try {
        const user = req.body;
        const validUser = user_validation_1.userValidator.parse(user);
        const result = await userservice.createUser(validUser);
        res.status(200).json({
            success: true,
            message: "studen is created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.postUser = postUser;
const getAllUser = async (req, res) => {
    const result = await userservice.allUser();
    res.json({
        success: true,
        message: "Users fetched successfully!",
        data: result,
    });
};
exports.getAllUser = getAllUser;
const getUserById = async (req, res) => {
    const id = Number(req.params.userId);
    try {
        const result = await userservice.getAUser(id);
        res.json({
            success: true,
            message: "User fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!",
            },
        });
    }
};
exports.getUserById = getUserById;
const updateUserByid = async (req, res) => {
    try {
        const id = Number(req.params.userId);
        const updateData = req.body;
        const result = await userservice.updateUser(updateData, id);
        res.json({
            success: true,
            message: "User updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!",
            },
        });
    }
};
exports.updateUserByid = updateUserByid;
const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.userId);
        await userservice.deleteAUser(id);
        res.json({
            success: true,
            message: "User deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!",
            },
        });
    }
};
exports.deleteUser = deleteUser;
const updateUserOrders = async (req, res) => {
    try {
        const id = Number(req.params.userId);
        await userservice.updateOrder(id, req.body);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: null,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!",
            },
        });
    }
};
exports.updateUserOrders = updateUserOrders;
const findUserOrders = async (req, res) => {
    try {
        const id = Number(req.params.userId);
        const orders = await userservice.findOrders(id);
        res.json({
            success: true,
            data: orders,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!",
            },
        });
    }
};
exports.findUserOrders = findUserOrders;
const totalOrderPrice = async (req, res) => {
    const id = Number(req.params.userId);
    try {
        const price = await userservice.totalPrice(id);
        res.json({
            success: true,
            message: "Total price calculated successfully!",
            data: price[0],
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!",
            },
        });
    }
};
exports.totalOrderPrice = totalOrderPrice;
