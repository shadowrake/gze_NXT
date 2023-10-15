import prisma from '../index.js'

// get all teams from the database and return them as an array of objects
export async function getTeams() {
    try{
        const teams = await prisma.teams.findMany()
        return { teams }
    }
    catch(error){
        return { error }
    }
}

// get a single team from the database and return it as an object
export async function getTeamsById(id) {
    try{
        const team = await prisma.teams.findUnique({where: { id }})
        return { team }
        }catch(error){
            return { error }
        }
}