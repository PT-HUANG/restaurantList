const express = require('express')
const { engine } = require('express-handlebars') //require Handlebars
const app = express()
const port = 3000
const restaurants = require('./public/jsons/restaurant.json').results

// Controller (Routing)
app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  const keyword = req.query.search?.trim()
  const matchedRestaurants = keyword ? restaurants.filter((res) =>
    Object.values(res).some((property) => {
      if (typeof property === 'string') {
        return property.toLowerCase().includes(keyword.toLowerCase())
      }
      return false
    })
  ) : restaurants
  res.render('index', { restaurants : matchedRestaurants, keyword })
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  const restaurant = restaurants.find(restaurant => restaurant.id.toString() === id)
  res.render('detail', { restaurant })
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