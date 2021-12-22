import { UserModel } from "../models/UserModel.js";
import asyncHandler from 'express-async-handler'
import generateToken from "../utils/generateToken.js";

//@ POST api/users/login
export const authUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email: email, password: password })
        //console.log(await user.matchPassword(password))
        if (user){// && (await user.matchPassword(password))) {
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
//@ POST api/users
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    console.log(name, email, password)
    const userExists = await UserModel.findOne({ email })
    console.log(userExists)
    if (userExists) {
        res.status(400).json({error:'User already existed'})
        throw new Error('User already existed')
    }
    //const user = await UserModel.create({ name: name, email: email, password: password, isAdmin: false }) // chưa xong
    const user = new UserModel({ name, email, password })
    await user.save()
    console.log(user)
    if (user) {
        res.status(201).json({ //201:something created
            _id: user._id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data ')
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


//@ GET api/users
//@ access private/admin
export const getUserByID = asyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.params.id)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})



// get all users
//@ GET api/users
//@ access private/admin
export const getUsers = asyncHandler(async (req, res) => {
    const users = await UserModel.find({})
    res.json(users)
})

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

export const updateUser = asyncHandler(async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        if (user) {
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            user.isAdmin = req.body.isAdmin
            // if(req.body.password){
            //     user.password= req.body.password || user.password
            // }
        }
        const updateUser = await user.save()
        res.status(200).json({
            _id: updateUser._id,
            name: updateUser.name, 
            email: updateUser.email,
             isAdmin: updateUser.isAdmin
        })
    } catch (error) {
        res.status(500).json({ error: error })
        console.log(error)
    }
})

//@ DELETE api/users/:id
//@ protect,admin
export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        if (user) {
            await user.remove()
            res.json({ message: 'User removed successfully' })
        } else {
            res.status(404)
            throw new Error('User not found')
        }
    } catch (error) {
        res.status(500).json({ error: error })
        console.log(error)
    }
}