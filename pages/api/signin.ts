import mongoConnect from '../../utils/mongoConnect'
import User from '../../utils/models/User.js'
import bcrypt from "bcrypt"
import { NextApiRequest, NextApiResponse } from 'next'
import { inputFormArray } from '../../utils/models/inputForm'
import { checkAllForm } from '../../utils/models/inputForm'

const signIn = async (req: NextApiRequest, res: NextApiResponse) => {
  const checkResult = checkAllForm(req.body)
  if (!checkResult.testOk) {
    console.log('dans la place')
    const { message } = checkResult
    res.status(403).json({ message })
    return
  }
  const { name, email, password, confirmPassword } = req.body
  if (password !== confirmPassword) {
    res.status(403).json({ message: "mots de passes non identiques" })
    return
  }
  mongoConnect()
  const saltRounds = 2
  bcrypt.hash(password, saltRounds, (err, hashPassword: string) => {
    const newUser = new User({ name, email, hashPassword })
    newUser.save()
      .then(() => {
        res.status(201).json('bien recu et enregistré')
      })
      .catch((err) => {
        if (/MongoServerError: E11000/.test(err)) {
          res.status(403).json({ message: "cet e-mail est déjà pris" })
          return
        }
        // console.dir(err)
        res.status(500).json({ message: JSON.stringify(err.errors) })
      })
  });
}

export default signIn
