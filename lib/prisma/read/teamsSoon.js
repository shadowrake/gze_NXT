import prisma from '../index.js'

export async function getTeamsSoon() {
    try{
        const teamsSoon = await prisma.teamsSoon.findMany()
        return { teamsSoon }
    }
    catch(error){
        return { error }
    }
}