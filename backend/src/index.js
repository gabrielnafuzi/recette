const express = require('express')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')

require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Server launched on: http://localhost:${PORT}`)
})
