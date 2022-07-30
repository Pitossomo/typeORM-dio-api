import { Router, Request, Response } from "express";
import { UsersController } from "./controllers/users.controller";

const router = Router()
const usersController = new UsersController()

router.get('/', (_req: Request, res: Response) => res.json({message: "Hello world"}))

router.get('/users', usersController.readAllUsers)

router.post('/users', usersController.createUser)

export default router 