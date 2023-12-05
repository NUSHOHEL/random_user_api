import express from "express";

import * as userController from "./user.controller"

const router = express.Router();

router.route("/").post(userController.postUser).get(userController.getAllUser);
router
  .route("/:userId")
  .get(userController.getUserById)
  .put(userController.updateUserByid)
  .delete(userController.deleteUser);
router.route("/:userId/orders").put(userController.updateUserOrders).get(userController.findUserOrders);
router.get("/:userId/orders/total-price",userController.totalOrderPrice)
export default router;
