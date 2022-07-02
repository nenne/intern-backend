import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const prisma = new PrismaClient();

const router = Router();

router.get("/1", (req, res, next) => {
  res.json("number of user is 1");
});

router.get("/2", (req, res, next) => {
  res.json("number of user is 2");
});

export default router;

//createuser signupに使う
//finduser loginに使う