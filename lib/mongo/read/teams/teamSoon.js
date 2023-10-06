import clientPromise from "../index.js";

let client
let db
let teamsSoon

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