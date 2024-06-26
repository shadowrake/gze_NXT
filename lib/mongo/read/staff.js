import clientPromise from ".";

let client
let db
let staff

// initialize the database connection
async function init() {
    if(db) return 
    try {
        client = await clientPromise
        db = await client.db("gzeDB")
        staff = await db.collection('Staff')
    } catch (error) {
        throw new Error(error)
    }
}

;(async () => {
    await init()
})()

// get all staff from the database and return them as an array of objects
export async function getStaff() {
    try {
        if(!staff) await init()
        const result = await staff
            .find({})
            .map(user => ({...user, _id: user._id.toString()}))
            .toArray()

        return {staff: result}
    } catch (error) {
        return {error:'Could not connect to staff collection'}
    }
}