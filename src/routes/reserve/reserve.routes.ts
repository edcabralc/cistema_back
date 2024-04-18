import { Router } from "express";
import * as ReserveController from "@controllers/reserve.controller";

export const reserveRoutes = Router();

reserveRoutes.get("/", ReserveController.getAll);
reserveRoutes.get("/:id", ReserveController.getById);
reserveRoutes.get("/reservas/:userId", ReserveController.getUserById);

reserveRoutes.post("/reserva/:userId", ReserveController.create);

reserveRoutes.put("/reserva/:userId", ReserveController.update);

reserveRoutes.delete("/reserva/:userId", ReserveController.remove);
