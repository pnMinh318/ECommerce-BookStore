import {OrderModel} from '../models/OrderModel.js'

export const getOrders = async (req,res)=>{
    try {
        const data = await OrderModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
        
    }
}