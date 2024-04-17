import { Router } from "express";
import { reserveRoutes } from "@routes/reserve/reserve.routes";
import { userRoutes } from "@routes/user/user.routes";

const routes = Router();

routes.use("/user", userRoutes);

routes.use("/agenda", reserveRoutes);

export default routes;
