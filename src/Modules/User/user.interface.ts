import { Model } from "mongoose";


export interface IOrders {
    productName: string;
    price: number;
    quantity: number;
}
export interface IUser  {
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
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?:IOrders[];
}


export interface staticMethods extends Model<IUser> {
  isUserExist(id:number):Promise<IUser | null>;
}