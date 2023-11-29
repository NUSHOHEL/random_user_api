import { Request, Response } from "express";
import { allUser, createUser, getAUser } from "./user.services";

export const postUser = async (req: Request, res: Response) => {
  const user = req.body;
  const result = await createUser(user);
  res.status(200).json({
    success: true,
    message: "studen is created successfully",
    data: result,
  });
};
export const getAllUser = async (req: Request, res: Response) => {
  const result = await allUser();
  res.send(result);
};
export const getUserById =async (req:Request, res:Response) => {
  const id = req.params.id;
  const result = await getAUser(id);
  console.log(result)
}