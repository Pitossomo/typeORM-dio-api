import express, { Request, Response } from "express";

const server = express()

server.get('/', (request: Request, response: Response) => {
  return response.json({message: "Hello world"})
})

server.get('/users', (request: Request, response: Response) => {
  return response.json([
    { name: 'Pedro' },
    { name: 'Thiago' },
    { name: 'João' },
  ])
})

server.listen(3000, () => {
  console.log('Servidor on na porta 3000')
})