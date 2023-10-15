import clientPromise from "../index.js";

let client
let db
let teamsSoon

// initialize the database connection
async function init() {
    if(db) return 
    try {
        client = await clientPromise
        db = await client.db("gzeDB")
        teamsSoon = await db.collection('teamsSoon')
    } catch (error) {
        throw new Error(error)
    }
}

;(async () => {
    await init()
})()

// get all players from the database and return them as an array of objects
export async function getTeamSoon() {
    try {
        if(!teamsSoon) await init()
        const result = await teamsSoon
            .find({})
            .map(user => ({...user, _id: user._id.toString()}))
            .toArray()

        return {teamsSoon: result}
    } catch (error) {
        return {error:'Could not connect to players collection'}
    }
}