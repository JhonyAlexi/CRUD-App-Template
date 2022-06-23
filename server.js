const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectonString = process.env.DB_STRING,
    dbName = 'sample',
    collection = 'test'

MongoClient.connect(dbConnectonString)
    .then(client => {
        console.log ('YOU ARE NOW CONNECTED TO THE DATABASE.')
        db = client.db(dbName)
        collection = db.collection('test')
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



app.listen(process.env.PORT || PORT, () => {
    console.log(`SERVER RUNNING ON PORT 8000`)
})