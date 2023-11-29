"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
async function main() {
    await mongoose_1.default
        .connect(process.env.url)
        .then(() => console.log("database connected"));
}
app_1.default.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`);
});
main();
