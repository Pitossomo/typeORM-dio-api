import { Request, Response } from "express"

class UsersController {
  readAllUsers (request: Request, response: Response) {
    return response.json([
      { name: 'Pedro' },
      { name: 'Thiago' },
      { name: 'João' },
    ])
  }  
}

export { UsersController }