const { MongoClient } = require('mongodb')

let dbConnection
const username = 'dbUser123'
const password = 'dbUser123'
const cluster = 'authCodes'
const dbname = 'ironHorse'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(
      `mongodb+srv://dbUser123:passWORD123@cluster0.nnjfa.mongodb.net/ironHorse?retryWrites=true&w=majority`
    )
      .then((client) => {
        dbConnection = client.db()
        return cb()
      })
      .catch((err) => {
        console.log('err', err)
        return cb(err)
      })
  },
  getDb: () => dbConnection,
}
