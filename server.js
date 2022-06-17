const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('connected at port: ', PORT)
})