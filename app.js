const express = require('express')
const { engine } = require('express-handlebars') //require Handlebar
const app = express()
const port = 3000
const restaurants = require('./public/jsons/restaurant.json').results

// Controller (Routing)
app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.render('index', { restaurants })
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

// View
app.engine('.hbs', engine({extname: '.hbs'})) 
app.set('view engine', '.hbs')
app.set('views', './views')