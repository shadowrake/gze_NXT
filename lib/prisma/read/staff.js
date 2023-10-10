import prisma from '../index.js'

export async function getStaff() {
    try{
        const staff = await prisma.staff.findMany()
        return { staff }
    }
    catch(error){
        return { error }
    }
}
