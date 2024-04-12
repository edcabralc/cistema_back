import { Request, Response } from "express";
import User from "@models/user.model";

export const getAll = async (req: Request, res: Response) => {
  const list = await User.find({});
  res.json({ list });
};
export const getOne = () => {};
export const edit = () => {};
export const update = () => {};
export const remove = () => {};
