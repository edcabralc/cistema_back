import { Request, Response } from "express";
import Reserve from "@models/reserve.model";

export const getAll = async (req: Request, res: Response) => {
  const list = await Reserve.find({});

  res.json({ agenda: list });
};
export const getOne = () => {};
export const edit = () => {};
export const update = () => {};
export const remove = () => {};
