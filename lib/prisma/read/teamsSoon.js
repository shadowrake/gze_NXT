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

export async function getTeamsSoonById(id) {
    try{
        const teamSoon = await prisma.teamsSoon.findUnique({where: { id }})
        return { teamSoon }
        }catch(error){
            return { error }
        }
}