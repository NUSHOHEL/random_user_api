import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";

async function main() {
  await mongoose
    .connect(process.env.url as string)
    .then(() => console.log("database connected"));
}
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});
main();
