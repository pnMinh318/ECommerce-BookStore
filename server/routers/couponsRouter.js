import express from 'express'
import { getCoupons,createCoupon } from '../controllers/couponsCtrl.js'

const couponsRouter= express.Router()

couponsRouter.get('/coupons',getCoupons)
couponsRouter.post('/coupons',createCoupon)


export default couponsRouter