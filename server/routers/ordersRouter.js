import { getOrders } from "../controllers/ordersCtrl.js";
import express from 'express'

const ordersRouter = express.Router()

ordersRouter.get('/orders',getOrders)


export default ordersRouter