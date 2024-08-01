import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB is connect'))
    .catch((error) => console.log(error))
}