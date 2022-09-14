import mongoConnect from '../../utils/mongoConnect.ts'
import User from '../../utils/models/User.js'
import bcrypt from "bcrypt"

const signIn = async (req, res) => {
  const body = JSON.parse(req.body)
  const name = body["Pseudonyme"]
  const email = body["Adresse email"]
  const password = body["Mot de passe"]
  const confirmPassword = body["Confirmation"]
  if (password !== confirmPassword) {
    res.status(403).json("mots de passes non identiques")
    return
  }
  mongoConnect()
  const saltRounds = 2
  bcrypt.hash(password, saltRounds, function(err, hashPassword) {
    const newUser = new User({ name, email, hashPassword })
    newUser.save()
      .then(() => {
        res.status(201).json('bien recu et enregistré')
      })
      .catch((err) => {
        if (/MongoServerError: E11000/.test(err)) {
          res.status(403).json({ message: "Cet e-mail est déjà pris" })
        }
        console.log(err)
        res.status(500).json({ error: err })
      })
  });
}

export default signIn