import { Schema, model } from "mongoose";

const inputSchema = new Schema({
    value: {
        type: String,
        required: true
    }
})

export const Input = model('input', inputSchema)