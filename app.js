const express = require('express')
const app = express()
const port = 3000

// Controller (Routing)
app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.send('show me restaurants')
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  res.send(`now we are in id: ${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
  //確保伺服器有在正常運行
})

// Model
app.use(express.static('public'))