import express from 'express'
import { getBooks,createBook, getBookByID } from '../controllers/productsCtrl.js'

const productsRouter= express.Router()



productsRouter.get('/api/products/:id',getBookByID)
productsRouter.get('/api/products',getBooks)
productsRouter.post('/products',createBook)
export default productsRouter