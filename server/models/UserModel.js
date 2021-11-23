import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'



const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      require: true
    },
    isAdmin: {
      type: Boolean,
      require: true,
      default: false
    },

  },
  { timestamps: true }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password) //this.password = user password đã được mã hóa
}

userSchema.pre('save', async function (next) {
  if (!this.isModified ('password')){
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})


export const UserModel = mongoose.model('User', userSchema)
// {
  //   name: {
  //     type: String,
  //     trim: true,
  //     required: true,
  //     maxlength: 32,
  //   },
  //   email: {
  //     type: String,
  //     trim: true,
  //     required: true,
  //     unique: true,
  //   },
  //   pwd: {
  //     type: String,
  //     required: true,
  //   },
  //   about: {
  //     type: String,
  //     trim: true,
  //   },
  //   phone: Number,
  //   role: {
  //     type: Number,
  //     default: 0,
  //   },
  //   sex: {
  //     type: Array,
  //     default: [],
  //   },
  //   address: {
  //     type: String,
  //     trim: true
  //   },
  // },