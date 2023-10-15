import clientPromise from "../index.js";

let client
let db
let news

// initialize the database connection
async function init() {
    if(db) return 
    try {
        client = await clientPromise
        db = await client.db()
        news = await db.collection('news')
    } catch (error) {
        throw new Error(error)
    }
}

;(async () => {
    await init()
})()

// get all news from the database and return them as an array of objects
export async function getNews() {
    try {
        if(!news) await init()
        const result = await news
            .find({})
            .map(user => ({...user, _id: user._id.toString()}))
            .toArray()

        return {news: result}
    } catch (error) {
        return {error:'Could not connect to staff collection'}
    }
}