import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => res.send("Servidor criado"));
routes.get("/ping", (req, res) => res.json({ pong: true }));

export default routes;
