const express = require('express')
const { connectToDb, getDb } = require('./db')

//init app and middleware
const app = express()

//db connection
let db

connectToDb((err) => {
  if (!err) {
    app.listen(5000, () => {
      console.log('APP is running on PORT 5000')
    })
    db = getDb()
  }
})

app.get('/codes', async (req, res) => {
  const data = await db.collection('authCodes').find().toArray()
  console.log('data', data)
})

app.delete('/delete', async (req, res) => {
  console.log('req.body', req.body)
  await db.collection('authCode').findOneAndDelete(req.body)
})
