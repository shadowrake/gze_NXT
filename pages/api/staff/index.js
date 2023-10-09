import {getNews} from '@lib/prisma/read/news.js'

export default async function handler(req, res) {
    if(req.method === 'GET'){
        try{
            const {news, error} = await getNews()
            if(error) throw new Error(error)
            return res.status(200).json(news)
        }
        catch(error){
            return res.status(500).json({error: error.message})
        }
    }

    res.setHeader('Allow', ['GET'])
    res.status(425).end({message: `Method ${req.method} not allowed`})
}
