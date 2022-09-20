import { Schema, model, models } from "mongoose";

const userSchema = Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashPassword: {
    type: String,
    required: true
  }
})

const User = models.User || model('User', userSchema)

export default User
