// console.log('hello Chaitnaya here');
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Chaitanyadotcom")
})

app.get('/login',(req,res)=>{
    res.send("<h1>This is the login</h1>")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>This is the youtube</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

