const { MongoClient } = require('mongodb')

let dbConnection

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
