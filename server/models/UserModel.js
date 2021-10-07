import mongoose from 'mongoose'




const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  pwd: { type: String, required: true,select : false },//select:false khi data query se khong co field nay
  role: { type: String, default: 'user' },
  email: { type: String, required: true },
  phone: { type: Number },
  firstname: String,
  lastname: String,
  address: String,
  age: Number
})

export const UserModel = mongoose.model('User', userSchema)
