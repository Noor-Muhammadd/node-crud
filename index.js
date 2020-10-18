const express = require('express')


const app = express()
const port = 1111

app.get('/', (req, res) => {
  res.send('Hello World! I create a server')
})

const root = (req, res) => res.send("hello i am different waY root")

app.get('/get', root)


app.post('/post', function (req, res) {
    res.send('Got a POST request')
  })

  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})