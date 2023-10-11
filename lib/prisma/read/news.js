import prisma from '../index.js'

export async function getNews() {
    try{
        const news = await prisma.news.findMany({
            orderBy: {
                id: 'desc'
            }
        })
        return { news }
    }
    catch(error){
        return { error }
    }
}

export async function getNewsReverseLimitTen() {
    try{
        const news = await prisma.news.findMany({
            orderBy: {
                id: 'desc'
            },
            take: 9
        })
        return { news }
    }
    catch(error){
        return { error }
    }
}

export async function getNewsReverseLimitThree() {
    try{
        const news = await prisma.news.findMany({
            orderBy: {
                id: 'desc'
            },
            take: 3
        })
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