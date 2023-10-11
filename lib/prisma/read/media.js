import prisma from '../index.js'

export async function getMedia() {
    try{
        const media = await prisma.media.findMany()
        return { media }
    }
    catch(error){
        return { error }
    }
}