import cors from "cors";
import express from "express"

import userRoute from "./Modules/User/user.routes";
import { errorHandler } from "./middleware/errorHandler";



const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);

app.use(errorHandler)

export default app;
