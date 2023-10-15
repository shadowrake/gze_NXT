import prisma from '../index.js'

// get all teamsinput from the database and return them as an array of objects
export async function getTeamsInput() {
    try{
        const teamsinput = await prisma.teamsinput.findMany()
        return { teamsinput }
    }
    catch(error){
        return { error }
    }
}
