import express from 'express'
import { registerUser, authUser, getUserProfile, getUsers, deleteUser,getUserByID,updateUser,updateUserProfile } from '../controllers/usersCtrl.js'
import { protect, isAdmin } from '../middleware/authMiddleware.js'


const usersRouter = express.Router()

usersRouter.route('/profile').put(protect,updateUserProfile).get(protect, getUserProfile)
usersRouter.post('/login', authUser)
usersRouter.route('/').post(registerUser).get(protect, isAdmin, getUsers)// tham số thứ 1 dùng làm middleware
usersRouter.route('/:id').get(protect,isAdmin,getUserByID).delete(protect, isAdmin, deleteUser).put(protect,isAdmin,updateUser)



export default usersRouter


