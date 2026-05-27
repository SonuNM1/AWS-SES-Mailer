import mongoose from "mongoose"

const templateSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true 
    }, 
    subject: {
        type: String, 
        required: true 
    }, 
    body: {
        type: String, 
        required: true 
    }, 
    isActive: {
        type: Boolean, 
        default: true
    }
}, {
    timestamps: true 
})

export const Template = mongoose.model("Template", templateSchema) ;