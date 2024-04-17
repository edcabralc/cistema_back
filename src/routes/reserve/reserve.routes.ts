import { Router } from "express";
import * as ReserveController from "@controllers/reserve.controller";

export const reserveRoutes = Router();

reserveRoutes.get("/", ReserveController.getAll);
reserveRoutes.get("/:id", ReserveController.getById);

reserveRoutes.post("/", ReserveController.create);

reserveRoutes.put("/:id", ReserveController.update);

reserveRoutes.delete("/", ReserveController.remove);
