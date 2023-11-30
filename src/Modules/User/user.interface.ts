import { Model, Types } from "mongoose";

interface Iorder {
  productName: string;
  price: number;
  quantity: number;
}
export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies:Types.Array<string>;
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Types.DocumentArray<Iorder>;
}

export interface userModel extends Model<IUser> {
  isUserExist(id: number): Promise<IUser | null>;
}
