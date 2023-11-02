import prisma from '../index.js'

// get all players from the database and return them as an array of objects
export async function getMatches() {
    try{
        const matches = await prisma.matches.findMany()
        return { matches }
    }
    catch(error){
        return { error }
    }
}

// get a single player by id from the database and return it as an object
export async function getMatchesId(id) {
    try{
        const matches = await prisma.matches.findUnique({where: { id }})
        return { matches }
        }catch(error){
            return { error }
        }
    }

export async function getMatchesLimitFour() {
    try{
        const matches = await prisma.matches.findMany({
            take: 3
         })
        return { matches }
    }
    catch(error){
        return { error }
    }
}