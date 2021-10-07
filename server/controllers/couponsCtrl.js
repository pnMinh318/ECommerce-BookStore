import {CouponModel} from '../models/CouponModel.js'

const couponsGenerator= ()=>{

}

export const getCoupons = async (req,res)=>{
    try {
        const data=await CouponModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const createCoupon = async (req,res)=>{
    try {
        const data=req.body()
        const coupon=new CouponModel(data)
        await CouponModel.save(coupon).then(console.log('insert successful'))
        res.status(200).json(coupon)
    } catch (error) {
        res.status(500).json({error:error})
    }
}