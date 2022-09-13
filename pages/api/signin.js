import mongoConnect from '../../../utils/mongoConnect.ts'
import User from '../../../utils/models/User.js'

const signIn = async (req, res) => {
  const name = req.body["Pseudonyme"]
  const email = req.body["Adresse email"]
  const password = req.body["Mot de passe"]
  const confirmPassword = req.body["Confirmation"]
  if (password !== confirmPassword) {
    res.status(403).json("mots de passes non identiques")
    return
  }
  const hashPassword = password
  mongoConnect()
  const newUser = new User({ name, email, hashPassword })
  newUser.save()
    .then(() => {
      res.status(201).json('bien recu et enregistré')
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
}

export default signIn