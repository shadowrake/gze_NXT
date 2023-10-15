import prisma from '../index.js'

// get all news from the database and return them as an array of objects in decending order
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

// get the last 9 object-news from the database and return them as an array of objects
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

// get the last 3 object-news from the database and return them as an array of objects
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

// get a single news by id from the database and return it as an object
export async function getNewsById(id) {
    try{
        const news = await prisma.news.findUnique({where: { id }})
        return { news }
        }catch(error){
            return { error }
        }
    }