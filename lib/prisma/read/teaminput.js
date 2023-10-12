import prisma from '../index.js'

export async function getTeamsInput() {
    try{
        const teamsinput = await prisma.teamsinput.findMany()
        return { teamsinput }
    }
    catch(error){
        return { error }
    }
}
