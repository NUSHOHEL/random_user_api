"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.route("/").post(user_controller_1.postUser).get(user_controller_1.getAllUser);
router.route("/:id").get(user_controller_1.getUserById).put(user_controller_1.updateUserByid);
exports.default = router;
