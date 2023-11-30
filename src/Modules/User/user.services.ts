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
export const getAUser = async (id: number) => {
  const user = await User.isUserExist(id);
  if (user) {
    return user;
  } else {
    throw new Error("user doesn't exist");
  }
};
