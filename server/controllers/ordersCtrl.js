import { OrderModel } from '../models/OrderModel.js'

export const getOrders = async (req, res) => {
    try {
        const data = await OrderModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)

    }
}
export const createOrder = async (req, res) => {
    try {
        const {
            user,
            orderItems,
            orderPrice,
            name,
            email,
            phone,
            paymentMethod,
            shippingPrice,
            shippingAddress,
            region
        } = req.body
        const newOrder = new OrderModel({
            user: user,
            receiverName: name,
            email: email,
            orderItems: orderItems,
            orderPrice: orderPrice,
            phone: phone,
            region: region,
            paymentMethod: paymentMethod,
            shippingAddress: shippingAddress,
            shippingPrice: shippingPrice,
            isPaid: false,
            isDelivered: false,
        })
        console.log('neworder',newOrder)
        const createdOrder = await newOrder.save()
        res.status(201).json(createdOrder) //201:something was created
    } catch (error) {
        console.log(error)
        res.status(500).json(error)

    }
}