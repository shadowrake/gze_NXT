import prisma from '../index.js'

// get all content creators from the database and return them as an array of objects
export async function getCC() {
    try{
        const cc = await prisma.cc.findMany()
        return { cc }
    }
    catch(error){
        return { error }
    }
}

// get a single content creator by id from the database and return it as an object
export async function getCCById(id) {
    try{
        const cc = await prisma.cc.findUnique({where: { id }})
        return { cc }
        }catch(error){
            return { error }
        }
    }