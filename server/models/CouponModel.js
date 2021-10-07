import mongoose from 'mongoose'
const couponSchema = mongoose.Schema({
    code: { type: String, unique: true },
    value: Number,
    expireDate: Date
})

export const CouponModel= mongoose.model('Coupon',couponSchema)