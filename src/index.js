import app from "./app.js";
import connectDb from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;

connectDb();
app.listen(port);
console.log("Server listening on port: ", port);
