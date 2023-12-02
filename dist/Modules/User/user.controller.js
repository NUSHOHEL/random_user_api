"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserByid = exports.getUserById = exports.getAllUser = exports.postUser = void 0;
const user_services_1 = require("./user.services");
const postUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await (0, user_services_1.createUser)(user);
        res.status(200).json({
            success: true,
            message: "studen is created successfully",
            data: result,
        });
    }
    catch (error) {
        res.json(error);
    }
};
exports.postUser = postUser;
const getAllUser = async (req, res) => {
    const result = await (0, user_services_1.allUser)();
    res.json({
        success: true,
        message: "Users fetched successfully!",
        data: result,
    });
};
exports.getAllUser = getAllUser;
const getUserById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const result = await (0, user_services_1.getAUser)(id);
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
        const id = Number(req.params.id);
        const updateData = req.body;
        const result = await (0, user_services_1.updateUser)(updateData, id);
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
