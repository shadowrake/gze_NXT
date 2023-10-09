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

export async function getTeamsByName(name) {
    try{
        const team = await prisma.teams.findUnique({where: { name }})
        return { news }
        }catch(error){
            return { error }
        }
}