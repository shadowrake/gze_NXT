import prisma from '../index.js'

// get all teamsSoon from the database and return them as an array of objects
export async function getTeamsSoon() {
    try{
        const teamsSoon = await prisma.teamsSoon.findMany()
        return { teamsSoon }
    }
    catch(error){
        return { error }
    }
}

// get a single teamsSoon from the database and return it as an object
export async function getTeamsSoonById(id) {
    try{
        const teamSoon = await prisma.teamsSoon.findUnique({where: { id }})
        return { teamSoon }
        }catch(error){
            return { error }
        }
}