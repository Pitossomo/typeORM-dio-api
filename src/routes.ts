import { Router, Request, Response } from "express";
import { UsersController } from "./controllers/users.controller";

const router = Router()
const usersController = new UsersController()

router.get('/', (request: Request, response: Response) => {
  return response.json({message: "Hello world"})
})

router.get('/users', usersController.readAllUsers)

export default router 