import prisma from '../index.js'

export async function getMatches() {
    try{
        const matches = await prisma.matches.findMany()
        return { matches }
    }
    catch(error){
        return { error }
    }
}

export async function getMatchesId(id) {
    try{
        const matches = await prisma.matches.findUnique({where: { id }})
        return { matches }
        }catch(error){
            return { error }
        }
    }