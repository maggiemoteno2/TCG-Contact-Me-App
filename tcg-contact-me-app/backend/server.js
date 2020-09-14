const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const server = express()
const { postQuestion } = require('./routes/userQuestion')
const {MongoServer} = require('./config/dbConnection')
const { postCompanies } = require('./routes/companies')
const { getCompanies} = require('./routes/companies')


server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));

postQuestion(server)
MongoServer(server) 
postCompanies(server)
getCompanies(server)


server.listen(port, () => {
  console.log(`listening to port ${port}`)
})