import http from "http";
import { app } from "../app";

const server = http.createServer(app);
const { PORT = 3000 } = process.env;
const serverMsg = `server started listening to PORT ${PORT}`;

server.listen(PORT);
server.on("listening", () => console.log(serverMsg));