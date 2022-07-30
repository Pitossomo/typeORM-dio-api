import { users } from "../database"
import { User } from "../entities/User"

export class UsersService {
  create({ name, email }): User {
    
    const newUser = new User(name, email)
    users.push(newUser)

    return newUser
  }
}