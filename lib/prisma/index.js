import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

// instantiate the PrismaClient
const prisma = new PrismaClient().$extends(withAccelerate())
export default prisma