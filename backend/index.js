const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const cors = require('cors')


app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const users = [
  {
    "id": 001,
    "Name": "Mohamed Ahmed"
  },
  {
    "id": 002,
    "Name": "ali abdi"
  }
]

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})