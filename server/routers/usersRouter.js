import express from 'express'
import { registerUser, authUser, getUserProfile } from '../controllers/usersCtrl.js'
import { protect } from '../middleware/authMiddleware.js'


const usersRouter = express.Router()

usersRouter.post('/api/users/login', authUser)
usersRouter.route('/api/users/').post(registerUser)
usersRouter.route('/api/users/profile').get(protect,getUserProfile) // tham số thứ 1 dùng làm middleware

export default usersRouter


