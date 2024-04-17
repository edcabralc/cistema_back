// import "module-aliases/register";
import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./infra/config";
import routes from "@routes/routes";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(routes);

app.use((req, res) => res.status(404).send("Página não econtrada"));

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listen to port: ${process.env.PORT}`);
  });
});