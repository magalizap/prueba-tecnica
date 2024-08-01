import express from 'express'
import { connectDB } from './config/db.config.js'
import passRoutes from './routes/input.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'


connectDB()
dotenv.config()

const app = express()
const port = process.env.PORT



app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', passRoutes)

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})