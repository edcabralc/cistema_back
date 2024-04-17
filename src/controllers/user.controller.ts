import { Request, Response } from "express";

import User from "@models/user.model";

export const getAll = async (req: Request, res: Response) => {
  try {
    const list = await User.find({});
    return res.json(list);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao carregar registros" });
  }
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(500).json({ message: "Erro ao carregar registros" });
    }
    const list = await User.findById(id);

    if (!list) {
      return res.status(500).json({ message: "Nenhum registro localizado" });
    }

    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao carregar registros" });
  }
};

export const create = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  try {
    const list = await User.findOne({ email });

    if (list) {
      return res.status(500).json({ message: "Email já cadastrado" });
    }

    const user = await User.create({ name, email, password, role });

    return res.status(201).json({ user: user.name, email: user.email });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao cadastra usuário" });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(500).json({ message: "Usuário não localizado" });
    }

    await User.findByIdAndUpdate(id, userData);
    res.status(200).json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {}
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const list = await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "Removido com sucesso", list });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
