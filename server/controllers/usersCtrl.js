import { UserModel } from "../models/UserModel.js";
import asyncHandler from 'express-async-handler'
import generateToken from "../utils/generateToken.js";

//@ POST api/users/login
export const authUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email: email })
        if (user) {// && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                email: user.email,
                name: user.name,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(401).json({ error: 'invalid email or password' })
        }
    } catch (error) {
        console.log(error)
    }
})

//@ GET api/users/profile
//@ access private
export const getUserProfile = asyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.user._id)

    if (!user) {
        res.status(404)
        throw new Error('No User found')
    } else {
        res.json({
            _id: user._id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
        })
    }
})

//@ POST api/users/login
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    console.log(name, email, password)
    const userExists = await UserModel.findOne({ email })
    console.log(userExists)
    if (userExists) {
        res.status(400)
        throw new Error('User already existed')
    }
    //const user = await UserModel.create({ name: name, email: email, password: password, isAdmin: false }) // chưa xong
    const user = new UserModel({name,email,password})
    await user.save()
    console.log(user)
    // if (user) {
    //     res.status(201).json({ //201:something created
    //         _id: user._id,
    //         email: user.email,
    //         name: user.name,
    //         isAdmin: user.isAdmin,
    //         token: generateToken(user._id)
    //     })
    // } else {
    //     res.status(400)
    //     throw new Error('Invalid User Data ')
    // }
})

export const getUsers = async (req, res) => {
    try {
        const user = new UserModel({
            username: 'user2',
            pwd: 'pass2',
            email: 'email2@gmail.com',
            phone: 3456145661,
            firstname: 'name',
            lastname: 'name',
            address: 'address',
            age: 21
        })
        await user.save()
        const data = await UserModel.find()
        res.status(200).json(data)
        console.log(data)
    } catch (error) {
        res.status(500).json({ error: error })
        console.log(error)
    }
}

export const createUser = async (req, res) => {
    try {
        const data = req.body()
        const newUser = new UserModel(data)

        await UserModel.save(newUser).then(() => console.log('insert successful'))
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ error: error })
        console.log(error)
    }
}

export const updateUser = async (req, res) => {
    try {
        const data = req.body()
        const updateUser = await UserModel.findOneAndUpdate({ _id: data._id }, user, { new: true }) //tham số thứ 3: nhận dữ liệu mới đc update 
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({ error: error })
        console.log(error)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const data = req.body()
        await UserModel.findOneAndRemove({ _id: data._id }, user) //tham số thứ 3: nhận dữ liệu mới đc update 
        res.status(200)
    } catch (error) {
        res.status(500).json({ error: error })
        console.log(error)
    }
}