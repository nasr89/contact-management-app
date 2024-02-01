const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

const contactRoute = require('./routes/contactRoutes')
app.use('/api/contacts', contactRoute)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
