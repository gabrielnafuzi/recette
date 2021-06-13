const express = require('express')
const cors = require('cors')
const routes = require('./routes')

require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Server launched on: http://localhost:${PORT}`)
})
