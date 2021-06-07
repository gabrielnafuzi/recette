const express = require('express')

const app = express()

app.use(express.json())

const PORT = 3333

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello' })
})
app.listen(PORT, () => {
  console.log(`Server launched on: http://localhost:${PORT}`)
})
