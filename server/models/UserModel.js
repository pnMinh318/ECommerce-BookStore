import mongoose from 'mongoose'




const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    phone: Number,
    role: {
      type: Number,
      default: 0,
    },
    sex: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
      trim: true
    },
  },
  { timestamps: true }
)

export const UserModel = mongoose.model('User', userSchema)
