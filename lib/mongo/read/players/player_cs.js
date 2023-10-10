import clientPromise from "../index.js";

let client
let db
let players

async function init() {
    if(db) return 
    try {
        client = await clientPromise
        db = await client.db("gzeDB")
        players = await db.collection('players_cs')
    } catch (error) {
        throw new Error(error)
    }
}

;(async () => {
    await init()
})()

export async function getPlayers() {
    try {
        if(!players) await init()
        const result = await players
            .find({})
            .map(user => ({...user, _id: user._id.toString()}))
            .toArray()

        return {players: result}
    } catch (error) {
        return {error:'Could not connect to players collection'}
    }
}