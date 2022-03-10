/*
--Receber email e senha
--Verificar se o usuário existe no DB
----SIM = gerar um token
----NÃO = criar um user no DB e gerar um token
--Retornar o token com as infos do user logado.
*/

import prismaClient from "../prisma";
import {sign} from "jsonwebtoken";

class CreateUserService{
  async execute(email, password){

    let user = prismaClient.user.findFirst({
      where:{
        email: email,
        password: password
      }
    })
    if(!user){
      user = await prismaClient.user.create({
        data:{
          id: user.id,
          email,
          password,
        }
      })
    }
    const token = sign({
      user:{
        email: user.email,
        id: user.id,
      }
    },
    process.env.JWT_SECRET,
    {
      subject: "1",
      expiresIn: "1d"
    }
    )
    return {token, user};
  }
}

export {CreateUserService};