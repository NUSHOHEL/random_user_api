### Description

This is simple nodeJs rest api. it's created using nodeJs,mongoose, expressJs, typescript and Zod.

### Instructions

> 👉 **Step 1** - Clone the code from the GH repository (using `GIT`)

```bash
$ git clone https://github.com/NUSHOHEL/random_user_api.git
$ cd random_user_api
```
> 👉 **Step 2** - Change the mongodb connection string and port to your connection string and port

> 👉 **Step 3** - run the following command

```bash
tsc
npm start
```
Now you can do a lot of fun by using following API endpoint.keep in mind that for security reason password field is removed from every response. Also you have to strictly follow a data model which is given bellow 👇

### Follow this Data Model to create and update user
- `userId` (number): A unique identifier for the user.
- `username` (string): Denotes the user's unique username, ensuring uniqueness across the system.
- `password` (string): Represents the user's password. The password is securely stored in hashed form, utilizing the bcrypt algorithm for hashing.
- `fullName` (object): An object containing the first and last name of the user.
    - `firstName` (string): The first name of the user.
    - `lastName` (string): The last name of the user.
- `age` (number): The age of the user.
- `email` (string): The email address of the user.
- `isActive` (boolean): A flag indicating whether the user is active or not.
- `hobbies` (array of strings): An array containing the hobbies of the user.
- `address` (object): An object containing the street, city, and country of the user's address.
    - `street` (string): The street of the user's address.
    - `city` (string): The city of the user's address.
    - `country` (string): The country of the user's address.
- `orders` (array of objects): An array containing the orders of the user.(optional)
    - `productName` (string): The name of the product in the order.
    - `price` (number): The price of the product in the order.
    - `quantity` (number): The quantity of the product in the order.

### 1. Create a new user

        - Endpoint: **POST /api/users**
        - Request Body: put the data exactly as data model
        - Response: You will get newly created user but without password

### 2. Retrieve a list of all users

        - Endpoint: **GET /api/users**
        - Response: You will get all the user with this property `username`, `fullName`, `age`, `email`, `address` .

### 3. Retrieve a specific user by ID

    - Endpoint: **GET /api/users/:userId**
    - Response: You will get specific user without password

### 4. Update user information

    - Endpoint: **PUT /api/users/:userId**
    - Request Body: put the data exactly as data model
    - Response: you'll get updated user 

### 5. Delete a user

    - Endpoint: **DELETE /api/users/:userId**
    - Response: will give a success without data

### 6. Add new product to Order
    - Endpoint: **PUT /api/users/:userId/orders**
    - Request Body: Follow the Orders property
    - Response: in response you'll get a success message.

 ### 7. Get all orders of a specific user
      - Endpoint: **GET /api/users/:userId/orders**
      -Response: You'll get all the order


### 8. **Calculate Total Price of Orders for a Specific User**

    - Endpoint: **GET /api/users/:userId/orders/total-price**
    - Response: you'll get total price of all orders
