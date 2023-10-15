import prisma from '../index.js'

// get all players from the database and return them as an array of objects
export async function getCsPlayer() {
    try{
        const playerCS = await prisma.players.findMany()
        return { playerCS }
    }
    catch(error){
        return { error }
    }
}