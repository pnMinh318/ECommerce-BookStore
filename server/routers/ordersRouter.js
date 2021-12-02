import { getOrders, createOrder } from "../controllers/ordersCtrl.js";
import { protect } from '../middleware/authMiddleware.js'
import express from 'express'

const ordersRouter = express.Router()

ordersRouter.get('/orders', getOrders)
ordersRouter.route('/').post(protect, createOrder)


export default ordersRouter