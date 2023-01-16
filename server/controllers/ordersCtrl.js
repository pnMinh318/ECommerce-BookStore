import { OrderModel } from '../models/OrderModel.js'
import { ProductModel } from '../models/ProductModel.js'
import { sendEmail } from '../utils/sendEmail.js'
export const getOrders = async (req, res) => {
    try {
        const data = await OrderModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getOrderByID = async (req, res) => {
    try {
        const data = await OrderModel.findById(req.params.id)
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.json({ message: 'Order not found' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getOrdersByUserID = async (req, res) => {
    try {
        const data = await OrderModel.find({ user: req.user._id })
        if (data) {
            res.status(200).json(data)
        } else {
            res.json({ message: 'My orders not found' })
        }
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
        console.log('neworder', newOrder)
        const createdOrder = await newOrder.save()
        if (createdOrder) {
            res.status(201).json(createdOrder)
            sendEmail(email, createdOrder)
        } else {
            res.status(404)
            throw new Error('Order Not Created')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)

    }
}
export const updateOrderToDelivered = async (req, res) => {
    try {
        const data = await OrderModel.findById(req.params.id)
        data.orderItems.forEach(async item => {
            const x = await ProductModel.findById(item._id)
            console.log('item stock trước khi save', x.name, ':', x.stock)
            x.stock = x.stock - item.cartQuantity
            const update = await x.save()
            console.log('item stock sau khi save', update.name, ':', update.stock)
        });
        if (data) {
            console.log(data.paymentMethod)
            if (data.paymentMethod !== 'COD') {
                data.isDelivered = true
                data.deliveredDate = Date.now()
            } else {
                data.isDelivered = true
                data.deliveredDate = Date.now()
                data.isPaid = true
                data.paidDate = Date.now()
            }
            const updatedOrder = await data.save()
            res.status(201).json(updatedOrder)
        }
        else {
            res.status(404)
            throw new Error('Order not found')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateOrderToPaidPaypal = async (req, res) => {
    try {
        const data = await OrderModel.findById(req.params.id)
        if (data) {
            data.isPaid = true
            data.paidDate = Date.now()
            data.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                email_address: req.body.payer.email_address,
                update_time: req.body.update_time
            }
            const updatedOrder = await data.save()
            res.json(updatedOrder)
        }
        else {
            res.status(404)
            throw new Error('Order not found')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteOrder = async (req, res) => {
    try {
        const data = await OrderModel.findById(req.params.id)
        if (data) {
            await data.remove()
            res.json({ message: 'Orders remove successfully' })
        }
        else {
            res.status(404).json({ message: 'Order not found' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}