import { Router } from "express";
import * as ReserveController from "@controllers/reserve.controller";

export const reserveRoutes = Router();

reserveRoutes.get("/", ReserveController.getAll);
reserveRoutes.get("/:id", ReserveController.getById);
reserveRoutes.get("/reservas/:userId", ReserveController.getReserveByUserId);

reserveRoutes.post("/reservar/:userId", ReserveController.create);

reserveRoutes.put("/reserva/atualizar/:id", ReserveController.update);

reserveRoutes.delete("/reservar/remover/:id", ReserveController.remove);
