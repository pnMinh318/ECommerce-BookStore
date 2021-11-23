import express from 'express'
import { getBooks,createBook, getBookByID } from '../controllers/productsCtrl.js'

const productsRouter= express.Router()



productsRouter.route('/api/products/:id').get(getBookByID)
productsRouter.route('/api/products').get(getBooks)
//productsRouter.post('/products',createBook)
export default productsRouter