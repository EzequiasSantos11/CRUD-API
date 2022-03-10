import prismaClient from "../prisma";

class CreateDosService{
  async execute(title, description, deadline){
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