import prisma from '../index.js'

// get all media from the database and return them as an array of objects
export async function getMedia() {
    try{
        const media = await prisma.media.findMany()
        return { media }
    }
    catch(error){
        return { error }
    }
}

export async function getVideoMedia() {
    try{
        const videoMedia = await prisma.videoMedia.findMany()
        return { videoMedia  }
    }
    catch(error){
        return { error }
    }
}