const { MongoClient } = require('mongodb')
const CONNECTION_URL =
  'mongodb+srv://maliheh:m.n.1381828981@cluster0.mrzaq.mongodb.net/meetups?retryWrites=true&w=majority'

async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(CONNECTION_URL)
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const response = await meetupsCollection.find().toArray()
    client.close()
    res.status(200).json(response)
  }
}

export default handler
