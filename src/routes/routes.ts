import { Router } from "express";

import * as UserController from "@controllers/user.controller";
import * as ReserveController from "@controllers/reserve.controller";

const routes = Router();

routes.get("/", (req, res) => res.send("Servidor criado"));

routes.get("/professores", UserController.getAll);
routes.get("/agenda", ReserveController.getAll);

routes.get("/", (req, res) => res.send("Servidor criado"));

routes.get("/ping", (req, res) => res.json({ pong: true }));

export default routes;
