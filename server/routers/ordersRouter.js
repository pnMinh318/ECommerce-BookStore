import {
    getOrders, createOrder, updateOrderToPaidPaypal,
    getOrderByID, getOrdersByUserID, updateOrderToDelivered
} from "../controllers/ordersCtrl.js";
import { isAdmin, protect } from '../middleware/authMiddleware.js'
import express from 'express'

const ordersRouter = express.Router()


ordersRouter.route('/myorders').get(protect, getOrdersByUserID)
ordersRouter.route('/:id/pay').put(protect, updateOrderToPaidPaypal)
ordersRouter.route('/:id/deliver').put(protect, isAdmin, updateOrderToDelivered)
ordersRouter.route('/:id').get(getOrderByID)
ordersRouter.route('/').post(protect, createOrder).get(protect, isAdmin, getOrders)
export default ordersRouter