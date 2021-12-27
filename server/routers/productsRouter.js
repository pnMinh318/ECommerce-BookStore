import express from 'express'
import { getBooks, createProduct, getBookByID,getNewestBooks,
     deleteProductByID, updateProduct } from '../controllers/productsCtrl.js'
import { protect, isAdmin } from '../middleware/authMiddleware.js'
const productsRouter = express.Router()

productsRouter.route('/').get(getBooks).post(protect, isAdmin, createProduct)
productsRouter.get('/newest',getNewestBooks)
productsRouter.route('/:id').get(getBookByID).delete(protect, isAdmin, deleteProductByID).put(protect, isAdmin, updateProduct)
//productsRouter.post('/products',createBook)
export default productsRouter