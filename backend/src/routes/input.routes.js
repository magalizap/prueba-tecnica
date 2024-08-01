import { Router } from "express";
import { Input } from "../models/input.model.js";

const routes = Router()

routes.post('/pass', async(req, res) => {
    try {
        const {value} = req.body
        const input = await Input.create({value})
        res.status(200).send(input)
    } catch (error) {
        res.status(400).json({message: error})
    }

})

export default routes