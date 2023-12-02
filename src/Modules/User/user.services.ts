import { IUser } from "./user.interface";
import User from "./user.model";

export const createUser = async (user: IUser) => {
  const newUser = await User.create(user);
      
  return newUser;
};
export const allUser = async () => {
  const result = await User.find().select(
    "username fullName age email address"
  );
  return result;
};
export const getAUser = async (id: number) => {
  const user = await User.isUserExist(id);
  if (user) {
    return user;
  } else {
    throw new Error("user Dosen't exist");
  }
};
export const updateUser = async (data: IUser, id:number) => {
  const user = await User.isUserExist(id);
  if (user) {
    const updatedUser = await User.findOneAndUpdate({userId:id},{$set:data},{new:true}).select("-password");
    return updatedUser;
  } else {
    throw new Error("user doesn't exist");
  }
 
};
