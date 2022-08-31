import mongoConnect from '../../utils/mongoConnect'
import Test from '../../utils/models/Test'

export default async (req, res) => {
  const { name, email } = req.body
  mongoConnect()
  const newUser = new Test({ name, email })
  newUser.save()
    .then(() => {
      res.status(201).json('bien recu et enregistré')
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
}