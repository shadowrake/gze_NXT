import { PrismaClient } from '@prisma/client/'
import { withAccelerate } from '@prisma/extension-accelerate'


// instantiate the PrismaClient
const prisma = new PrismaClient()
export default prisma