import { MongoClient } from 'mongodb';

// Connection URL
const URI = process.env.MONGODB_URI_Read
const options = {};

// Use connect method to connect to the Server
if(!URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env')
}

let client = new MongoClient(URI, options);
let clientPromise

// check if the client connection is already exists
if (process.env.NODE_ENV !== 'production') {
    if(!global._mongoClientPromise){
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    clientPromise = client.connect();
}

export default clientPromise;

