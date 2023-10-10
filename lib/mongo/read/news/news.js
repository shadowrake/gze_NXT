import clientPromise from "../index.js";

let client
let db
let news

async function init() {
    if(db) return 
    try {
        client = await clientPromise
        db = await client.db("gzeDB")
        news = await db.collection('news')
    } catch (error) {
        throw new Error(error)
    }
}

;(async () => {
    await init()
})()

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