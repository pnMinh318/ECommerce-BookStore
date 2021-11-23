import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/UserModel.js";

const protect = asyncHandler(async (req, res, next) => {

    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        console.log(req.headers.authorization)
        try {
            token = req.headers.authorization.split(' ')[1] //lấy index sau khi split

            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await UserModel.findById(decodedToken.id).select('-password')
            
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('not authorized')
        }
    }
    else{
        res.status(401)
        throw new Error('Not authorized,no token found')
    }
})

export { protect }