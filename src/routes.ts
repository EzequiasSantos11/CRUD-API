import { Router } from "express";
import { CreateDosController } from "./Controllers/CreateDosController";
import { CreateUserController } from "./Controllers/CreateUserController";
import { DeleteDosController } from "./Controllers/DeleteDosController";
import { ListDosController } from "./Controllers/ListDosController";
import { UpDateDosController } from "./Controllers/UpDateDosController";

const router = Router();

router.get("/listdo", new ListDosController().handle);
router.post("/login", new CreateUserController().handle);
router.post("/createdo",  new CreateDosController().handle);
router.delete("/deletedo/:id",  new DeleteDosController().handle);
router.put("/updatedo/:id", new UpDateDosController().handle);

export {router};