import mongoose from 'mongoose'




const bookSchema = mongoose.Schema({
    name: String ,
    cover: Array,
    price: Number,
    quantity: Number,
    author: String,
    category: String,
    language: String,
    description: String,
})

export const BookModel = mongoose.model('Book', bookSchema)