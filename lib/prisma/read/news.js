import prisma from '../index.js'

export async function getNews() {
    try{
        const news = await prisma.news.findMany()
        return { news }
    }
    catch(error){
        return { error }
    }
}

export async function getNewsById(id) {
    try{
        const news = await prisma.news.findUnique({where: { id }})
        return { news }
        }catch(error){
            return { error }
        }
    }