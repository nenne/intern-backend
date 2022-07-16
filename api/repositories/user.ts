import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function CreateUser() {
    const result = await prisma.user.create({
      data: {
        name: String
      }
    })
    console.log(result)
  }
async function FindUser() {
    const result = await prisma.user.findMany({
      select:{
        id : true,
        name :true
      }
    });
    console.log(result);
}
  
  FindUser()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
  
  CreateUser()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())
     