// declarations and imports
const express = require('express')
const app = express()
const port = 3000
// always import at the top of the code
const Bakery = require('./bakery.js')

let bakery1 = new Bakery('cake', 'chocolate devil', 32.25, false, '-/-/-');
let bakery2 = new Bakery('cake', 'velvet', 35.25, true, '-/-/-');
console.log(bakery1);
//Json way to show a class
// app.get('/showbakery', (req, res) => {
//   console.log('Someone is requiring bakery');
//   res.send(bakery1);
// })

app.get('/showbakery', (req, res) => {
  console.log('Someone is requiring bakery');
  res.send(bakery2);
})
// it prints in the server like this:
// // 20211013110203
// // http://localhost:3000/showbakery

// {
//   "_category": "cake",
//   "_name": "any",
//   "_price": 12.2,
//   "_isAvailable": true,
//   "_bestBy": "12/12/22"
// }

app.get('/', (req, res) => {
  res.send('Valeria')
})

app.get('/message', (req, res) => {
    res.send('Test message other')
  })

  app.get('/message2', (req, res) => {
    res.send('Testing another ONE')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})