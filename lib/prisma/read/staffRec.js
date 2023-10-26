import prisma from '../index.js'

// get all staff role and games from the database and return them as an array of objects
export async function getStaffRec() {
    try{
        const staff = await prisma.staff.findMany()
        return { staff }
    }
    catch(error){
        return { error }
    }
}
