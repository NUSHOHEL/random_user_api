import express from "express";
import { getAllUser, getUserById, postUser } from "./user.controller";

const router = express.Router();

router.route("/").post(postUser).get(getAllUser);
router.get('/:id',getUserById)
export default router;
