import { IOrders, IUser } from "./user.interface";
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
export const updateUser = async (data: IUser, id: number) => {
  const user = await User.isUserExist(id);

  if (user) {
    const updatedUser = await User.findOneAndUpdate(
      { userId: id },
      { $set: data },
      { new: true }
    ).select("-password");
    return updatedUser;
  } else {
    throw new Error("user doesn't exist");
  }
};
export const deleteAUser = async (id: number) => {
  const user = await User.isUserExist(id);
  if (user) {
    return await User.deleteOne({ userId: id });
  } else {
    throw new Error("user doesn't exist");
  }
};
export const updateOrder = async (id: number, updatedOrder: IOrders) => {
  const user = await User.isUserExist(id);
  if (user) {
    return await User.updateOne(
      { userId: id },
      { $push: { orders: updatedOrder } },
      { runValidators: true }
    );
  } else {
    throw new Error("user doesn't exist");
  }
};
export const findOrders = async (id: number) => {
  const user = await User.isUserExist(id);
  if (user) {
    return await User.findOne({ userId: id }, "orders -_id");
  } else {
    throw new Error("user doesn't exist");
  }
};
export const totalPrice = async (id: number): Promise<{ totalOrderPrice: number }[]> => {
  const user = await User.isUserExist(id);
  if (user) {
    const result = await User.aggregate([
      { $match: { userId: id } },
      { $unwind: "$orders" },
      {
        $group: {
          _id: "$userId",
          totalOrderPrice: {
            $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
          },
        },
      },
      { $project: { _id: 0 } },
    ]);
    return result;
  } else {
    throw new Error("user doesn't exist");
  }
};
