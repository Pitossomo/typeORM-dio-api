import { Request, Response } from "express"

class UsersController {
  createUser(req: Request, res: Response) {
    const name = req.body.name
    res.json({ message: `User ${name} created`})
  }

  readAllUsers (_req: Request, res: Response) {
    return res.json([
      { name: 'Pedro' },
      { name: 'Thiago' },
      { name: 'João' },
    ])
  }  
}

export { UsersController }