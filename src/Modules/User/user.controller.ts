import { RequestHandler } from "express";
import * as userservice from "./user.services";
import { userValidator } from "./user.validation";

export const postUser: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    const validUser = userValidator.parse(user);
    const result = await userservice.createUser(validUser);
    res.status(200).json({
      success: true,
      message: "studen is created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const getAllUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await userservice.allUser();
    res.json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const getUserById: RequestHandler = async (req, res, next) => {
  const id = Number(req.params.userId);
  try {
    const result = await userservice.getAUser(id);
    res.json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const updateUserByid: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.userId);
    const updateData = req.body;
    const validUser = userValidator.parse(updateData);
    const result = await userservice.updateUser(validUser, id);

    res.json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.userId);

    const data = await userservice.deleteAUser(id);

    res.json({
      success: true,
      message: "User deleted successfully!",
      data: data.deletedCount ? null : "something went wrong!",
    });
  } catch (error) {
    next(error);
  }
};
export const addOrderById: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.userId);
    const newOrder = req.body;
    const result = await userservice.addOrder(id, newOrder);
    if (result.modifiedCount) {
      res.json({
        success: true,
        message: "Order created successfully!",
        data: null,
      });
    } else {
      throw new Error("User not Found!");
    }
  } catch (error) {
    next(error);
  }
};
export const findUserOrders: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.userId);
    const orders = await userservice.findOrders(id);
    res.json({
      success: true,
      message: "Order fetched successfully!",
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};
export const totalOrderPrice: RequestHandler = async (req, res, next) => {
  const id = Number(req.params.userId);
  try {
    const price = await userservice.totalPrice(id);
    res.json({
      success: true,
      message: "Total price calculated successfully!",
      data: price[0],
    });
  } catch (error) {
    next(error);
  }
};
