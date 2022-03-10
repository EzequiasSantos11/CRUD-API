import prismaClient from "../prisma";

class CreateDosService{
  async execute(title: string, description: string, deadline: string){
    const tarefa = await prismaClient.tarefas.create({
      data:{
        title,
        deadline,
        description,        
      }
    })
    return tarefa;
  }
}

export {CreateDosService};