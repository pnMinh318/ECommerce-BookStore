import { UserModel } from "../models/UserModel.js";

export const getUsers = async (req, res) => { 
    try {
        const user = new UserModel({
            username :'user2',
            pwd: 'pass2',
            email: 'email2@gmail.com',
            phone: 3456145661,
            firstname:'name',
            lastname:'name',
            address: 'address',
            age: 21
        })
        await user.save()
        const data = await UserModel.find()
        res.status(200).json(data)
        console.log(data)
    } catch (error) {
        res.status(500).json({error:error})
        console.log(error)
    }
}

export const createUser = async (req,res) => {
    try {
        const data = req.body()
        const newUser = new UserModel(data)

        await UserModel.save(newUser).then(() => console.log('insert successful'))
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({error:error})
        console.log(error)
    }
}

export const updateUser = async (req,res) => {
    try {
        const data = req.body()
        const updateUser= await UserModel.findOneAndUpdate({_id : data._id},user,{new : true}) //tham số thứ 3: nhận dữ liệu mới đc update 
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({error:error})
        console.log(error)
    }
}

export const deleteUser = async (req,res) => {
    try {
        const data = req.body()
        await UserModel.findOneAndRemove({_id : data._id},user) //tham số thứ 3: nhận dữ liệu mới đc update 
        res.status(200)
    } catch (error) {
        res.status(500).json({error:error})
        console.log(error)
    }
}