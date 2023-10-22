import prisma from '../index.js'

export async function getSlide() {
    try{
        const slide = await prisma.slideshowHeader.findMany()
        return { slide }
    }
    catch(error){
        return { error }
    }
}