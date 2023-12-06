import { NextFunction, Request, Response } from "express";
import * as userservice from "./user.services";
import { userValidator } from "./user.validation";

export const postUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
export const getAllUser = async (req: Request, res: Response) => {
  const result = await userservice.allUser();
  res.json({
    success: true,
    message: "Users fetched successfully!",
    data: result,
  });
};
export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.userId);
  try {
    const result = await userservice.getAUser(id);
    res.json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error) {
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
export const updateUserByid = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.userId);
    const updateData = req.body;
    const result = await userservice.updateUser(updateData, id);

    res.json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error) {
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

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.userId);

    await userservice.deleteAUser(id);

    res.json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error) {
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
export const addOrderById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.userId);
    const newOrder = req.body;
    await userservice.addOrder(id, newOrder);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error:any) {
    console.log(error.name);
    res.json({
      success: false,
      message: `${
        error.name === "ValidationError"
          ? error.name
          : error.name === "CastError" && error.name
      }`,
      error: {
        code: 404,
        description: `${error.message}`,
      },
    });
  }
};
export const findUserOrders = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.userId);
    const orders = await userservice.findOrders(id);
    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
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
export const totalOrderPrice = async (req: Request, res: Response) => {
  const id = Number(req.params.userId);
  try {
    const price = await userservice.totalPrice(id);
    res.json({
      success: true,
      message: "Total price calculated successfully!",
      data: price[0],
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error,
      error: {
        code: 404,
        description: error,
      },
    });
  }
};
