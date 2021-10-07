import { ObjectId } from 'bson'
import mongoose from 'mongoose'

const orderSchema=mongoose.Schema({
    user:ObjectId,
    items : [],
    totalprice: Number,
    createDate: Date,
    deliveryStatus: String,
    deliveryAddress: String,
    
})

export const OrderModel=mongoose.model('Order',orderSchema)