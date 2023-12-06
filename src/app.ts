import cors from "cors";
import express from "express"

import userRoute from "./Modules/User/user.routes";



const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);


export default app;
