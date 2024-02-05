const express = require('express')
const connectDb = require('./config/dbConnection')
const errorHandler = require('./middleware/errorHandler')
const dotenv = require('dotenv').config()

connectDb()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
const contactRoute = require('./routes/contactRoutes')

app.use('/api/contacts', contactRoute)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
