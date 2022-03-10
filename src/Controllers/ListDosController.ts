import {Request, Response} from "express";
import prismaClient from "../prisma";

class ListDosController{
  async handle(req: Request, res: Response){
    try {
      const listTarefas = await prismaClient.tarefas.findMany();
      return res.json(listTarefas);
    } catch (error) {
      return res.status(400).json({message: "bad request!"})
    }

  }
}

export {ListDosController};