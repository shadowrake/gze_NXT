import prisma from '../index.js'

// get all sponsors from the database and return them as an array of objects
export async function getSponsors() {
    try{
        const spons = await prisma.sponsors.findMany()
        return { spons }
    }
    catch(error){
        return { error }
    }
}