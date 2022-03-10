import { Request, response, Response } from "express";
import { CreateDosService } from "../Services/CreateDosService";

class CreateDosController{
  async handle(req: Request, res: Response){

    const { title, description, deadline, user_email } = req.body;

    const service = new CreateDosService();
    try{
      const result = await service.execute(title, description, deadline);
      return res.json(result);
    }catch (err) {
      return res.json({error: err.message})
    };
  }
}

export {CreateDosController};