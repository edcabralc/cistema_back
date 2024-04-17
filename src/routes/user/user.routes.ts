import { Router } from "express";
import * as UserController from "@controllers/user.controller";

export const userRoutes = Router();

userRoutes.get("/", UserController.getAll);
userRoutes.get("/:id", UserController.getById);

userRoutes.post("/", UserController.create);

userRoutes.put("/:id", UserController.update);

userRoutes.delete("/", UserController.remove);
