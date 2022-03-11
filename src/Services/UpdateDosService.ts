import prismaClient from "../prisma";
import { response } from "express";

class UpDateDosService{
  async execute( id: string, title: string, description: string, deadline: string){

    let user: any = prismaClient.tarefas.findFirst({
      where:{
        id: id,
      }
    })
    if(!user){
     return response.status(401).json({message: "TODO does not found!"})
    }else{
      user = await prismaClient.tarefas.update({
        where:{
          id: id,
        },
        data:{
          title: title,
          description: description,
          deadline: deadline
        }
      })
      return response.status(200).json({message: "sucess"})
    }
  }
}

export {UpDateDosService};