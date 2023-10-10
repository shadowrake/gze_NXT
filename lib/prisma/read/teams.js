import prisma from '../index.js'

export async function getTeams() {
    try{
        const teams = await prisma.teams.findMany()
        return { teams }
    }
    catch(error){
        return { error }
    }
}

export async function getTeamsByName(id) {
    try{
        const team = await prisma.teams.findUnique({where: { id }})
        return { team }
        }catch(error){
            return { error }
        }
}