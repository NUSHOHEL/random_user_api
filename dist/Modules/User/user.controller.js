"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getAllUser = exports.postUser = void 0;
const user_services_1 = require("./user.services");
const postUser = async (req, res) => {
    const user = req.body;
    try {
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
    res.send(result);
};
exports.getAllUser = getAllUser;
const getUserById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const result = await (0, user_services_1.getAUser)(id);
        res.json(result);
    }
    catch (error) {
        res.status(400).json({
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
