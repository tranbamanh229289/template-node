import Server from "./server";
import dotenv from "dotenv";

dotenv.config();

const port: string | number = process.env.PORT || 3000;
const server = new Server(port);
server.listen();
