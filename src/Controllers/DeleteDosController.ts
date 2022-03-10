import { Request, response, Response } from "express";
import { DeleteDosService } from "../Services/DeleteDosService";

class DeleteDosController{
  async handle(req: Request, res: Response){

    const { id } = req.params;

    const service = new DeleteDosService();
    try{
      await service.execute(id);
      return res.json({message: `tarefa de id:${id} foi apagado com sucesso!` });
    }catch (err) {
      return res.json({error: err.message})
    };
  }
}

export {DeleteDosController};