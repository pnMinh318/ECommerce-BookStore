import express from 'express'
import {getUsers,createUser} from '../controllers/usersCtrl.js'



const usersRouter= express.Router()

usersRouter.get('/users',getUsers)
usersRouter.post('/users',createUser)


export default usersRouter


