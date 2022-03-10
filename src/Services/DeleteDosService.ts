import { response } from "express";
import prismaClient from "../prisma";

class DeleteDosService{
  async execute(id){
    await prismaClient.tarefas.delete({
      where:{
        id,
      }
    })
    return response.json({message: "TODO delete sussesful"})
  }
}

export {DeleteDosService};