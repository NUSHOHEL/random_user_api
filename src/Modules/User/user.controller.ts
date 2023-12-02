import { Request, Response } from "express";
import { allUser, createUser, getAUser, updateUser } from "./user.services";

export const postUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await createUser(user);
    res.status(200).json({
      success: true,
      message: "studen is created successfully",
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};
export const getAllUser = async (req: Request, res: Response) => {
  const result = await allUser();
  res.json({
    success: true,
    message: "Users fetched successfully!",
    data: result,
  });
};
export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await getAUser(id);
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
    const id = Number(req.params.id);
    const updateData = req.body;
    const result = await updateUser(updateData, id);

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
