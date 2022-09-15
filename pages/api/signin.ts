import mongoConnect from '../../utils/mongoConnect'
import User from '../../utils/models/User.js'
import bcrypt from "bcrypt"
import { NextApiRequest, NextApiResponse } from 'next'

const signIn = async (req: NextApiRequest, res: NextApiResponse) => {
  // const body = JSON.parse(req.body)
  const { body } = req
  const name = body["Pseudonyme"]
  const email = body["Adresse email"]
  const password = body["Mot de passe"]
  const confirmPassword = body["Confirmation"]
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
        // if (/MongoServerError: E11000/.test(err)) {
        //   res.status(403).json({ message: "cet e-mail est déjà pris" })
        //   return
        // }
        // console.dir(err)
        res.status(500).json({ message: err })
      })
  });
}

export default signIn

// export const config = {
//   api: {
//     bodyParser: true
//   }
// }
