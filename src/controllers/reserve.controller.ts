import { Request, Response } from "express";

import Reserve from "@models/reserve.model";

export const getAll = async (req: Request, res: Response) => {
  try {
    const list = await Reserve.find();
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao localizar agendamentos" });
  }
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);

  try {
    const reserve = await Reserve.findById(id);
    console.log(reserve);
    if (!reserve) {
      return res.status(404).json({ message: "Reserva não localizada" });
    }
    return res.json(reserve);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Reserva não localizada" });
  }
};

export const getReserveByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  console.log(userId);

  try {
    const reserve = await Reserve.find({ userId });
    console.log(reserve);
    if (!reserve) {
      return res.status(404).json({ message: "Reserva não localizada" });
    }
    return res.json(reserve);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Reserva não localizada" });
  }
};

export const create = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { date, time, students, classCode, book } = req.body;

  try {
    const reserve = await Reserve.create({
      userId,
      date,
      time,
      students,
      classCode,
      book,
    });

    return res.status(200).json(reserve);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    const reserve = await Reserve.findById(id);

    if (!reserve) {
      return res.status(500).json({ message: "Reserva não localizado" });
    }

    await Reserve.findByIdAndUpdate(id, userData);
    res.status(200).json({ message: "Reserva atualizada com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar registro" });
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await Reserve.findByIdAndDelete(id);
    return res.status(200).json({ message: "Removido com sucesso" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
