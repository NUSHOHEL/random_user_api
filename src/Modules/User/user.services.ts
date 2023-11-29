import { IUser } from "./user.interface";
import User from "./user.model";

export const createUser = async (user: IUser) => {
  const newUser = await User.create(user);
  return newUser;
};
export const allUser = async () => {
  const result = await User.find();
  return result;
};
export const getAUser = async (id:string) => {
  console.log(id)
  const result = await User.findOne({userId:id});
  return result;
};
