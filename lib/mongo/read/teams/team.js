import clientPromise from "../index.js";

let client
let db
let team

// initialize the database connection
async function init() {
    if(db) return 
    try {
        client = await clientPromise
        db = await client.db("gzeDB")
        team = await db.collection('teams')
    } catch (error) {
        throw new Error(error)
    }
}

;(async () => {
    await init()
})()

// get all players from the database and return them as an array of objects
export async function getTeam() {
    try {
        if(!team) await init()
        const result = await team
            .find({})
            .map(user => ({...user, _id: user._id.toString()}))
            .toArray()

        return {team: result}
    } catch (error) {
        return {error:'Could not connect to players collection'}
    }
}