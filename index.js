require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
//   res.send('Hello World!')
  req.get('bello')
})

app.get('/twitter',(req,res) => {
    res.send('Twitter API')
})

app.get('/login',(req,res) => {
    res.send('<h1>login</h1>')
})

app.get('/tube', (req, res) => {    
    res.send('<h2>YouTube API</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})