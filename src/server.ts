import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./infra/config";
import routes from "./routes/routes";

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use(routes);
server.use((req, res) => res.status(404).send("Página não econtrada"));

connectDB().then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Listen to port: ${process.env.PORT}`);
  });
});
