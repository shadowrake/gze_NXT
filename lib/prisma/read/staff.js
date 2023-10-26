import prisma from '../index.js'

// get all staff from the database and return them as an array of objects
export async function getStaff() {
    try{
        const staff = await prisma.staff.findMany()
        return { staff }
    }
    catch(error){
        return { error }
    }
}

export async function getTeamStaff() {
    try{
        const teamStaff = await prisma.teamStaff.findMany()
        return { teamStaff }
    }
    catch(error){
        return { error }
    }
}