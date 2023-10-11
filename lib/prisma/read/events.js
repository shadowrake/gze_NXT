import prisma from '../index.js'

export async function getEvents() {
    try{
        const event = await prisma.events.findMany()
        return { event }
    }
    catch(error){
        return { error }
    }
}

export async function getEventsById(id) {
    try{
        const event = await prisma.events.findUnique({where: { id }})
        return { event }
        }catch(error){
            return { error }
        }
    }