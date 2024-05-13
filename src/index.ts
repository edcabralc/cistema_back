import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import { connectDB } from "./infra/config";
import { corsMiddleware } from "middlewares/cors.middlewares";
import routes from "@routes/routes";

dotenv.config();

const app = express();

const allowOrigins = [process.env.URL_FRONT as string];

const options: cors.CorsOptions = {
  origin: allowOrigins,
};

app.use(corsMiddleware);
app.use(cors(options));

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
