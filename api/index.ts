import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const jwt = require('jsonwebtoken')
const app = express();
const port = 3000;

const prisma = new PrismaClient();



app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  return res.json(users);
});

app.post('/users', async (req: Request, res: Response) => {
    const { name, email } = req.body;
    try {
      const user = await prisma.user.create({
        data: {
          name,
        },
      });
      return res.json(user);
    } catch (e) {
      return res.status(400).json(e);
    }
  });

  app.put('/users/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name } = req.body;
    try {
      const user = await prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
        },
      });
      return res.json(user);
    } catch (e) {
      return res.status(400).json(e);
    }
  });

  app.delete('/users/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
  
    try {
      const user = await prisma.user.delete({
        where: {
          id,
        },
      });
      return res.json(user);
    } catch (e) {
      return res.status(400).json(e);
    }
  });

  app.get('/users/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      return res.json(user);
    } catch (e) {
      return res.status(400).json(e);
    }
  });
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//参考　https://reffect.co.jp/node-js/prisma-basic#i-2

