import express from 'express'
import { getBooks,createBook } from '../controllers/booksCtrl.js'

const booksRouter= express.Router()




booksRouter.get('/books',getBooks)
booksRouter.post('/books',createBook)
export default booksRouter