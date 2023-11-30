import { Request, Response } from "express";
import { allUser, createUser, getAUser } from "./user.services";

export const postUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
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
  res.send(result);
};
export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await getAUser(id);
    res.json(result);
  } catch (error) {
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
