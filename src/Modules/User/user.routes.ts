import express from "express";
import {
  getAllUser,
  getUserById,
  postUser,
  updateUserByid,
} from "./user.controller";

const router = express.Router();

router.route("/").post(postUser).get(getAllUser);
router.route("/:id").get(getUserById).put(updateUserByid);
export default router;
