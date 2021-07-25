const express = require('express')
const cors = require('cors')
const port = 8000;
const app = express();
const db = require('./database/db')
const router = require('./routes/route')


app.use(cors())
app.use(express.json())

app.use('',router)
app.get('' , (req,res) => {
    res.send('Welcome to express JS')
})

db.on('error' , console.log.bind(console , 'Error in Connecting'))

app.listen(port , () => {
    console.log(`Server Running on port: ${port}`)
})