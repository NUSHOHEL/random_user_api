import { z } from "zod";

export const userValidator = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: z.object({ firstName: z.string(), lastName: z.string() }),
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  orders: z
    .array(
      z.object({
        productName: z.string({
          required_error: "ProductName is required",
          invalid_type_error: "ProductName must be a String",
        }),
        price: z.number({
          required_error: "Price is required",
          invalid_type_error: "Price must be a number",
        }),
        quantity: z.number({
          required_error: "Quantity is required",
          invalid_type_error: "Quantity must be a number",
        }),
      })
    )
    .optional(),
});
