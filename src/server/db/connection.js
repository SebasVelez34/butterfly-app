import mongoose from 'mongoose';

const MONGO_DB_PASSWORD = "gBdKMWEVybrKYdxA"
const MONGO_DB_USER = "butterfly-admin"
const MONGO_DB_HOST = "butterfly.z2ejibs.mongodb.net"
const MONGO_DB_DATABASE = "butterfly"

//TODO: Allow get data from .env
//const { MONGO_DB_PASSWORD, MONGO_DB_USER, MONGO_DB_HOST, MONGO_DB_DATABASE } = process.env;

console.log("Connecting to Database");
mongoose.connect(
  `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}/${MONGO_DB_DATABASE}`,
  {
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority"
  }
).then(() => console.log("Database Connected"))
  .catch((error) => { throw new Error("Error connecting to database", error) });

export default mongoose;