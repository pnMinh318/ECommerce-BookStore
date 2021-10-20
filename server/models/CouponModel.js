import mongoose from 'mongoose'
const couponSchema = mongoose.Schema({
    code: { type: String, unique: true },
    value: Number,
    expireDate: Date
})

// const CartItemSchema = new mongoose.Schema(
//     {
//       product: { ref: 'Product' },
//       name: String,
//       price: Number,
//       count: Number,
//       user: { ref: 'User' },
//     },
//     { timestamps: true }
//   );
  
export const CouponModel= mongoose.model('Coupon',couponSchema)