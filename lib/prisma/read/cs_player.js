import prisma from '../index.js'

export async function getCsPlayer() {
    try{
        const playerCS = await prisma.cs_player.findMany()
        return { playerCS }
    }
    catch(error){
        return { error }
    }
}