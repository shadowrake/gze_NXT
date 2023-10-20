import prisma from '../index.js'

export async function getAchiv() {
    try{
        const achiv = await prisma.team_achievements.findMany()
        return { achiv }
    }
    catch(error){
        return { error }
    }
}