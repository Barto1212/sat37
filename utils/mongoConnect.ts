import mongoose from 'mongoose'

const mongoConnect = async () => {
  const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_CLUSTER_ADRESS } = process.env
  const username = encodeURIComponent(MONGODB_USERNAME)
  const password = encodeURIComponent(MONGODB_PASSWORD)
  const cluster = MONGODB_CLUSTER_ADRESS
  const uri =
    `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`
  mongoose.connect(uri)
}

export default mongoConnect