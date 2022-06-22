const express = require('express')
const app = express()
const corse = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dontenv').config()

let db,
    dbConnectonString = process.env.DB_STRING,
    dbName = '',
    collection