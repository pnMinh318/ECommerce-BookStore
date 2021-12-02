import { ObjectId } from 'bson'
import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    user: {
        type: ObjectId,
        //required: true
    },
    receiverName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    orderItems: {
        type: [],
        required: true
    },
    orderPrice: {
        type: Number,
        required: true
    },
   
    phone: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    shippingPrice: {
        type: Number,
        required: true,
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    isDelivered: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true }
)

export const OrderModel = mongoose.model('Order', orderSchema)