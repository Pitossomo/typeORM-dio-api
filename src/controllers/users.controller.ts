import { Request, Response } from "express"
import { users } from "../database"
import { UsersService } from "../services/users.service"

class UsersController {
  usersService = new UsersService() 
  
  createUser(req: Request, res: Response) {
    const { name, email } = req.body
    
    if (!name || name.length === 0 || !email || email.length === 0) {
      res.status(400).json({ message: "Preencha todos os campos" })
    } 
     
    res.status(201).json({ message: `User ${name} created`})
  }

  readAllUsers (_req: Request, res: Response) {
    return res.status(200).json(users)
  }  
}

export { UsersController }