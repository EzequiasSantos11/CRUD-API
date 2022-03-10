import { Request, response, Response } from "express";
import { UpDateDosService } from "../Services/UpdateDosService";

class UpDateDosController{
  async handle(req: Request, res: Response){
    const {id} = req.params;
    const { title, description, deadline } = req.body;

    const service = new UpDateDosService();
    try{
      const result = await service.execute(id, title, description, deadline);
      return res.json(result);
    }catch (err) {
      return res.json({error: err.message})
    };
  }
}

export {UpDateDosController};