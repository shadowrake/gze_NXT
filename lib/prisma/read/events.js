import prisma from '../index.js'

// get all events from the database and return them as an array of objects
export async function getEvents() {
    try{
        const event = await prisma.events.findMany()
        return { event }
    }
    catch(error){
        return { error }
    }
}

// get a single event by id from the database and return it as an object
export async function getEventsById(id) {
    try{
        const event = await prisma.events.findUnique({where: { id }})
        return { event }
        }catch(error){
            return { error }
        }
    }